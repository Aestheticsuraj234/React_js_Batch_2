// Defining Types Of Drum Elements Available
var data = {
    'A': {
        name: 'Clap',
        sound: 'sounds/clap.wav',
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
};

// Get the drumkit element from the DOM
var drumkit = document.getElementById("drumkit");

// Create HTML elements for each drum element and add them to the DOM
function construct() {
    for (var key in data) {
        console.log(key)
        var drumElement = document.createElement('div');
        drumElement.classList.add('element', data[key].name);
        var h2 = document.createElement('h2');
        h2.textContent = key;

        var span = document.createElement('span');
        span.textContent = data[key].name;

        drumElement.appendChild(h2);
        drumElement.append(span);
        drumkit.appendChild(drumElement);

        // Play the sound corresponding to the clicked drum element
        drumElement.addEventListener('click', function (event) {
            var key = event.currentTarget.querySelector('h2').textContent;
            playDrum(key.toUpperCase());
        });
    }
}

// Play the sound corresponding to the pressed key
function playDrum(key) {
    if (data.hasOwnProperty(key)) {
        var drumElement = document.querySelector('.element.' + data[key].name);
        drumElement.classList.add('active');
        var audio = new Audio();
        audio.src = data[key].sound;
        audio.play();

        // Remove the active class from the drum element after the sound finishes playing
        audio.addEventListener('timeupdate', function () {
            if (audio.currentTime >= audio.duration / 32) {
                drumElement.classList.remove('active');
                audio.removeEventListener('timeupdate', arguments.callee);
            }
        });
    } else {
        // Show an error message in the console for invalid keys
        console.log(
            "OOPS!\nIt looks like you've pressed a key that isn't defined.\nCould you please try again with a valid key?\nThank you!"
        );
        // Clear the console after 2.5 seconds
        setTimeout(function () {
            console.clear();
        }, 10000);
    }
}

// Handle key press events
function keyEvents(event) {
    playDrum(event.key.toUpperCase());
}

// Listen for any key press events and call keyEvents function to handle the key press
window.addEventListener('keydown', keyEvents);

// Add drum elements to the drumkit
construct();
