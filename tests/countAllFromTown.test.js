describe('The "countAllFromTown" function is working' , function(){
    it('should return false for CY as it is not from town' , function(){
        assert.equal(false, countAllFromTown("CY") )
    });
    it('should return true as CA as it is from Town' , function(){
        assert.equal(0, countAllFromTown("CA") )
    });
    it('should return false for CJ as it is not from town' , function(){
        assert.equal(false, countAllFromTown("CJ") )
    });
});