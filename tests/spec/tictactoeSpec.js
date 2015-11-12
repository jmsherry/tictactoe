describe("TicTacToe", function() {
  var game, board, squares, sideLength;

  beforeEach(function() {
    sideLength = 3;
    game = new TicTacToe(sideLength);
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
  });

});
