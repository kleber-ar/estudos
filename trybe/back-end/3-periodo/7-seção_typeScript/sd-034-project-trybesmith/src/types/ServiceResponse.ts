type ResponseErrorType = 'BAD_REQUEST' | 'UNAUTHORIZED' | 'NOT_FOUND' | 'UNPROCESSABLE_ENTITY';
type ResponseSuccessType = 'SUCCESSFUL' | 'CREATED';

export type ResponseError = {
  status: ResponseErrorType,
  data: { message: string }
};

export type ResponseSuccess<T> = {
  status: ResponseSuccessType,
  data: T
};

export type ServiceResponse<T> = ResponseError | ResponseSuccess<T>;
