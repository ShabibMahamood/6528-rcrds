// Initialize Particles.js
document.addEventListener('DOMContentLoaded', function() {
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#00f0ff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#00f0ff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  }

  // Audio Visualizer
  createVisualizer();

  // Countdown Timer
  setupCountdown();

  // Load data
  loadReleases();
  loadArtists();

  // Initialize ScrollReveal
  ScrollReveal().reveal('.section', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 100,
    easing: 'ease-out',
    reset: true
  });

  ScrollReveal().reveal('.holographic', {
    delay: 200,
    interval: 100
  });
});

// Toggle Navigation
function toggleNav() {
  const navLinks = document.getElementById('nav-links');
  const hamburger = document.querySelector('.hamburger');
  
  navLinks.classList.toggle('active');
  
  if (navLinks.classList.contains('active')) {
    hamburger.style.transform = 'rotate(90deg)';
  } else {
    hamburger.style.transform = 'rotate(0deg)';
  }
}

// Toggle Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle('dark');
  
  // Save preference to localStorage
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('darkMode', isDark);
}

// Check for saved dark mode preference
function checkDarkMode() {
  const darkMode = localStorage.getItem('darkMode') === 'true';
  if (darkMode) {
    document.body.classList.add('dark');
  }
}

// Audio Visualizer
function createVisualizer() {
  const visualizer = document.getElementById('visualizer');
  
  // Create bars for the visualizer
  for (let i = 0; i < 50; i++) {
    const bar = document.createElement('div');
    bar.className = 'visualizer-bar';
    bar.style.animationDelay = `${i * 0.05}s`;
    visualizer.appendChild(bar);
  }
  
  // This would be connected to actual audio in a real implementation
  // For demo purposes, we're just using CSS animations
}

// Countdown Timer
function setupCountdown() {
  // Set the date we're counting down to (next month's 25th)
  const countDownDate = new Date();
  countDownDate.setMonth(countDownDate.getMonth() + 1);
  countDownDate.setDate(25);
  countDownDate.setHours(22, 0, 0, 0);

  // Update the countdown every 1 second
  const x = setInterval(function() {
    // Get today's date and time
    const now = new Date().getTime();
    
    // Find the distance between now and the countdown date
    const distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    
    // If the countdown is finished, clear interval
    if (distance < 0) {
      clearInterval(x);
      document.getElementById('days').textContent = '00';
      document.getElementById('hours').textContent = '00';
      document.getElementById('minutes').textContent = '00';
      document.getElementById('seconds').textContent = '00';
    }
  }, 1000);
}

// Load Releases
function loadReleases() {
  fetch('releases.json')
    .then(res => res.json())
    .then(releases => {
      const container = document.getElementById('release-list');
      releases.forEach(release => {
        const el = document.createElement('div');
        el.className = 'release holographic';
        el.innerHTML = `
          <div class="release-art">
            <img src="${release.cover}" alt="${release.title}" />
            ${new Date(release.date) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) ? '<div class="release-badge">NEW</div>' : ''}
          </div>
          <div class="release-info">
            <h3>${release.title}</h3>
            <div class="release-meta">
              <span class="release-date">${formatDate(release.date)}</span>
              <span class="release-bpm">${release.bpm}</span>
              <span class="release-genre">${release.genre}</span>
            </div>
            <div class="player">
              <iframe style="border-radius:12px" src="${release.embed}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <div class="release-actions">
              <a href="${release.link}" target="_blank" class="btn">STREAM</a>
              <a href="#" class="btn btn-outline">MORE INFO</a>
            </div>
          </div>
        `;
        container.appendChild(el);
      });
    })
    .catch(err => console.error('Error loading releases:', err));
}

// Load Artists
function loadArtists() {
  fetch('artists.json')
    .then(res => res.json())
    .then(artists => {
      const container = document.getElementById('artist-list');
      artists.forEach(artist => {
        const el = document.createElement('div');
        el.className = 'artist holographic';
        el.innerHTML = `
          <img src="${artist.photo}" alt="${artist.name}" />
          <h3>${artist.name}</h3>
          <p>${artist.bio}</p>
          <div class="social">
            ${artist.links.map(link => `
              <a href="${link.url}" target="_blank" class="social-icon">
                <span>${link.name}</span>
              </a>
            `).join('')}
          </div>
          <a class="btn" href="${artist.music}" target="_blank">MUSIC</a>
        `;
        container.appendChild(el);
      });
    })
    .catch(err => console.error('Error loading artists:', err));
}

// Format date as "MMM DD, YYYY"
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

// Check dark mode preference on load
checkDarkMode();
