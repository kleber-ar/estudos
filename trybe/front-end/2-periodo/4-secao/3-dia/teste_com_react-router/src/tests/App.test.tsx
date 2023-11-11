
import { render, screen } from '@testing-library/react';
import {  it, expect, describe } from "vitest";
import '@testing-library/jest-dom';
import App from "../App";
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';


describe('Testar as rotas', () => {
    
    it('Renderizar página inicial', () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
        expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
    
    });
    
    it('Navegar para página About', async () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
        expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();

        const about = screen.getByRole('link', { name: /Sobre/i});
        await userEvent.click(about);
        expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();
    
    });
    

    
    
});

import { renderWithRouter } from '../utils/renderWithRouter';

describe('Testar rotas com a função helper-renderWithRouter', () => {

    it('Renderizar página inicial', () => {
        renderWithRouter(<App />)

        expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
    
    });
    
    it('Navegar para página About', async () => {
        const { user } = renderWithRouter(<App />)

        expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();

        const about = screen.getByRole('link', { name: /Sobre/i});
        await user.click(about);
        expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();
    
    });
    
});

describe('Testando rotas especificas', () => {

    it('Renderizar página inicial', () => {
        renderWithRouter(<App />)

        expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
    
    });
    
    it('Renderizar diretamente a página About (/about)', async () => {
        const { user } = renderWithRouter(<App />, { route: '/about'})

        expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();

        const home = screen.getByRole('link', { name: /Início/i});
        await user.click(home);
        expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
    
    });
    
    it('Testar rota not found', async () => {
        renderWithRouter(<App />, { route: '/*'})

        expect(screen.getByText(/Página não encontrada/i)).toBeInTheDocument();
    });
});















