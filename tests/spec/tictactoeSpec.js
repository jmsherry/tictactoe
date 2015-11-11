describe("TicTacToe", function() {
  var game, board, squares;

  beforeEach(function(){
    game = new TicTacToe(3);
    game.init();

    board = document.getElementsByClassName('board')[0];
  });

  afterEach(function(){
    game = null;
    document.body.removeChild(board);
  });

  it("should be loaded into the browser and be accessible", function() {
    expect(window.TicTacToe).toBeDefined();
  });

  it("should create a board", function(){
    expect(document.getElementsByClassName('board').length).toBe(1);
  });

});
