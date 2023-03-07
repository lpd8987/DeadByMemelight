function getRandomElement (targetArray)
{
    return targetArray[Math.floor(Math.random()*targetArray.length)];
}

function getRarityColor (rarity){
    switch(rarity){
        case "Event":
            return "rgb(255, 199, 0)";
        case "Ultra Rare (Red)":
            return "rgb(192, 0, 30)";
        case "Very Rare (Purple)":
            return "rgb(131, 27, 185)";
        case "Rare (Green)":
            return "rgb(0, 160, 2)";
        case "Uncommon (Yellow)":
            return "rgb(236, 239, 0)";
        case "Common (Brown)":
            return "rgb(130, 78, 19)";
    }
}

function getOfferingColor (offering){
    switch(offering){
        case "A Purple Offering":
            return "rgb(131, 27, 185)";
        case "A Green Offering": 
            return "rgb(0, 160, 2)";
        case "A Yellow Offering":
            return "rgb(236, 239, 0)";
        case "A Brown Offering":
        case "Vigo's Blueprint (Hatch in Main Building)":
        case "Annotated Blueprint (Hatch in Shack)":
            return "rgb(130, 78, 19)";

    }
}

export {getRandomElement, getRarityColor, getOfferingColor}