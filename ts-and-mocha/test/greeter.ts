// start with: npx nyc mocha test
import { greeter } from '../src/greeter'

const assert = require('assert');
describe('Greeter', function () {
    it('should return "Hello, <input>"', function () {
        assert.equal(greeter('you'), 'Hello, you');
    });
});
