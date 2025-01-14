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
        console.log(`
            Welcome to the Todo List Application:
            `
        );
    };


    public displayCommandMenu(): void {
        console.log(
            `
            Please enter a number that corresponds to one of the following actions:
            
            (1) Add a Todo Item
            (2) List All Todo Items
            (3) Remove a Todo Item
            (4) Mark a Todo as Completed
            (5) Exit Program
            `
        );
    }


}

export default AccountView;