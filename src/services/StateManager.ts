import User from "../model/User";
import TrustedPerson from "../model/TrustedPerson";

export default class StateManager{
    private static _shared = new StateManager();
    private _user: User;
    private _test: Test;
    private _question: Question;
    private _trustedPersons: TrustedPerson[];

    public mentalHealth = 0;
    public physicalHealth = 0;

    public strustedPersons = [
        new TrustedPerson("Егор", "7 (904) 714 10 10"),
        new TrustedPerson("Ирина", "7 (904) 714 10 10"),
        new TrustedPerson("Даниил", "7 (904) 714 10 10"),
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