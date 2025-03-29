updateUI();



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


function resetGame() {
    localStorage.clear();
    location.reload(); // Refreshes the page
}

function updateUI() {
    // Retrieve progress from localStorage or initialize if empty
    let savedProgress = JSON.parse(localStorage.getItem("progress")) || {
        puzzle1: false,
        puzzle2: false,
        puzzle3: false,
        puzzle4: false,
        puzzle5: false
    };

    // Update the text based on progress
    document.getElementById("puzzle1-status").textContent = 
        `Puzzle 1: ${savedProgress.puzzle1 ? "Completed" : "Not Completed"}`;

    document.getElementById("puzzle2-status").textContent = 
        `Puzzle 2: ${savedProgress.puzzle2 ? "Completed" : "Not Completed"}`;
    
    document.getElementById("puzzle3-status").textContent = 
        `Puzzle 3: ${savedProgress.puzzle3 ? "Completed" : "Not Completed"}`;

    document.getElementById("puzzle4-status").textContent = 
        `Puzzle 4: ${savedProgress.puzzle4 ? "Completed" : "Not Completed"}`;

    document.getElementById("puzzle5-status").textContent = 
        `Puzzle 5: ${savedProgress.puzzle5 ? "Completed" : "Not Completed"}`;
}

function completePuzzle(puzzleKey) {
    // Retrieve current progress or initialize if empty
    let gameProgress = JSON.parse(localStorage.getItem("progress")) || {
        puzzle1: false,
        puzzle2: false,
        puzzle3: false,
        puzzle4: false,
        puzzle5: false
    };

    // Update the puzzle status
    gameProgress[puzzleKey] = true;

    // Save back to localStorage
    localStorage.setItem("progress", JSON.stringify(gameProgress));

    console.log(`${puzzleKey} completed!`);
    updateUI()
}

