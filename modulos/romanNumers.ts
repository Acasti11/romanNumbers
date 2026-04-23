export function añadirCaracter( carac:string,numb :number) : string{
    let b : string="";

    for(let x=1; x <= numb;x++){
        b = b.concat(carac);
    }

    console.log(b);
    return b;
}

export function devuelveDosOCinco(toggle :boolean){
    if(toggle){
        return 2;
    }
    return 5;
}

export function parseToRoman(numb :number):string{
    let result:string="";
    switch(numb){
        case 5:
            result='V';
            break;
        case 10:
            result='X';
            break;
        case 50:
            result='L';
            break;
    }
    return result;
}

export function convertToRomanNumber( number: number ) : string{
    let divisor :number=50;
    let toggle : boolean=false;
    let resto :number= number;
    let cociente :number=(number/divisor);
    console.log(cociente);
    let roman :string="";

    while(resto!=0){
        resto=resto%divisor;
        if(resto == divisor-1){ 
            roman = roman.concat(añadirCaracter('I',1));
            roman = roman.concat(añadirCaracter(parseToRoman(divisor),1));
            return roman;
        }
        else{
            roman = roman.concat(añadirCaracter(parseToRoman(divisor),cociente));
        }
        if(resto<=3){
            roman = roman.concat(añadirCaracter('I',resto));
            resto=0;
        }
        divisor=divisor/devuelveDosOCinco(toggle);
        cociente =(resto/divisor);
        if(toggle){
            toggle=false
        }else{
            toggle=true;
        }
    }
    
    return roman;
}