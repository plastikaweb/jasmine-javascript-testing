describe("Sum", function() {

    beforeEach(function () {

    });

    it("should sum two numbers", function () {
        expect(add(2, 3)).toBe(5);
    });
    it("should fail if no numbers are passed", function () {
        expect(add('2', '3')).toThrow('numbers expected');
    });
    it("should sum two numbers with decimals", function () {
        expect(add(0.1, 0.2)).toBe(0.3);
    });
});