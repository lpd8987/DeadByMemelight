//Uses Fetch API to get data from JSON files and save them into local storage for use in other code
function fetchJSON(){
    let gameData, customData;

    const promise = async () =>{
        let gameDataResponse = await fetch("./data/game_data.json");
        let customDataResponse = await fetch("./data/custom_data.json");

        if(!gameDataResponse.ok){
            throw new Error("Problem Retrieving Game Data.");
        }

        if(!customDataResponse.ok){
            throw new Error("Problem Retrieving Custom Data.");
        }

        gameData = await gameDataResponse.json();
        localStorage.setItem("game_data", JSON.stringify(gameData));

        customData = await customDataResponse.json();
        localStorage.setItem("custom_data", JSON.stringify(customData));
    };

    promise().catch(e => {console.log(e.message)});
}

export { fetchJSON };
