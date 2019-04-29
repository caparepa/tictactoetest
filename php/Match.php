<?php
/**
 * Created by PhpStorm.
 * User: Christopher
 * Date: 2019-04-29
 * Time: 12:39 PM
 */

require_once 'DbConn.php';

class Match
{
    private $conn;

    public function __construct()
    {
        $this->conn = new DbConn();
    }

    public function getBoard() {

    }

    public function mapMatch($result) {
        $match = new stdClass();
        $match->id = $result['id'];
        $match->match_round = $result['match_round'];
        $match->match_status = $result['match_status'];
        $match->match_winner = $result['match_winner'];
        $match->cell_a1 = $result['cell_a1'];
        $match->cell_a2 = $result['cell_a2'];
        $match->cell_a3 = $result['cell_a3'];
        $match->cell_b1 = $result['cell_b1'];
        $match->cell_b2 = $result['cell_b2'];
        $match->cell_b3 = $result['cell_b3'];
        $match->cell_c1 = $result['cell_c1'];
        $match->cell_c2 = $result['cell_c2'];
        $match->cell_c3 = $result['cell_c3'];
        return $match;
    }

    public function getLatestMatch()
    {
        try {
            $query = "SELECT * FROM `match` ORDER BY `id` DESC LIMIT 1";
            $result = $this->conn->read($query);
            return $this->mapMatch($result);
        }catch (Exception $e){
            return null;
        }
    }

    public function checkMatch($id, $stdObj) {
        return false;
    }

    public function updateMatch($id, $stdObj) {

    }

    public function saveMatch($stdObj) {

    }
}