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

    private $match;

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

    public $players = array(
        'X' => null,
        'O' => null
    );

    public $turns = 0;
    public $winner = null;

    public function __construct()
    {
    }

    public function populateBoard($obj)
    {
        $this->spaces['A1'] = $obj[0]['cell_a1'];
        $this->spaces['B1'] = $obj[0]['cell_b1'];
        $this->spaces['C1'] = $obj[0]['cell_c1'];
        $this->spaces['A2'] = $obj[0]['cell_a2'];
        $this->spaces['B2'] = $obj[0]['cell_b2'];
        $this->spaces['C2'] = $obj[0]['cell_c2'];
        $this->spaces['A3'] = $obj[0]['cell_a3'];
        $this->spaces['B3'] = $obj[0]['cell_b3'];
        $this->spaces['C3'] = $obj[0]['cell_c3'];
    }

    function matchHasWinner() {
        return (is_null($this->winner) ? false: true);
    }

    public function getBoard() {
        return $this->spaces;
    }

    public function checkWinner($piece) {
        $player_occupied_spaces = $this->getCellsForType($piece);
        foreach($this->victory_conditions as $vc) {
            if ($vc == array_intersect($vc, $player_occupied_spaces)) {
                $this->winner = $this->players[$piece];
                // print/update the board / update shit here
                //$victory_message = $this->winner . " is the winner!\n";
            }
        }
        if ($this->turns == 8) {
            print "It's a tie!\n";
            die();
        }
    }

    /**
     * @param $type
     * @return array
     */
    function getCellsForType($type) {
        return array_keys($this->spaces, $type);
    }

}