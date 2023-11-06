class Vector {
    constructor(components) {
        this.components = components;
    }
    toString() {
        return '(' + this.components.join() + ')';
    }
    equals(vector) {
        if (this.toString() === vector.toString()) {
            return true;
        }
        return false;
    }
    checkForError(vector) {
        if (this.components.length !== vector.components.length) {
            throw new Error("You provided vectors with different lengths!");
        }
    }
    add(vector) {
        this.checkForError(vector);
        return new Vector(this.components.map(function (currentValue, index) {
            return currentValue + vector.components[index];
        }));
    }
    subtract(vector) {
        this.checkForError(vector);
        return new Vector(this.components.map(function (currentValue, index) {
            return currentValue - vector.components[index];
        }));
    }
    dot(vector) {
        this.checkForError(vector);
        let arrOfMultiplyResults = 0;
        arrOfMultiplyResults = this.components.map(function (currentValue, index) {
            arrOfMultiplyResults += currentValue * vector.components[index];
            return arrOfMultiplyResults;
        });
        return Math.max(...arrOfMultiplyResults);
    }
    norm() {
        let arrOfPowResults = 0;
        arrOfPowResults = this.components.map(function (currentValue, index) {
            arrOfPowResults += currentValue ** 2;
            return arrOfPowResults;
        });
        return Math.sqrt(Math.max(...arrOfPowResults));
    }
}