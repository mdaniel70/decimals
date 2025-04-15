//Save all image src paths as variables
let diceImagePath = 'https://github.com/mdaniel70/decimals/blob/main/ready.png?raw=true';
let dice1ImagePath = 'https://github.com/mdaniel70/decimals/blob/main/shapes.001.png?raw=true';
let dice2ImagePath = 'https://github.com/mdaniel70/decimals/blob/main/shapes.002.png?raw=true';
let dice3ImagePath = 'https://github.com/mdaniel70/decimals/blob/main/shapes.003.png?raw=true';
let dice4ImagePath = 'https://github.com/mdaniel70/decimals/blob/main/shapes.004.png?raw=true';
let dice5ImagePath = 'https://github.com/mdaniel70/decimals/blob/main/shapes.005.png?raw=true';
let dice6ImagePath = 'https://github.com/mdaniel70/decimals/blob/main/shapes.006.png?raw=true';
let lockImagePath = 'https://github.com/mdaniel70/decimals/blob/main/lock.png?raw=true';
let unlockImagePath = 'https://github.com/mdaniel70/decimals/blob/main/unlock.png?raw=true';

//Save all necessary elements as variables
let dice1 = document.getElementById('dice1');
let dice2 = document.getElementById('dice2');
let dice3 = document.getElementById('dice3');
let dice4 = document.getElementById('dice4');
let dice5 = document.getElementById('dice5');
let lock1 = document.getElementById('lock1');
let lock2 = document.getElementById('lock2');
let lock3 = document.getElementById('lock3');
let lock4 = document.getElementById('lock4');
let lock5 = document.getElementById('lock5');
let rollButton = document.getElementById('roll-button');
let resetButton = document.getElementById('reset-button');
let rollCount = document.getElementById('roll-counter');

//Function to determine random roll for each dice. Selects five random numbers. Checks if the dice has been locked, if not then it assigns the correlating dice image path for the random number to each dice.
const rollDice = () => {
  let randomNum1 = Math.floor(Math.random()*6);
  let randomNum2 = Math.floor(Math.random()*6);
  let randomNum3 = Math.floor(Math.random()*6);
  let randomNum4 = Math.floor(Math.random()*6);
  let randomNum5 = Math.floor(Math.random()*6);
  
  if (lock1.src === unlockImagePath) {
    if (randomNum1 === 0) {
      dice1.src = dice1ImagePath;
    } else if (randomNum1 === 1) {
      dice1.src = dice2ImagePath;
    } else if (randomNum1 === 2) {
      dice1.src = dice3ImagePath;
    } else if (randomNum1 === 3) {
      dice1.src = dice4ImagePath;
    } else if (randomNum1 === 4) {
      dice1.src = dice5ImagePath;
    } else if (randomNum1 === 5) {
      dice1.src = dice6ImagePath;
    };
  };
  
  if (lock2.src === unlockImagePath) {
    if (randomNum2 === 0) {
      dice2.src = dice1ImagePath;
    } else if (randomNum2 === 1) {
      dice2.src = dice2ImagePath;
    } else if (randomNum2 === 2) {
      dice2.src = dice3ImagePath;
    } else if (randomNum2 === 3) {
      dice2.src = dice4ImagePath;
    } else if (randomNum2 === 4) {
      dice2.src = dice5ImagePath;
    } else if (randomNum2 === 5) {
      dice2.src = dice6ImagePath;
    };
  };
  
  if (lock3.src === unlockImagePath) {
    if (randomNum3 === 0) {
      dice3.src = dice1ImagePath;
    } else if (randomNum3 === 1) {
      dice3.src = dice2ImagePath;
    } else if (randomNum3 === 2) {
      dice3.src = dice3ImagePath;
    } else if (randomNum3 === 3) {
      dice3.src = dice4ImagePath;
    } else if (randomNum3 === 4) {
      dice3.src = dice5ImagePath;
    } else if (randomNum3 === 5) {
      dice3.src = dice6ImagePath;
    };
  };
  
  if (lock4.src === unlockImagePath) {
    if (randomNum4 === 0) {
      dice4.src = dice1ImagePath;
    } else if (randomNum4 === 1) {
      dice4.src = dice2ImagePath;
    } else if (randomNum4 === 2) {
      dice4.src = dice3ImagePath;
    } else if (randomNum4 === 3) {
      dice4.src = dice4ImagePath;
    } else if (randomNum4 === 4) {
      dice4.src = dice5ImagePath;
    } else if (randomNum4 === 5) {
      dice4.src = dice6ImagePath;
    };
  };  
  
  if (lock5.src === unlockImagePath) {
    if (randomNum5 === 0) {
      dice5.src = dice1ImagePath;
    } else if (randomNum5 === 1) {
      dice5.src = dice2ImagePath;
    } else if (randomNum5 === 2) {
      dice5.src = dice3ImagePath;
    } else if (randomNum5 === 3) {
      dice5.src = dice4ImagePath;
    } else if (randomNum5 === 4) {
      dice5.src = dice5ImagePath;
    } else if (randomNum5 === 5) {
      dice5.src = dice6ImagePath;
    };
  };  
};

//Setting up to make the locks clickable. Will be executed when roll button is clicked. 
let counter = 0;
let lockArray = [lock1, lock2, lock3, lock4, lock5];
let lockClick = function(lock) {
  if (lock.target.src === unlockImagePath) {
    lock.target.src = lockImagePath;
  } else if (lock.target.src === lockImagePath) {
    lock.target.src = unlockImagePath;
  };
};
let lockEvents = function(input) {
  input.addEventListener('click', lockClick);
};
let removeLockEvents = function(input) {
  input.removeEventListener('click', lockClick);
};

//Function to click the roll button. Applies rollDice function, increases counter to track which roll you are on, and make locks clickable only on the first and second rolls.
rollButton.onclick = () => {
  rollDice();
  counter++;
  rollCount.innerHTML = counter;
  if (counter === 1 || counter === 2) {
    lockArray.forEach(lockEvents);
  };
  if (counter === 3) {
    rollButton.style.display = 'none';
    lockArray.forEach(removeLockEvents);
  };
};

//Resets the game and puts everything back to default.
resetButton.onclick = () => {
  dice1.src = diceImagePath;
  dice2.src = diceImagePath;
  dice3.src = diceImagePath;
  dice4.src = diceImagePath;
  dice5.src = diceImagePath;
  lock1.src = unlockImagePath;
  lock2.src = unlockImagePath;
  lock3.src = unlockImagePath;
  lock4.src = unlockImagePath;
  lock5.src = unlockImagePath;
  rollCount.innerHTML = '';
  counter = 0;
  rollButton.style.display = 'inline-block';
};
