var expect = require('chai').expect;
var is = require('../lib/is/index');

describe('is micro-checking library', function() {
  describe('is.arguments', function () {
    it('should return true if passed parameter type is arguments', function () {
      var getArguments = function () {
          return arguments;
      };
      var arguments = getArguments('test');
      expect(is.arguments(arguments)).to.be.true;
    });
    it("should return false if passed parameter type is not arguments", function () {
      var notArguments = ['test'];
      expect(is.arguments(notArguments)).to.be.false;
    });
  });
  describe("is.array", function() {
    it("should return true if parameter is array", function () {
      expect(is.array(["val1", "val2"])).to.be.true;
    });
    it("should return false if parameter is not array", function () {
      expect(is.array("bonjour")).to.be.false;
    });
  });
  describe("is.boolean", function () {
    it("should return true if parameter is boolean", function () {
        expect(is.boolean(1 == 1)).to.be.true;
        expect(is.boolean(true)).to.be.true;
    });
    it("should return false if parameter is not boolean", function () {
        expect(is.boolean("Je m'appelle henry")).to.be.false;
    });
  });
  describe("is.date", function () {
    it("should return true if parameter is date", function () {
        expect(is.date(new Date())).to.be.true;
        expect(is.date(new Date('2011-04-11'))).to.be.true;
    });
    it("should return false if parameter is not date", function () {
        expect(is.date("06/07/1993")).to.be.false;
    });
  });
  describe("is.error", function () {
    it("should return true if parameter is error", function () {
        var error = new Error('The value is invalid');
        expect(is.error(error)).to.be.true;
        expect(is.error(new Error())).to.be.true;
    });
    it("should return false if parameter is not error", function () {
        expect(is.error(true)).to.be.false;
    });
  });
  describe("is.function", function () {
    it("should return true if parameter is a function", function () {
        function lol() {
          return 0;
        }
        expect(is.function(lol)).to.be.true;
        expect(is.function(function() {})).to.be.true;
    });
    it("should return false if parameter is not a function", function () {
        expect(is.function("not a function")).to.be.false;
    });
  });
  describe("is.nan", function () {
    it("should return true if parameter is a NaN", function () {
        expect(is.nan(0/0)).to.be.true;
        expect(is.nan(Number("Joshua"))).to.be.true;
        //expect(is.nan(1/0)).to.be.true;
    });
    it("should return false if parameter is not a NaN", function () {
        expect(is.nan(1234)).to.be.false;
        expect(is.nan(09876)).to.be.false;
    });
  });
  describe("is.null", function () {
    it("should return true if parameter is NULL", function () {
        var abd = null;
        expect(is.null(null)).to.be.true;
        expect(is.null(abd)).to.be.true;
        //expect(is.nan(1/0)).to.be.true;
    });
    it("should return false if parameter is not a NULL", function () {
        expect(is.null("")).to.be.false;
        expect(is.null(09876)).to.be.false;
    });
  });
  describe("is.number", function () {
    it("should return true if parameter is a number", function () {
        expect(is.number(123)).to.be.true;
        expect(is.number(10987.3)).to.be.true;
        expect(is.number(-10987.3)).to.be.true;
        //expect(is.nan(1/0)).to.be.true;
    });
    it("should return false if parameter is not a number", function () {
        expect(is.number("")).to.be.false;
        expect(is.number(null)).to.be.false;
    });
  });
  describe("is.object", function () {
    it("should return true if parameter is a number", function () {
        var a = Object;
        expect(is.object({})).to.be.true;
        expect(is.object(a)).to.be.true;
        //expect(is.nan(1/0)).to.be.true;
    });
    it("should return false if parameter is not a number", function () {
        expect(is.object("")).to.be.false;
        expect(is.object(null)).to.be.false;
    });
  });
  describe("is.undefined", function () {
    it("should return true if parameter is undefined", function () {
        expect(is.undefined()).to.be.true;
        //expect(is.nan(1/0)).to.be.true;
    });
    it("should return false if parameter is not undefined", function () {
        expect(is.object("")).to.be.false;
        expect(is.object(null)).to.be.false;
    });
  });
  describe("is.palindrome", function () {
    it("should return true if parameter is palindrome", function () {
        expect(is.palindrome("anna")).to.be.true;
        //expect(is.nan(1/0)).to.be.true;
    });
    it("should return false if parameter is not palindrome", function () {
        expect(is.palindrome("faggot")).to.be.false;
        expect(is.palindrome("bonjour")).to.be.false;
    });
  });
  describe("is.regexp", function () {
    it("should return true if parameter is regexp", function () {
        expect(is.regexp(/ /g)).to.be.true;
        //expect(is.nan(1/0)).to.be.true;
    });
    it("should return false if parameter is not regexp", function () {
        expect(is.regexp("lololo")).to.be.false;
    });
  });
});
