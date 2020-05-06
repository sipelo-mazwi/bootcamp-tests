describe('The "isFromBellville" function is working', function(){
    it("should return true for CY as it is from Bellville", function (){
        assert.equal(true,isFromBellville("CY"));
    });
    it("should return false for CJ as it is not from Bellville", function (){
        assert.equal(false,isFromBellville("CJ"));
    });
    it("should return false for CA as it is not from Bellville", function (){
        assert.equal(false,isFromBellville("CA"));
    });
    });