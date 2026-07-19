-- Query: SELECT * FROM testdb
-- exported data
-- Certifique-se de substituir os valores reais de UUID e outros campos apropriados
-- Substitua os UUIDs de categoria e produto apropriados nos campos 'category_id' e 'product_id'.

INSERT INTO `brand` (`id`,`manufacturer`,`name`) VALUES (1, 'Jordan', 'Nike');
INSERT INTO `category` (`id`,`name`) VALUES (1, 'Calçados');
INSERT INTO `product` (`id`,`brand_id`,`description`,`name`) VALUES (1, 1, 'Tênis', 'Nike Jordan');
INSERT INTO `product_detail` (`id`, `available_stock`,`unit_price`,`product_id`) VALUES (1, 100, 2000, 1);
INSERT INTO `product_category` (`category_id`, `product_id`) VALUES (1, 1);
INSERT INTO `purchase` (`id`) VALUES (1);
INSERT INTO `purchase_product` (`product_id`, `purchase_id`) VALUES (1, 1);

