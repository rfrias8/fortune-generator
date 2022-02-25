const fortuneButton = document.getElementById('button');

function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
  };

// randomNum = getRandomInt(10);

function getFortune() {

    // get the current value of the button's display property
    // let displaySetting = myButton.style.display;
    
    //get the button so that we can change it 
    let number = getRandomInt(10);
        switch(number){
        case 1:
            documnent.getElementById('output').innerHTML = "You are awesome";
            break;
        case 2:
            documnent.getElementById('output').innerHTML = "Hello";
            break;
        case 3:
            documnent.getElementById('output').innerHTML = "You rock";
            break;
        case 4:
            documnent.getElementById('output').innerHTML = "You stink";
            break;
        case 5:
            documnent.getElementById('output').innerHTML = "You da best";
            break;
        case 6:
            documnent.getElementById('output').innerHTML = "Salsa";
            break;
        case 7:
            documnent.getElementById('output').innerHTML = "hungry";
            break;
        case 8:
            documnent.getElementById('output').innerHTML = "pizza";
            break;
        case 9:
            documnent.getElementById('output').innerHTML = "phone";
            break;
        case 10:
            documnent.getElementById('output').innerHTML = "vacation";
            break;
        default:
            returdocumnent.getElementById('output').innerHTML = "The stars are unclear, come back for your fortune tomorrow.";
       }
};