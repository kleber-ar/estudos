import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import App from '../App';

it('Verificar se existe o campo Email', () => {
  render(<App />);
  expect(screen.getByLabelText(/email:/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email:/i)).toHaveProperty('type', 'email');
});

it('Verificar se existem dois botões', () => {
  render(<App />)
  expect(screen.getAllByRole('button')).toHaveLength(2)
});

it('Verificar se existe um botão enviar e um outro voltar', () => {
  render(<App />)
  expect(screen.getByTestId('id-send')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Voltar'})).toBeInTheDocument();

});

it('Verificar se o campo "email" e o botão "enviar" funciona corretamente.', async () => {
  render(<App />)
  const title = screen.getByRole('heading', { name: 'Valor:' });
  const EMAIL_USER = 'email@email.com';

  await userEvent.type(screen.getByLabelText(/email:/i), 'email@email.com');
  await userEvent.click(screen.getByTestId('id-send'));

  expect(screen.getByLabelText(/email:/i)).toHaveValue('');
  expect(title).toHaveTextContent(`Valor: ${ EMAIL_USER }`);

});
