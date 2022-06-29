class Rectange{
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    get height() {
        return this._height;
    };

    set height(value) {
        this._height = value;
    }

    get width() {
        return this._width;
    };

    set width(value) {
        this._width = value;
    }

    calcArea() {
        console.log(this._height * this._width);
    }

}

const rectangleOne = new Rectange(5, 4);
rectangleOne.calcArea()

console.log(rectangleOne.height)

rectangleOne.height = 10;

console.log(rectangleOne.height)

rectangleOne.calcArea()

