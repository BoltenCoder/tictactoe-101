// The variable will change from X to O based on what player turn it is. We need to hold this so we can place an X or O on the board when they're clicked.
let currentMarker = 'X'
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
]

// this "handleClick" function is called when a box is clicked. Here, "element" will hold the same value as "this" does in the HTML. 
// "this" is a special word in JS but "element" could have been "thing" or "el" or whatever we wanted it to be as long as we use it again in the "console.log" statement
const handleClick = (element) => {

  // this uses the "log" method on the "console" to log out the element's id so we can see it with our human eyes
  console.log(`The element you clicked on has an id:  ${element.id}`)

  // this next line prevents an X being changed to an O or an O being changed to an X by...
  //  checking to see if the square clicked has anything in it, if not continue
  if(!document.getElementById(element.id).innerHTML){
    addMarker(element.id)
  }
}


// this function places the "currentMarker" inside the HTML element that was clicked and calls the "changeMarker" function.
const addMarker = (id) => {
  console.log(`add marker was given an id of ${id}`)
  console.log(`*** The current marker is:  ${currentMarker}. ***`)
  console.log(`Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${id}`)
  
  let currentElement = document.getElementById(id);
  currentElement.innerHTML = `${currentMarker}`;

  const row = parseInt(id.charAt(0))
  const column = parseInt(id.charAt(1))
  board[row][column] = currentMarker
  checkForWin()
}


// This "changeMarker" function changes "X" to "O" in the "currentMarker" variable or "O" to "X"
const changeMarker = () => {
  console.log(`The current marker is ${currentMarker}`)
  if(currentMarker === "X"){
    currentMarker = "O"
  } else {
    currentMarker = "X"
  }
  const youWon = document.getElementById('you-won')
  youWon.innerHTML = `<div id="you-won">[${currentMarker}] Click a space.</hdiv>`
}

// This "resetBoard" function is called when the user clicks on the "Restart" button.
const resetBoard = () => {
  console.log(" ")
  console.log("GAME RESET")
  console.log("")
  
  currentMarker = "X"
  const squares = document.getElementsByTagName("TD")
  board[0][0] = null
  board[0][1] = null
  board[0][2] = null
  board[1][0] = null
  board[1][1] = null
  board[1][2] = null
  board[2][0] = null
  board[2][1] = null
  board[2][2] = null
  
  // loops over the HTML Collection of TDs and clears out the Xs and Os
  for (i=0; i < squares.length; i++) {

    // will log out the id of each square as it loops over them.
    // console.log(squares[i].id)

    // sets the innerHTML to null to replace the "X" or "O"
    squares[i].innerHTML = null
  
    const youWon = document.getElementById('you-won')
    youWon.innerHTML = `<div id="you-won">[X] Game Reset!</hdiv>`
  }  
}

const checkForWin = () => {
  console.log("checkForWin() has been run")
  if (horizontalWin() || verticalWin() || diagonalWin()) {
    const youWon = document.getElementById('you-won')
    youWon.innerHTML = `<div id="you-won">[${currentMarker}] You won!</div>`
  } else {
    changeMarker()
  }
}

const horizontalWin = () => {
  if ( (board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") 
    || (board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X")
    || (board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X")
    || (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O")
    || (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O")
    || (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O")
    ) {
    return true;
  }
}

const verticalWin = () => {
  if ( (board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") 
    || (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X")
    || (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X")
    || (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O")
    || (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O")
    || (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O")
    ) {
  return true;
  }
}

const diagonalWin = () => {
  if ( (board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X")
    || (board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X")
    || (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O")
    || (board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O")
    ) {
    return true;
  }
}