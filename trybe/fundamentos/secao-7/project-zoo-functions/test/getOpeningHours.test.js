const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('deve retornar os horários de todos os dias sem parâmetros', () => {
    const result = {
      Monday: { open: 0, close: 0 },
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
    };

    expect(getOpeningHours()).toEqual(result);
  });

  it('deve retornar "The zoo is open" para terça-feira às 09:00-AM', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });

  it('deve retornar "The zoo is closed" para segunda-feira às 11:00-AM', () => {
    expect(getOpeningHours('Monday', '11:00-AM')).toBe('The zoo is closed');
  });

  it('deve lançar um erro se o dia for inválido', () => {
    expect(() => getOpeningHours('Funday', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });

  it('deve lançar um erro se a hora não for no formato válido', () => {
    expect(() => getOpeningHours('Tuesday', '25:00-AM')).toThrow('The hour must be between 0 and 12');
    expect(() => getOpeningHours('Tuesday', '09:80-AM')).toThrow('The minutes must be between 0 and 59');
    expect(() => getOpeningHours('Tuesday', 'xx:yy-AM')).toThrow('The hour should represent a number');
    expect(() => getOpeningHours('Tuesday', '09:00-XY')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('deve retornar "The zoo is open" para sábado às 12:00-PM', () => {
    expect(getOpeningHours('Saturday', '12:00-PM')).toBe('The zoo is open');
  });

  it('deve retornar "The zoo is closed" para sábado às 12:00-AM', () => {
    expect(getOpeningHours('Saturday', '12:00-AM')).toBe('The zoo is closed');
  });
});
