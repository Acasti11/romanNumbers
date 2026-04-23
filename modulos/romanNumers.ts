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
    let resto :number= number%10;
    let cociente :number=(number/10);
    console.log(cociente);

    let roman :string="";
    if(number===50){
        return 'L';
    }
    if(number===51){
        return 'LI';
    }
    if(resto == 9){ 
        roman = roman.concat(añadirCaracter('I',1));
        roman = roman.concat(añadirCaracter('X',1));
    }
    if(resto !=9){
        roman = roman.concat(añadirCaracter('X',cociente));
        return roman;
    }
    cociente =(resto/5);
    resto = resto %5;
        if(resto == 4){ 
        roman = roman.concat(añadirCaracter('I',1));
        roman = roman.concat(añadirCaracter('V',1));
        }
        if(resto !=4){
        roman = roman.concat(añadirCaracter('V',cociente));
        return roman;
        }
    
    roman = roman.concat(añadirCaracter('I',resto));
    return roman;
}

convertToRomanNumber(3);

