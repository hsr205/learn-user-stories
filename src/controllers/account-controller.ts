import ViewInterface from "../interfaces/view-interface";
import ControllerInterface from "../interfaces/controller-interface";
import ModelInterface from "../interfaces/model-interface";
import Todo from "../models/account";

class TodoController implements ControllerInterface {

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
                this._displayTodoItemInsertionInstructions()
                const id: string = await this.view.getUserResponse("Enter ID: ");
                const title: string = await this.view.getUserResponse("Enter Title: ");
                const description: string = await this.view.getUserResponse("Enter Description: ");

                const completed: string = await this.view.getUserResponse("Enter Completed Status: ");

                const todoObj: Todo = {
                    id: id,
                    title: title,
                    description: description,
                    completed: this._stringToBoolean(completed)
                };

                this.model.addTodoItem(todoObj);
                this.view.displayCommandMenu();
                await this.handleUserResponse(await this.view.getUserResponse("Enter Action Number: "));
                break;
            case "2":
                console.log();
                this.model.displayTodoItems()
                this.view.displayCommandMenu();
                await this.handleUserResponse(await this.view.getUserResponse("Enter Action Number: "));
                break;
            case "3":
                console.log(`\nPlease Enter the ID of the element you wish to remove.`);
                const idToRemove: string = await this.view.getUserResponse("Enter ID: ");
                this.model.removeTodoItem(idToRemove);
                this.view.displayCommandMenu();
                await this.handleUserResponse(await this.view.getUserResponse("Enter Action Number: "));
                break;
            case "4":
                console.log(`\nPlease Enter the ID of the element you wish to mark as completed.`);
                const idToLookUp: string = await this.view.getUserResponse("Enter ID: ");
                this.model.markTodoItemAsCompleted(idToLookUp);
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


    private _displayTodoItemInsertionInstructions(): void {
        console.log(`
                Please enter a Todo item with the following values:
                (ID, TITLE, DESCRIPTION, COMPLETED-STATUS)
                
                *DISCLAIMER*
                
                (1) ID must be a unique value
                (2) COMPLETED-STATUS must be either true or false.
                
                For Example:
                
                Enter ID: 1
                Enter Title: My Title
                Enter Description: My Description
                Enter Completed Status: true
                `);
    }

    private _stringToBoolean(value: string): boolean {
        return value.toLowerCase() === 'true';
    }


}


export default TodoController;