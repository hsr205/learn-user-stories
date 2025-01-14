import ViewInterface from "../interfaces/view-interface";
import ControllerInterface from "../interfaces/controller-interface";
import ModelInterface from "../interfaces/model-interface";
import Account from "../models/account";

class AccountController implements ControllerInterface {

    private view: ViewInterface;
    private model: ModelInterface;

    constructor(view: ViewInterface, model: ModelInterface) {
        this.view = view;
        this.model = model;
    }

    public async startApplication(): Promise<void> {
        this.view.displayWelcomeMessage();
        this.view.displayCommandMenu();
        const userResponse: string = await this.view.getUserResponse("Enter Action Number: ");
        this.handleUserResponse(userResponse)
    }

    public async handleUserResponse(userResponse: string): Promise<void> {
        switch (userResponse) {
            case "1":
                this._displayAccountRegistrationInstructions()
                const id: string = await this.view.getUserResponse("Enter Account ID: ");
                const fullName: string = await this.view.getUserResponse("Enter Full Name: ");
                const pinNumber: string = await this.view.getUserResponse("Enter Pin Number: ");

                const accountObj: Account = {
                    id: id,
                    fullName: fullName,
                    pinNumber: pinNumber,
                    accountBalance: 0
                };

                this.model.addUserAccount(accountObj);
                this.view.displayCommandMenu();
                await this.handleUserResponse(await this.view.getUserResponse("Enter Action Number: "));
                break;
            case "2":
                const loginId: string = await this.view.getUserResponse("Enter Account ID: ");
                const loginPinNumber: string = await this.view.getUserResponse("Enter Pin Number: ");

                const validLogin: boolean = this.model.loginToUserAccount(loginId, loginPinNumber)
                if (validLogin) {
                    let isLoggedIn = true;
                    while (isLoggedIn) {
                        this.view.displayAccountActionsMenu();
                        const actionNumber: string = await this.view.getUserResponse("Enter Account Action Number: ");
                        switch (actionNumber) {
                            case "1":
                                this.model.displayAccountBalance(loginId);
                                break;
                            case "2":
                                const fundsToDeposit: string = await this.view.getUserResponse("Enter Amount to Deposit: $");
                                this.model.depositFunds(loginId, Number(fundsToDeposit));
                                break;
                            case "3":
                                const fundsToWithdraw: string = await this.view.getUserResponse("Enter Amount to Withdraw: $");
                                this.model.withdrawFunds(loginId, Number(fundsToWithdraw));
                                break;
                            case "4":
                                console.log("\nLogging out of the account...");
                                isLoggedIn = false;
                                break;
                            default:
                                console.log("\nInvalid action. Please try again.");
                                break;
                        }
                    }
                }

                this.view.displayCommandMenu();
                await this.handleUserResponse(await this.view.getUserResponse("Enter Action Number: "));
                break;
            case "3":
                console.log(`\nExiting Program`);
                process.exit(0);
                break;

            default:
                console.log(`\nPlease enter a valid action number\n`)
                this.view.displayCommandMenu();
                await this.handleUserResponse(await this.view.getUserResponse("Enter Action Number: "));
                break;
        }
    };


    private _displayAccountRegistrationInstructions(): void {
        console.log(`
                Please enter your account registration information with the following values:
                (ID, FULL-NAME, PIN-NUMBER)
                
                For Example:
                
                Enter Account ID: 10001
                Enter Full Name: John Smith
                Enter Pin Number: 12345
                `);
    }


}


export default AccountController;