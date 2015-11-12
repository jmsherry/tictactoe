(function(){
  "use strict";

  window.TicTacToe = window.TicTacToe || function(sideLength){

    var boardSize;

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

    function init(){
      createBoard();
    }


    return {
      init: init
    };

  };

}());
