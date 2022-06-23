const a=+prompt('Enter A: ')
const o = prompt('Enter Operator: ')
const b=+prompt('Enter B: ')

switch(o) {
    case "+":
        console.log(a+b);
        break;
    case "-":
        console.log(a-b);
        break;
    case "*":
        console.log(a*b);
        break;
    case "/":
        console.log(a/b);
        break;
        default:
            console.log('invalid operator')
            break;
}

