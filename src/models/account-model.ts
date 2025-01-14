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
            console.log(`Successfully Created Account!`);
        } else {
            for (const account of this._registeredAccounts) {

                if (account.id === userAccount.id) {
                    console.log(`User already exists with ID ${userAccount.id}`);
                    break;
                } else {
                    this._registeredAccounts.push(userAccount);
                    console.log(`Successfully Created Account!`);

                }

            }
        }


    }

    // TODO: Add logic when the user logs in they are allowed to do any of the following:
    //  (1) Deposit Funds
    //  (2) Withdraw funds
    //  (3) Display Balance
    //  (4) Logout of Account
    loginToUserAccount(loginId: string, loginPinNumber: string): void {
        for (const account of this._registeredAccounts) {

            if (account.id === loginId && loginPinNumber === loginPinNumber) {
                console.log(`\nWelcome to your account ${account.firstName} ${account.lastName}`);

            } else {
                console.log(`Incorrect Login ID: ${loginId} or Login Pin Number: ${loginPinNumber}`);
                break;
            }

        }
    }

    displayAccountBalance(): void {
        console.log("Inside displayAccountBalance() method");
    }

    depositFunds(numFunds: number): void {
        console.log("Inside depositFunds() method");
        console.log(`numFunds = ${numFunds}`)

    }


    withdrawFunds(numFunds: number): void {
        console.log("Inside withdrawFunds() method");
        console.log(`numFunds = ${numFunds}`)
    }


}

export default AccountModel;