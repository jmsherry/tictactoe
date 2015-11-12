(function(){
  "use strict";

  window.TicTacToe = window.TicTacToe || function(sideLength, playerNames, options){

    //THE BOARD
    var boardSize, players = [];

    sideLength = sideLength | 3;
    boardSize = sideLength * sideLength;

    function createBoard(){
      //Create the board
      var board, squares;

      board = document.createElement("DIV");
      board.className = "board row";
      document.body.appendChild(board);

      //create the squares
      squares = [];

      function createSquare(n){ //function will be hoisted
        var square = document.createElement("DIV");
        square.className = "col-xs-" + n;
        square.nodeValue = n;
        square.style.width = Math.floor(1/sideLength*100)+ "%";
        return square;
      }

      for(var i=0; i < boardSize; i+=1){
        squares.push(createSquare(i));
      }

      squares.forEach(function(square){
        document.getElementsByClassName("board")[0].appendChild(square);
      });

    }


    //THE PLAYERS
    function addPlayer(name, i){
      var player, turn, symbol;

      turn = i = 0 ? true : false;
      symbol = i = 0 ? "X" : "O";

      player = {
        id: players.length,
        name: name,
        turnToGo: turn,
        symbol: symbol
      };

      players.push(player);
    }

    function getPlayers(){
      return players;
    }

    function reportPlayersOnInterface(){
      //add some code to write the names
    }

    function setupPlayers(){
      if(playerNames.length < 2){
        throw new Error("The minimum number of players is two.");
      }
      if(playerNames.length > 2){
        throw new Error("The maximum number of players is two.");
      }
      playerNames.forEach(function(playerName, i){
        addPlayer(playerName, i);
      });

      console.info("Players created", players);
      //reportPlayersOnInterface();
    }


    function init(){
      createBoard();
      setupPlayers();
    }


    return {
      init: init,
      addPlayer: addPlayer,
      getPlayers: getPlayers
    };

  };

}());
