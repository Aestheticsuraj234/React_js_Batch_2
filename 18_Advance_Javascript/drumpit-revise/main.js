let data = {
    'A': {
        name: 'Clap',
        sound: "sounds/clap.wav"
    },
    'S': {
        name: 'HiHat',
        sound: 'sounds/hihat.wav'
    },
    'D': {
        name: 'Kick',
        sound: 'sounds/kick.wav'
    },
    'F': {
        name: 'OpenHat',
        sound: 'sounds/openhat.wav'
    },
    'G': {
        name: 'Boom',
        sound: 'sounds/boom.wav'
    },
    'H': {
        name: 'Ride',
        sound: 'sounds/ride.wav'
    },
    'J': {
        name: 'Snare',
        sound: 'sounds/snare.wav'
    },
    'K': {
        name: 'Tom',
        sound: 'sounds/tom.wav'
    },
    'L': {
        name: 'Tink',
        sound: 'sounds/tink.wav'
    }
}

// Get the drumkit element from the DOM
let drumkit = document.getElementById("drumkit");


// make a function construct

function Construct() {
    for (let key in data) {
        let drumElement = document.createElement('div');
        drumElement.classList.add('element', data[key].name);

        let h2 = document.createElement('h2');
        h2.textContent = key;

        let span = document.createElement('span');
        span.textContent = data[key].name;

        drumElement.appendChild(h2);
        drumElement.appendChild(span);

        drumkit.appendChild(drumElement);

        drumElement.addEventListener("click", function (e) {

            let key = e.currentTarget.querySelector('h2').textContent;

            playDrum(key.toUpperCase());

        })
    }
}

// Play the sound of the drum

function playDrum(key) {
    if (data.hasOwnProperty(key)) {
        let drumElement = document.querySelector(`.element.${data[key].name}`)
        drumElement.classList.add('active');

        let audio = new Audio();
        audio.src = data[key].sound;
        audio.play();

          // Remove the active class from the drum element after the sound finishes playing
          audio.addEventListener('timeupdate', function () {
            if (audio.currentTime >= audio.duration / 32) {
                drumElement.classList.remove('active');
                audio.removeEventListener('timeupdate', arguments.callee);
            }
        });

        

    }
    else{
        console.log("Invalid Key");

        setTimeout(()=>{
            console.clear()
        },3000)
    }
}



document.addEventListener('keydown', function (e) {
    playDrum(e.key.toUpperCase())
})

Construct()


