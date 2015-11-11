#TicTacToe TDD Lesson

This is a demo of red/green TDD development using the jasmine framework.

##Step by step

1) Setup the initial files:
  You'll need to include an `index.html` which will be the output of this exercise, and a `SpecRunner.html` which will show you the outcomes of your tests

2) We always begin TDD with a failing test.
3) Then we enter the most basic code possible to make that test pass. (N.B. this may mean something as simple as hardcoding the result.)

4) If we want to do something before each test, some preparatory work such as initialising the application, etc., then we use a `beforeEach` function. (These functions are sometimes referred to as `Setup` functions)

5) Similarly, after each test you'll want to reset the conditions back to their initial state. An example of this might be resetting the application to `undefined` so that it can be re-instantiated again when the next test comes to run. To do this we use a `afterEach` function. (These functions are sometimes referred to as `Teardown` functions)
