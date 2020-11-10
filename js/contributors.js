/**
 * @Author: titaro
 * @Github: github.com/tyroklone
 * 
 * @Aim: Code to automatically get list of project contributors from github API.
 */

// Declare variables
const url = 'https://api.github.com/repos/MoralistFestus/random-quotes-app/contributors';
const contributors = document.querySelector('div.contributors');
const spinner = document.querySelector('div.loading');

// Get url response
let xhr = new XMLHttpRequest;

xhr.open('GET', url, true);

xhr.onloadstart = function() {
    // Loading
    spinner.style.display = 'block';
};

xhr.onloadend = function() {
    // Loading ended
    spinner.style.display = 'none';
};

xhr.onload = function() {
    // Check status
    if(this.status === 200) {
        // Begin
        let response = JSON.parse(this.response);
    
        // Loop through the response
        for(x in response) {
            let link = document.createElement('a');
            link.href = response[x].html_url;

            let img = new Image;
            img.src = response[x].avatar_url;

            link.appendChild(img);
            let contr = document.querySelector('div.contributors-img');

            contr.appendChild(link);
        }
    }
};

xhr.onerror = function() {
    // Error
    let error = document.createElement('div');
    let errorMsg = `<a class="foot" href="https://github.com/MoralistFestus">Moralist Festus</a>`;
    let contr = document.querySelector('div.contributors');

    error.innerHTML = errorMsg;
    contr.insertBefore(error, contr.children[1]);
}

xhr.send();


//get random qoutes 
(()=>{
    const endpoint='http://quotes.stormconsultancy.co.uk/random.json';
    //now fetch the endpoint 
    fetch(endpoint )
    .then( res => res.json())
    .then( result => {
        const user=document.querySelector('h5')
        const auth=document.querySelector('.api')
        user.innerHTML=`${result.quote} ` 
        auth.innerHTML=`Author:  ${result.author}`
        
    })
    
})();

