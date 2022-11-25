// DRAW THE PIANO - START #####################################
piano = document.getElementById('piano');

// create div for all the keys
keys = document.createElement('div');
keys.classList.add('keys');

// create div for black and white keys
blackKeys = document.createElement('div');
blackKeys.classList.add('black-keys');

whiteKeys = document.createElement('div');
whiteKeys.classList.add('white-keys');

keys.appendChild(blackKeys);
keys.appendChild(whiteKeys);
piano.appendChild(keys);


displayBlackKeys();
function displayBlackKeys() {
    var output = '';
    for (var i = 0; i < 36; i++) {
        output += '<div class="key black-key"></div>'
    }
    document.querySelector('.black-keys').innerHTML = output;
}

displayWhiteKeys();
function displayWhiteKeys() {
    var output = '';
    for (var i = 0; i < 52; i++) {
        output += '<div class="key white-key"></div>'
    }
    document.querySelector('.white-keys').innerHTML = output;
}

// DRAW THE PIANO - END #######################################

const pianoKeys = document.querySelectorAll('.key');
// console.log(window.innerWidth)

const arr = [
    'A0-sharp',
    'C1-sharp', 'D1-sharp', 'F1-sharp', 'G1-sharp', 'A1-sharp',
    'C2-sharp', 'D2-sharp', 'F2-sharp', 'G2-sharp', 'A2-sharp',
    'C3-sharp', 'D3-sharp', 'F3-sharp', 'G3-sharp', 'A3-sharp',
    'C4-sharp', 'D4-sharp', 'F4-sharp', 'G4-sharp', 'A4-sharp',
    'C5-sharp', 'D5-sharp', 'F5-sharp', 'G5-sharp', 'A5-sharp',
    'C6-sharp', 'D6-sharp', 'F6-sharp', 'G6-sharp', 'A6-sharp',
    'C7-sharp', 'D7-sharp', 'F7-sharp', 'G7-sharp', 'A7-sharp',
    'A0', 'B0',
    'C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1',
    'C2', 'D2', 'E2', 'F2', 'G2', 'A2', 'B2',
    'C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3',
    'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4',
    'C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'B5',
    'C6', 'D6', 'E6', 'F6', 'G6', 'A6', 'B6',
    'C7', 'D7', 'E7', 'F7', 'G7', 'A7', 'B7',
    'C8']

// console.log(arr.length)


function playSound(newUrl) {
    new Audio(newUrl).play();
}

pianoKeys.forEach((pianoKey, i) => {
    pianoKey.addEventListener('click', () => {
        const newUrl = `sounds/${arr[i]}.ogg`
        console.log(arr[i]);
        playSound(newUrl);
    });
});

class Note {
    showNote() {
        return arr[Math.floor(Math.random() * arr.length)]
    }
}

let list = [];

for (var i = 0; i < 5; i++) {
    list.push(new Note().showNote());
}

console.log(list)

console.log(new Note().showNote())

// CHORDS - START #####
let chordC = ['C4', 'E4', 'G4'];
let chordG = ['G3', 'B4', 'D4'];
let chordAm = ['A3', 'C4', 'E4'];
let chordEm = ['E4', 'G4', 'B4'];
let chordF = ['F3', 'A3', 'C4'];

let chordAm7 = ['A3', 'C4', 'E4', 'G4'];
let chordF7 = ['F3', 'A3', 'C4', 'E4'];
let chordF6 = ['F3', 'A3', 'C4', 'D4', 'E4'];
let chordE = ['E4', 'G4-sharp', 'B4']
// CHORDS - END #####

playC = document.querySelector('.chordC');
playC.addEventListener('click', () => {
    chordC.map(chord => playSound(`sounds/${chord}.ogg`))
});

playG = document.querySelector('.chordG');
playG.addEventListener('click', () => {
    chordG.map(chord => playSound(`sounds/${chord}.ogg`))
});

playAm = document.querySelector('.chordAm');
playAm.addEventListener('click', () => {
    chordAm.map(chord => playSound(`sounds/${chord}.ogg`))
});

playEm = document.querySelector('.chordEm');
playEm.addEventListener('click', () => {
    chordEm.map(chord => playSound(`sounds/${chord}.ogg`))
});

playF = document.querySelector('.chordF');
playF.addEventListener('click', () => {
    chordF.map(chord => playSound(`sounds/${chord}.ogg`))
});

// playAm7 = document.querySelector('.chordAm7');
// playAm7.addEventListener('click', () => {
//     chordAm7.map(chord => playSound(`sounds/${chord}.ogg`))
// });

// playF6 = document.querySelector('.chordF6');
// playF6.addEventListener('click', () => {
//     chordF6.map(chord => playSound(`sounds/${chord}.ogg`))
// });

// playE = document.querySelector('.chordE');
// playE.addEventListener('click', () => {
//     chordE.map(chord => playSound(`sounds/${chord}.ogg`))
// });
