function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string)
{
  console.log(string.toUpperCase());
}

function logWhisper(string)
{
  console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string)
{
    const cannotHear = "I can't hear you!";
    const canHear = "YES INDEED!";
    const dinner = "Let's have dinner together!";
    const loveTO ="I would love to!";

    if (string.toLowerCase(string)=== string)
    {
        return cannotHear;
    }
    else if(string.toUpperCase(string)===string)
    {
        return canHear;
    }
    else if(string===dinner)

    {
        return loveTO;

    }
}