var words=["Software Engineer","Web Developer","AI Enthusiastic","Blockchain Developer"]
var counter=0;
var currentindex=getRandomInt(0,words.length-1);
var text=document.querySelector("#type-it");
var stepInterval=setInterval(() => {
    step();
},200);
var delInterval=null;
var delTimeout=null;
function getRandomInt(min,max)
{
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math.floor(Math.random()*(max-min+1)) + min;
}

function delIntervalCallback()
{
    delInterval =setInterval(() => {
        del();
    },100);
    clearTimeout(delTimeout);
}

function del()
{
    if(counter==0)
    {
        let newIndex=getRandomInt(0,words.length-1);
        while(newIndex == currentindex)
        {
            newIndex=getRandomInt(0,words.length-1);
        }
        currentindex=newIndex;
        clearInterval(delInterval);
        stepInterval=setInterval(() =>
        {
            step();
        },200);
    }
    else
    {
        text.textContent=text.textContent.slice(0,-1);
        counter--;
    }
}

function step()
{
    if(counter>=words[currentindex].length)
    {
        clearInterval(stepInterval);
        delTimeout=setTimeout(() => {
            delIntervalCallback();
        }, 2000);
    }
    else
    {
        text.textContent += words[currentindex][counter];
        counter++;
    }
}

