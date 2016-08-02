describe("About Functions", function() {

  it("should declare functions", function() {

    function add(a, b) {
      return a + b;
    }

    expect(add(1, 2)).toBe(3);
  });

  it("should know internal variables override outer variables", function () {
    var message = "Outer";

    function getMessage() {
      return message;
    }

    function overrideMessage() {
      var message = "Inner";
      return message;
    }

    expect(getMessage()).toBe('Outer');
    expect(overrideMessage()).toBe('Inner');
    expect(message).toBe('Outer');
  });

  it("should have lexical scoping", function () {
    var variable = "top-level";

    function parentfunction() {
      var variable = "local";
      function childfunction() {
        return variable;
      }
      return childfunction();
    }

    expect(parentfunction()).toBe('local');
  });

  it("should use lexical scoping to synthesise functions", function () {

    /*

    I think I get this but it took me a while, and I would still need more practice

    Anyway, a good stack overflow article here:

    http://stackoverflow.com/questions/17605471/lexical-scoping-parameters-in-javascript

    When we call makeMysteryFunction(3) it returns a function (newFunction) and
    assigns it to the variable mysteryFunction3. The makerValue of this function
    is already set to 3

    Then, when mysteryFunction3(10) is called, it adds the makerValue (3) and then
    adds it together with the param that has been passed in - 10.

    TODO read more about lexical scoping

    */

    function makeMysteryFunction(makerValue)
    {
      var newFunction = function doMysteriousThing(param)
      {
        return makerValue + param;
      };
      return newFunction;
    }

    var mysteryFunction3 = makeMysteryFunction(3);
    var mysteryFunction5 = makeMysteryFunction(5);

    expect(mysteryFunction3(10) + mysteryFunction5(5)).toBe(23);
  });

  it("should allow extra function arguments", function () {

    function returnFirstArg(firstArg) {
      return firstArg;
    }

    expect(returnFirstArg("first", "second", "third")).toBe(FILL_ME_IN);

    function returnSecondArg(firstArg, secondArg) {
      return secondArg;
    }

    expect(returnSecondArg("only give first arg")).toBe(FILL_ME_IN);

    function returnAllArgs() {
      var argsArray = [];
      for (var i = 0; i < arguments.length; i += 1) {
        argsArray.push(arguments[i]);
      }
      return argsArray.join(",");
    }

    expect(returnAllArgs("first", "second", "third")).toBe(FILL_ME_IN);
  });

  it("should pass functions as values", function () {

    var appendRules = function (name) {
      return name + " rules!";
    };

    var appendDoubleRules = function (name) {
      return name + " totally rules!";
    };

    var praiseSinger = { givePraise: appendRules };
    expect(praiseSinger.givePraise("John")).toBe(FILL_ME_IN);

    praiseSinger.givePraise = appendDoubleRules;
    expect(praiseSinger.givePraise("Mary")).toBe(FILL_ME_IN);

  });
});
