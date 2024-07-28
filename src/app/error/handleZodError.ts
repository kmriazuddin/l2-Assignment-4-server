import { ZodError, ZodIssue } from 'zod';
import { TerrorSource, TGenericErrorResponse } from '../interface/error';

// Handle Zod errors
const handleZodError = (zodErr: ZodError): TGenericErrorResponse => {
  const errorSources: TerrorSource = zodErr.issues.map((issue: ZodIssue) => {
    return {
      path: issue.path[issue.path.length - 1],
      message: issue.message,
    };
  });
  const statusCode = 400;
  return {
    statusCode,
    message: 'Zod Validation Error!',
    errorSources,
  };
};

export default handleZodError;
