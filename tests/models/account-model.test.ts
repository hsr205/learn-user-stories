import AccountModel from "../../src/models/account-model";
import Account from "../../src/models/account";


let accountModel: AccountModel;

const ACCOUNT_1: Account = {
    id: "10001",
    fullName: "John Smith",
    pinNumber: "12345",
    accountBalance: 0
}


function resetState(): void {
    accountModel = new AccountModel();
    ACCOUNT_1.accountBalance = 0;
}


describe("AccountModel - All Class Behaviours Check", () => {
    beforeEach(() => {
        resetState();
    })
    it("Should confirm that funds deposited reflect the to the account value", () => {

        let expectedValue: number = 100;

        accountModel.addUserAccount(ACCOUNT_1);
        accountModel.loginToUserAccount(ACCOUNT_1.id, ACCOUNT_1.pinNumber)
        accountModel.depositFunds(ACCOUNT_1.id, 100)

        expect(ACCOUNT_1.accountBalance).toBe(expectedValue);

    });

    it("Should confirm that funds deposited reflect the to the account value", () => {

        let expectedValue: number = 300;

        accountModel.addUserAccount(ACCOUNT_1);
        accountModel.loginToUserAccount(ACCOUNT_1.id, ACCOUNT_1.pinNumber)
        accountModel.depositFunds(ACCOUNT_1.id, 100)
        accountModel.depositFunds(ACCOUNT_1.id, 100)
        accountModel.depositFunds(ACCOUNT_1.id, 100)

        expect(ACCOUNT_1.accountBalance).toBe(expectedValue);

    });

    it("Should confirm that funds withdrawn/deposited reflect the to the account value", () => {

        let expectedValue: number = 150;

        accountModel.addUserAccount(ACCOUNT_1);
        accountModel.loginToUserAccount(ACCOUNT_1.id, ACCOUNT_1.pinNumber)
        accountModel.depositFunds(ACCOUNT_1.id, 100)
        accountModel.depositFunds(ACCOUNT_1.id, 100)
        accountModel.withdrawFunds(ACCOUNT_1.id, 50)

        expect(ACCOUNT_1.accountBalance).toBe(expectedValue);

    });

    it("Should confirm that funds remain the same as withdraw funds exceed amount in account", () => {

        let expectedValue: number = 200;

        accountModel.addUserAccount(ACCOUNT_1);
        accountModel.loginToUserAccount(ACCOUNT_1.id, ACCOUNT_1.pinNumber)
        accountModel.depositFunds(ACCOUNT_1.id, 100)
        accountModel.depositFunds(ACCOUNT_1.id, 100)
        accountModel.withdrawFunds(ACCOUNT_1.id, 1000)

        expect(ACCOUNT_1.accountBalance).toBe(expectedValue);

    });


    it("Should confirm that funds are 0 after withdraw", () => {

        let expectedValue: number = 0;

        accountModel.addUserAccount(ACCOUNT_1);
        accountModel.loginToUserAccount(ACCOUNT_1.id, ACCOUNT_1.pinNumber)
        accountModel.depositFunds(ACCOUNT_1.id, 100)
        accountModel.depositFunds(ACCOUNT_1.id, 100)
        accountModel.withdrawFunds(ACCOUNT_1.id, 200)

        expect(ACCOUNT_1.accountBalance).toBe(expectedValue);

    });


});