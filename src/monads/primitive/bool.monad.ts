import Monad from '../monad';

export default class Bool extends Monad<boolean> {
    constructor(value = false) {
        super(value);
    }

    static isBool(val: any): val is Bool {
        return val instanceof Bool;
    }

    static of(val: any) {
        return new Bool(Boolean(val));
    }

    static from(val: any) {
        return val instanceof Bool
            ? val
            : Bool.of(val);
    }

    isEmpty() {
        return false;
    }
}
