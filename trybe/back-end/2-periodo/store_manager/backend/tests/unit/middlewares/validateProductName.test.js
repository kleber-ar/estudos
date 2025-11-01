/* eslint-disable no-unused-expressions */
const { expect } = require('chai');
const sinon = require('sinon');
const validateProductName = require('../../../src/middlewares/validateProductName');

describe('Middleware validateProductName', function () {
  it('Retorna 400 se o campo name não for enviado', function () {
    const req = { body: {} };
    const res = {};
    const next = sinon.stub();

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    validateProductName(req, res, next);

    expect(res.status.calledWith(400)).to.be.true;
    expect(res.json.calledWith({ message: '"name" is required' })).to.be.true;
    expect(next.notCalled).to.be.true;
  });

  it('Retorna 422 se o campo name tiver menos de 5 caracteres', function () {
    const req = { body: { name: 'Abc' } };
    const res = {};
    const next = sinon.stub();

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    validateProductName(req, res, next);

    expect(res.status.calledWith(422)).to.be.true;
    expect(
      res.json.calledWith({
        message: '"name" length must be at least 5 characters long',
      }),
    ).to.be.true;
    expect(next.notCalled).to.be.true;
  });

  it('Chama next() se o campo name for válido', function () {
    const req = { body: { name: 'Produto Válido' } };
    const res = {};
    const next = sinon.stub();

    validateProductName(req, res, next);

    expect(next.calledOnce).to.be.true;
  });
});
