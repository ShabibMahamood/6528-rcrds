import React from 'react';
import './App.css'; // Import CSS for styling

const Html = () => {
  return (
    <html>
      <body>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet"></link>

      </body>
    </html>
  )
}

// Navbar Component
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="Picsart_25-01-04_09-39-45-973.png" alt="EDM Records Logo" />
        <h1>6528 RCRDS</h1>
      </div>
      <ul className="navbar-links">
        <li><a href="#releases">Releases</a></li>
        <li><a href="#artists">Artists</a></li>
        <li><a href="#social-media">Social Media</a></li>
      </ul>
    </nav>
  );
};

// Hero Section Component
const Hero = () => {
  return (
    <header className="hero">
      <div className="container">
        <h2>Welcome to 6528 RCRDS</h2>
        <p>Discover the finest tracks and talented artists in the EDM scene.</p>
      </div>
    </header>
  );
};

// Releases Section Component
const Releases = () => {
  const releases = [
    { title: 'Distortion', artist: 'TRON!X 9', cover: 'public/distortion.jpg' },
    { title: 'Unity 2.0 [Not On This Label]', artist: 'The Walkers', cover: 'public/Unity20.jpg' },
    { title: 'PILLAGE', artist: 'TRON!X 9', cover: 'public/PILLAGE downloaded from SpotiSongDownloader.com_.jpg' },
    { title: 'Headlights', artist: 'SEBU & TRON!X 9', cover: 'public/Headlights downloaded from SpotiSongDownloader.com_.jpg' },
    { title: 'Infusion', artist: 'SEBU', cover: 'public/Infusion downloaded from SpotiSongDownloader.com_.jpg' },
    { title: 'Midnight Memories', artist: 'SEBU', cover: 'public/Midnight Memories downloaded from SpotiSongDownloader.com_.jpg' },
    { title: 'Stay Tonight', artist: 'SEBU', cover: 'public/Stay Tonight downloaded from SpotiSongDownloader.com_.jpg' },
    { title: 'Evacuation', artist: 'SEBU', cover: 'public/Evacuation downloaded from SpotiSongDownloader.com_.jpg' },
    { title: 'Voltage', artist: 'SEBU', cover: 'public/Voltage downloaded from SpotiSongDownloader.com_.jpg' },
    { title: 'Crazy Moves', artist: 'SEBU', cover: 'public/Crazy Moves downloaded from SpotiSongDownloader.com_.jpg' },
  ];

  return (
    <section id="releases" className="releases">
      <div className="container">
        <h3>Releases</h3>
        <div className="release-grid">
          {releases.map((release, index) => (
            <div className="release-card" key={index}>
              <img src={release.cover} alt={`${release.title} Cover`} />
              <h4>{release.title}</h4>
              <p>{release.artist}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Artists Section Component
const Artists = () => {
  const artists = [
    { name: 'TRON!X 9', image: 'public/ProfilePic.jpg' },
    { name: 'SEBU', image: 'public/SEBU.png' },
    { name: 'The Walkers', image: 'public/Thewalkers.jpg' },
  ];

  return (
    <section id="artists" className="artists">
      <div className="container">
        <h3>Artists</h3>
        <div className="artist-grid">
          {artists.map((artist, index) => (
            <div className="artist-card" key={index}>
              <img src={artist.image} alt={artist.name} />
              <h4>{artist.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Social Media Section Component
const SocialMedia = () => {
  return (
    <section id="social-media" className="social-media">
      <div className="container">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://open.spotify.com/user/we2sovnlv30j91ajr9k1whj0c?si=9ad9d4cccfae4c67"><img src="public/spotify-100.png"></img><i className="fab fa-spotify"></i></a>
          <a href="https://www.instagram.com/6528_rcrds/"><img src="public/instagram-logo-128.png"></img><i className="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/company/6528-rcrds"><img src="public/linkedin-100.png"></img><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
      <p>© 2025 SixFiveTwoEight Records | All Rights Reserved</p>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Releases />
      <Artists />
      <SocialMedia />
      <Footer />
    </div>
  );
};

export default App;
