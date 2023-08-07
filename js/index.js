let inputBox = document.querySelector('.inp');
let eq = document.querySelector('.inp1');
let answer = [];
let equation = [];
let HistoryBox=document.querySelector('.one');


function getVal(val)
{
    console.log(val);
    inputBox.value+= val;
}

function getVal(val)
{
if(inputBox.value==0)
{
    inputBox.value=val;
}
else
{
    inputBox.value+=val;
}
}

function getAns()
{
    eq.value = inputBox.value;
    let ans=eval(inputBox.value);
    inputBox.value= ans;
    let equaVal= eq.value;
    answer.push(ans);
    equation.push(equaVal);
    console.log(answer);
    console.log(equation);
}

function clr()
{
    inputBox.value=0;
    eq.value= null;
}

// let i=1;
// while(i<=10)
// {
//     console.log('Hello World'+ i);
//     i++;
// }

// for(let i=1; i<=10; i++)
// {
//     console.log("hello");
// }

function history()
{
    for(i=0; i<equation.length; i++)
    {
        HistoryBox.innerHTML+= "<div class='element'><h3>"+equation[i]+"</h3><h2>"
            +answer[i]+"</h2></div>"
    }
}