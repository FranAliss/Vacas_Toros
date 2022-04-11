
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
      else
      {
        for(let j = 0;j<cadSecreta.length;j++)
        {
          if(cadSecreta[j] === Intento[i])
          {
            res = res + "*";
          }
        }
      }
    }
  }
  return res;
}

export default buscar;
