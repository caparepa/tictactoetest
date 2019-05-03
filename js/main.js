$(document).ready(function () {

    getLatestMatch();

    $("#td_a1").on('click', function () {

        if($("#p_a1").text() === '' && $("#winner_h").text() === 'N'){

            var player = $('input[name="current_player"]').val();
            $("#p_a1").text(player)
            $('input[name="cell_a1"]').val(player);
            //llamar al api aqui
            updateGame();
        }

    });

    $("#td_a2").on('click', function () {
        if($("#p_a2").text() === '' && $("#winner_h").text() === 'N'){

            var player = $('input[name="current_player"]').val();
            $("#p_a2").text(player)
            $('input[name="cell_a2"]').val(player);
            //llamar al api aqui
            updateGame();
        }
    });

    $("#td_a3").on('click', function () {
        if($("#p_a3").text() === '' && $("#winner_h").text() === 'N'){

            var player = $('input[name="current_player"]').val();
            $("#p_a3").text(player)
            $('input[name="cell_a3"]').val(player);
            //llamar al api aqui
            updateGame();
        }
    });

    $("#td_b1").on('click', function () {
        if($("#p_b1").text() === '' && $("#winner_h").text() === 'N'){

            var player = $('input[name="current_player"]').val();
            $("#p_b1").text(player)
            $('input[name="cell_b1"]').val(player);
            //llamar al api aqui
            updateGame();
        }
    });

    $("#td_b2").on('click', function () {
        if($("#p_b2").text() === '' && $("#winner_h").text() === 'N'){

            var player = $('input[name="current_player"]').val();
            $("#p_b2").text(player)
            $('input[name="cell_b2"]').val(player);
            //llamar al api aqui
            updateGame();
        }
    });

    $("#td_b3").on('click', function () {
        if($("#p_b3").text() === '' && $("#winner_h").text() === 'N'){

            var player = $('input[name="current_player"]').val();
            $("#p_b3").text(player)
            $('input[name="cell_b3"]').val(player);
            //llamar al api aqui
            updateGame();
        }
    });

    $("#td_c1").on('click', function () {
        if($("#p_c1").text() === '' && $("#winner_h").text() === 'N'){

            var player = $('input[name="current_player"]').val();
            $("#p_c1").text(player)
            $('input[name="cell_c1"]').val(player);
            //llamar al api aqui
            updateGame();
        }
    });

    $("#td_c2").on('click', function () {
        if($("#p_c2").text() === '' && $("#winner_h").text() === 'N'){

            var player = $('input[name="current_player"]').val();
            $("#p_c2").text(player)
            $('input[name="cell_c2"]').val(player);
            //llamar al api aqui
            updateGame();
        }
    });

    $("#td_c3").on('click', function () {
        if($("#p_c3").text() === '' && $("#winner_h").text() === 'N'){

            var player = $('input[name="current_player"]').val();
            $("#p_c3").text(player)
            $('input[name="cell_c3"]').val(player);
            //llamar al api aqui
            updateGame();
        }
    });

    $("#btn_new_game").on('click', function () {
        clearBoard();
        $("#tablero").show();
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
        if(data.match_winner !== 'N'){
            $("#winner_h").text(data.match_winner);
            $("#winner_div").show();
        }
        if(data.match_winner === 'N' && data.match_round === 10){
            $("#winner_h").text("EMPATE");
            $("#winner_div").show();
        }

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
                console.log("data",data);
                if(data != null){
                    $("#tablero").show();
                    fillMatchData(data);
                }else {
                    alert("ERROR!")
                }
            },
            error: function (error) {
                console.log("error",error.responseJSON.message)
                if(error.responseJSON.message === "NO_DATA"){
                    alert("No hay partidas almacenadas! Crea un nuevo juego para empezar!")
                }
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
                    fillMatchData(data);
                }else {
                    alert("ERROR!")
                }
            },
            error: function (error) {
                console.log("error",error.responseJSON.message)
                if(error.responseJSON.message === "ERROR_CREATING"){
                    alert("Error creando partida!")
                }
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
                    fillMatchData(data);
                    console.log(data.match_winner);
                }else {
                    alert("ERROR!")
                }

            },
            error: function (error) {
                console.log("error",error.responseJSON.message)
                if(error.responseJSON.message === "ERROR_UPDATING"){
                    alert("Error actualizando partida!")
                }
            }
        });
    }

    function clearBoard() {

        //ocultar y/o borrar
        $("#winner_div").hide();
        $("#winner_h").text("N");

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