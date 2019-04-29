<?php
/**
 * Created by PhpStorm.
 * User: Christopher
 * Date: 2019-04-29
 * Time: 9:21 AM
 */

require_once 'DbConn.php';

class TicTacToe
{

    private $conn;
    private $matchBoard;
    private $currentMove;
    private $previousMove;

    public $spaces = array(
        'A1' => null,
        'B1' => null,
        'C1' => null,
        'A2' => null,
        'B2' => null,
        'C2' => null,
        'A3' => null,
        'B3' => null,
        'C3' => null
    );

    public $victory_conditions = array(
        array('A1', 'B1', 'C1'),
        array('A2', 'B2', 'C2'),
        array('A3', 'B3', 'C3'),
        array('A1', 'A2', 'A3'),
        array('B1', 'B2', 'B3'),
        array('C1', 'C2', 'C3'),
        array('A1', 'B2', 'C3'),
        array('A3', 'B2', 'C1')
    );

    public function __construct()
    {
        $this->conn = new DbConn();
    }

    public function getLatestMatch() {
        $query = "SELECT * FROM `match` ORDER BY `id` DESC LIMIT 1";
        return $this->conn->read($query);
    }

    public function checkMatch($player, $slots) {
        return false;
    }

    public function updateMatch($player, $slots) {

    }


}