//
//Puzzle Storage
//
if (!gameProgress){
    let gameProgress = {
        puzzle1: false,
        puzzle2: false,
        puzzle3: false,
        puzzle4: false,
        puzzle5: false
    };
    
    // Save progress
    localStorage.setItem("progress", JSON.stringify(gameProgress));
    
    // Retrieve progress
    //let savedProgress = JSON.parse(localStorage.getItem("progress"));
    //console.log(savedProgress.puzzle1); // false
}