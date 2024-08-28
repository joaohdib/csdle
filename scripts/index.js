const correctWeapon = {
    name: 'ak-47',
    team: 'T',
    cost: 2700,
    damage: 36,
    clipSize: 30
};


function makeGuess() {
    let weaponGuessed;
    const guessInput = document.getElementById('guessInput').value;

    const data = {
        name: guessInput
    };
    // Fazendo uma requisição POST
    fetch("/getWeapon", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Define o tipo de conteúdo
        },
        body: JSON.stringify(data) // Converte os dados para JSON
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Converte a resposta para JSON
        })
        .then(data => {
            console.log('Data received:', data); // Manipula os dados recebidos
            verifyGuess(data);
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });

    /*const guessedCorrectly = {
        name: guessInput === correctGame.name,
        platform: guessInput === correctGame.platform,
        year: guessInput === correctGame.year,
        genre: guessInput === correctGame.genre,
        theme: guessInput === correctGame.theme,
        perspective: guessInput === correctGame.perspective,
    };

    document.getElementById('categoryName').className = guessedCorrectly.name ? 'category correct' : 'category incorrect';
    document.getElementById('categoryTeam').className = guessedCorrectly.platform ? 'category correct' : 'category incorrect';
    document.getElementById('categoryYear').className = guessedCorrectly.year ? 'category correct' : 'category incorrect';
    document.getElementById('categoryGenre').className = guessedCorrectly.genre ? 'category correct' : 'category incorrect';
    document.getElementById('categoryTheme').className = guessedCorrectly.theme ? 'category correct' : 'category incorrect';
    document.getElementById('categoryPerspective').className = guessedCorrectly.perspective ? 'category correct' : 'category incorrect';*/

}

function verifyGuess(weaponGuessed) {
    console.log(weaponGuessed.Team);
    console.log(correctWeapon.team);


    if (guessInput === correctWeapon.name) {
        win();
    }

    else {
        verifyTeam(weaponGuessed.Team, correctWeapon.team);
    }
}

function verifyTeam(teamGuess, teamCorrect) {
    if (teamGuess == teamCorrect) {
        document.getElementById('categoryTeam').className = 'category correct'
    }
    else if (teamCorrect== "B" || teamGuess == 'B') {
        document.getElementById('categoryTeam').className = 'category semicorrect'
    }
    else {
        document.getElementById('categoryTeam').className = 'category incorrect'
    }
}