export default class User {
    private _name: String;
    private _phone: String;
    private _password: String;
    private _telegram_id?: String;
    private _dateBirth: Date;

    constructor(name: String, phone: String, password: String, dateBirth: Date) {
        this._name = name;
        this._phone = phone;
        this._password = password;
        this._dateBirth = dateBirth;
    }

    get dateBirth(): Date {
        return this._dateBirth;
    }

    set dateBirth(value: Date) {
        this._dateBirth = value;
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

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }

    get telegram_id(): String {
        return this._telegram_id;
    }

    set telegram_id(value: String) {
        this._telegram_id = value;
    }
}