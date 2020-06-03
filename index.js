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

// Level Display Initial Animation
const levelsWrapper = document.querySelector(".level-animation");

window.addEventListener('load', function(){
    levelsWrapper.classList.toggle("level-animation-hidden");
    
})

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


/// Factory Function
const createCardObj = (cardTitle, imgUrl, author, platform, description, link) => {
    let imgId = cardTitle.replace(/\s/g , "_")+"imgId"+Math.floor(Math.random()*9999);
    return {
        cardTitle,
        imgId,
        imgUrl,
        author,
        platform,
        description,
        link
    }
}


//Create task card 
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
                                        <input type="checkbox" class="checkboxSquare">
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
                                        <input type="checkbox"  class="checkboxSquare">
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
                                        <input type="checkbox"  class="checkboxSquare">
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
                                        <input type="checkbox"  class="checkboxSquare">
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
        <a target="_blank" href="${obj.link}">
            <div class="btn-practice">
                <button class="basic-shadow"> 
                    <h3>Practice now</h3>
                </button>
            </div>
        </a>
`
document.querySelector(targetDiv).appendChild(task);
task.classList.add("task");
task.classList.add("basic-shadow");
document.getElementById(obj.imgId).style.backgroundImage = `url(${obj.imgUrl})`;

}

//CREATE LEARNING BLOCK
function createLearningBlock(title,levelNumber,level){
    let blockTitle = title;
    let blockId = title.replace(/\s/g,"-");
    let finalId = "A"+ levelNumber + "-" + blockId

    const learningBlock = document.createElement("div");
    
    learningBlock.innerHTML = `
        <div class="block-title block-collapsed">
        <img class="icon" src="./img/icons/layers.svg" alt="">
            <h2>${blockTitle}</h2>
        </div>
        <div class="tasks-container left-red hidden" id=${finalId}>
            <ul></ul>
        </div>
`
learningBlock.classList.add("learning-block");
level.classList.add("hidden");
level.appendChild(learningBlock)
}

//Display the learning blocks on the different levels
createLearningBlock("Songs block",1,level1);
createLearningBlock("Finger dexterity",1,level1);
createLearningBlock("Rythm foundations",1,level1);
createLearningBlock("Music theory in action",1,level1);
createLearningBlock("Hand coordination",1,level1);

createLearningBlock("Songs block",2,level2);
createLearningBlock("Finger dexterity",2,level2);
createLearningBlock("Rythm foundations",2,level2);
createLearningBlock("Music theory in action",2,level2);
createLearningBlock("Hand coordination",2,level2);

createLearningBlock("Songs block",3,level3);
createLearningBlock("Finger dexterity",3,level3);
createLearningBlock("Rythm foundations",3,level3);
createLearningBlock("Music theory in action",3,level3);
createLearningBlock("Hand coordination",3,level3);

createLearningBlock("Songs block",4,level4);
createLearningBlock("Finger dexterity",4,level4);
createLearningBlock("Rythm foundations",4,level4);
createLearningBlock("Music theory in action",4,level4);
createLearningBlock("Hand coordination",4,level4);


// / CREATE OBJECTS OF THE TASKS level1.songs2.jpg
// LEVEL 1
let level1Songs1 = createCardObj("1. Row Row", './img/task-bg/level1.songs1.jpg',  "Libertsy bellows.", "Youtube ","This is gosing the description", "https://www.youtube.com/watch?v=vz2veabxKrI&list=PLjGI9hR3JLcnBwLF7AYCLqeWyRGrnipf");
let level1Songs2 = createCardObj("2. Ode to Joy", './img/task-bg/level1.songs2.jpg',  "Libertsy bellows.", "Youtube ","Happines for sad moments.", "https://www.youtube.com/watch?v=vz2veabxKrI&list=PLjGI9hR3JLcnBwLF7AYCLqeWyRGrnipf");

let level1FingerDexterity1 = createCardObj("1. Row sRow", './img/task-bg/level1.fingerDexterity1.jpg',  "Libertsy bellows.", "Youtube ","This is gosing the description", "https://www.youtube.com/watch?v=vz2veabxKrI&list=PLjGI9hR3JLcnBwLF7AYCLqeWyRGrnipf");
let level1FingerDexterity2 = createCardObj("2. Row Rsdfow", './img/task-bg/level1.fingerDexterity2.jpg',  "Libertsy bellows.", "Youtube ","This is gosing the description", "https://www.youtube.com/watch?v=vz2veabxKrI&list=PLjGI9hR3JLcnBwLF7AYCLqeWyRGrnipf");

let level1RythmFoundations1 = createCardObj("2. Raow Row", './img/task-bg/level1.fingerDexterity2.jpg',  "Libertsy bellows.", "Youtube ","This is gosing the description", "https://www.youtube.com/watch?v=vz2veabxKrI&list=PLjGI9hR3JLcnBwLF7AYCLqeWyRGrnipf");
let level1RythmFoundations2 = createCardObj("2. Rasow Row", './img/task-bg/level1.fingerDexterity2.jpg',  "Libertsy bellows.", "Youtube ","This is gosing the description", "https://www.youtube.com/watch?v=vz2veabxKrI&list=PLjGI9hR3JLcnBwLF7AYCLqeWyRGrnipf");

let level1MusicTheory1 = createCardObj("1s. Row Rasdfow", './img/task-bg/level1.fingerDexterity2.jpg',  "Libertsy bellows.", "Youtube ","This is gosing the description", "https://www.youtube.com/watch?v=vz2veabxKrI&list=PLjGI9hR3JLcnBwLF7AYCLqeWyRGrnipf");
let level1MusicTheory2 = createCardObj("2. Roasdfw Row", './img/task-bg/level1.fingerDexterity2.jpg',  "Libertsy bellows.", "Youtube ","This is gosing the description", "https://www.youtube.com/watch?v=vz2veabxKrI&list=PLjGI9hR3JLcnBwLF7AYCLqeWyRGrnipf");

let level1HandCoordination1 = createCardObj("2. Roasdw Row", './img/task-bg/level1.fingerDexterity2.jpg',  "Libertsy bellows.", "Youtube ","This is gosing the description", "https://www.youtube.com/watch?v=vz2veabxKrI&list=PLjGI9hR3JLcnBwLF7AYCLqeWyRGrnipf");
let level1HandCoordination2 = createCardObj("2. Rasd    ow Row", './img/task-bg/level1.fingerDexterity2.jpg',  "Libertsy bellows.", "Youtube ","This is gosing the description", "https://www.youtube.com/watch?v=vz2veabxKrI&list=PLjGI9hR3JLcnBwLF7AYCLqeWyRGrnipf");
//  LEVEL 2

let level2Songs1 = createCardObj("1. Row Row", './img/task-bg/level1.songs1.jpg',  "Libertsy bellows.", "Youtube ","This is gosing the description", "https://www.youtube.com/watch?v=vz2veabxKrI&list=PLjGI9hR3JLcnBwLF7AYCLqeWyRGrnipf");
let level2Songs2 = createCardObj("2. Ode to Joy", './img/task-bg/level1.songs2.jpg',  "Libertsy bellows.", "Youtube ","Happines for sad moments.", "https://www.youtube.com/watch?v=vz2veabxKrI&list=PLjGI9hR3JLcnBwLF7AYCLqeWyRGrnipf");

let level2FingerDexterity1 = createCardObj("1. Row sRow", './img/task-bg/level1.fingerDexterity1.jpg',  "Libertsy bellows.", "Youtube ","This is gosing the description","");
let level2FingerDexterity2 = createCardObj("2. Row Rsdfow", './img/task-bg/level1.fingerDexterity2.jpg',  "Libertsy bellows.", "Youtube ","This is gosing the description","");

let level2RythmFoundations1 = createCardObj("2. Raow Row", './img/task-bg/level1.fingerDexterity2.jpg',  "Libertsy bellows.", "Youtube ","This is gosing the description","");
let level2RythmFoundations2 = createCardObj("2. Rasow Row", './img/task-bg/level1.fingerDexterity2.jpg',  "Libertsy bellows.", "Youtube ","This is gosing the description","");

let level2MusicTheory1 = createCardObj("1s. Row Rasdfow", './img/task-bg/level1.fingerDexterity2.jpg',  "Libertsy bellows.", "Youtube ","This is gosing the description","");
let level2MusicTheory2 = createCardObj("2. Roasdfw Row", './img/task-bg/level1.fingerDexterity2.jpg',  "Libertsy bellows.", "Youtube ","This is gosing the description","");

let level2HandCoordination1 = createCardObj("2. Roasdw Row", './img/task-bg/level1.fingerDexterity2.jpg',  "Libertsy bellows.", "Youtube ","This is gosing the description","");
let level2HandCoordination2 = createCardObj("2. Rasd    ow Row", './img/task-bg/level1.fingerDexterity2.jpg',  "Libertsy bellows.", "Youtube ","This is gosing the description","");



// Populate each level with the tasks
// LEVEL1
createCard(level1Songs1, "#A1-Songs-block > UL");
createCard(level1Songs2, "#A1-Songs-block > UL");

createCard(level1FingerDexterity1, "#A1-Finger-dexterity > UL");
createCard(level1FingerDexterity2, "#A1-Finger-dexterity > UL");

createCard(level1RythmFoundations1, "#A1-Rythm-foundations > UL");
createCard(level1RythmFoundations2, "#A1-Rythm-foundations > UL");

createCard(level1MusicTheory1, "#A1-Music-theory-in-action > UL"); 
createCard(level1MusicTheory2, "#A1-Music-theory-in-action > UL");

createCard(level1HandCoordination1, "#A1-Hand-coordination > UL");
createCard(level1HandCoordination2, "#A1-Hand-coordination > UL");


// LEVEL 2
createCard(level2Songs1, "#A2-Songs-block > UL");
createCard(level2Songs2, "#A2-Songs-block > UL");

createCard(level2FingerDexterity1, "#A2-Finger-dexterity > UL");
createCard(level2FingerDexterity2, "#A2-Finger-dexterity > UL");

createCard(level2RythmFoundations1, "#A2-Rythm-foundations > UL");
createCard(level2RythmFoundations2, "#A2-Rythm-foundations > UL");

createCard(level2MusicTheory1, "#A2-Music-theory-in-action > UL"); 
createCard(level2MusicTheory2, "#A2-Music-theory-in-action > UL");

createCard(level2HandCoordination1, "#A2-Hand-coordination > UL");
createCard(level2HandCoordination2, "#A2-Hand-coordination > UL");






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





/////// SAVE THE CHECKED BOXES INTO LOCALSTORAGE

setTimeout(saveCurrentProgress, 6000);

function saveCurrentProgress (){
    const checkboxes = document.querySelectorAll(".checkboxSquare");
    for(let i=0;i<checkboxes.length-1;i++){
        if(checkboxes[i].checked==true){
            console.log("BOOM", checkboxes[i]);
        }
    }
    checkboxes.checked = false;

    // console.log("BOOM", checkboxes[0].checked)
}