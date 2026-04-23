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
        case 100:
            result='C';
            break;
        case 500:
            result='D';
            break;
        case 1000:
            result='M';
            break;
    }
    return result;
}

export function convertToRomanNumber( number: number ) : string{
    let divisor :number=1000;
    let toggle : boolean=true;
    let resto :number= number;
    let cociente :number=(number/divisor);
    let roman :string="";

    while(resto!=0){
        resto=resto%divisor;
        if(resto == divisor-1){ 
            roman = roman.concat(añadirCaracter('I',1));
            roman = roman.concat(añadirCaracter(parseToRoman(divisor),1));
            return roman;
        }
        if(Math.trunc(resto/10) == (divisor/10)-1 && Math.trunc(resto/10)!=0){ 
            roman = roman.concat(añadirCaracter('X',1));
            console.log(resto);
            roman = roman.concat(añadirCaracter(parseToRoman(divisor),1));
            resto=resto-((divisor/10)-1)*10;
            console.log(resto);
        }
        if(Math.trunc(resto/100) == (divisor/100)-1 && Math.trunc(resto/100)!=0){ 
            roman = roman.concat(añadirCaracter('C',1));
            console.log(resto);
            roman = roman.concat(añadirCaracter(parseToRoman(divisor),1));
            resto=resto-((divisor/100)-1)*100;
            console.log(resto);
        }else{
            console.log(cociente);
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
    
    console.log(roman);
    return roman;
}

convertToRomanNumber(47);