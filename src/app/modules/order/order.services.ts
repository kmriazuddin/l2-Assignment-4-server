import { startSession } from 'mongoose';
import { TOrder } from './order.interface';
import { Product } from '../product/product.model';
import appError from '../../error/appError';
import httpStatus from 'http-status';
import { Order } from './order.model';

const createOrderIntoDB = async (payload: TOrder) => {
  const session = await startSession();
  session.startTransaction();

  try {
    for (const item of payload.products) {
      const product = await Product.findById(item.product).session(session);

      if (!product) {
        throw new appError(httpStatus.NOT_FOUND, 'Product Not Found!');
      }
      if (item.quantity > product.quantity) {
        throw new appError(
          httpStatus.BAD_REQUEST,
          `Requested Quantity For Product ${product.title} Exceeds Available Stock`,
        );
      }
    }

    const result = await Order.create([payload], { session });
    if (!result.length) {
      throw new appError(httpStatus.BAD_REQUEST, 'Failed To Create Order!');
    }

    for (const item of payload.products) {
      await Product.findByIdAndUpdate(
        item.product,
        { $inc: { quantity: -item.quantity } },
        { session },
      );
    }

    await session.commitTransaction();
    await session.endSession();

    return result;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }
};

export default createOrderIntoDB;
export const OrderServices = { createOrderIntoDB };
