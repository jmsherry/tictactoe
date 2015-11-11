(function(){
  "use strict";

  window.TicTacToe = window.TicTacToe || function(sideLength){

    var boardSize;

    sideLength = sideLength | 3;
    boardSize = sideLength * sideLength;

    function createBoard(){
      var board = document.createElement("DIV");
      board.className = "board";
      document.body.appendChild(board);
    }

    function init(){
      createBoard();
    }


    return {
      init: init
    };

  };

}());
