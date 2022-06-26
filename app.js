    // select all squares so we can work with them in JS
    const squares = document.querySelectorAll('.square');
    // grab the mole 
    const mole = document.querySelector('.mole');
    // grab the timer
    const timeLeft = document.querySelector('#time-left')
    // grab the score
    const score = document.querySelector('#score');

    let result = 0

    // function to select a random square for the mole
    function randomSquare() {
        // grab all the square and for each square 
        squares.forEach(square => {
            //  and remove the mole if he exists on any of the squares.
            square.classList.remove('mole')
        })
        
        // use a math random to choose which square the mole will appear and round it down to make sure it isn't a decimal and that it won't pass 8(Math.floor)
        let randomSquare = squares[Math.floor(Math.random() * 9)]
        // add the class mole to the random square so that the mole will appear there.
        randomSquare.classList.add('mole')
       
        // console.log(randomPosition)
    }

// need to find a way to check if a mole was clicked and if so add a point to the score.

    // A fucntion to run the randomSquare function every so often which in turn will move the 'mole'.
    // Can attach the moveMole function to button to start the game.
    function moveMole() {
        // can stop the timer which will stop the mole if we attach it to a button as well.
        let timerId = null
        timerId = setInterval(randomSquare, 500)
    }
    
    

    moveMole();