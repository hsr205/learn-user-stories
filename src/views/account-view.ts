import * as readline from "node:readline";
import ViewInterface from "../interfaces/view-interface";
import * as process from "node:process";
import * as console from "node:console";


class AccountView implements ViewInterface {

    constructor() {

    }

    private userResponse = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    public async getUserResponse(prompt: string): Promise<string> {
        return new Promise((promiseResolve) => {
            this.userResponse.question(prompt, (response: string) => {
                promiseResolve(response.trim()); // Return the trimmed input as a resolved promise
            });
        });
    }

    public displayWelcomeMessage(): void {
        console.log(`Welcome to the Bank of Software Engineers:`);
    };


    public displayCommandMenu(): void {
        console.log(
            `
            Please enter a number that corresponds to one of the following actions:
            
            (1) Create An Account
            (2) Login to Account
            (3) Exit Program
            `
        );
    }

    public displayAccountActionsMenu(): void {
        console.log(
            `
            Please enter a number that corresponds to one of the following actions:
            
            (1) Display Account Balance
            (2) Deposit To Account
            (3) Withdraw From Account
            (4) Exit Account
            `
        );
    }


}

export default AccountView;