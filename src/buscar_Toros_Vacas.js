
function buscar(cadSecreta, Intento){
  let res = "";
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
      for(let a = 0;a<cadSecreta.length;a++)
      {
        if(parseInt(cadSecreta[a]) + 1  === parseInt(Intento[i]) || parseInt(cadSecreta[a]) - 1  === parseInt(Intento[i]))
        {
          res = res + "#";
        }
      }
    }
  }
  return res;
}

export default buscar;
