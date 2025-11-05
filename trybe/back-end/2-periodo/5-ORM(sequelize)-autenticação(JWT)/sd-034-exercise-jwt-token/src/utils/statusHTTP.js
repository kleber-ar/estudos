const httpMap = {
  SUCCESSFUL: 200,
  CREATED: 201,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INVALID_VALUE: 422,
  UNAUTHORIZED: 401,
};

const statusHTTP = (status) => httpMap[status] || 500;

module.exports = statusHTTP;
