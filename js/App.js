let socialNav = document.querySelector('.social__nav');
let navToggler = document.querySelector('.social__nav__toggler');

//adding eventLister to the navToggler
navToggler.addEventListener('click', function(){
    socialNav.classList.toggle('active');
});


function myTwitter(){
    location.href = "https://twitter.com/devYoma";
}

function myLinkedIn(){
    location.href = "https://www.linkedin.com/in/ogheneyoma-emore-87a8341b3";
}