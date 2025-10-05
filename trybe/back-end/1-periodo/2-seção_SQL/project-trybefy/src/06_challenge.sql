
-- Ativar a usuária Andressa
UPDATE users
SET active = TRUE
WHERE full_name = 'Andressa';

-- Desativar o usuário Rogério
UPDATE users
SET active = FALSE
WHERE full_name = 'Rogério';

-- Alterar o plano ativo da usuária Camila para o plano Mensal
UPDATE users
SET plan_id = 2   -- 2 corresponde ao plano Mensal
WHERE full_name = 'Camila';
