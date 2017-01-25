import {browser, element, by, protractor} from "protractor";

// TODO kikommentelni mert timeout hibát dobhat
// let origFn = browser.driver.controlFlow().execute;
//     browser.driver.controlFlow().execute = function () {
//         let args = arguments;
//         // queue 2000ms wait
//         origFn.call(browser.driver.controlFlow(), function () {
//             return protractor.promise.delayed(100);   // here we can adjust the execution speed
//         });
//         return origFn.apply(browser.driver.controlFlow(), args);
//     };

describe('Protractor Demo App', function() {
    beforeEach(() => {
        browser.get('http://localhost:3000/login');
    });

    it('kell, hogy legyen egy cím', () => {
        expect(browser.getTitle()).toEqual('SZIA App');
    });

    it('írjunk be input adatokat', () => {
        let firstInput = element(by.id('username'));
        let secondInput = element(by.id('pwd'));
        let loginBtn = element(by.css("button"));

        firstInput.sendKeys("test");
        secondInput.sendKeys("1234");

        loginBtn.click();

        // TODO kikommentelni mert timeout hibát dobhat
        //browser.sleep(3000);
    });
});