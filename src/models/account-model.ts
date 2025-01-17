import Account from "./account";
import ModelInterface from "../interfaces/model-interface";
import * as console from "node:console";

class AccountModel implements ModelInterface {

    private _registeredAccounts: Account[] = [];

    public constructor() {
    }


    addUserAccount(userAccount: Account): void {
        if (this._registeredAccounts.length === 0) {
            this._registeredAccounts.push(userAccount);
            console.log(`\nSuccessfully Created Account!`);
            return;
        }
        for (const account of this._registeredAccounts) {

            if (account.id === userAccount.id) {
                console.log(`\nUser already exists with ID ${userAccount.id}`);
                return;
            }
        }

        this._registeredAccounts.push(userAccount);
        console.log(`\nSuccessfully Created Account!`);

    }

    loginToUserAccount(loginId: string, loginPinNumber: string): boolean {

        if (this._registeredAccounts.length === 0) {
            console.log(`\nNo Account Has Been Created!.`);
            return false;
        }

        for (const account of this._registeredAccounts) {

            if (account.id === loginId && account.pinNumber === loginPinNumber) {
                console.log(`\nWelcome to your account ${account.fullName}`);
                return true;

            }
        }
        console.log(`\nIncorrect Login ID: ${loginId} or Login Pin Number: ${loginPinNumber}`);

        return false;
    }

    displayAccountBalance(loginId: string): void {

        for (const account of this._registeredAccounts) {

            if (account.id === loginId) {
                console.log(`\nAccount Balance: $${account.accountBalance}`);
                return;
            }

        }

    }

    depositFunds(loginId: string, numFunds: number): void {
        for (const account of this._registeredAccounts) {

            if (account.id === loginId) {
                if (numFunds < 0){
                    console.log(`\nCannot deposit negative funds $${numFunds}`);
                    return;
                }
                account.accountBalance += numFunds;
                console.log(`\nAccount Balance: $${account.accountBalance}`);
                return;
            }

        }
    }


    withdrawFunds(loginId: string, numFunds: number): void {
        for (const account of this._registeredAccounts) {

            if (account.id === loginId) {
                if (account.accountBalance < numFunds) {
                    console.log(`\nCannot withdraw $${numFunds} as your balance is only $${account.accountBalance}`);
                    return;
                }
                if (numFunds < 0){
                    console.log(`\nCannot withdraw negative funds $${numFunds}`);
                    return;
                }
                account.accountBalance -= numFunds;
                console.log(`\nAccount Balance: $${account.accountBalance}`);
                return;

            }
        }

    }
}

export default AccountModel;