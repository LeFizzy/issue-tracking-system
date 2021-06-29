import App from "../src/AppClass";
import { expect } from 'chai';
import 'mocha';

describe('[Test Cases]', function () {
    describe('Core AppService Init Test', function () {
        it('should return true', function () {
            const AppService = new App();
            let result = AppService.init();

            expect(result).to.equal(true);
        });
    });
});