describe("TicTacToe", function() {
  var game, board, squares;

  beforeEach(function(){
    game = new TicTacToe(3);
  });

  it("should be loaded into the browser and be accessible", function() {
    expect(window.TicTacToe).toBeDefined();
  });

  it("should create a board", function(){
    board = document.getElementsByClassName('board');
    expect(board.length).toBe(1);
  });

});
