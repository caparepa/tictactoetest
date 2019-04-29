CREATE TABLE `match`
(
  `id`           BIGINT(20) UNSIGNED NOT NULL,
  `match_round`  BIGINT(20) UNSIGNED NOT NULL,
  `match_status` BIT(1)              NULL DEFAULT NULL,
  `match_winner` CHAR(1)             NULL DEFAULT NULL,
  `cell_a0`      CHAR(1)             NULL DEFAULT NULL,
  `cell_a1`      CHAR(1)             NULL DEFAULT NULL,
  `cell_a2`      CHAR(1)             NULL DEFAULT NULL,
  `cell_b0`      CHAR(1)             NULL DEFAULT NULL,
  `cell_b1`      CHAR(1)             NULL DEFAULT NULL,
  `cell_b2`      CHAR(1)             NULL DEFAULT NULL,
  `cell_c0`      CHAR(1)             NULL DEFAULT NULL,
  `cell_c1`      CHAR(1)             NULL DEFAULT NULL,
  `cell_c2`      CHAR(1)             NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
)
  COLLATE = 'latin1_swedish_ci'
  ENGINE = InnoDB
;
