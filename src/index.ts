import AccountView from "./views/account-view";
import AccountController from "./controllers/account-controller";
import ViewInterface from "./interfaces/view-interface";
import ControllerInterface from "./interfaces/controller-interface";
import ModelInterface from "./interfaces/model-interface";
import AccountModel from "./models/account-model";


async function runApplication(): Promise<void> {

    const view: ViewInterface = new AccountView();
    const model: ModelInterface = new AccountModel();
    const controller: ControllerInterface = new AccountController(view, model);

    controller.startApplication();

}


runApplication();
