const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {

    it('should genrate as unique ID', () => {

        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    });

});