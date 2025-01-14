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
    }

    depositFunds(numFunds: number): void {
    }


    withdrawFunds(numFunds: number): void {
    }


}

export default AccountModel;