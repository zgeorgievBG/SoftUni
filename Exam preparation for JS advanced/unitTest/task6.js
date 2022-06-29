function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255)){
        return undefined; // Red value is invalid
    }
    if (!Number.isInteger(green) || (green < 0) || (green > 255)){
        return undefined; // Green value is invalid
    }
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255)){
        return undefined; // Blue value is invalid
    }
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

const expect = require('chai').expect;

describe('check color', () => {
    it('check red', () => {
        expect(rgbToHexColor(255, 0 , 0)).to.be.equal('#FF0000')
    })
    it('check red', () => {
        expect(rgbToHexColor(166, 12, 12)).to.be.equal('#A60C0C')
    })
    it('check red', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined
    })
    it('check red', () => {
        expect(rgbToHexColor('a', 0, 0)).to.be.undefined
    })
    it('check red', () => {
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined
    })


    it('check blue', () => {
        expect(rgbToHexColor(0, 0 , 255)).to.be.equal('#0000FF')
    })
    it('check blue', () => {
        expect(rgbToHexColor(0, 28, 189)).to.be.equal('#001CBD')
    })
    it('check blue', () => {
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined
    })
    it('check blue', () => {
        expect(rgbToHexColor(0, 0, 'a')).to.be.undefined
    })
    it('check blue', () => {
        expect(rgbToHexColor(0, 0, 256)).to.be.undefined
    })


    it('check green', () => {
        expect(rgbToHexColor(0, 255 , 0)).to.be.equal('#00FF00')
    })
    it('check green', () => {
        expect(rgbToHexColor(6, 135, 1)).to.be.equal('#068701')
    })
    it('check green', () => {
        expect(rgbToHexColor(6, -1, 1)).to.be.undefined
    })
    it('check green', () => {
        expect(rgbToHexColor(6, 'a', 1)).to.be.undefined
    })
    it('check green', () => {
        expect(rgbToHexColor(6, 256, 1)).to.be.undefined
    })
})