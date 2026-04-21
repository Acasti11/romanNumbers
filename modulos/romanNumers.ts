const a : String = "Hello world"
console.log(a);

export function añadirPalito( numb :number) : String{
    let b : string="";

    for(let x=0; x <numb;x++){
        b = b.concat("I");
    }
    
    return b;
}

export function convertToRomanNumber( number: number ) : String{
    if (number === 4) {
        return "IV";
    }
    if (number === 5) {
        return "V";
    }
    if (number === 6) {
        return "VI";
    }
    return añadirPalito(number);
}

