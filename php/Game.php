<?php
/**
 * Created by PhpStorm.
 * User: Christopher
 * Date: 2019-04-29
 * Time: 9:21 AM
 */

require_once 'DbConn.php';
require_once 'Match.php';

class Game
{

    private $ttt;
    private $match;

    public function __construct()
    {
        //$this->ttt = new TicTacToe();
        $this->match = new Match();
    }

    public function showBoard() {

    }

    /**
     * Get Game to show in interface
     */
    public function getLatestMatch() {

        $match = $this->match->getLatestMatch();

        //TODO: validate whether match is empty/null or not!
        if($match !== null){
            http_response_code(200);
            $data = (array)$match;
        }else{
            $data = "NO_RESULT";
            http_response_code(500);
        }

        return json_encode($data);
    }

    /**
     * ???
     */
    public function getCurrentMatch() {

    }

    public function createMatch() {
        $method = $_SERVER['REQUEST_METHOD'];

        if($method === 'POST') {
            $obj = new stdClass();
            $newMatch = new Match();
        }
    }

    public function updateMatch($matchId) {

        $method = $_SERVER['REQUEST_METHOD'];

        if($method === 'PUT') {

        }

    }

}