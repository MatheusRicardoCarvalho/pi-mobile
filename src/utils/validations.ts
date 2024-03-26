export function validTel(celular: string)
{
    celular =  celular.replace('/[^0-9]/', '');
    return celular.match(/^([14689][0-9]|2[12478]|3([1-5]|[7-8])|5([13-5])|7[193-7])9[0-9]{8}$/);
}

export function validDatNasc(dataNasc: string){
      return true
}