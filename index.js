//LEVEL BUTTONS
const level1Button = document.querySelector(".level-button1");
const level2Button = document.querySelector(".level-button2");
const level3Button = document.querySelector(".level-button3");
const level4Button = document.querySelector(".level-button4");

// LEVEL WRAPPERS SELECTORS
const level1 = document.querySelector(".level1-wrapper");
const level2 = document.querySelector(".level2-wrapper");
const level3 = document.querySelector(".level3-wrapper");
const level4 = document.querySelector(".level4-wrapper");


//Level Change
function levelChange(newLevel,newButton){
    level1.classList.add("hidden");
    level2.classList.add("hidden");
    level3.classList.add("hidden");
    level4.classList.add("hidden");
    newLevel.classList.remove("hidden");

    level1Button.classList.remove("level-active");
    level2Button.classList.remove("level-active");
    level3Button.classList.remove("level-active");
    level4Button.classList.remove("level-active");
    newButton.classList.add("level-active")
}

// Change level functionality
level1Button.addEventListener('click', function(){
    levelChange(level1,level1Button);
});
level2Button.addEventListener('click', function(){
    levelChange(level2,level2Button);
});
level3Button.addEventListener('click', function(){
    levelChange(level3,level3Button);
});
level4Button.addEventListener('click', function(){
    levelChange(level4,level4Button);
})

//Create task card
// let cardTitle = "2. Ode to Joy";
// let imgId = cardTitle.replace(/\s/g , "_")+"imgId";
// let imgUrl = './img/task-bg/level1.1.2.jpeg';
// let author = "Liberty bellows."
// let platform = "Youtube "
// let description = "Practice slowly. Start with the right hand very slowly and make sure you move steadily your way up. Move on to the next exercise before 8 minutes even though you might need more sessions to improve your BPM."



// 
let sampleObj = {
    cardTitle: "2. Ode to Joy",
    imgId: "",
    imgUrl: './img/task-bg/level1.1.2.jpeg',
    author: "Liberty bellows.",
    platform: "Youtube ",
    description: "Practice slowly. Start with the right hand very slowly and make sure you move steadily your way up. Move on to the next exercise before 8 minutes even though you might need more sessions to improve your BPM."
};
sampleObj.imgId = sampleObj.cardTitle.replace(/\s/g , "_")+"imgId"+Math.floor(Math.random()*9999)

// const cardFactory




// function createCard(cardTitle, imgId, author, imgUrl, targetDiv){
function createCard(obj,targetDiv){
const task = document.createElement("li");
task.innerHTML = `
        <div class="inline-please task-title ">
            <img class="icon" src="./img/icons/chevrons-right.svg" alt="">
            <h3>${obj.cardTitle}</h3>
        </div>
        <div class="info-card hidden">
            <div class="task-bg-container">
                <div class="task-bg" id=${obj.imgId}></div>
            </div>
            <div class="info-card-content-container">
                <div class="info-card-content">
                    <div class="inline-please"><img class="icon" src="./img/icons/info.svg" alt="">
                    <p>Author: ${obj.author}</p>
                    </div>
                    <p>Platform: ${obj.platform}</p>
                    <p class="task-description">Description: ${obj.description}</p>
                </div>
                <div class="target-speed-container">
                    <div class="target-header">
                        <img class="icon" src="./img/icons/target.svg" alt="target speed">
                        <h4>Target speeds</h2>
                    </div>
                    <ul class="target-speed-list">
                        <li class="target-speed">
                            <div class="checkbox-wrapper">
                                <div class="grid">
                                    <label class="checkbox path">
                                        <input type="checkbox">
                                        <svg viewBox="0 0 21 21">
                                            <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"></path>
                                        </svg>
                                    </label>
                                </div>
                                <p>60 BPM</p>
                            </div>
                        </li>
                        <li class="target-speed">
                            <div class="checkbox-wrapper">
                                <div class="grid">
                                    <label class="checkbox path">
                                        <input type="checkbox">
                                        <svg viewBox="0 0 21 21">
                                            <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"></path>
                                        </svg>
                                    </label>
                                </div>

                                <p>80 BPM</p>
                            </div>
                        </li>
                        <li class="target-speed">
                            <div class="checkbox-wrapper">
                                <div class="grid">
                                    <label class="checkbox path">
                                        <input type="checkbox">
                                        <svg viewBox="0 0 21 21">
                                            <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"></path>
                                        </svg>
                                    </label>
                                </div>
                                    <p>90 BPM</p>
                            </div>
                        </li>
                        <li class="target-speed">
                            <div class="checkbox-wrapper">
                                <div class="grid">
                                    <label class="checkbox path">
                                        <input type="checkbox">
                                        <svg viewBox="0 0 21 21">
                                            <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"></path>
                                        </svg>
                                    </label>
                                </div>
                                    <p>100 BPM</p>
                            </div>
                        </li>
                    </ul>
                </div>

        </div>  
        <div class="btn-practice">
            <button class="basic-shadow"><h3>Practice now</h3></button>
        </div>
`
document.querySelector(targetDiv).appendChild(task);
// {/* <li class="task basic-shadow"></li> */}
task.classList.add("task");
task.classList.add("basic-shadow");
document.getElementById(obj.imgId).style.backgroundImage = `url(${obj.imgUrl})`;

}

//CREATE LEARNING BLOCK

function createLearningBlock(title,level){
    let blockTitle = title;
    let blockId = title.replace(/\s/,"-");
    const learningBlock = document.createElement("div");
    learningBlock.innerHTML = `
        <div class="block-title block-collapsed">
        <img class="icon" src="./img/icons/layers.svg" alt="">
            <h2>${blockTitle}</h2>
        </div>
        <div class="tasks-container left-red hidden" id=${blockId}>
            <ul></ul>
        </div>
`
learningBlock.classList.add("learning-block");
level.classList.add("hidden");
level.appendChild(learningBlock)
}

//Display the learning blocks on the different levels
createLearningBlock("Songs block",level1);
createLearningBlock("Finger dexterity",level1);
createLearningBlock("Rythm foundations",level1);
createLearningBlock("Music theory in action",level1);
createLearningBlock("Hand coordination",level1);

createLearningBlock("Songs block",level2);
createLearningBlock("Finger dexterity",level2);
createLearningBlock("Rythm foundations",level2);
createLearningBlock("Music theory in action",level2);
createLearningBlock("Hand coordination",level2);

createLearningBlock("Songs block",level3);
createLearningBlock("Finger dexterity",level3);
createLearningBlock("Rythm foundations",level3);
createLearningBlock("Music theory in action",level3);
createLearningBlock("Hand coordination",level3);

createLearningBlock("Songs block",level4);
createLearningBlock("Finger dexterity",level4);
createLearningBlock("Rythm foundations",level4);
createLearningBlock("Music theory in action",level4);
createLearningBlock("Hand coordination",level4);

// Populate each level with the tasks
// createCard(cardTitle, imgId, author, imgUrl, document.querySelector("#Songs-block > UL"));
// createCard(cardTitle, imgId, author, imgUrl, document.querySelector("#Finger-dexterity > UL"));
// createCard(cardTitle, imgId, author, imgUrl, document.querySelector("#Finger-dexterity > UL"));
// createCard(cardTitle, imgId, author, imgUrl, document.querySelector("#Finger-dexterity > UL"));
// createCard(cardTitle, imgId, author, imgUrl, document.querySelector("#Hand-coordination > UL"));

createCard(sampleObj, "#Songs-block > UL");
sampleObj.imgId = sampleObj.cardTitle.replace(/\s/g , "_")+"imgId"+Math.floor(Math.random()*9999)
createCard(sampleObj, "#Songs-block > UL");
createCard(sampleObj, "#Songs-block > UL");
createCard(sampleObj, "#Songs-block > UL");
createCard(sampleObj, "#Songs-block > UL");






////////////// BLOCK COLLAPSE  
const blockTitle = document.querySelectorAll(".block-title")

for(let i=0;i<blockTitle.length;i++){
    blockTitle[i].addEventListener('click', function(){
        blockTitle[i].nextElementSibling.classList.toggle("hidden");
        blockTitle[i].classList.toggle("block-collapsed") 
})
}

/// TASK COLLAPSE
const taskTitle = document.querySelectorAll(".task-title");
for(let i=0;i<taskTitle.length;i++){
    taskTitle[i].addEventListener('click', function(){
        taskTitle[i].nextElementSibling.classList.toggle("hidden"); 
})
}

/// PROGRESS BAR UPDATE
// 4 Targets per task
const progressBarFill = document.querySelector(".progress-bar-fill");

const checkboxes = document.querySelectorAll(".checkbox");
const progressStep = 100 / checkboxes.length;
progressBarFill.style.width = "1%";

function addProgress(){
    let currentProgress = progressBarFill.style.width;
    currentProgress = currentProgress.substring(0,currentProgress.length-1);
    currentProgress = parseInt(currentProgress);
    currentProgress += progressStep;
    if(currentProgress >= 100){
        progressBarFill.style.width = 100 + "%"    
    }
    if (currentProgress <= 0){
        progressBarFill.style.width = 1 + "%"   
    } else {
    progressBarFill.style.width = currentProgress + "%"
    }
};

function removeProgress(){
    let currentProgress = progressBarFill.style.width;
    currentProgress = currentProgress.substring(0,currentProgress.length-1);
    currentProgress = parseInt(currentProgress);
    currentProgress -= progressStep;
    if(currentProgress >= 95){
        progressBarFill.style.width = 100 + "%"    
    }
    if (currentProgress <= 0){
        progressBarFill.style.width = 1 + "%"   
    } else {
    progressBarFill.style.width = currentProgress + "%"
    }
}



for(let i=0;i<checkboxes.length;i++){
    checkboxes[i].addEventListener('change', function(event){
        if(event.target.checked){
            addProgress()
        } else {
            removeProgress()
        }
    })
};

//On load, show level 1 by default
levelChange(level1,level1Button);



/// FAQ LAYOVER SHOW AND HIDE
const closeButton = document.querySelector(".close-button");
const faqOverlay = document.querySelector(".faq-overlay");
const faqButton =  document.querySelector(".faq");
closeButton.addEventListener("click", function(){
    faqOverlay.classList.add("hidden");
});

faqButton.addEventListener("click", function(){
    faqOverlay.classList.remove("hidden")
});

faqOverlay.addEventListener("click", function(e){
    if (e.target === this){
        faqOverlay.classList.add("hidden");
    }
});



//////////// SLIDER
!(function(d){
    // Variables to target our base class,  get carousel items, count how many carousel items there are, set the slide to 0 (which is the number that tells us the frame we're on), and set motion to true which disables interactivity.
    var itemClassName = "carousel__photo";
        items = d.getElementsByClassName(itemClassName),
        totalItems = items.length,
        slide = 0,
        moving = true; 
  
    // To initialise the carousel we'll want to update the DOM with our own classes
    function setInitialClasses() {
  
      // Target the last, initial, and next items and give them the relevant class.
      // This assumes there are three or more items.
      items[totalItems - 1].classList.add("prev");
      items[0].classList.add("active");
      items[1].classList.add("next");
    }
  
    // Set click events to navigation buttons
  
    function setEventListeners() {
      var next = d.getElementsByClassName('carousel__button--next')[0],
          prev = d.getElementsByClassName('carousel__button--prev')[0];
  
      next.addEventListener('click', moveNext);
      prev.addEventListener('click', movePrev);
    }
  
    // Disable interaction by setting 'moving' to true for the same duration as our transition (0.5s = 500ms)
    function disableInteraction() {
      moving = true;
  
      setTimeout(function(){
        moving = false
      }, 500);
    }
  
    function moveCarouselTo(slide) {
  
      // Check if carousel is moving, if not, allow interaction
      if(!moving) {
  
        // temporarily disable interactivity
        disableInteraction();
  
        // Preemptively set variables for the current next and previous slide, as well as the potential next or previous slide.
        var newPrevious = slide - 1,
            newNext = slide + 1,
            oldPrevious = slide - 2,
            oldNext = slide + 2;
  
        // Test if carousel has more than three items
        if ((totalItems - 1) > 3) {
  
          // Checks if the new potential slide is out of bounds and sets slide numbers
          if (newPrevious <= 0) {
            oldPrevious = (totalItems - 1);
          } else if (newNext >= (totalItems - 1)){
            oldNext = 0;
          }
  
          // Check if current slide is at the beginning or end and sets slide numbers
          if (slide === 0) {
            newPrevious = (totalItems - 1);
            oldPrevious = (totalItems - 2);
            oldNext = (slide + 1);
          } else if (slide === (totalItems -1)) {
            newPrevious = (slide - 1);
            newNext = 0;
            oldNext = 1;
          }
  
          // Now we've worked out where we are and where we're going, by adding and removing classes, we'll be triggering the carousel's transitions.
  
          // Based on the current slide, reset to default classes.
          items[oldPrevious].className = itemClassName;
          items[oldNext].className = itemClassName;
  
          // Add the new classes
          items[newPrevious].className = itemClassName + " prev";
          items[slide].className = itemClassName + " active";
          items[newNext].className = itemClassName + " next";
        }
      }
    }
  
    // Next navigation handler
    function moveNext() {
  
      // Check if moving
      if (!moving) {
  
        // If it's the last slide, reset to 0, else +1
        if (slide === (totalItems - 1)) {
          slide = 0;
        } else {
          slide++;
        }
  
        // Move carousel to updated slide
        moveCarouselTo(slide);
      }
    }
  
    // Previous navigation handler
    function movePrev() {
  
      // Check if moving
      if (!moving) {
  
        // If it's the first slide, set as the last slide, else -1
        if (slide === 0) {
          slide = (totalItems - 1);
        } else {
          slide--;
        }
  
        // Move carousel to updated slide
        moveCarouselTo(slide);
      }
    }
  
    // Initialise carousel
    function initCarousel() {
      setInitialClasses();
      setEventListeners();
  
      // Set moving to false now that the carousel is ready
      moving = false;
    }
  
    // make it rain
    initCarousel();
  
  }(document));