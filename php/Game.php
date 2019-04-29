<?php
/**
 * Created by PhpStorm.
 * User: Christopher
 * Date: 2019-04-29
 * Time: 9:21 AM
 */

require_once 'DbConn.php';

class Game
{

    private $ttt;

    public function __construct()
    {
        $this->ttt = new TicTacToe();
    }

    public function showBoard() {

    }

    public function getLatestMatch() {
        $this->ttt->getLatestMatch();
    }

    public function updateLatestMatch() {

    }

}