describe('The "countAllPaarl" function is working', function () {
    it('should return true for CJ as it is from Paarl', function () {
        assert.equal(true, countAllPaarl("CJ"))
    });
    it('should return false for CY as it is not from Paarl ', function () {
        assert.equal(false, countAllPaarl("CY"))
    });
    it('should return false for CA as it is not from Paarl', function () {
        assert.equal(false, countAllPaarl("CA"))
    });
});       