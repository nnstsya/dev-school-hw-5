class VigenèreCipher {
    constructor(key, abc) {
        this.key = key;
        this.abc = abc;
    }
    generateKey(message) {
        let keyword = "";
        while(keyword.length !== message.length) {
            for (let letter of this.key) {
                keyword += letter;
                if (keyword.length === message.length) {
                    return keyword;
                }
            }
        }
        return this.key;
    }
    encode(message) {
        const key = this.generateKey(message);
        let encodedMessage = "";
        for (let index in message) {
            if (this.abc.includes(message[index])) {
                encodedMessage += this.abc[((this.abc.indexOf(key[index]) + this.abc.indexOf(message[index])) % this.abc.length)];
            } else {
                encodedMessage += message[index];
            }
        }
        return encodedMessage;
    }
    decode(message) {
        const key = this.generateKey(message);
        let decodedMessage = "";
        for (let index in message) {
            if (this.abc.includes(message[index])) {
                decodedMessage += this.abc[((this.abc.indexOf(message[index]) - this.abc.indexOf(key[index]) + this.abc.length) % this.abc.length)];
            } else {
                decodedMessage += message[index];
            }
        }
        return decodedMessage;
    }
}