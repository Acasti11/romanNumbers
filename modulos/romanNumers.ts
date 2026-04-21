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
    const resto :number= number%5;
    const cociente :number=(number/5)
    console.log(cociente);

    let roman :string="";
    if(number===9){
        return("IX")
    }
    
    if(resto !=4){
        roman = roman.concat(añadirCaracter('V',cociente));
        roman = roman.concat(añadirCaracter('I',resto));
    }
    if(resto == 4){ 
        roman = roman.concat(añadirCaracter('I',1));
        roman = roman.concat(añadirCaracter('V',1));
    }


    return roman;
}

convertToRomanNumber(3);

