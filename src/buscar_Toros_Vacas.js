
function buscar(cadSecreta, Intento){
  let res = "";
  if(cadSecreta === "")
  {
    res = "";
  }
  else
  {
    for(let i = 0;i<cadSecreta.length;i++)
    {
      if(cadSecreta[i] === Intento[i])
      {
          res = res + "!";
      }
    }
  }
  return res;
}

export default buscar;
