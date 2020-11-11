describe('sum function test', function() {
    it('should return the sum of the array', function() {
        expect(sum([1,2,3,4,5,6,7])).toEqual(28);
        expect(sum([14,15,19,1000])).toEqual(1048);
    })
})

describe('minNum function', function() {
    it('should return the minimum number in a array', function() {
        expect(minNum([54,23,78,1,54,23])).toBe(1);
        expect(minNum([10,17,18,19,0])).toBe(0);
    })
    it('should work for negative numbers', function() {
        expect(minNum([-22,-88,594,17.3,99])).toBe(-88);
    })
})