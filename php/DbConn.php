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
    private $user = "tictactoe";
    private $password = "1234";
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

    public function buildUpdateQueryById($table, $id, $data)
    {
        $setValueStr = '';

        foreach ($data as $key => $value) {
            $setValueStr .= '`' . $key . '` = \'' . $value . '\',';
        }

        $setValues = substr($setValueStr, 0, -1);

        $query = 'UPDATE `'.$table.'` SET '.$setValues.' WHERE `'.$table.'`.`id` = '.$id;

        return $query;
    }

    public function getConnection()
    {
        return $this->pdo;
    }

    public function insert($query)
    {
        try {
            //echo $query;
            $stmt = $this->pdo->prepare($query);
            $this->pdo->beginTransaction();
            $stmt->execute();
            $id = $this->pdo->lastInsertId();
            $this->pdo->commit();
            return $id;
        } catch (Exception $e) {
            $this->pdo->rollback();
            return null;
        }
    }

    public function execute($query)
    {
        try {
            $stmt = $this->pdo->prepare($query);
            $this->pdo->beginTransaction();
            $stmt->execute();
            $this->pdo->commit();
            return true;
        }catch (Exception $e){
            $this->pdo->rollback();
            return false;
        }
    }

    public function read($stmt)
    {
        return $this->pdo->query($stmt)->fetch(PDO::FETCH_ASSOC);
    }

    public function delete($stmt)
    {

    }
}