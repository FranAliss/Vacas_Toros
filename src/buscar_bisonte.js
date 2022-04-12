
function buscarBisonte(cadSecreta)
{
    let res = "";
    for(let i=0;i<cadSecreta.length;i++)
    {
        if(parseInt(cadSecreta[i]) % 2)
        {
            res = res + "%";
        }
    }
    return res;
}

export default buscarBisonte;