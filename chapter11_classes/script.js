class ComplexNumber{
    constructor(real, imaginary){
        this._real = real;
        this._imaginary = imaginary;
    }


    sum(num){
        this._real = this._real + num.real;
        this._imaginary = this._imaginary + num.imaginary;
    }

    get real(){
        return this._real;
    }

    set real(newReal){
        this._real = newReal;
    }

    get imaginary(){
        return this._imaginary;
    }

    set imaginary(newImaginary){
        this._imaginary = newImaginary;
    }

}


const num1 = new ComplexNumber(2, 4);
num1.real = 10;
num1.imaginary = 10;
const num2 = new ComplexNumber(6, 2);
num1.sum(num2);
console.log(`${num1.real} + ${num1.imaginary}i`);
