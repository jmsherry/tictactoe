describe("TicTacToe", function() {
  var game, board, squares, sideLength, playerNames;

  beforeEach(function() {
    sideLength = 3;
    playerNames = ['James', 'John'];
    game = new TicTacToe(sideLength, playerNames);
    game.init();

    (function() {
      board = document.getElementsByClassName('board')[0];
    }());

  });

  afterEach(function() {
    game = null;
    document.body.removeChild(board);
  });

  it("It should be loaded into the browser and be accessible", function() {
    expect(window.TicTacToe).toBeDefined();
  });

  describe('The Board', function() {
    it("It should create a board", function() {
      expect(board).not.toBeUndefined();
    });

    it("The board should have 9 squares", function() {
      expect(board.childNodes.length).toBe(9);
    });

    it("Each square will gain a mark when clicked", function(){
      var $firstSquare = $('.board > div').eq(0);
      $firstSquare.click();
      expect($firstSquare.text()).toEqual("O");
    });
  });

  describe('The Players', function() {
    it("There should be 2 players", function() {
      expect(game.getPlayers().length).toBe(2);
    });
  });

});
