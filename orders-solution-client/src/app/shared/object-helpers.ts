
export class ObjectHelper {
    static objectId() {
        return this.hex(Date.now() / 1000) +
            ' '.repeat(16).replace(/./g, () => this.hex(Math.random() * 16));
    }

    static hex(value) {
        return Math.floor(value).toString(16);
    }
}
