var s1 = document.getElementById('slide-in');
var s2 = document.getElementById('slide-in2');
var s3 = document.getElementById('slide-in3');
var a = document.getElementById('profile');
var b = document.getElementById('more');
var c = document.getElementById('hamburger');
var d = document.getElementById('dark-mode');
//code for slide-in menus

d.id = 's3-death'; //don't show dark screen on page load

//slide-in 1 str:(if current slide in is clicked and any other is open, close the other and close self if open when clicked. Also reveal dark screen when any slide in is active).
a.addEventListener("click", function () {
    if (s2.classList.contains('is-open')) {
        s2.id = 's1-out';
        setTimeout(function () {
            s2.id = 's3-death';
        }, 180)
        s2.classList.toggle('is-open');
    } else if (s3.classList.contains('is-open')) {
        s3.id = 's3-out';
        setTimeout(function () {
            s3.id = 's3-death';
        }, 180)
        s3.classList.toggle('is-open');
    }
    if (s1.classList.contains('is-open')) {
        s1.id = 's1-out';
        setTimeout(function () {
            s1.id = 's3-death';
        }, 180)
        d.id = 'dark-fade-out';
        setTimeout(function () {
            d.id = 's3-death';
        }, 80)
        s1.classList.toggle('is-open');
    } else {
        s1.id = 's1-in';
        d.id = 'dark-fade-in';
        s1.classList.toggle('is-open');
    }
})
//slide-in 2 :str.
b.addEventListener("click", function () {
    if (s1.classList.contains('is-open')) {
        s1.id = 's1-out';
        setTimeout(function () {
            s1.id = 's3-death';
        }, 180)
        s1.classList.toggle('is-open');
    } else if (s3.classList.contains('is-open')) {
        s3.id = 's3-out';
        setTimeout(function () {
            s3.id = 's3-death';
        }, 180)
        s3.classList.toggle('is-open');
    }
    if (s2.classList.contains('is-open')) {
        s2.id = 's1-out';
        setTimeout(function () {
            s2.id = 's3-death';
        }, 180)
        d.id = 'dark-fade-out';
        setTimeout(function () {
            d.id = 's3-death';
        }, 80)
        s2.classList.toggle('is-open');
    } else {
        s2.id = 's1-in';
        d.id = 'dark-fade-in';
        s2.classList.toggle('is-open');
    }
})
//slide-in 3 :str.
c.addEventListener("click", function () {
    if (s1.classList.contains('is-open')) {
        s1.id = 's1-out';
        setTimeout(function () {
            s1.id = 's3-death';
        }, 180)
        s1.classList.toggle('is-open');
    } else if (s2.classList.contains('is-open')) {
        s2.id = 's1-out';
        setTimeout(function () {
            s2.id = 's3-death';
        }, 180)
        s2.classList.toggle('is-open');
    }
    if (s3.classList.contains('is-open')) {
        s3.id = 's3-out';
        setTimeout(function () {
            s3.id = 's3-death';
        }, 180)
        d.id = 'dark-fade-out';
        setTimeout(function () {
            d.id = 's3-death';
        }, 80)
        s3.classList.toggle('is-open');
    } else {
        s3.id = 's3-in';
        d.id = 'dark-fade-in';
        s3.classList.toggle('is-open');
    }
})
//code to hide slide-ins on dark screen click
d.addEventListener("click", function () {
    if (s1.classList.contains('is-open')) {
        s1.id = 's1-out';
        setTimeout(function () {
            s1.id = 's3-death';
        }, 180)
        d.id = 'dark-fade-out';
        setTimeout(function () {
            d.id = 's3-death';
        }, 80)
        s1.classList.toggle('is-open');
    } else if (s2.classList.contains('is-open')) {
        s2.id = 's1-out';
        setTimeout(function () {
            s2.id = 's3-death';
        }, 180)
        d.id = 'dark-fade-out';
        setTimeout(function () {
            d.id = 's3-death';
        }, 80)
        s2.classList.toggle('is-open');
    }
    if (s3.classList.contains('is-open')) {
        s3.id = 's3-out';
        setTimeout(function () {
            s3.id = 's3-death';
        }, 180)
        d.id = 'dark-fade-out';
        setTimeout(function () {
            d.id = 's3-death';
        }, 80)
        s3.classList.toggle('is-open');
    }
})
//sign-in actions on click code
var beginFade = document.getElementById('begin-ult');
var signButton = document.getElementById('sign-up-button');
var beginJ = document.getElementById('begin-journey');
var signIn = document.getElementById('sign-up');
var x = document.getElementById('main-x');
//when X is press to cancell sign-in screen
x.addEventListener('click', function () {
    //hide sign-in screen
    signIn.id = 'dark-fade-out';
    //reset everything on cancel (on X click)
    setTimeout(function () {
        signIn.id = 's3-death';
        beginFade.id = 'reveal-again';
        beginJ.id = 'some-margin';
        x.id = 's3-death';
        load.id = 's3-death';
        sClick.id = 'show2';
        sub.id = 'normal';
        reveal.type = 'password';
        pass.id = 'no-border';
        mail.id = 'no-border';
        eyeCont.id = 'not-active';
        eye.id = 'show2';
        eyeActive.id = 's3-death';
        eyeCont.classList.remove('is-open');
    }, 80)
})
//make sign in screen and X invisible on page load
x.id = 's3-death'
signIn.id = 's3-death';
//code to reaveal sign-in screen
signButton.addEventListener('click', function () {
    beginFade.id = 'begin-fade';
    setTimeout(function () {
        beginFade.id = 's3-death'; //hide welcome greeting text
        beginJ.id = 'no-margin'; //set ID of div container for sign-in form
    }, 180)
    signIn.id = 'visible';
    setTimeout(function () {
        x.id = 'x-slow-fade-in'; // reveal X slowly after sign-in form
    }, 600)

})
//maintain white background of final submit buttton on hover after click
var sub = document.getElementById('submit');
var sClick = document.getElementById('psubmit');
var load = document.getElementById('load');
sub.addEventListener('click', function again() {
    sub.id = 'white'; //make baground white
    sClick.id = 's3-death'; //hide sign-in text
    load.id = 'show'; //show loading icon
})
//code to show password reveal active and dormant states
var eyeCont = document.getElementById('eye-cont');
var eye = document.getElementById('eye');
var eyeActive = document.getElementById('eye-active');
var reveal = document.getElementById('signup-boxp');
var pass = document.getElementById('pass');
var mail = document.getElementById('signup-boxq');

eyeCont.addEventListener('click', function () {
    if (eyeCont.classList.contains('is-open')) {
        eyeCont.classList.toggle('is-open');
        reveal.type = 'password';
        eyeCont.id = 'not-active';
        eye.id = 'show2';
        eyeActive.id = 's3-death';
    } else {
        eyeCont.classList.toggle('is-open');
        reveal.type = 'text';
        eyeCont.id = 'active';
        eye.id = 's3-death';
        eyeActive.id = 'show2';
    }
})
//code for green input field border on click

//for password input field
pass.addEventListener('click', function () {
    mail.id = 'no-border';
    pass.id = 'border';
})
//for mail input field
mail.addEventListener('click', function () {
    pass.id = 'no-border';
    mail.id = 'border';
})