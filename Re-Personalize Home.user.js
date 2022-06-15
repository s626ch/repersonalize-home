// ==UserScript==
// @name         Re-Personalize Home
// @namespace    https://github.com/smolyoshino/repersonalize-home
// @version      0.1.1
// @description  reversing the dumbest change to happen to this website
// @author       smolyoshino
// @match        https://www.roblox.com/home
// @grant        none
// ==/UserScript==

// setup wait function using async/await syntax - https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line
const delay = ms => new Promise(res => setTimeout(res, ms));

const createElm = (html) => {
    const temp = document.createElement('div');
    temp.innerHTML = html;
    return temp.removeChild(temp.firstElementChild);
}

// controllable loop
window.onload = function(){
let dummyVar = true;
const getAvatar = async () => {
    let avatarSrc;
    let welcomeHome;
    let rbxHeader;
    let rbxHome;
    let usrAvatar;
    let displayName;
    let usersName;
    while (dummyVar == true) {
        usrAvatar = document.querySelector("#right-navigation-header > div.navbar-right.rbx-navbar-right > ul > div > a > span.avatar.avatar-headshot-xs > span > img");
        rbxHeader = document.querySelector("#HomeContainer > div.section > div");
        rbxHome = document.querySelector("#HomeContainer > div.section > div > h1");
        displayName = document.querySelector("#navigation > ul > li:nth-child(1) > a > div");
        //if(dummyVar2 == true){
            if (usrAvatar !== null){
                // console.log(usrAvatar.src);
                avatarSrc = usrAvatar.src;
                avatarSrc = avatarSrc.replace("/150/150/", "/720/720/");
                //if(avatarSrc !== null){dummyVar2=false};
                if (rbxHeader !== null && rbxHome !== null && displayName !== null) {
                    rbxHeader.style.marginBottom = "20px";
                    rbxHome.style.marginBottom = "16px"
                    usersName = displayName.innerText;
                    welcomeHome = createElm(`
                        <div style="display:flex;flex-direction:row;align-items:center;">
                            <div class="avatar-container">
                            <a href="`+document.getElementById("nav-profile").getAttribute("href")+`">
                                <img src='`+avatarSrc+`' style="border-radius: 100%; border-image-width:1; border-image-size: initial; border-image-source:none;border: 0px solid white; width:150px; margin-left: 2px;"/>
                            </a>
                            </div>
                            <a href="`+document.getElementById("nav-profile").getAttribute("href")+`">
                                <h1 style="margin-left: 84px;">Welcome home,<br/>`+usersName+`!</h1>
                            </a>
                        </div>
                    `);
                    await delay(1000);
                    rbxHeader.appendChild(welcomeHome);
                    dummyVar = false;
                };
            };
        //};
        await delay(20);
    };
};
getAvatar();
};
