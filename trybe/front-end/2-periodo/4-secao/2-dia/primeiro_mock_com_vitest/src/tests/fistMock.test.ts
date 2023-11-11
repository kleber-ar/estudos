import { describe, expect, it, vi } from 'vitest';

let numeroRandom = () => {
    return Math.floor(Math.random()* 100);
};

const divisivelPorDois = () => {
    return (numeroRandom() % 2) === 0;
}

describe('Aprendendo sobre Mocks', () => {
    it('Testa se a função é chamada', () => {
        numeroRandom = vi.fn();

        numeroRandom();
        expect(numeroRandom).toHaveBeenCalled();
    });
    
    it('Testa quantas vezes a função foi chamda', () => {
        numeroRandom = vi.fn();

        numeroRandom();
        numeroRandom();
        expect(numeroRandom).toHaveBeenCalledTimes(2);
    });

    it('Testa o resultado(valor) da função', () => {
        numeroRandom = vi.fn()
            .mockReturnValue(10)
       
        expect(numeroRandom()).toBe(10);
    });

    it('Testa o resultado(valor) da função com outros valores', () => {
        numeroRandom = vi.fn()
            .mockReturnValueOnce(10)
            .mockReturnValueOnce(20)
            .mockReturnValueOnce(30)
        
        expect(numeroRandom()).toBe(10);
        expect(numeroRandom()).toBe(20);
        expect(numeroRandom()).toBe(30);
    });

    it('Testa o resultado(valor) da função é par', () => {
        numeroRandom = vi.fn()
            .mockReturnValue(10)
        
        expect(divisivelPorDois()).toBeTruthy();
    });

    it('Testa o resultado(valor) da função é impar', () => {
        numeroRandom = vi.fn()
            .mockReturnValue(7);
        
        expect(divisivelPorDois()).toBeFalsy();
    });
    
})