//Keeping track of the current tab.
var currentTab = "none";

//Keeping track of the current portfolio tab.
var portfolioTab = "none";

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
  targets: ".linkButton",
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

//Link Button Animations
var linkVIBESAnimation = anime.timeline({
  autoplay: false,
  duration: 400
})
linkVIBESAnimation.add({
  targets: ".VIBESLink",
  easing: "easeInOutQuad",
  color: "rgb(37, 37, 37)",
  background: "rgb(218, 218, 218)"
}, 0)

var linkDreamsAnimation = anime.timeline({
  autoplay: false,
  duration: 400
})
linkDreamsAnimation.add({
  targets: ".dreamsLink",
  easing: "easeInOutQuad",
  color: "rgb(37, 37, 37)",
  background: "rgb(218, 218, 218)"
}, 0)

var linkDonatorAnimation = anime.timeline({
  autoplay: false,
  duration: 400
})
linkDonatorAnimation.add({
  targets: ".donatorLink",
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
  targets: ".backButton",
  easing: "easeInOutQuad",
  color: "rgb(37, 37, 37)",
  background: "rgb(235, 130, 55)"
}, 0)

//Portfolio Page Animations
var portfolioVIBESAnimation = anime.timeline({
  autoplay: false,
  duration: 800
})
portfolioVIBESAnimation.add({
  targets: ".VIBESBackground",
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
  targets: ".backButton",
  easing: "easeInOutQuad",
  top: "0.5vh"
}, 800).add({
  targets: ".backButton",
  easing: "easeInOutQuad",
  opacity: [0,1]
}, 1600)

var portfolioDreamsAnimation = anime.timeline({
  autoplay: false,
  duration: 800
})
portfolioDreamsAnimation.add({
  targets: ".dreamsBackground",
  easing: "easeInOutQuad",
  top: "0vh"
}).add({
  targets: ".dreamsHeader",
  easing: "easeInOutQuad",
  opacity: [0,1]
}, 800).add({
  targets: ".dreamsText",
  easing: "easeInOutQuad",
  opacity: [0,1]
}, 800).add({
  targets: ".backButton",
  easing: "easeInOutQuad",
  top: "0.5vh"
}, 800).add({
  targets: ".backButton",
  easing: "easeInOutQuad",
  opacity: [0,1]
}, 1600)

var portfolioDonatorAnimation = anime.timeline({
  autoplay: false,
  duration: 800
})
portfolioDonatorAnimation.add({
  targets: ".donatorBackground",
  easing: "easeInOutQuad",
  top: "0vh"
}).add({
  targets: ".donatorHeader",
  easing: "easeInOutQuad",
  opacity: [0,1]
}, 800).add({
  targets: ".donatorText",
  easing: "easeInOutQuad",
  opacity: [0,1]
}, 800).add({
  targets: ".backButton",
  easing: "easeInOutQuad",
  top: "0.5vh"
}, 800).add({
  targets: ".backButton",
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

//Header
function mouseClickHeader(){
  window.location.reload();
}

//Main Options
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

//Portfolio Pages
function mouseOverVIBESLink(){
  if (linkVIBESAnimation.reversed) linkVIBESAnimation.reverse();
  linkVIBESAnimation.completed = false;
  linkVIBESAnimation.play();
}
function mouseLeaveVIBESLink(){
  if (!linkVIBESAnimation.reversed) linkVIBESAnimation.reverse();
  linkVIBESAnimation.completed = false;
  linkVIBESAnimation.play();
}
function mouseClickVIBESLink(){
  if (portfolioVIBESAnimation.reversed) portfolioVIBESAnimation.reverse();
  portfolioVIBESAnimation.play();
  portfolioTab = "VIBES";
}

function mouseOverDreamsLink(){
  if (linkDreamsAnimation.reversed) linkDreamsAnimation.reverse();
  linkDreamsAnimation.completed = false;
  linkDreamsAnimation.play();
}
function mouseLeaveDreamsLink(){
  if (!linkDreamsAnimation.reversed) linkDreamsAnimation.reverse();
  linkDreamsAnimation.completed = false;
  linkDreamsAnimation.play();
}
function mouseClickDreamsLink(){
  if (portfolioDreamsAnimation.reversed) portfolioDreamsAnimation.reverse();
  portfolioDreamsAnimation.play();
  portfolioTab = "dreams";
}

function mouseOverDonatorLink(){
  if (linkDonatorAnimation.reversed) linkDonatorAnimation.reverse();
  linkDonatorAnimation.completed = false;
  linkDonatorAnimation.play();
}
function mouseLeaveDonatorLink(){
  if (!linkDonatorAnimation.reversed) linkDonatorAnimation.reverse();
  linkDonatorAnimation.completed = false;
  linkDonatorAnimation.play();
}
function mouseClickDonatorLink(){
  if (portfolioDonatorAnimation.reversed) portfolioDonatorAnimation.reverse();
  portfolioDonatorAnimation.play();
  portfolioTab = "donator";
}

//Portfolio Back Button
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
  if (portfolioTab == "VIBES"){
    if (!portfolioVIBESAnimation.reversed) portfolioVIBESAnimation.reverse();
    portfolioVIBESAnimation.completed = false;
    portfolioVIBESAnimation.play();
  }

  if (portfolioTab == "dreams"){
    if (!portfolioDreamsAnimation.reversed) portfolioDreamsAnimation.reverse();
    portfolioDreamsAnimation.completed = false;
    portfolioDreamsAnimation.play();
  }

  if (portfolioTab == "donator"){
    if (!portfolioDonatorAnimation.reversed) portfolioDonatorAnimation.reverse();
    portfolioDonatorAnimation.completed = false;
    portfolioDonatorAnimation.play();
  }

  portfolioTab = "none";
}


//Adding the Event Listeners
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

  document.querySelector(".VIBESLink").addEventListener("mouseover", mouseOverVIBESLink);
  document.querySelector(".VIBESLink").addEventListener("mouseleave", mouseLeaveVIBESLink);
  document.querySelector(".VIBESLink").addEventListener("click", mouseClickVIBESLink);
  document.querySelector(".dreamsLink").addEventListener("mouseover", mouseOverDreamsLink);
  document.querySelector(".dreamsLink").addEventListener("mouseleave", mouseLeaveDreamsLink);
  document.querySelector(".dreamsLink").addEventListener("click", mouseClickDreamsLink);
  document.querySelector(".donatorLink").addEventListener("mouseover", mouseOverDonatorLink);
  document.querySelector(".donatorLink").addEventListener("mouseleave", mouseLeaveDonatorLink);
  document.querySelector(".donatorLink").addEventListener("click", mouseClickDonatorLink);

  document.querySelector(".backButton").addEventListener("mouseover", mouseOverBack);
  document.querySelector(".backButton").addEventListener("mouseleave", mouseLeaveBack);
  document.querySelector(".backButton").addEventListener("click", mouseClickBack);
}