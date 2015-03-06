;
(function(namespace) {

    'use strict';

    function findFirst(arr, cb) {
        if (!Array.isArray(arr)) {
            throw 'arr must be an array';
        }
        if (typeof cb !== 'function') {
            throw 'cb must be a function';
        }

        for(var x = 0; x < arr.length; x++) {
            if(cb(arr[x])) {
                return arr[x];
            }
        }

        return null;
    }

    namespace.findFirst = findFirst;

}(namespace));