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
                const firstName: string = await this.view.getUserResponse("Enter First Name: ");
                const lastName: string = await this.view.getUserResponse("Enter Last Name: ");
                const pinNumber: string = await this.view.getUserResponse("Enter Pin Number: ");

                const accountObj: Account = {
                    id: id,
                    firstName: firstName,
                    lastName: lastName,
                    pinNumber: pinNumber,
                };

                this.model.addUserAccount(accountObj);
                this.view.displayCommandMenu();
                await this.handleUserResponse(await this.view.getUserResponse("Enter Action Number: "));
                break;
            case "2":
                const loginId: string = await this.view.getUserResponse("Enter Account ID: ");
                const loginPinNumber: string = await this.view.getUserResponse("Enter Pin Number: ");

                this.model.loginToUserAccount(loginId, loginPinNumber)
                this.view.displayAccountActionsMenu()
                const actionNumber: string = await this.view.getUserResponse("Enter Account Action Number: ");

                switch (actionNumber) {
                    case "1":
                        this.model.displayAccountBalance()
                        break;
                    case "2":
                        const fundsToDeposit: string = await this.view.getUserResponse("Enter Number to Deposit: $");
                        this.model.depositFunds(Number(fundsToDeposit));
                        break;
                    case "3":
                        const fundsToWithdraw: string = await this.view.getUserResponse("Enter Number to Withdraw: $");
                        this.model.withdrawFunds(Number(fundsToWithdraw))
                }

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
                (ID, FIRST-NAME, LAST-NAME, PIN-NUMBER)
                
                For Example:
                
                Enter First Name: 10001
                Enter First Name: John
                Enter Last Name: Smith
                Enter Pin Number: 12345
                `);
    }


}


export default AccountController;