let display = document.getElementById('display');

function add(ch)
{
    display.value +=ch;
}
function clearScr()
{
    display.value = "";
}

function remove()
{
    let ans = display.value;
    ans = ans.substring(0, ans.length - 1);
    display.value = ans;
}

function calc()
{
    let ans = eval(display.value);
    if(ans == undefined)
    {
        display.value = '0';    
    }else
    display.value = ans;
}