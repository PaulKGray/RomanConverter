var romanModule = require("../romanModule/romanModule.js");


describe("generate should convert integers to roman numerals", function () {
    it("should change 1 to I", function () {
        var result = romanModule.generate(1);
        expect(result).toBe('I');
    });

    it("should change 5 to V", function () {
        var result = romanModule.generate(5);
        expect(result).toBe('V');
    });

    it("should change 10 to X", function () {
        var result = romanModule.generate(10);
        expect(result).toBe('X');
    });

    it("should change 3999 to MMMCMXCIX", function () {
        var result = romanModule.generate(3999);
        expect(result).toBe('MMMCMXCIX');
    });
});

describe("generate should return false for incorrect values", function () {
    
    it("should return false to Hello", function () {
        var result = romanModule.generate("hello");
        expect(result).toBe(false);
    });

    it("should return false to 4000", function () {
        var result = romanModule.generate(4000);
        expect(result).toBe(false);
    });

    it("should return false to -1", function () {
        var result = romanModule.generate(-1);
        expect(result).toBe(false);
    });

})

describe("parse should convert roman numerals to integers", function () {
    it("should change I to 1", function () {
        var result = romanModule.parse('I');
        expect(result).toBe(1);
    });
 
    it("should change V to 5", function () {
        var result = romanModule.parse('V');
        expect(result).toBe(5);
    });

    it("should change X to 10", function () {
        var result = romanModule.parse('X');
        expect(result).toBe(10);
    });

    it("should change MMMCMXCIX to 3999", function () {
        var result = romanModule.parse('MMMCMXCIX');
        expect(result).toBe(3999);
    });
});

describe("parse should return false for incorrect input", function () {
    it("should return false for invalid roman numeral IMI", function () {
        var result = romanModule.parse('IMI');
        expect(result).toBe(false);
    });
    it("should return false for invalid roman numeral XM", function () {
        var result = romanModule.parse('IMI');
        expect(result).toBe(false);
    });
    it("should return false for roman numeral over 3999 MMMM", function () {
        var result = romanModule.parse('MMMM');
        expect(result).toBe(false);
    });
});