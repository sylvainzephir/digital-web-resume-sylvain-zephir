function createGraffiti() {
    const colors = ["red", "blue", "green", "yellow", "purple"];
    const graffiti = document.createElement("div");
    graffiti.classList.add("graffiti");
    graffiti.style.backgroundColor = colors[getRandomInt(0, colors.length - 1)];
    graffiti.style.left = `${getRandomInt(0, window.innerWidth)}px`;
    graffiti.style.animationDuration = `${getRandomInt(8, 15)}s`; // Adjusted duration range
    document.querySelector(".container").appendChild(graffiti);

    // Adjust timeout to remove the graffiti after its animation completes
    setTimeout(() => {
        graffiti.remove();
    }, 15000); // Ensure this matches the max duration
}

// Generate graffiti periodically, but consider increasing this interval
setInterval(createGraffiti, 200); // Adjust to 200ms or more to reduce the number of elements


document.getElementById('open-popup').onclick = function() {
    document.getElementById('popup').style.display = 'block';
};

document.getElementById('close-popup').onclick = function() {
    document.getElementById('popup').style.display = 'none';
};

// Close the popup if the user clicks anywhere outside of the image
window.onclick = function(event) {
    const popup = document.getElementById('popup');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
};


// Smooth scrolling effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('nav a');

    navItems.forEach((item, index) => {
        item.style.opacity = 0; // Start with opacity 0
        item.style.transition = `opacity 0.5s ease ${index * 0.1}s`; // Staggered delay
        setTimeout(() => {
            item.style.opacity = 1; // Fade in
        }, 100); // Small delay before starting the fade-in
    });
});

function changeAvatar(section) {
    const avatar = document.getElementById('avatar');
    if (section === 'intro') {
        avatar.src = 'Sylvain-face.jpg'; // Set the avatar image for "Intro"
    } else if (section === 'experience') {
        avatar.src = 'Sylvain-experience.jpg'; // Set the avatar image for "Experience"
    }
}



document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');
    const restartButton = document.getElementById('restart');
    const audioTime = document.getElementById('audioTime');

    // Play button
    playButton.addEventListener('click', () => {
        audio.play();
        playButton.style.display = 'none';  // Hide play button
        pauseButton.style.display = 'inline-flex';  // Show pause button
    });

    // Pause button
    pauseButton.addEventListener('click', () => {
        audio.pause();
        pauseButton.style.display = 'none';  // Hide pause button
        playButton.style.display = 'inline-flex';  // Show play button
    });

    // Restart button
    restartButton.addEventListener('click', () => {
        audio.currentTime = 0;
        if (audio.paused) {
            playButton.style.display = 'inline-flex';
            pauseButton.style.display = 'none';
        }
    });

    // Update time display as audio plays
    audio.addEventListener('timeupdate', () => {
        audioTime.textContent = formatTime(audio.currentTime);
    });

    // Helper function to format time in MM:SS
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
        return `${minutes}:${secs}`;
    }
});
