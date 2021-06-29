import App from "../src/AppClass";
import DueDateCalculator from "../src/Controllers/DueDateCalculator";
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

    describe('[DueDateCalculator Method] Test case #1: (ConvertStringTimeToDateObject: must FAIL)', function () {
        it('should return true', function () {
            let result = DueDateCalculator.ConvertStringTimeToDateObject("test");

            expect(result).to.equal(false);
        });
    });

    describe('[DueDateCalculator Method] Test case #2: (ConvertStringTimeToDateObject: must PASS)', function () {
        it('should return true', function () {
            let date = new Date().toLocaleString();
            let result = DueDateCalculator.ConvertStringTimeToDateObject(date);

            expect(result).to.equal(true);
        });
    });

    describe('[DueDateCalculator Method] Test case #3: (ConvertStringTurnaroundToHourNumber: must FAIL)', function () {
        it('should return true', function () {
            let result = DueDateCalculator.ConvertStringTurnaroundToHourNumber("test");

            expect(result).to.equal(false);
        });
    });

    describe('[DueDateCalculator Method] Test case #4: (ConvertStringTurnaroundToHourNumber: must PASS)', function () {
        it('should return true', function () {
            let turnaroundTime = "40";
            let result = DueDateCalculator.ConvertStringTurnaroundToHourNumber(turnaroundTime);

            expect(result).to.equal(40);
        });
    });

    describe('[DueDateCalculator Method] Test case #5', function () {
        it('should return true', function () {
            const AppService = new App();
            AppService.init();
            
            let result = AppService.CalculateDueDateMethod();

            expect(result).to.equal(true);
        });
    });
});