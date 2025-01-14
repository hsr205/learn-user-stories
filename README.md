# Assignment - Defining and Managing User Stories in GitHub

## Setup and Initialization

1. Download and Install [Node.js](https://nodejs.org/en/download/package-manager). This should also install the npm package manager.

2. Once installed you can verify with the following commands:

   `$ node -v`
   `$ npm -v`
   `$ npx -v`

   If these commands fail to run check if your classpath or path variable is set to the path where these programs are installed in your system.

3. Install all necessary packages including typescript with the command:

   `npm install`

4. Verify by running _src/index.ts_:

   `npm start`

## Implementation Details:

Create a type `Account` that defines the structure of a account item. It should include:

- `id` (a unique identifier, e.g., a number or string)
- `firstName` (a string)
- `lastName` (a string)
- `pinNumber` (a number)

Create an `AccoountController` class that manages all account behaviors. The class should include methods for:

- Create an `Account`
- Login to an `Account`
- Display account balance
- Deposit to account
- Withdraw from account

Implement the methods and ensure that each method adhers to the expected types and interfaces. Feel free to add other classes, functions, and types in addition to the ones defined in this README.

## Testing

The entry point of the app is `src/index.ts` that will use the `AccoountController` class. This script should:

- Add a few accounts
- Deposit to accounts
- Withdraw from accounts
- Display account balances

## Deliverables

We should be able to run the app with the command `npx ts-node index.ts`. The script should allow users to do the following with command line arguments:

- Create an `Account`
- Login to an `Account`
- Display account balance
- Deposit to account
- Withdraw from account

Add a README file called `instructions.md` and accurately describe all the necessary instructions to run the app.

**Submit your GitHub username associated with this repository and the link to the repository on Canvas as a text entry.**

