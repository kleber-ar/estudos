export default function statusHTTP(status: string): number {
  const statusHttp: Record<string, number> = {
    SUCCESSFUL: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    UNPROCESSABLE_ENTITY: 422,
  };

  return statusHttp[status] ?? 500;
}
