import App from "../src/AppClass";
import DueDateCalculator from "../src/Controllers/DueDateCalculator";
import { expect } from 'chai';
import 'mocha';

// Core App Test Cases
describe('[Core App Test]', function () {
    describe('Core AppService Init Test', function () {
        it('should return true', function () {
            const AppService = new App();
            let result = AppService.init();

            expect(result).to.equal(true);
        });
    });
});

// DueDateCalculator Unit Test Cases
describe('[DueDateCalculator Method Unit]', function () {
    describe('Test case #1: (ConvertStringTimeToDateObject: must FAIL)', function () {
        it('should return true', function () {
            let result = DueDateCalculator.ConvertStringTimeToDateObject("test");

            expect(result).to.equal(false);
        });
    });

    describe('Test case #2: (ConvertStringTimeToDateObject: must PASS)', function () {
        it('should return true', function () {
            let date = new Date().toLocaleString();
            let ShouldDateHelper = new Date(date);

            let result = DueDateCalculator.ConvertStringTimeToDateObject(date);

            expect(result).to.not.equal(ShouldDateHelper);
        });
    });

    describe('Test case #3: (ConvertStringTurnaroundToHourNumber: must FAIL)', function () {
        it('should return true', function () {
            let result = DueDateCalculator.ConvertStringTurnaroundToHourNumber("test");

            expect(result).to.equal(false);
        });
    });

    describe('Test case #4: (ConvertStringTurnaroundToHourNumber: must PASS)', function () {
        it('should return true', function () {
            let turnaroundTime = "40";
            let result = DueDateCalculator.ConvertStringTurnaroundToHourNumber(turnaroundTime);

            expect(result).to.equal(40);
        });
    });

    describe('Test case #5: (IsSubmitEligible: must FAIL)', function () {
        it('should return true', function () {
            let date = new Date("2021-06-29T07:42:56.935Z");
            let result = DueDateCalculator.IsSubmitEligible(date);

            expect(result).to.equal(false);
        });
    });

    describe('Test case #6: (IsSubmitEligible: must PASS)', function () {
        it('should return true', function () {
            let date = new Date("2021-06-29T09:17:56.935Z");
            let result = DueDateCalculator.IsSubmitEligible(date);

            expect(result).to.equal(true);
        });
    });

    describe('Test case #7: (IsSubmitEligible: must FAIL)', function () {
        it('should return true', function () {
            let date = new Date("2021-06-29T17:06:56.935Z");
            let result = DueDateCalculator.IsSubmitEligible(date);

            expect(result).to.equal(false);
        });
    });
});

// DueDateCalculator TDD Test Cases
describe('[DueDateCalculator Method Functional]', function () {
    describe('Test case #1', function () {
        it('should return true', function () {
            const AppService = new App();
            AppService.init();

            let ShouldDateHelper = new Date("Tue, 29 Jun 2021 16:31:21.591Z");
            
            let result = AppService.CalculateDueDateMethod("2021-06-29T12:31:21.591Z", "4");

            expect(result).to.equal(ShouldDateHelper);
        });
    });

    describe('Test case #2', function () {
        it('should return true', function () {
            const AppService = new App();
            AppService.init();

            let ShouldDateHelper = new Date("Thu, 01 Jul 2021 12:31:21.591Z");
            
            let result = AppService.CalculateDueDateMethod("2021-06-29T12:31:21.591Z", "16");

            expect(result).to.equal(ShouldDateHelper);
        });
    });
});