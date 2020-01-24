
//AUDIOPLAYER//

// var music = document.getElementById('music'); // id for audio element
// var duration = music.duration; // Duration of audio clip, calculated here for embedding purposes
// var pButton = document.getElementById('pButton'); // play button
// var playhead = document.getElementById('playhead'); // playhead
// var timeline = document.getElementById('timeline'); // timeline

// // timeline width adjusted for playhead
// var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;

// // play button event listenter
// pButton.addEventListener("click", play);

// // timeupdate event listener
// music.addEventListener("timeupdate", timeUpdate, false);

// // makes timeline clickable
// timeline.addEventListener("click", function(event) {
//     moveplayhead(event);
//     music.currentTime = duration * clickPercent(event);
// }, false);

// // returns click as decimal (.77) of the total timelineWidth
// function clickPercent(event) {
//     return (event.clientX - getPosition(timeline)) / timelineWidth;
// }

// // makes playhead draggable
// playhead.addEventListener('mousedown', mouseDown, false);
// window.addEventListener('mouseup', mouseUp, false);

// // Boolean value so that audio position is updated only when the playhead is released
// var onplayhead = false;

// // mouseDown EventListener
// function mouseDown() {
//     onplayhead = true;
//     window.addEventListener('mousemove', moveplayhead, true);
//     music.removeEventListener('timeupdate', timeUpdate, false);
// }

// // mouseUp EventListener
// // getting input from all mouse clicks
// function mouseUp(event) {
//     if (onplayhead == true) {
//         moveplayhead(event);
//         window.removeEventListener('mousemove', moveplayhead, true);
//         // change current time
//         music.currentTime = duration * clickPercent(event);
//         music.addEventListener('timeupdate', timeUpdate, false);
//     }
//     onplayhead = false;
// }
// // mousemove EventListener
// // Moves playhead as user drags
// function moveplayhead(event) {
//     var newMargLeft = event.clientX - getPosition(timeline);

//     if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
//         playhead.style.marginLeft = newMargLeft + "px";
//     }
//     if (newMargLeft < 0) {
//         playhead.style.marginLeft = "0px";
//     }
//     if (newMargLeft > timelineWidth) {
//         playhead.style.marginLeft = timelineWidth + "px";
//     }
// }

// // timeUpdate
// // Synchronizes playhead position with current point in audio
// function timeUpdate() {
//     var playPercent = timelineWidth * (music.currentTime / duration);
//     playhead.style.marginLeft = playPercent + "px";
//     if (music.currentTime == duration) {
//         pButton.className = "";
//         pButton.className = "play";
//     }
// }

// //Play and Pause
// function play() {
//     // start music
//     if (music.paused) {
//         music.play();
//         // remove play, add pause
//         pButton.className = "";
//         pButton.className = "pause";
//     } else { // pause music
//         music.pause();
//         // remove pause, add play
//         pButton.className = "";
//         pButton.className = "play";
//     }
// }

// // Gets audio file duration
// music.addEventListener("canplaythrough", function() {
//     duration = music.duration;
// }, false);

// // getPosition
// // Returns elements left position relative to top-left of viewport
// function getPosition(el) {
//     return el.getBoundingClientRect().left;
// }

// Burger-Menu

// let burger = document.querySelector('.nav-mobile-burger');


// let navMobile = document.querySelector ('.nav-mobile');
// console.log(navMobile)

// let buns = document.querySelectorAll ('.bun');

// let wrapper = document.querySelector ('section');

// let 


// burger.addEventListener('click', (event) => {
//     navMobile.classList.toggle('hidden');
//   //buns.classList.toggle('animation');

//     buns.forEach((element) => {
//     element.classList.toggle('animation');

//     });

// });

// wrapper.addEventListener('click', (event) => {
//     navMobile.classList.add('hidden');
//   //buns.classList.toggle('animation');

//     buns.forEach((element) => {
//     element.classList.remove('animation');

//     });

// });

let burgerMenu = document.querySelector('.burger');
let navMobile = document.querySelector('.nav-mobile')
let navMobileTwo = document.querySelector('.nav-mobile-two')
let dropDown = document.querySelector('.dropdown')
let burgerBuns = document.querySelectorAll('.bun')
let body = document.querySelector('body')
let backArrow = document.querySelector('.backarrow')
let addInfo = document.querySelectorAll('.circle')
let hiddenContent = document.querySelectorAll('.hidden-content')
let circleLine = document.querySelectorAll('.line-two')

console.log(circleLine)

console.log(burgerBuns)

console.log(addInfo)

burgerMenu.addEventListener('click', function (event) {
      navMobile.classList.toggle('active')
      body.classList.toggle('overflow-hidden')
      burgerBuns.forEach(function(element){
        element.classList.toggle('animation')
      })
      if (navMobileTwo.classList.contains('active')) {
        navMobile.classList.remove('active')
        navMobileTwo.classList.remove('active')
        
      }
		})

dropDown.addEventListener('click', function (event) {
  navMobileTwo.classList.toggle('active')
  navMobile.classList.toggle('active')
  this.classList.toggle('bold')
  
})

backArrow.addEventListener('click', function (event) {
  navMobileTwo.classList.toggle('active')
  navMobile.classList.toggle('active')
  
})

addInfo.forEach(element => {
  element.addEventListener('click', function(element){
    this.parentNode.nextElementSibling.classList.toggle('hidden')
    this.classList.toggle('animation')
    this.parentNode.nextElementSibling.nextElementSibling.classList.toggle('hidden')
  })
});
  



//- Deine Mudderhajaasdasd

