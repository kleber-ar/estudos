import { vi, it, describe, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import App from "../App";


describe('Testando fetch', () => {
    
    it('fetches a joke', async () => {
      const joke = {
        id: '7h3oGtrOfxc',
        joke: 'Thanks for explaining the word "many" to me. It means a lot.',
        status: 200,
      };
  
      global.fetch = vi.fn(() => Promise.resolve({
        json: () => Promise.resolve(joke),
      } as Response));
  
      render(<App />);
      const renderedJoke = await screen.findByText('Thanks for explaining the word "many" to me. It means a lot.');
      expect(renderedJoke).toBeInTheDocument();
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });

    });

    it('Testa a funcionalidade do botão',async () => {
        const joke2 ={
            id: '8s5bGtrOfxc',
            joke: 'Whats red and bad for your teeth? A Brick.',
            staus: 200,
        }

        global.fetch = vi.fn(() => Promise.resolve({
            json: () => Promise.resolve(joke2),
        } as Response));

        render (<App />);
        const renderedJoke = await screen.findByText('Whats red and bad for your teeth? A Brick.');
        const button = screen.getByRole('button', { name: 'New joke'});
        await userEvent.click(button)

        expect(renderedJoke).toBeInTheDocument()
        expect(global.fetch).toHaveBeenCalledTimes(2)

    })
  });