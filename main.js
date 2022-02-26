const fortuneButton = document.getElementById('button');

function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
  };

fortuneButton.onclick = function getFortune() {

    let number = getRandomInt(10);
        switch(number){
        case 1:
            document.getElementById('output').innerHTML = "You are awesome";
            break;
        case 2:
            document.getElementById('output').innerHTML = "Hello";
            break;
        case 3:
            document.getElementById('output').innerHTML = "You rock";
            break;
        case 4:
            document.getElementById('output').innerHTML = "You stink";
            break;
        case 5:
            document.getElementById('output').innerHTML = "You da best";
            break;
        case 6:
            document.getElementById('output').innerHTML = "Salsa";
            break;
        case 7:
            document.getElementById('output').innerHTML = "hungry";
            break;
        case 8:
            document.getElementById('output').innerHTML = "pizza";
            break;
        case 9:
            document.getElementById('output').innerHTML = "phone";
            break;
        case 10:
            document.getElementById('output').innerHTML = "vacation";
            break;
        default:
            document.getElementById('output').innerHTML = "The stars are unclear, come back for your fortune tomorrow.";
       }
};

fortuneButton.onmouseover = function() {
    document.getElementById('button').style.backgroundColor = "blue";
};

fortuneButton.onmouseout = function() {
    document.getElementById('button').style.backgroundColor = "#f9fafb";
}