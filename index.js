const wrapper2 = document.querySelector(".wrapper2");
//Create task card
// 
let cardTitle = "2. Ode to Joy";
let imgId = cardTitle.replace(/\s/g , "_")+"imgId";
let imgUrl = './img/task-bg/level1.1.2.jpeg';
let targetDiv = wrapper2;
let author = "Liberty bellows."
let platform = "Youtube "
let description = "Practice slowly. Start with the right hand very slowly and make sure you move steadily your way up. Move on to the next exercise before 8 minutes even though you might need more sessions to improve your BPM."
createCard(cardTitle, imgId, author, imgUrl);
createCard("2", '2imgID', 'Mr POLLAS',  imgUrl, targetDiv);

function createCard(cardTitle, imgId, author, imgUrl){
const task = document.createElement("div");
task.innerHTML = `
    <li class="task basic-shadow">
    <div class="inline-please task-title ">
        <img class="icon" src="./img/icons/chevrons-right.svg" alt="">
        <h3>${cardTitle}</h3>
    </div>
    <div class="info-card">
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
    </li>
`

wrapper2.appendChild(task);
document.getElementById(imgId).style.backgroundImage = `url(${imgUrl})`;

}


















////////////// BLOCK COLLAPSE  
const blockTitle = document.querySelectorAll(".block-title")

for(let i=0;i<blockTitle.length;i++){
    blockTitle[i].addEventListener('click', function(){
        blockTitle[i].nextElementSibling.classList.toggle("hidden");
        blockTitle[i].classList.toggle("block-collapsed") 
})
}



/// PROGRESS BAR UPDATE
// 4 Targets per task
const progressBarFill = document.querySelector(".progress-bar-fill");
// progressBarFill.style.width = "22%"