import AccountModel from "../../src/models/account-model";
import Account from "../../src/models/account";


let accountModel: AccountModel;

const ACCOUNT_1: Account = {
    id: "10001",
    fullName: "John Smith",
    pinNumber: "12345",
    accountBalance: 0
}

const ACCOUNT_2: Account = {
    id: "10010",
    fullName: "Jane Smith",
    pinNumber: "99999",
    accountBalance: 1000
}

const ACCOUNT_3: Account = {
    id: "10100",
    fullName: "John Doe",
    pinNumber: "102938",
    accountBalance: 500
}


function resetState(): void {
    accountModel = new AccountModel();
}


describe("AccountModel - All Class Behaviours Check", () => {
    beforeEach(() => {
        resetState();
    })
    it("Should confirm that funds deposited reflect the to the account value", () => {

        const consoleLogSpy = jest.spyOn(console, "log").mockImplementation(() => {
        });


        accountModel.addUserAccount(ACCOUNT_1);
        accountModel.loginToUserAccount(ACCOUNT_1.id, ACCOUNT_1.pinNumber)
        accountModel.depositFunds(ACCOUNT_1.id, 100)

        accountModel.displayAccountBalance(ACCOUNT_1.id)
        expect(consoleLogSpy).toHaveBeenCalledWith("Account Balance: $100");

        // Restore the original implementation
        consoleLogSpy.mockRestore();
    });

});