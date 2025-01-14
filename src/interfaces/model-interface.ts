import Account from "../models/account";

interface ModelInterface {

    addUserAccount(userAccount: Account): void;

    loginToUserAccount(loginId: string, loginPinNumber: string): boolean;

    depositFunds(loginId: string, numFunds: number): void;

    withdrawFunds(loginId: string, numFunds: number): void;

    displayAccountBalance(loginId: string): void;

}

export default ModelInterface;