const statusHTTPMap = {
  SUCCESS: 200,
  CREATED: 201,
  DELETED: 204,
  INVALID_VALUE: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  CONFLICT: 409,
};

const statusHTTP = (status) => statusHTTPMap[status] || 500;

module.exports = statusHTTP;
