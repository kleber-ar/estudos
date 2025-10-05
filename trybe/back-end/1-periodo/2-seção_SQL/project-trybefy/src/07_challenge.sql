
-- Alterar o plano das pessoas que possuem o plano trimestral para o plano mensal
UPDATE users
SET plan_id = 2   -- 2 corresponde ao plano Mensal
WHERE plan_id = 3;  -- 3 corresponde ao plano Trimestral

-- Remover o plano trimestral da tabela plans
DELETE FROM plans
WHERE id = 3;
