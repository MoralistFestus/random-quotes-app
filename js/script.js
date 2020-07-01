let quotes=[
'The secret to life is to love who you are.',
'Look for opportunities in every change in your life.',
'Persist while others are quitting. - <b>Unknown</b>',
'The moment you stop trying that is the moment you stop achieving. - <b>Moralist Festus.</b>', 
'Keep trying, Success don\'t come easily, if you want something easy then choose failure because it is very easy to achieve. - <b>Moralist Festus</b>', 
'Failing today doesn\'t mean you\'ll fail tomorrow, everything is worth putting your best at. - <b>Moralist Festus</b>',
'Debugging is the acts of remove error or bugs from a program, Then programming is the act of creating those bugs. - <b>Unknown</b>', 
'Life is the most difficult exam. Many people fail because they try to copy others, not realizing that everyone has a different question paper. - <b>Anonymous</b>',


];
    function displayQuote(){
      let index=Math.floor(Math.random()*quotes.length);
     //display the quote of that index and trigger action with event listener
        let div=document.querySelector('#quote');
        let quote=`<div class="card">
       <img src="icon/icon.png">

       <span class="tooltiptext" onclick="copyToClipboard('p1')"  onmouseout="outFunc()" class="myTooltip sm-btn"><img style="float: right; margin: 0px 0px 15px 15px;" src="icon/icon4.png"/></span></button>
       <p id='p1'>${quotes[index]}</p>
       <img src="icon/icon.png">
       </div>`;
       div.innerHTML=quote;
     }
    let btn=document.querySelector('.btn');
      btn.addEventListener('click', displayQuote);
      console.log(quotes.length) 