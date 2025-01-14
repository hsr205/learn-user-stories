interface ViewInterface {

    displayWelcomeMessage(): void;

    displayCommandMenu(): void;

    displayAccountActionsMenu(): void;

    getUserResponse(prompt: string): Promise<string>;

}

export default ViewInterface;