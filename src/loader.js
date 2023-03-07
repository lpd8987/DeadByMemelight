//import statements
import {fetchJSON} from "./fetch.js";
import {getRandomElement, getRarityColor, getOfferingColor} from "./helper.js"


//variables
let gameData = JSON.parse(localStorage.getItem("game_data"));
let customData = JSON.parse(localStorage.getItem("custom_data"));

//Gets data from the JSON files - only fetches data if it is not already in local storage
if(!gameData || !customData){
    fetchJSON();
}

//Query selectors
//Radio Buttons
let killerRb = document.querySelector("#killer_rb");
let survivorRb = document.querySelector("#survivor_rb");

//divs
let killerDiv = document.querySelector("#killer_build");
killerDiv.style.display = "none";

let survivorDiv = document.querySelector("#survivor_build");
survivorDiv.style.display = "none";

let randomKiller = document.querySelector("#random_killer");
randomKiller.style.display = "none";

let randomSurvivor = document.querySelector("#random_survivor");
randomSurvivor.style.display = "none";

//buttons
let kAddOnsBtn = document.querySelector("#k_add_ons_btn");
let kOfferingBtn = document.querySelector("#k_offering_btn");
let kBuildBtn = document.querySelector("#k_build_btn");
let kEntityBtn = document.querySelector("#k_entity_btn");
let kSaboBtn = document.querySelector("#k_sabo_btn");

let sItemBtn = document.querySelector("#s_item_btn");
let sOfferingBtn = document.querySelector("#s_offering_btn");
let sBuildBtn = document.querySelector("#s_build_btn");
let sEntityBtn = document.querySelector("#s_entity_btn");
let sSaboBtn = document.querySelector("#s_sabo_btn");

let resetBtn = document.querySelector("#reset_btn");

//Content
let kAddOnTarget = document.querySelector("#k_add_on_target");
let kOfferingTarget = document.querySelector("#k_offering_target");
let k_build_title = document.querySelector("#k_build_title");
let k_build_description = document.querySelector("#k_build_description");
let k_sabo_title = document.querySelector("#k_sabo_title");
let k_sabo_description = document.querySelector("#k_sabo_description");

let sItemTarget = document.querySelector("#s_item_target");
let sOfferingTarget = document.querySelector("#s_offering_target");
let s_build_title = document.querySelector("#s_build_title");
let s_build_description = document.querySelector("#s_build_description");
let s_sabo_title = document.querySelector("#s_sabo_title");
let s_sabo_description = document.querySelector("#s_sabo_description");

let kName = document.querySelector("#k_name");
let kPerks = document.querySelector("#k_perks");

let sName = document.querySelector("#s_name");
let sPerks = document.querySelector("#s_perks");

//Images
let kPortrait = document.querySelector("#k_portrait");
let sPortrait = document.querySelector("#s_portrait");

//event listeners
killerRb.addEventListener("change", displayDivs);
survivorRb.addEventListener("change", displayDivs);

kAddOnsBtn.addEventListener("click", generateKillerAddOns);
sItemBtn.addEventListener("click", generateSurvivorItems);

kOfferingBtn.addEventListener("click", generateKOffering);
sOfferingBtn.addEventListener("click", generateSOffering);

kBuildBtn.addEventListener("click", generateGeneralKillerBuild);
sBuildBtn.addEventListener("click", generateGeneralSurvivorBuild);

kEntityBtn.addEventListener("click", generateEntityKillerBuild);
sEntityBtn.addEventListener("click", generateEntitySurvivorBuild);

kSaboBtn.addEventListener("click", generateKSabotage);
sSaboBtn.addEventListener("click", generateSSabotage);

resetBtn.addEventListener("click", resetLocalStorage);

//when one of the radio buttons is checked, disable and clear the other one
function displayDivs()
{
    if(killerRb.checked) {
        killerDiv.style.display = "block";
        sItemTarget.innerHTML = "";
        sOfferingTarget.innerHTML = "";
        s_build_title.innerHTML = "";
        s_build_description.innerHTML = "";
        s_sabo_title.innerHTML = "";
        s_sabo_description.innerHTML = "";

        s_build_title.innerHTML = "";
        s_build_description.innerHTML = "";
        s_sabo_title.innerHTML = "";
        s_sabo_description.innerHTML = "";
    }
    else{
        killerDiv.style.display = "none";
    }

    if(survivorRb.checked) {
        survivorDiv.style.display = "block";
        kAddOnTarget.innerHTML = "";
        kOfferingTarget.innerHTML = "";
        k_build_title.innerHTML = "";
        k_build_description.innerHTML = "";
        k_sabo_title.innerHTML = "";
        k_sabo_description.innerHTML = "";

        k_build_title.innerHTML = "";
        k_build_description.innerHTML = "";
        k_sabo_title.innerHTML = "";
        k_sabo_description.innerHTML = "";
    } 
    else{
        survivorDiv.style.display = "none";    
    }
}

function generateKillerAddOns(){
    let addOnA = getRandomElement(gameData.add_on_rarities);
    let colorA = getRarityColor(addOnA);
    let spanA = `<span style="color:${colorA}"><strong>${addOnA}</strong></span>`

    let addOnB = getRandomElement(gameData.add_on_rarities);
    let colorB = getRarityColor(addOnB);
    let spanB = `<span style="color:${colorB}"><strong>${addOnB}</strong></span>`

    kAddOnTarget.innerHTML = `A(n) ${spanA} add-on and a(n) ${spanB} add-on`
}

function generateSurvivorItems(){
    let item = getRandomElement(gameData.item_rarities);
    let itemColor = getRarityColor(item);
    let itemSpan = `<span style="color:${itemColor}"><strong>${item}</strong></span>`

    let addOnA = getRandomElement(gameData.add_on_rarities);
    let colorA = getRarityColor(addOnA);
    let spanA = `<span style="color:${colorA}"><strong>${addOnA}</strong></span>`

    let addOnB = getRandomElement(gameData.add_on_rarities);
    let colorB = getRarityColor(addOnB);
    let spanB = `<span style="color:${colorB}"><strong>${addOnB}</strong></span>`

    sItemTarget.innerHTML = `A(n) ${itemSpan} item with ${spanA} and ${spanB} add-ons`
}

function generateKOffering(){
    let offering = getRandomElement(gameData.offerings);
    let color = getOfferingColor(offering);
    let span = `<span style="color:${color}"><strong>${offering}</strong></span>`

    kOfferingTarget.innerHTML = `You offer ${span} to the Entity.`
}

function generateSOffering(){
    let offering = getRandomElement(gameData.offerings);
    let color = getOfferingColor(offering);
    let span = `<span style="color:${color}"><strong>${offering}</strong></span>`

    sOfferingTarget.innerHTML = `You offer ${span} to the Entity.`
}

function generateGeneralKillerBuild(){
    let build = getRandomElement(customData.killer_builds);
    k_build_title.innerHTML = build.name;
    k_build_description.innerHTML = build.description;
}

function generateGeneralSurvivorBuild(){
    let build = getRandomElement(customData.survivor_builds);
    s_build_title.innerHTML = build.name;
    s_build_description.innerHTML = build.description;
}

function generateEntityKillerBuild(){
    let build = getRandomElement(customData.entity_killer_builds);
    k_build_title.innerHTML = build.name;
    k_build_description.innerHTML = build.description;

    if(build.name === "Entity's Choice: Adept")
    {
        randomKiller.style.display = "block";
        let killer = getRandomElement(gameData.killers);
        kName.innerHTML = killer.name;
        kPortrait.src = killer.portrait;
        kPerks.innerHTML = `${killer.perks[0]} + ${killer.perks[1]} + ${killer.perks[2]}`;
    }
    else{
        randomKiller.style.display = "none";
    }
}

function generateEntitySurvivorBuild(){
    let build = getRandomElement(customData.entity_survivor_builds);
    s_build_title.innerHTML = build.name;
    s_build_description.innerHTML = build.description;

    if(build.name === "Build: Adept")
    {
        randomSurvivor.style.display = "block";
        let survivor = getRandomElement(gameData.survivors);
        sName.innerHTML = survivor.name;
        sPortrait.src = survivor.portrait;
        sPerks.innerHTML = `${survivor.perks[0]} + ${survivor.perks[1]} + ${survivor.perks[2]}`;
    }
    else{
        randomSurvivor.style.display = "none";
    }
}

function generateKSabotage(){
    let sabo = getRandomElement(customData.killer_sabo_cards);
    k_sabo_title.innerHTML = sabo.name;
    k_sabo_description.innerHTML = sabo.description;
}

function generateSSabotage(){
    let sabo = getRandomElement(customData.survivor_sabo_cards);
    s_sabo_title.innerHTML = sabo.name;
    s_sabo_description.innerHTML = sabo.description;
}

function resetLocalStorage(){
    localStorage.clear();
    console.log("Storage Cleared. Re-commencing data retrieval.")
    fetchJSON();
}