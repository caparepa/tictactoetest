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

    public function buildInsertQuery($table, $data)
    {
        $column_array = array_keys($data);
        $values_array = array_values($data);

        $column_statement = '(';
        foreach ($column_array as $column) {
            $column_statement .= ' ' . $column . ',';
        }
        $columns = substr($column_statement, 0, -1) . ')';

        $values_statement = '(';
        foreach ($values_array as $value) {
            if (is_int($value)) {
                $values_statement .= '' . $value . ',';
            } else {
                $values_statement .= '\'' . $value . '\',';
            }
        }
        $values = substr($values_statement, 0, -1) . ")";

        return 'INSERT INTO `' . $table . '` ' . $columns . ' VALUES ' . $values . ';';
    }

    public function getConnection()
    {
        return $this->pdo;
    }

    public function insert($query)
    {
        try {
            $stmt = $this->pdo->prepare($query);
            $this->pdo->beginTransaction();
            $stmt->execute();
            $id = $this->pdo->lastInsertId();
            $this->pdo->commit();
            return $id;
        }catch(Exception $e) {
            $this->pdo->rollback();
            return null;
        }
    }

    public function update($stmt, $data)
    {

    }

    public function read($stmt)
    {
        return $this->pdo->query($stmt)->fetch(PDO::FETCH_ASSOC);
    }

    public function delete($stmt)
    {

    }
}