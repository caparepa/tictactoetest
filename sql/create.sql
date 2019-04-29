CREATE TABLE `match`
(
  `id`           bigint(20) unsigned NOT NULL,
  `match_round`  bigint(20) unsigned NOT NULL,
  `match_status` bit(1)  DEFAULT NULL,
  `match_winner` char(1) DEFAULT NULL,
  `cell_a1`      char(1) DEFAULT NULL,
  `cell_a2`      char(1) DEFAULT NULL,
  `cell_a3`      char(1) DEFAULT NULL,
  `cell_b1`      char(1) DEFAULT NULL,
  `cell_b2`      char(1) DEFAULT NULL,
  `cell_b3`      char(1) DEFAULT NULL,
  `cell_c1`      char(1) DEFAULT NULL,
  `cell_c2`      char(1) DEFAULT NULL,
  `cell_c3`      char(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
)
  COLLATE = 'latin1_swedish_ci'
  ENGINE = InnoDB
;
