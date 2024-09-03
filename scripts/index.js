const correctWeapon = {
    name: 'AK-47',
    team: 'T',
    cost: 2700,
    damage: 36,
    clipSize: 30
};
let counter = 0;

function makeGuess() {
    counter++;
    let weaponGuessed;
    const guessInput = document.getElementById('guessInput').value;

    createCategory();

    const data = {
        name: guessInput
    };
    // Fazendo uma requisição POST
    fetch("/getWeapon", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(data) 
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); 
        })
        .then(data => {
            verifyGuess(data);
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });

}

function verifyGuess(weaponGuessed) {

    const name = document.getElementById('categoryName' + counter.toString());

    name.textContent = weaponGuessed.Name;

    if (guessInput === correctWeapon.name) {
        win();
    }

    else {
        verifyTeam(weaponGuessed.Team, correctWeapon.team);
        verifyCost(weaponGuessed.Cost, correctWeapon.cost);
        verifyDamage(weaponGuessed.Damage, weaponGuessed.damage);
    }

    return;
}

function verifyTeam(teamGuess, teamCorrect) {

    const categoryTeam = document.getElementById('categoryTeam' + counter.toString());
    categoryTeam.textContent = teamGuess;
    if (teamGuess == teamCorrect) {
        categoryTeam.className = 'category correct'
    }
    else if (teamCorrect == "B" || teamGuess == 'B') {
        categoryTeam.className = 'category semicorrect'
    }
    else {
        categoryTeam.className = 'category incorrect'
    }
}

function verifyCost(costGuess, costCorrect) {
    let arrow;
    const categoryCost = document.getElementsByClassName('costValue' + counter.toString())[0];
    console.log(categoryCost);
    console.log('costValue' + counter.toString());
    categoryCost.textContent = costGuess;
    if (costGuess === costCorrect) {
        document.getElementById('categoryCost').className = 'category correct'
    }
    else {
        document.getElementById('categoryCost').className = 'category incorrect'
        if (costGuess < costCorrect) {
            arrow = document.getElementsByClassName(('arrow down' + counter.toString()))[0];
            arrow.style.visibility = "visible";

        }

        else {
            arrow = document.getElementsByClassName(('arrow up' + counter.toString()))[0];
            arrow.style.visibility = "visible";
        }
    }
}

function verifyDamage(damageGuess, damageCorrect) {
    let arrow;
    const categoryDamage = document.getElementById('damageValue' + counter.toString());

    categoryDamage.textContent = damageGuess;
    if (damageGuess === damageCorrect) {
        document.getElementById('categoryDamage').className = 'category correct'
    }
    else {
        document.getElementById('categoryDamage').className = 'category incorrect'
        if (damageGuess < damageCorrect) {
            arrow = document.getElementsByClassName('arrow down')[1];
            arrow.style.visibility = "visible";

        }

        else {
            arrow = document.getElementsByClassName('arrow up')[1];
            arrow.style.visibility = "visible";
        }
    }
}

function createCategory() {
    const newDiv = document.createElement('div');
    newDiv.className  = 'categories';
    const newDiv2 = document.createElement('div');
    newDiv2.className = 'category-wrapper';
    const newDiv3 = document.createElement('div');
    newDiv3.className = 'category-wrapper';
    const newDiv4 = document.createElement('div');
    newDiv4.className = 'category-wrapper';
    const newDiv5 = document.createElement('div');
    newDiv5.className = 'category-wrapper';
    const newDiv6 = document.createElement('div');
    newDiv6.className = 'category-wrapper';

    const category1 = document.createElement('div');
    category1.id = "categoryName" + counter.toString();
    category1.className = "category";

    const category2 = document.createElement('div');
    category2.id = "categoryTeam" + counter.toString();
    category2.className = "category";

    const category3 = document.createElement('div');
    category3.id = "categoryCost" + counter.toString();
    category3.className = "category";
    const details3 = document.createElement('div');
    details3.className = "costValue" + counter.toString();
    const arrowup3 = document.createElement('button');
    arrowup3.id = 'arrow up' + counter.toString();
    arrowup3.className = 'arrow up';
    arrowup3.textContent = '▲';
    const arrowdown3 = document.createElement('button');
    arrowdown3.id = 'arrow down' + counter.toString();
    arrowdown3.className = 'arrow down';
    arrowdown3.textContent = '▼';
    category3.appendChild(arrowup3);
    category3.appendChild(details3);
    category3.appendChild(arrowdown3);

    const category4 = document.createElement('div');
    category4.id = "categoryDamage" + counter.toString();
    category4.className = "category";
    const details4 = document.createElement('div');
    details4.className = "damageValue" + counter.toString();
    const arrowup4 = document.createElement('button');
    arrowup4.className = 'arrow up' + counter.toString();
    arrowup4.textContent = '▲';
    const arrowdown4 = document.createElement('button');
    arrowdown4.className = 'arrow down' + counter.toString();
    arrowdown4.textContent = '▼';
    category4.appendChild(arrowup4);
    category4.appendChild(details4);
    category4.appendChild(arrowdown4);

    const category5 = document.createElement('div');
    category5.id = "categoryClip" + counter.toString();
    category5.className = "category";
    const details5 = document.createElement('div');
    details5.className = "clipValue" + counter.toString();
    const arrowup5 = document.createElement('button');
    arrowup5.id = 'arrow up' + counter.toString();
    arrowup5.className = 'arrow up';
    arrowup5.textContent = '▲';
    const arrowdown5 = document.createElement('button');
    arrowdown5.id = 'arrow down' + counter.toString();
    arrowdown5.className = 'arrow down';
    arrowdown5.textContent = '▼';
    category5.appendChild(arrowup5);
    category5.appendChild(details5);
    category5.appendChild(arrowdown5);


    newDiv6.appendChild(category5);
    newDiv5.appendChild(category4);
    newDiv4.appendChild(category3);
    newDiv3.appendChild(category2);
    newDiv2.appendChild(category1);

    newDiv.appendChild(newDiv2);
    newDiv.appendChild(newDiv3);
    newDiv.appendChild(newDiv4);
    newDiv.appendChild(newDiv5);
    newDiv.appendChild(newDiv6);


    document.body.appendChild(newDiv);
    console.log("criei")
    return;
}