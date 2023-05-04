export default class TrustedPerson {
    private _name: String;
    private _phone: String;

    constructor(name: String, phone: String) {
        this._name = name;
        this._phone = phone;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get phone() {
        return this._phone;
    }

    set phone(value) {
        this._phone = value;
    }
}