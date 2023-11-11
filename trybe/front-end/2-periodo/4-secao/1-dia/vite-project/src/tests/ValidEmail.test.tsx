import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ValidEmail from '../components/ValidEmail';

it('Testando o componente ValidEmail, caso for válido.', () => {
    const EMAIL_USER = 'email@email.com';

    render(<ValidEmail email={ EMAIL_USER } />)

    expect(screen.getByText(/Email Válido/i)).toBeInTheDocument();

});

it('Testando o componente ValidEmail, caso for inválido.', () => {
    const EMAIL_USER = 'emailemail.com';

    render(<ValidEmail email={ EMAIL_USER } />)

    expect(screen.getByText(/Email Inválido/i)).toBeInTheDocument();

});