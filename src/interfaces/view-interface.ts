interface ViewInterface {

    displayWelcomeMessage(): void;

    displayCommandMenu(): void;

    getUserResponse(prompt: string): Promise<string>;

}

export default ViewInterface;