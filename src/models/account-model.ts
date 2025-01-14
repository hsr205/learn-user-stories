import Account from "./account";
import ModelInterface from "../interfaces/model-interface";

class AccountModel implements ModelInterface {


    public constructor() {
    }


    addUserAccount(userAccount: Account): void {
    }

    depositFunds(numFunds: number): void {
    }


    withdrawFunds(numFunds: number): void {
    }

    displayAccountBalance(): void {
    }
}

export default AccountModel;