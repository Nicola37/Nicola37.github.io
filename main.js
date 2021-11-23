//Keeping track of the current tab.
var currentTab = "none";

//Opening Animation
var opening = anime.timeline();
opening.add({
  targets: '.header .line',
  opacity: [0.5,1],
  scaleX: [0, 1],
  easing: "easeInOutExpo",
  duration: 700
}).add({
  targets: '.header .line',
  duration: 600,
  easing: "easeOutExpo",
  translateY: function(e, i, l) {
    var offset = -1.5 + 1.5*2*i;
    return offset + "vw";
  }
}).add({
  targets: '.header .letters-left',
  opacity: [0,1],
  translateX: ["0.5em", 0],
  easing: "easeOutExpo",
  duration: 700,
  offset: '-=600'
}).add({
  targets: '.header .letters-right',
  opacity: [0,1],
  translateX: ["-0.5em", 0],
  easing: "easeOutExpo",
  duration: 700,
  offset: '-=600'
})
.add({
  targets: '.subheader1 .option',
  opacity: [0,1],
  translateX: ["-10vw", "5vw"],
  easing: "easeInOutQuad",
  duration: 150,
})
.add({
  targets: '.subheader2 .option',
  opacity: [0,1],
  translateX: ["-10vw", "25vw"],
  easing: "easeInOutQuad",
  duration: 300,
}, '-=75')
.add({
  targets: '.subheader3 .option',
  opacity: [0,1],
  translateX: ["-10vw", "45vw"],
  easing: "easeInOutQuad",
  duration: 450,
}, '-=150')
.add({
  targets: '.subheader4 .option',
  opacity: [0,1],
  translateX: ["-10vw", "65vw"],
  easing: "easeInOutQuad",
  duration: 600,
  //Once the opening is done...
  complete: function(){
    //Add event listeners for hovering and clicking on options.
    document.querySelector(".text-wrapper").addEventListener("click", mouseClickHeader);
    addAllEventListeners();
  }
}, '-=225');

//Option Animations
var option1Animation = anime.timeline({
  autoplay: false,
  duration: 600
});
option1Animation.add({
  targets: ".subheader1 .square",
  opacity: [0,1],
  easing: "easeInOutQuad",
  width: "100%",
})
.add({
  targets: ".subheader1",
  easing: "easeInOutQuad",
  color: 'rgb(37, 37, 37)'
}, 0);

var option2Animation = anime.timeline({
  autoplay: false,
  duration: 600
});
option2Animation.add({
  targets: ".subheader2 .square",
  opacity: [0,1],
  easing: "easeInOutQuad",
  width: "100%",
})
.add({
  targets: ".subheader2",
  easing: "easeInOutQuad",
  color: 'rgb(37, 37, 37)'
}, 0);

var option3Animation = anime.timeline({
  autoplay: false,
  duration: 600
});
option3Animation.add({
  targets: ".subheader3 .square",
  opacity: [0,1],
  easing: "easeInOutQuad",
  width: "100%",
})
.add({
  targets: ".subheader3",
  easing: "easeInOutQuad",
  color: 'rgb(37, 37, 37)'
}, 0);

var option4Animation = anime.timeline({
  autoplay: false,
  duration: 600
});
option4Animation.add({
  targets: ".subheader4 .square",
  opacity: [0,1],
  easing: "easeInOutQuad",
  width: "100%",
})
.add({
  targets: ".subheader4",
  easing: "easeInOutQuad",
  color: 'rgb(37, 37, 37)'
}, 0);

//About page animation.
var aboutAnimation = anime.timeline({
  begin: function(){
    document.querySelector(".workPane").style.zIndex = "auto";
    document.querySelector(".resumePane").style.zIndex = "auto";
    document.querySelector(".contactPane").style.zIndex = "auto";

    if (currentTab != "none"){
      //Set the current tab and the new (about) tab to be in front.
      document.querySelector("."+currentTab+"Pane").style.zIndex = 1;
      document.querySelector(".aboutPane").style.zIndex = 2;
    }
  },
  autoplay: false,
  duration: 800,
  complete: function(){
    currentTab = "about";
  }
})
aboutAnimation.add({
  targets: ".aboutPane",
  easing: "easeInOutQuad",
  width: "70vw"
}).add({
  targets: ".aboutHeader",
  easing: "easeInOutQuad",
  opacity: [0,1]
}, 800).add({
  targets: ".aboutText",
  easing: "easeInOutQuad",
  opacity: [0,1]
}, 800).add({
  targets: ".selfImage",
  easing: "easeInOutQuad",
  opacity: [0,1]
}, 800)

//Work page animation.
var workAnimation = anime.timeline({
  begin: function(){
    document.querySelector(".aboutPane").style.zIndex = "auto";
    document.querySelector(".resumePane").style.zIndex = "auto";
    document.querySelector(".contactPane").style.zIndex = "auto";

    if (currentTab != "none"){
      document.querySelector("."+currentTab+"Pane").style.zIndex = 1;
      document.querySelector(".workPane").style.zIndex = 2;
    }

    document.querySelector(".workGrid").style.overflow = "visible";
  },
  autoplay: false,
  duration: 800,
  easing: "easeInOutQuad",
  complete: function(){
    currentTab = "work";
  }
})
workAnimation.add({
  targets: ".workPane",
  width: "70vw"
}).add({
  targets: ".workGrid",
  opacity: [0,1]
}, 800).add({
  targets: ".workHeader",
  opacity: [0,1]
}, 800).add({
  targets: ".workText",
  opacity: [0,1]
}, 800).add({
  targets: ".VIBESLink",
  opacity: [0,1]
}, 800).add({
  targets: ".squareDD",
  opacity: [0,1]
}, 800).add({
  targets: ".sampleImage",
  opacity: [0,1],
  complete: function(){
    document.querySelector(".workGrid").style.overflow = "auto";
  }
}, 800)

//Resume page animation.
var resumeAnimation = anime.timeline({
  begin: function(){
    document.querySelector(".aboutPane").style.zIndex = "auto";
    document.querySelector(".workPane").style.zIndex = "auto";
    document.querySelector(".contactPane").style.zIndex = "auto";

    if (currentTab != "none"){
      document.querySelector("."+currentTab+"Pane").style.zIndex = 1;
      document.querySelector(".resumePane").style.zIndex = 2;
    }
  },
  autoplay: false,
  duration: 800,
  complete: function(){
    currentTab = "resume";
  }
})
resumeAnimation.add({
  targets: ".resumePane",
  easing: "easeInOutQuad",
  width: "70vw"
}).add({
  targets: ".resumeHeader",
  easing: "easeInOutQuad",
  opacity: [0,1]
}, 800).add({
  targets: ".resumeText",
  easing: "easeInOutQuad",
  opacity: [0,1]
}, 800).add({
  targets: "object",
  easing: "easeInOutQuad",
  opacity: [0,1]
}, 800)

//Contact page animation.
var contactAnimation = anime.timeline({
  begin: function(){
    document.querySelector(".aboutPane").style.zIndex = "auto";
    document.querySelector(".workPane").style.zIndex = "auto";
    document.querySelector(".resumePane").style.zIndex = "auto";

    if (currentTab != "none"){
      document.querySelector("."+currentTab+"Pane").style.zIndex = 1;
      document.querySelector(".contactPane").style.zIndex = 2;
    }
  },
  autoplay: false,
  duration: 800,
  complete: function(){
    currentTab = "contact";
  }
})
contactAnimation.add({
  targets: ".contactPane",
  easing: "easeInOutQuad",
  width: "70vw"
}).add({
  targets: ".contactHeader",
  easing: "easeInOutQuad",
  opacity: [0,1]
}, 800).add({
  targets: ".contactText",
  easing: "easeInOutQuad",
  opacity: [0,1]
}, 800).add({
  targets: ".logoImage",
  easing: "easeInOutQuad",
  opacity: [0,1]
}, 800)

//Link Button Animation
var linkAnimation = anime.timeline({
  autoplay: false,
  duration: 400
})
linkAnimation.add({
  targets: ".VIBESLink",
  easing: "easeInOutQuad",
  color: "rgb(37, 37, 37)",
  background: "rgb(218, 218, 218)"
}, 0)

//Back Button Animation
var backAnimation = anime.timeline({
  autoplay: false,
  duration: 400
})
backAnimation.add({
  targets: ".VIBESBack",
  easing: "easeInOutQuad",
  color: "rgb(37, 37, 37)",
  background: "rgb(235, 130, 55)"
}, 0)

//New Page Animation
var newPageAnimation = anime.timeline({
  autoplay: false,
  duration: 800
})
newPageAnimation.add({
  targets: ".newPageBackground",
  easing: "easeInOutQuad",
  top: "0vh"
}).add({
  targets: ".VIBESHeader",
  easing: "easeInOutQuad",
  opacity: [0,1]
}, 800).add({
  targets: ".VIBESText",
  easing: "easeInOutQuad",
  opacity: [0,1]
}, 800).add({
  targets: ".VIBESBack",
  easing: "easeInOutQuad",
  opacity: [0,1]
}, 1600)

//Other effects when pane comes out. Partially for mobile scaling.
var paneOpening = anime.timeline({
  autoplay: false,
  duration: 800
})
paneOpening.add({
  targets: '.option',
  translateX: function(e, i, l) {
    if (currentTab == "none" && window.innerWidth < window.innerHeight){
      var offset = (20*i)+23;
      return [5+(20*i)+"vw", (-1+"vw")];
    }
    else{
      var offset = (20*i)+23;
      return [5+(20*i)+"vw", (0+"vw")];
    }
  },
  scale: function(e, i, l){
    if (window.innerWidth < window.innerHeight){
      return 0.5;
    }
    else{
      return 1;
    }
  },
  easing: "easeInOutQuad",
  complete: function(){
    anime.remove(".option");
  }
}, 0);

//Event Listeners
function mouseClickHeader(){
  window.location.reload();
}

function mouseOverOption1(){
  if (option1Animation.reversed) option1Animation.reverse();
  option1Animation.completed = false;
  option1Animation.play();
}
function mouseLeaveOption1(){
  if (!option1Animation.reversed) option1Animation.reverse();
  option1Animation.completed = false;
  option1Animation.play();
}
function mouseClickOption1(){
  if (currentTab == "none"){
    paneOpening.play();
  }
  if (currentTab != "about"){
    aboutAnimation.play();
  }
}

function mouseOverOption2(){
  if (option2Animation.reversed) option2Animation.reverse();
  option2Animation.completed = false;
  option2Animation.play();
}
function mouseLeaveOption2(){
  if (!option2Animation.reversed) option2Animation.reverse();
  option2Animation.completed = false;
  option2Animation.play();
}
function mouseClickOption2(){
  if (currentTab == "none"){
    paneOpening.play();
  }
  if (currentTab != "work"){
    workAnimation.play();
  }
}

function mouseOverOption3(){
  if (option3Animation.reversed) option3Animation.reverse();
  option3Animation.completed = false;
  option3Animation.play();
}
function mouseLeaveOption3(){
  if (!option3Animation.reversed) option3Animation.reverse();
  option3Animation.completed = false;
  option3Animation.play();
}
function mouseClickOption3(){
  if (currentTab == "none"){
    paneOpening.play();
  }
  if (currentTab != "resume"){
    resumeAnimation.play();
  }
}

function mouseOverOption4(){
  if (option4Animation.reversed) option4Animation.reverse();
  option4Animation.completed = false;
  option4Animation.play();
}
function mouseLeaveOption4(){
  if (!option4Animation.reversed) option4Animation.reverse();
  option4Animation.completed = false;
  option4Animation.play();
}
function mouseClickOption4(){
  if (currentTab == "none"){
    paneOpening.play();
  }
  if (currentTab != "contact"){
    contactAnimation.play();
  }
}

function mouseOverLink(){
  if (linkAnimation.reversed) linkAnimation.reverse();
  linkAnimation.completed = false;
  linkAnimation.play();
}
function mouseLeaveLink(){
  if (!linkAnimation.reversed) linkAnimation.reverse();
  linkAnimation.completed = false;
  linkAnimation.play();
}
function mouseClickLink(){
  if (newPageAnimation.reversed) newPageAnimation.reverse();
  newPageAnimation.play();
}

function mouseOverBack(){
  if (backAnimation.reversed) backAnimation.reverse();
  backAnimation.completed = false;
  backAnimation.play();
}
function mouseLeaveBack(){
  if (!backAnimation.reversed) backAnimation.reverse();
  backAnimation.completed = false;
  backAnimation.play();
}
function mouseClickBack(){
  if (!newPageAnimation.reversed) newPageAnimation.reverse();
  newPageAnimation.completed = false;
  newPageAnimation.play();
}


//Adding the main Event Listeners
function addAllEventListeners(){
  document.querySelector(".subheader1").addEventListener("mouseover", mouseOverOption1);
  document.querySelector(".subheader1").addEventListener("mouseleave", mouseLeaveOption1);
  document.querySelector(".subheader1").addEventListener("click", mouseClickOption1);
  document.querySelector(".subheader2").addEventListener("mouseover", mouseOverOption2);
  document.querySelector(".subheader2").addEventListener("mouseleave", mouseLeaveOption2);
  document.querySelector(".subheader2").addEventListener("click", mouseClickOption2);
  document.querySelector(".subheader3").addEventListener("mouseover", mouseOverOption3);
  document.querySelector(".subheader3").addEventListener("mouseleave", mouseLeaveOption3);
  document.querySelector(".subheader3").addEventListener("click", mouseClickOption3);
  document.querySelector(".subheader4").addEventListener("mouseover", mouseOverOption4);
  document.querySelector(".subheader4").addEventListener("mouseleave", mouseLeaveOption4);
  document.querySelector(".subheader4").addEventListener("click", mouseClickOption4);

  document.querySelector(".VIBESLink").addEventListener("mouseover", mouseOverLink);
  document.querySelector(".VIBESLink").addEventListener("mouseleave", mouseLeaveLink);
  document.querySelector(".VIBESLink").addEventListener("click", mouseClickLink);

  document.querySelector(".VIBESBack").addEventListener("mouseover", mouseOverBack);
  document.querySelector(".VIBESBack").addEventListener("mouseleave", mouseLeaveBack);
  document.querySelector(".VIBESBack").addEventListener("click", mouseClickBack);
}