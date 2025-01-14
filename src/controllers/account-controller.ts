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
                const firstName: string = await this.view.getUserResponse("Enter First Name: ");
                const lastName: string = await this.view.getUserResponse("Enter Last Name: ");
                const pinNumber: string = await this.view.getUserResponse("Enter Pin Number: ");

                const accountObj: Account = {

                    id: 10001,
                    firstName: firstName,
                    lastName: lastName,
                    pinNumber: pinNumber,
                };

                this.model.addUserAccount(accountObj);
                this.view.displayCommandMenu();
                await this.handleUserResponse(await this.view.getUserResponse("Enter Action Number: "));
                break;
            case "2":
                console.log();
                this.model.displayAccountBalance()
                this.view.displayCommandMenu();
                await this.handleUserResponse(await this.view.getUserResponse("Enter Action Number: "));
                break;
            case "3":
                console.log(`\nPlease enter the amount of funds you wish to deposit.`);
                const fundsToDeposit: string = await this.view.getUserResponse("Enter Amount: ");
                this.model.depositFunds(Number(fundsToDeposit))
                this.view.displayCommandMenu();
                await this.handleUserResponse(await this.view.getUserResponse("Enter Action Number: "));
                break;
            case "4":
                console.log(`\nPlease enter the amount of funds to withdrawal.`);
                const fundsToWithdraw: string = await this.view.getUserResponse("Enter Amount: ");
                this.model.withdrawFunds(Number(fundsToWithdraw))
                this.view.displayCommandMenu();
                await this.handleUserResponse(await this.view.getUserResponse("Enter Action Number: "));
                break;
            case "5":
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
                (FIRST-NAME, LAST-NAME, PIN-NUMBER))
                
                *DISCLAIMER*
                
                For Example:
                
                Enter First Name: John
                Enter Last Name: Smith
                Enter Pin Number: 12345
                `);
    }


}


export default AccountController;