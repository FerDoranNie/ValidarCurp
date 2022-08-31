function validateLastDigit(curp){
  //// https://www.dof.gob.mx/nota_detalle.php?codigo=5526717&fecha=18/06/2018#gsc.tab=0
  var dict = "0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
  var suma = 0.0;
  var digitocheck = 0.0;
  // For Loop validate 
  for(var d=0; d<17; d++){
    suma = suma + dict.indexOf(curp.charAt(d)) * (18 - d);
  }
  
  digitocheck = 10 - suma % 10 ; 
  if(digitocheck==10){
    return 0;
  }else{
    return digitocheck;
  }
}

function validateCurp(curp){
  // OLD MAIN REGEX
  //var mainRegex = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/ ;
  
  var mainRegex = /^([A-ZÑ][AEIOUXÁÉÍÓÚ][A-ZÑ]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/

  var mainValidation = curp.match(mainRegex);

  /// First Validation based on http://www.ordenjuridico.gob.mx/Federal/PE/APF/APC/SEGOB/Instructivos/InstructivoNormativo.pdf
  if(!mainValidation)
      return false;

  /// Second Validation based on "Digito Verificador"
  if(mainValidation[2]!= validateLastDigit(mainValidation[1])){
    return false;
  }else{
    return true;
  }

}

function testCurp2(curp){
  return(validateCurp(curp));
}






