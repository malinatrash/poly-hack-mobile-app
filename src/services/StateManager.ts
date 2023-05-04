import User from "../model/User";
import Test from "../model/Test";
import Question from "../model/Question";
import TrustedPerson from "../model/TrustedPerson";

export default class StateManager{
    private static _shared = new StateManager();
    private _user: User;
    private _test: Test;
    private _question: Question;
    private _trustedPersons: TrustedPerson[];


    public strustedPersons = [
        new TrustedPerson("Дима 1", "9595592"),
        new TrustedPerson("Дима 2", "9595592"),
        new TrustedPerson("Дима 3", "9595592"),
        new TrustedPerson("Дима 4", "9595592"),
        new TrustedPerson("Дима 5", "9595592"),
    ]

    setUser(user: User) {
        this._user = user;
    }

    get trustedPersons(): TrustedPerson[] {
        return this._trustedPersons;
    }

    set trustedPersons(value: TrustedPerson[]) {
        this._trustedPersons = value;
    }

    static get shared(): StateManager {
        return this._shared;
    }

    static set shared(value: StateManager) {
        this._shared = value;
    }

    get user(): User {
        return this._user;
    }

    set user(value: User) {
        this._user = value;
    }

    get test(): Test {
        return this._test;
    }

    set test(value: Test) {
        this._test = value;
    }

    get question(): Question {
        return this._question;
    }

    set question(value: Question) {
        this._question = value;
    }
}