$(document).ready(function () {
    function clickCell(cellContent) {
        console.log(jQuery.trim(cellContent));
        getLatestMatch();
    }

    $("#cell_a1").on('click', function () {
        clickCell($("#cell_a1_value").text());
    });

    $("#cell_a2").on('click', function () {
        clickCell($("#cell_a2_value").text());
    });

    $("#cell_a3").on('click', function () {
        clickCell($("#cell_a3_value").text());
    });

    $("#cell_b1").on('click', function () {
        clickCell($("#cell_b1_value").text());
    });

    $("#cell_b2").on('click', function () {
        clickCell($("#cell_b2_value").text());
    });

    $("#cell_b3").on('click', function () {
        clickCell($("#cell_b3_value").text());
    });

    $("#cell_c1").on('click', function () {
        clickCell($("#cell_c1_value").text());
    });

    $("#cell_c2").on('click', function () {
        clickCell($("#cell_c2_value").text());
    });

    $("#cell_c3").on('click', function () {
        clickCell($("#cell_c3_value").text());
    });

    $("#btn_new_game").on('click', function () {
       clearBoard();
    });

    function post(player, cellId) {

    }

    function getLatestMatch() {
        $.ajax({
            type: "GET",
            url: "get_match.php",
            success: function (data) {
                console.log("success")
                console.log(data)
            },
            error: function (error) {
                console.log("error")
                console.log(error)
            }
        });
    }

    function fillBoard(data) {

    }

    function newGame() {
        $.ajax({
            type: "GET",
            url: "new_game.php",
            success: function (data) {
                console.log("success")
                console.log(data)
            },
            error: function (error) {
                console.log("error")
                console.log(error)
            }
        });
    }

    function clearBoard() {
        $("#cell_a1_value").text("");
        $("#cell_b1_value").text("");
        $("#cell_c1_value").text("");
        $("#cell_a2_value").text("");
        $("#cell_b2_value").text("");
        $("#cell_c2_value").text("");
        $("#cell_a3_value").text("");
        $("#cell_b3_value").text("");
        $("#cell_c3_value").text("");
        $("#jugador_a_turno").text("X");
        $("#numero_turno").text("0");
    }

});