
# Mechanical Keyboard Shop Server

### Developing this comprehensive e-commerce website with the following core pages and functionality:

- Homepage
- Products Page
- Product Details Page
- Cart Page
- Checkout Page
- Product Management/Dashboard Page
- About Us Page
- Contact Us Page

### Technology Stack:
- Frontend: React with Vite, TypeScript, Redux, RTK Query.
- Backend: TypeScript, Node, Express, MongoDB, Mongoose, Zod.


## Navbar:
- Home
- Products
- About Us
- Contact Us
- Product Manage

## Featured Products:
### Show 6 featured products card with a button that takes the user to the product details page.
- Image
- Title / Name
- Brand
- Available Quantity
- Price
- Rating (In Stars)
- See Details Button

## Product Details Page:
- Image
- Title / Name
- Brand
- Available Quantity
- Price
- Rating (In Stars)
- Description
- Add To Cart Button

## Cart Page:
- Cart Items
- Pricing Details
- Proceed To Checkout Button

## Checkout Page:
- User Details
- Payment Methods

## Product Management:
- Product List Table
- Action Buttons
- Adding a Product


### Clone This Repositories you will need to install some npm packages
```
npm install
```

## Connect mongoDB
#### Create .env file then added a PORT & Database_Url

```
mongodb+srv://myDatabaseUser:D1fficultP%40ssw0rd@mongodb0.example.com/?authSource=admin&replicaSet=myRepl
```

### Create Product
#### Endpoint
- Request Body:
```
/api/v1/product/create-product
```

```
{
    "title": "HAVIT KB660L USB Multi-function Backlit Keyboard",
    "image": "https://www.startech.com.bd/image/cache/catalog/keyboard/havit/kb660l/kb660l-01-500x500.webp",
    "brand": "HAVIT",
    "quantity": 10,
    "price": 1000,
    "rating": 8,
    "description": "The HAVIT KB660L USB Multi-function Backlit Keyboard is designed for efficiency and durability. Its USB interface ensures compatibility with a wide range of devices, while its compact size, measuring 440 x 132 x 27mm, makes it suitable for various setups. With 104 keys and a remarkable key life of 8,000,000 presses, this keyboard is built to withstand heavy usage."
}
```
- Response:

```
{
  "success": true,
  "statusCode": 200,
  "message": "Product created successfully",
  "data": {
    "title": "HAVIT KB660L USB Multi-function Backlit Keyboard",
    "image": "https://www.startech.com.bd/image/cache/catalog/keyboard/havit/kb660l/kb660l-01-500x500.webp",
    "brand": "HAVIT",
    "quantity": 10,
    "price": 1000,
    "rating": 8,
    "description": "The HAVIT KB660L USB Multi-function Backlit Keyboard is designed for efficiency and durability. Its USB interface ensures compatibility with a wide range of devices, while its compact size, measuring 440 x 132 x 27mm, makes it suitable for various setups. With 104 keys and a remarkable key life of 8,000,000 presses, this keyboard is built to withstand heavy usage."
  }
}
```

### Get All Products
#### Endpoint : GET
```
/api/v1/product
```
```
{
  "success": true,
  "statusCode": 200,
  "message": "Products retrieved successfully",
  "data": [
    {
            "_id": "66a60cde0b73ddf0a42ea389",
            "image": "https://i.ibb.co/3RqNhcN/Havit-KB876-L.png",
            "title": "Havit KB876L USB Multi-Function Backlit Gaming Keyboard",
            "brand": "Havit",
            "quantity": 2,
            "price": 1400,
            "rating": 7,
            "description": "Havit KB876L USB Multi-Function Backlit Gaming Keyboard, The latest price of Havit KB876L Multi-Function Backlit Gaming Keyboard in Bangladesh is 1,300৳. You can buy the Havit KB876L Multi-Function Backlit Gaming Keyboard at best price from our website or visit any of our showrooms.",
            "__v": 0
        },
        {
            "_id": "66a60d900b73ddf0a42ea38b",
            "image": "https://i.ibb.co/gm8rGhK/A4-TECH-Fstyler-FBX51-C.png",
            "title": "A4TECH Fstyler FBX51C Rechargeable Bluetooth & 2.4G Wireless Keyboard",
            "brand": "A4TECH",
            "quantity": 8,
            "price": 2500,
            "rating": 7,
            "description": "The Fstyler FBX51C keyboard from A4TECH has Dual Connectivity Mode. It has Bluetooth and a 2.4GHz connection. Automatic Channel Sorting With this keyboard, up to 4 devices may be associated, and up to 3 Bluetooth devices and 1 2.4GHz device can be switched between and connected. A smooth scissor-switch is a crucial component. Each keypress is responsively tactilely feedback by Scissor Key Switch Keycaps. Reduced key clatter, calibrated precision, and a 1.5mm actuation point.",
            "__v": 0
        }
    // Other available rooms
  ]
}
```
### Update Product
#### Endpoint : PUT
```
/api/v1/product/:id
```

```
{
    "quantity": 5,
    "price": 1400,
    "rating": 8
}
```

- Response:
```
{
  "success": true,
  "statusCode": 200,
  "message": "Product updated successfully",
  "data": {
    "title": "HAVIT KB660L USB Multi-function Backlit Keyboard",
    "image": "https://www.startech.com.bd/image/cache/catalog/keyboard/havit/kb660l/kb660l-01-500x500.webp",
    "brand": "HAVIT",
    "quantity": 5,
    "price": 1400,
    "rating": 8,
    "description": "The HAVIT KB660L USB Multi-function Backlit Keyboard is designed for efficiency and durability. Its USB interface ensures compatibility with a wide range of devices, while its compact size, measuring 440 x 132 x 27mm, makes it suitable for various setups. With 104 keys and a remarkable key life of 8,000,000 presses, this keyboard is built to withstand heavy usage."
  }
}
```

### Delete a Product
#### Endpoint : DELETE
```
/api/v1/product/:id
```
- Response:
```
{
  "success": true,
  "statusCode": 200,
  "message": "Product deleted successfully",
  "data": {
    "title": "HAVIT KB660L USB Multi-function Backlit Keyboard",
    "image": "https://www.startech.com.bd/image/cache/catalog/keyboard/havit/kb660l/kb660l-01-500x500.webp",
    "brand": "HAVIT",
    "quantity": 10,
    "price": 1000,
    "rating": 8,
    "description": "The HAVIT KB660L USB Multi-function Backlit Keyboard is designed for efficiency and durability. Its USB interface ensures compatibility with a wide range of devices, while its compact size, measuring 440 x 132 x 27mm, makes it suitable for various setups. With 104 keys and a remarkable key life of 8,000,000 presses, this keyboard is built to withstand heavy usage."
  }
}
```

