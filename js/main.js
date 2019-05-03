$(document).ready(function () {
    function clickCell(cellContent, cellVal) {
        cellVal.val(cellContent);
        console.log(jQuery.trim(cellContent),cellVal.val());
        //updateGame();
    }

    $("#td_a1").on('click', function () {
        clickCell($("#p_a1").text(), $('input[name="cell_a1"]'));
    });

    $("#td_a2").on('click', function () {
        clickCell($("#p_a2").text(), $('input[name="cell_b1"]'));
    });

    $("#td_a3").on('click', function () {
        clickCell($("#p_a3").text(), $('input[name="cell_c1"]'));
    });

    $("#td_b1").on('click', function () {
        clickCell($("#p_b1").text(), $('input[name="cell_a2"]'));
    });

    $("#td_b2").on('click', function () {
        clickCell($("#p_b2").text(), $('input[name="cell_b2"]'));
    });

    $("#td_b3").on('click', function () {
        clickCell($("#p_b3").text(), $('input[name="cell_c2"]'));
    });

    $("#td_c1").on('click', function () {
        clickCell($("#p_c1").text(), $('input[name="cell_a3"]'));
    });

    $("#td_c2").on('click', function () {
        clickCell($("#p_c2").text(), $('input[name="cell_b3"]'));
    });

    $("#td_c3").on('click', function () {
        clickCell($("#p_c3").text(), $('input[name="cell_c3"]'));
    });

    $("#btn_new_game").on('click', function () {
        clearBoard();
        newGame();
    });

    function fillMatchData(data) {
        //CELDAS
        $("#p_a1").text(data.cell_a1);
        $("#p_b1").text(data.cell_b1);
        $("#p_c1").text(data.cell_c1);
        $("#p_a2").text(data.cell_a2);
        $("#p_b2").text(data.cell_b2);
        $("#p_c2").text(data.cell_c2);
        $("#p_a3").text(data.cell_a3);
        $("#p_b3").text(data.cell_b3);
        $("#p_c3").text(data.cell_c3);
        $("#current_player").text(data.current_player);
        $("#current_round").text(data.match_round);
        $("#winner_h").text(data.match_winner);

        //FORMULARIO
        $('input[name="cell_a1"]').val(data.cell_a1);
        $('input[name="cell_b1"]').val(data.cell_b1);
        $('input[name="cell_c1"]').val(data.cell_c1);
        $('input[name="cell_a2"]').val(data.cell_a2);
        $('input[name="cell_b2"]').val(data.cell_b2);
        $('input[name="cell_c2"]').val(data.cell_c2);
        $('input[name="cell_a3"]').val(data.cell_a3);
        $('input[name="cell_b3"]').val(data.cell_b3);
        $('input[name="cell_c3"]').val(data.cell_c3);
        $('input[name="match_id"]').val(data.id);
        $('input[name="match_round"]').val(data.match_round);
        $('input[name="match_status"]').val("IN_PROGRESS");
        $('input[name="match_winner"]').val(data.match_winner);
        $('input[name="current_player"]').val(data.current_player);
    }

    function getLatestMatch() {
        $.ajax({
            type: "GET",
            url: "get_match.php",
            dataType: 'json',
            success: function (data) {
                if(data != null){
                    console.log("success", data)
                    fillMatchData(data);
                }else {
                    alert("ERROR!")
                }
            },
            error: function (error) {
                console.log("error")
                console.log(error)
            }
        });
    }

    function newGame() {
        $.ajax({
            type: "POST",
            url: "new_game.php",
            dataType: ' json',
            data: $("form").serialize(),
            success: function (data) {
                if(data != null){
                    console.log("success", data)
                    fillMatchData(data);
                }else {
                    alert("ERROR!")
                }
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
                if(data != null){
                    console.log("success", data)
                    fillMatchData(data);
                }else {
                    alert("ERROR!")
                }

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