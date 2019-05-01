CREATE TABLE `match`
(
    `id`           BIGINT(20) UNSIGNED NOT NULL,
    `match_round`  TINYINT(3) UNSIGNED NOT NULL DEFAULT '1',
    `match_status` TINYINT(3)          NULL     DEFAULT '1',
    `match_winner` CHAR(1)             NULL     DEFAULT NULL,
    `cell_a1`      CHAR(1)             NULL     DEFAULT NULL,
    `cell_a2`      CHAR(1)             NULL     DEFAULT NULL,
    `cell_a3`      CHAR(1)             NULL     DEFAULT NULL,
    `cell_b1`      CHAR(1)             NULL     DEFAULT NULL,
    `cell_b2`      CHAR(1)             NULL     DEFAULT NULL,
    `cell_b3`      CHAR(1)             NULL     DEFAULT NULL,
    `cell_c1`      CHAR(1)             NULL     DEFAULT NULL,
    `cell_c2`      CHAR(1)             NULL     DEFAULT NULL,
    `cell_c3`      CHAR(1)             NULL     DEFAULT NULL,
    PRIMARY KEY (`id`)
)
    COLLATE = 'latin1_swedish_ci'
    ENGINE = InnoDB
;
