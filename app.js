let userscore=0;
let compscore=0;

const choices= document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const yourscore=document.querySelector('#user-score');
const cscore=document.querySelector('#comp-score');


// to play game using both choices
const playgame =(userchoice)=>{
    console.log("user choice is " ,userchoice);
    const compchoice =getcompchoice();
    console.log("computer choice is " ,compchoice);
//draw game
    if(userchoice===compchoice){
        drawgame();
    }else{
        let userwin=true;
        if(userchoice==="paper"){
            //rock,scissors
            userwin = compchoice==="scissors" ? false : true;
        }else if(userchoice==="rock"){
            userwin = compchoice==="paper" ? false: true;
        }else if(userchoice==="scissors"){
            userwin=compchoice==="rock"?false:true;
        }
            showwinner(userwin,userchoice,compchoice);
        }
    }
    //to show winner 
    const showwinner=(userwin,userchoice,compchoice)=>{
        if(userwin){
            userscore++;
            yourscore.innerText=userscore;
            msg.innerText=`winner ! your ${userchoice} beats ${compchoice}`;
            msg.style.backgroundColor="green";
        }else{
            compscore++;
            cscore.innerText=compscore;
            msg.innerText=`Loser ! computer's ${compchoice} beats your ${userchoice}`;
            msg.style.backgroundColor="red";

        }
    }

    

//draw game
const drawgame=()=>{
    console.log("draw");
    msg.innerText="Game is Draw . Play Again";
    msg.style.backgroundColor="black";

}
//to get computer choice
const getcompchoice =()=>{
    let options=["rock","paper","scissors"];
    const ranidx= Math.floor(Math.random()*3);
    return options[ranidx];
}
//to get user choice
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener('click',() =>{
        const userchoice = choice.getAttribute('id');
        playgame(userchoice);
    });
});