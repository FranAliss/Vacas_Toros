
function buscar(cadSecreta, Intento){
  let res = "";
  if(cadSecreta === "")
  {
    res = "";
  }
  else
  {
    if(cadSecreta === Intento)
    {
      res = "!!!!"; 
    }
  }
  return res;
}

export default buscar;
