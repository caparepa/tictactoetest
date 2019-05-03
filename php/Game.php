<?php
/**
 * Created by PhpStorm.
 * User: Christopher
 * Date: 2019-04-29
 * Time: 9:21 AM
 */

require_once 'DbConn.php';
require_once 'Match.php';
require_once 'json_utils.php';
require_once 'TicTacToe.php';

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

            $data = [];
            $data['match_round'] = $_POST['match_round'];
            $data['match_status'] = $_POST['match_status'];
            $data['match_winner'] = $_POST['match_winner'];
            $data['current_player'] = $_POST['current_player'];
            $data['cell_a1'] = $_POST['cell_a1'];
            $data['cell_a2'] = $_POST['cell_a2'];
            $data['cell_a3'] = $_POST['cell_a3'];
            $data['cell_b1'] = $_POST['cell_b1'];
            $data['cell_b2'] = $_POST['cell_b2'];
            $data['cell_b3'] = $_POST['cell_b3'];
            $data['cell_c1'] = $_POST['cell_c1'];
            $data['cell_c2'] = $_POST['cell_c2'];
            $data['cell_c3'] = $_POST['cell_c3'];

            $match =  $this->match->saveMatch($data);

            //TODO: validate whether match is empty/null or not!
            if($match !== null){
                http_response_code(200);
                $response = (array)$match;
            }else{
                $response = "NO_RESULT";
                http_response_code(500);
            }

            return json_encode($response);
        }

        return null;
    }

    public function updateMatch() {

        $method = $_SERVER['REQUEST_METHOD'];

        if($method === 'POST') {
            $data = [];
            $data['match_id'] = $_POST['match_id'];
            $data['match_round'] = $_POST['match_round'];
            $data['match_status'] = $_POST['match_status'];
            $data['match_winner'] = $_POST['match_winner'];
            $data['current_player'] = $_POST['current_player'];
            $data['cell_a1'] = $_POST['cell_a1'];
            $data['cell_a2'] = $_POST['cell_a2'];
            $data['cell_a3'] = $_POST['cell_a3'];
            $data['cell_b1'] = $_POST['cell_b1'];
            $data['cell_b2'] = $_POST['cell_b2'];
            $data['cell_b3'] = $_POST['cell_b3'];
            $data['cell_c1'] = $_POST['cell_c1'];
            $data['cell_c2'] = $_POST['cell_c2'];
            $data['cell_c3'] = $_POST['cell_c3'];

            //first, process the match
            $ttt = new TicTacToe($data, $data['match_round'],$data['match_winner']);

            //process the game
            $ttt->processMatch($data['current_player']);

            //set data again
            $data['match_round'] = $ttt->turn;
            $data['match_status'] = $ttt->status;
            $data['match_winner'] = $ttt->winner;
            $data['current_player'] = $ttt->currentPiece;

            //update match
            $match =  $this->match->updateMatch($data['match_id'],$data);

            //TODO: validate whether match is empty/null or not!
            if($match !== null){
                http_response_code(200);
                $response = (array)$match;
            }else{
                $response = "NO_RESULT";
                http_response_code(500);
            }

            return json_encode($response);
        }

    }

}