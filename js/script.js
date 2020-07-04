let quotes = [
'The secret to life is to love who you are.',
'Look for opportunities in every change in your life.',
'Persist while others are quitting. - <b>Unknown</b>',
'The moment you stop trying that is the moment you stop achieving. - <b>Moralist Festus.</b>', 
'Keep trying, Success don\'t come easily, if you want something easy then choose failure because it is very easy to achieve. - <b>Moralist Festus</b>', 
'Failing today doesn\'t mean you\'ll fail tomorrow, everything is worth putting your best at. - <b>Moralist Festus</b>',
'Debugging is the acts of remove error or bugs from a program, Then programming is the act of creating those bugs. - <b>Unknown</b>', 
'Life is the most difficult exam. Many people fail because they try to copy others, not realizing that everyone has a different question paper. - <b>Anonymous</b>',
'Remember why you started and never give up. - <b>Moralist Festus</b>', 
'Yesterday = Experience ~ Today = Experiment ~ Tomorrow = Expectations. Use ur EXperience in your EXperiment to achieve your EXpectations.', 
'Never regret something that once made you smile.',
'Relationships are like a Book. It takes years to write but second to burn.',
'Best Relationship: Talk like best friends, play like children, argue like husband & wife, protect each other like brother and sister.',
'GOD understands our prayers even when we can\'t find the words.', 
'Spend your life with who makes you happy, not with who you have to impress.',
'Im not looking for someone who has everything. But someone who has time to spend with me more than anything.',
'Its better to let go with a smile in face than to hold on with tears in eyes.',
'I am not perfect but loving you makes me the best. ♥',
'Relationships are like a Book. It takes years to write but second to burn.',
'If you are not willing to learn, No one can help you. If you are determined to learn, No one can stop you.',
'Everyone is trying to accomplish something big, not realizing that life is made up of little things.',
'Some love one, some love two. I love one that is you.',
'Every moment spent with you is like a beautiful dream come true… I Love You.',
'Every moment spent with you is like a beautiful dream come true… I Love You.',
'Spend your life with who makes you happy, not with who you have to impress.',
'Im not looking for someone who has everything. But someone who has time to spend with me more than anything.',
'Its better to let go with a smile in face than to hold on with tears in eyes.',
'Failure is simply the opportunity to begin again. This time more intelligently.',
'Set your goals high enough to inspire you and low enough to encourage you.',
'The secret to happiness is to do what you like. The secret to success is to like what you do.',
'If you are not willing to learn, No one can help you. If you are determined to learn, No one can stop you.',
'Everyone is trying to accomplish something big, not realizing that life is made up of little things.',
'Life\s challenges are not supposed to paralyze you, they are supposed to help you discover who you really are.', 
'Don\t let a bad day make you feel like you have a bad life.', 
'Success is never achieved by the size of our brain but it is always achieved by the quality of our thoughts.',
'Motivation gets you moving and determination keeps you going.',
'Live like you will die tomorrow, dream like you will live forever.',
'Some people want it to happen, Some people wish it would happen, Others make it happen.',
'We are all here for some special reason. Stop being a prisoner of you past. Become the architect of your future.',
'Failure is simply the opportunity to begin again. This time more intelligently.',
'Set your goals high enough to inspire you and low enough to encourage you.', 
'If you want your life to be meaningful go out and do something about it.',
'The difference between ordinary and extraordinary is that little extra.',
'Life is always up and down, so why are you worried when you are at the bottom; the next place is up.',
'If plan A did not work, the alphabet has 25 more letters. STAY COOL',
'Failure is not a mistake. Sometimes it is the best place to start.',
'If you don\t go after what you want, you will never have it.',
'Every day do something that will inch you closer to a better tomorrow.',
'Life\s challenges are not supposed to paralyze you, they are supposed to help you discover who you really are.',
'Don\t let little things get you down. You have got many reasons to look up to God and say thanks tonight.', 
'We all have problems; the way we solve them is what makes us different.',
'We judge ourselves by what we feel capable of doing, while others judge us by what we have already done.',
'Try to learn something about everything and everything about something.',
'You never fail until you stop trying.',
'Try to learn something about everything and everything about something.',
'Whatever brings you down, will eventually make you stronger.',
'Do not give up, the beginning is always the hardest.',
'The secret of success is to know something nobody else knows.',
'Forget past mistakes. Forget failures. Forget everything except what you’re going to do now and do it.',
'Success is the sum of small efforts, repeated day in and day out.',
'If you believe in yourself, things are possible.', 
'If people knew how hard I had to work to gain my mastery, it wouldn\'t seem wonderful at all.', 
'Things may come to those who wait, but only the things left by those who hustle.',
'Everyone has a will to win but very few have the will to prepare to win.',
'You need a plan to build a house. To build a life, it is even more important to have a plan or goal.',
'Even if you\'re on the right track, you\'ll get run over if you just sit there.',
'You don\'t have to be great to start, but you have to start to be great.',
'People know you for what you\'ve done, not for what you plan to do.',
'Motivation is what gets you started. Habit is what keeps you going.',
'Just don\'t give up trying to do what you really want to do. Where there\'s love and inspiration, I don\'t think you can go wrong.',
'Experience is how life catches up with us and teaches us to love and forgive each other.',
'Trying and Doing are two different things. When you try, you hope. When you do, you succeed.',
'As you breath, another person takes his last. So stop complaining but rather live your life with what you got. Make every breath count.', 
'Live like a candle which burns itself but gives light to others.',
];

    function displayQuote(){
      let index=Math.floor(Math.random()*quotes.length);
     //display the quote of that index and trigger action with event listener

        let div=document.querySelector('#quote-body');
        let quote=`<div id="quote"><div class="card">
        <div class="quote-text">Quote</div>
        <div class="quote-copy" onclick="copyToClipboard('p1')"  onmouseout="outFunc()"><img src="./icon/clipboard.png" alt="Clipboard" id="clip"></div>
        <p id="p1">${quotes[index]}</p>
       </div></div>`;
       div.innerHTML=quote;
     }
    let btn=document.querySelector('.btn');
      btn.addEventListener('click', displayQuote);
      console.log(quotes.length) 