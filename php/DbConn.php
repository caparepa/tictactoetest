<?php
/**
 * Created by PhpStorm.
 * User: Christopher
 * Date: 2019-04-29
 * Time: 9:29 AM
 */

class DbConn
{
    private $host = "localhost";
    private $post = "8089";
    private $user = "user";
    private $password = "password";
    private $db = "tictactoe";
    private $charset = "utf8mb4";

    private $pdo = null;
    private $dsn;
    private $options = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ];

    public function __construct()
    {
        $this->dsn = "mysql:host=$this->host;dbname=$this->db;charset=$this->charset";

        try {
            $this->pdo = new PDO($this->dsn, $this->user, $this->password, $this->options);
        } catch (\PDOException $e) {
            throw new \PDOException($e->getMessage(), (int)$e->getCode());
        }
    }

    public function getConnection() {
        return $this->pdo;
    }
    
    public function insert($stmt, $data){
        
    }
    
    public function update($stmt, $data){
        
    }
    
    public function read($stmt){
        return $this->pdo->query($stmt)->fetch(PDO::FETCH_ASSOC);
    }
    
    public function delete($stmt){
        
    }
}