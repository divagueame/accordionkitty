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

function animateBottomLogos(){
    const bottomLogos = document.childNodes("bottom-logos");
    console.log("BOM", bottomLogos)
};

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
let cardTitle = "2. Ode to Joy";
let imgId = cardTitle.replace(/\s/g , "_")+"imgId";
let imgUrl = './img/task-bg/level1.1.2.jpeg';
let author = "Liberty bellows."
let platform = "Youtube "
let description = "Practice slowly. Start with the right hand very slowly and make sure you move steadily your way up. Move on to the next exercise before 8 minutes even though you might need more sessions to improve your BPM."


function createCard(cardTitle, imgId, author, imgUrl, targetDiv){
const task = document.createElement("li");
task.innerHTML = `
        <div class="inline-please task-title ">
            <img class="icon" src="./img/icons/chevrons-right.svg" alt="">
            <h3>${cardTitle}</h3>
        </div>
        <div class="info-card hidden">
            <div class="task-bg-container">
                <div class="task-bg" id=${imgId}></div>
            </div>
            <div class="info-card-content-container">
                <div class="info-card-content">
                    <div class="inline-please"><img class="icon" src="./img/icons/info.svg" alt="">
                    <p>Author: ${author}</p>
                    </div>
                    <p>Platform: ${platform}</p>
                    <p class="task-description">Description: ${description}</p>
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
targetDiv.appendChild(task);
// {/* <li class="task basic-shadow"></li> */}
task.classList.add("task");
task.classList.add("basic-shadow");
document.getElementById(imgId).style.backgroundImage = `url(${imgUrl})`;

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

createLearningBlock("Hand coordination",level2);
createLearningBlock("Hand coordination",level2);

// Populate each level with the tasks
createCard(cardTitle, imgId, author, imgUrl, document.querySelector("#Songs-block > UL"));
createCard(cardTitle, imgId, author, imgUrl, document.querySelector("#Finger-dexterity > UL"));
createCard(cardTitle, imgId, author, imgUrl, document.querySelector("#Finger-dexterity > UL"));
createCard(cardTitle, imgId, author, imgUrl, document.querySelector("#Finger-dexterity > UL"));
createCard(cardTitle, imgId, author, imgUrl, document.querySelector("#Hand-coordination > UL"));












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