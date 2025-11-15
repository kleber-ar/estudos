import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

type TokenPayload = {
  id: number,
  email: string,
};

const sign = (payload: TokenPayload): string => jwt.sign(payload, secret);

const verify = (token: string): TokenPayload => jwt.verify(token, secret) as TokenPayload;

export default {
  sign,
  verify,
};
