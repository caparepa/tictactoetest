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

    function getFormData($form){
        var unindexed_array = $form.serializeArray();
        var indexed_array = {};

        $.map(unindexed_array, function(n, i){
            indexed_array[n['name']] = n['value'];
        });

        return indexed_array;
    }

    function newGame() {
        var formData = $("form").serialize();
        var ledata = getFormData($("form"));
        console.log(ledata);
        $.ajax({
            type: "POST",
            url: "new_game.php",
            data: $("#table_form").serialize(),
            success: function (data) {
                console.log("success");
                console.log(data)
            },
            error: function (error) {
                console.log("error");
                console.log(error)
            }
        });
    }

    function clearBoard() {
        $("#cell_a1").text("");
        $("#cell_b1").text("");
        $("#cell_c1").text("");
        $("#cell_a2").text("");
        $("#cell_b2").text("");
        $("#cell_c2").text("");
        $("#cell_a3").text("");
        $("#cell_b3").text("");
        $("#cell_c3").text("");
        $("#jugador_a_turno").text("X");
        $("#numero_turno").text("0");
    }

});