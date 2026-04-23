const a : String = "Hello world"
console.log(a);

export function añadirCaracter( carac:string,numb :number) : string{
    let b : string="";

    for(let x=1; x <= numb;x++){
        b = b.concat(carac);
    }

    console.log(b);
    return b;
}

export function convertToRomanNumber( number: number ) : string{
    let resto :number= number%50;
    let cociente :number=(number/50);
    console.log(cociente);

    let roman :string="";
    if(resto == 49){ 
        roman = roman.concat(añadirCaracter('I',1));
        roman = roman.concat(añadirCaracter('L',1));
        return roman;
    }
    if(resto !=49){
        roman = roman.concat(añadirCaracter('L',cociente));
    }
    cociente =(resto/10);
    resto = resto %10;
    if(resto == 9){ 
        roman = roman.concat(añadirCaracter('I',1));
        roman = roman.concat(añadirCaracter('X',1));
        return roman;
    }
    if(resto !=9){
        roman = roman.concat(añadirCaracter('X',cociente));
    }
    cociente =(resto/5);
    resto = resto %5;
        if(resto == 4){ 
        roman = roman.concat(añadirCaracter('I',1));
        roman = roman.concat(añadirCaracter('V',1));
        return roman;
        }
        if(resto !=4){
        roman = roman.concat(añadirCaracter('V',cociente));
        }
    roman = roman.concat(añadirCaracter('I',resto));
    return roman;
}

convertToRomanNumber(3);

