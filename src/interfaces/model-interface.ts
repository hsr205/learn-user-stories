import Account from "../models/account";

interface ModelInterface {

    addUserAccount(userAccount: Account): void;

    depositFunds(numFunds: number): void;

    withdrawFunds(numFunds: number): void;

    displayAccountBalance(): void;

}

export default ModelInterface;