$(document).ready(function () {
    function clickCell(cellContent) {
        console.log(jQuery.trim(cellContent));
        getLatestMatch();
    }

    $("#td_a1").on('click', function () {
        clickCell($("#cell_a1_value").text());
    });

    $("#td_a2").on('click', function () {
        clickCell($("#cell_a2_value").text());
    });

    $("#td_a3").on('click', function () {
        clickCell($("#cell_a3_value").text());
    });

    $("#td_b1").on('click', function () {
        clickCell($("#cell_b1_value").text());
    });

    $("#td_b2").on('click', function () {
        clickCell($("#cell_b2_value").text());
    });

    $("#td_b3").on('click', function () {
        clickCell($("#cell_b3_value").text());
    });

    $("#td_c1").on('click', function () {
        clickCell($("#cell_c1_value").text());
    });

    $("#td_c2").on('click', function () {
        clickCell($("#cell_c2_value").text());
    });

    $("#td_c3").on('click', function () {
        clickCell($("#cell_c3_value").text());
    });

    $("#btn_new_game").on('click', function () {
        clearBoard();
        newGame();
    });

    function post(player, cellId) {

    }

    function getLatestMatch() {
        $.ajax({
            type: "GET",
            url: "get_match.php",
            dataType: 'json',
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
            type: "POST",
            url: "new_game.php",
            dataType: ' json',
            data: $("form").serialize(),
            success: function (data) {
                console.log("success", data)
            },
            error: function (error) {
                console.log("error", error)
            }
        });
    }

    function updateGame() {
        $.ajax({
            type: "POST",
            url: "update_match.php",
            dataType: ' json',
            data: $("form").serialize(),
            success: function (data) {
                console.log("success", data)
            },
            error: function (error) {
                console.log("error", error)
            }
        });
    }

    function clearBoard() {
        //CELDAS
        $("#p_a1").text("");
        $("#p_b1").text("");
        $("#p_c1").text("");
        $("#p_a2").text("");
        $("#p_b2").text("");
        $("#p_c2").text("");
        $("#p_a3").text("");
        $("#p_b3").text("");
        $("#p_c3").text("");
        $("#current_player").text("X");
        $("#current_round").text("1");

        //FORMULARIO
        $('input[name="cell_a1"]').val('');
        $('input[name="cell_b1"]').val('');
        $('input[name="cell_c1"]').val('');
        $('input[name="cell_a2"]').val('');
        $('input[name="cell_b2"]').val('');
        $('input[name="cell_c2"]').val('');
        $('input[name="cell_a3"]').val('');
        $('input[name="cell_b3"]').val('');
        $('input[name="cell_c3"]').val('');
        $('input[name="match_round"]').val(1);
        $('input[name="match_status"]').val("IN_PROGRESS");
        $('input[name="match_winner"]').val("N");
        $('input[name="current_player"]').val("X");
    }

});