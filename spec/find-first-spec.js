/*global self, describe, it, expect*/
'use strict';

var findFirst = self.findFirst;

describe('findFirst', function() {

    it('should return the first matching item for value types', function() {
        //arrange & act
        var result = findFirst([0,1], function(v) {
            return v === 1;
        });

        //assert
        expect(result).toBe(1);
    });

    it('should return the first matching item for reference types', function() {
        //arrange
        var result, item1, item2;
        item1 = {};
        item2 = { foo: 'foo' };

        //act
        result = findFirst([item1,item2], function(v) {
            return v.foo === 'foo';
        });

        //assert
        expect(result).toBe(item2);
    });

    it('should return null if nothing matches', function() {
        //arrange
        var result, item1, item2;
        item1 = {};
        item2 = { foo: 'foo' };

        //act
        result = findFirst([item1,item2], function(v) {
            return v.bar === 'bar';
        });

        //assert
        expect(result).toBe(null);
    });

});