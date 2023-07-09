console.log('Welcome to My TicTacToe Buddy!');
let music=new Audio('Media/music.mp3');
let audioTurn =new Audio('Media/ting.mp3');
let gameover=new Audio('Media/gameover.mp3');
let isgameover = false;
let turn ="X";
let win=0;

//Function to check the turn
const changeTurn = () =>{

    return turn ==="X"?"O":"X";
}

//Function to check for the winner
const checkWin = () => {
    let boxtext=document.getElementsByClassName('boxtext');
    let wins= [
        [0, 1, 2, -24, 5, 0],
        [0, 3, 6, -34.3, 15, 90],
        [0, 4, 8, -24, 15, 45],
        [1, 4, 7, -24.2, 15, 90],
        [2, 5, 8, -14.1, 14, 90],
        [2, 4, 6, -24.3, 15, 135],
        [3, 4, 5, -24, 15, 0],
        [6, 7, 8, -24, 25, 0],
    ];
    //Winning time
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !=='')) 
        {
            document.querySelector('.info').innerText= "Congrats, "+boxtext[e[0]].innerText + " Won!🎉🎉 (Time to reset!)";
            isgameover= true;
            win=1
            music.pause();
            music.load();
            gameover.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "500px";
            document.querySelector('.line').style.width = "40vw";
            document.querySelector('.line').style.transform =`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
        }
    });
}

//Game Logic
music.play();
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxtext= element.querySelector('.boxtext');
    element.addEventListener('click',(e) => {
        if(boxtext.innerText === '')
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover)
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            
    });
});

//Add on-click listener to reset button
reset.addEventListener('click',(e) => {
    let boxtexts= document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = '';
    });
    turn= 'X';
    isgameover = false;
    document.querySelector('.line').style.width = "0vw";
    document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    music.play();
});