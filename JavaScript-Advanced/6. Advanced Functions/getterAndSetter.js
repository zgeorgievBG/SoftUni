function createRect(width, height) {


    function getWidth() {
        return width;
    }


    function getHight() {
        return height;
    }

    function getArea () {
        return width * height;
    }

    function setWidth(inputWidth) {
        width = inputWidth;
    }

    function setHeight(inputHeight) {
        height = inputHeight;
    }

    return {
        getWidth,
        getHight,
        getArea,
        setWidth,
        setHeight
    };

}

const myRect = createRect(5,3);
console.log(myRect.getArea());
myRect.setWidth(10);
console.log(myRect.getArea());




