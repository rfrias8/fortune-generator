const fortuneButton = document.getElementById('button');

function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
  };

fortuneButton.onclick = function getFortune() {

    let number = getRandomInt(10);
        switch(number){
        case 1:
            document.getElementById('output').innerHTML = "Love is in the air";
            break;
        case 2:
            document.getElementById('output').innerHTML = "What you have bee wanting for so long will soon come true";
            break;
        case 3:
            document.getElementById('output').innerHTML = "A beautiful, smart, and loving person will be coming into your life";
            break;
        case 4:
            document.getElementById('output').innerHTML = "All your hard work will soon pay off";
            break;
        case 5:
            document.getElementById('output').innerHTML = "Everywhere you choose to go, friendly faces will greet you";
            break;
        case 6:
            document.getElementById('output').innerHTML = "Failure is the chance to do better next time";
            break;
        case 7:
            document.getElementById('output').innerHTML = "Go for the gold today! You will be the champion of whatever";
            break;
        case 8:
            document.getElementById('output').innerHTML = "If you continually give, you will continually have";
            break;
        case 9:
            document.getElementById('output').innerHTML = "It is better to deal with problems before they arise";
            break;
        case 10:
            document.getElementById('output').innerHTML = "New people will bring you new realizations, especially about big issues";
            break;
        default:
            document.getElementById('output').innerHTML = "Fortune Not Found: Abort, Retry, Ignore?";
       }
};

fortuneButton.onmouseover = function() {
    document.getElementById('button').style.backgroundColor = "#839baf";
};

fortuneButton.onmouseout = function() {
    document.getElementById('button').style.backgroundColor = "#f9fafb";
}