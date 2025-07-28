import React, { useState } from 'react';
import { Play, Pause, ExternalLink, Instagram, Music, Linkedin } from 'lucide-react';

// Data configuration - easily editable
const SITE_CONFIG = {
  label: {
    name: "6528 RCRDS",
    tagline: "Discover the finest tracks and talented artists in the EDM scene.",
    logo: "Picsart_25-01-04_09-39-45-973.png"
  },
  social: {
    spotify: "https://open.spotify.com/user/we2sovnlv30j91ajr9k1whj0c?si=9ad9d4cccfae4c67",
    instagram: "https://www.instagram.com/6528_rcrds/",
    linkedin: "https://www.linkedin.com/company/6528-rcrds"
  }
};

const RELEASES_DATA = [
  { id: 1, title: 'E30', artist: 'TRON!X 9', cover: 'E30.jpg', genre: 'EDM', year: '2024' },
  { id: 2, title: 'Mirage', artist: 'TRON!X 9, ZAROX', cover: 'Mirage.jpg', genre: 'Progressive House', year: '2024' },
  { id: 3, title: 'Fade', artist: 'TRON!X 9', cover: 'Fade.avif', genre: 'Melodic Dubstep', year: '2024' },
  { id: 4, title: 'Distortion', artist: 'TRON!X 9', cover: 'Distortion.jpg', genre: 'Bass House', year: '2024' },
  { id: 5, title: 'Unity 2.0', artist: 'The Walkers', cover: 'Unity20.jpg', genre: 'Future Bass', year: '2024', note: 'Not On This Label' },
  { id: 6, title: 'PILLAGE', artist: 'TRON!X 9', cover: 'PILLAGE.jpg', genre: 'Hardstyle', year: '2024' },
  { id: 7, title: 'Headlights', artist: 'SEBU & TRON!X 9', cover: 'Headlights downloaded from SpotiSongDownloader.com_.jpg', genre: 'Progressive House', year: '2024' },
  { id: 8, title: 'Infusion', artist: 'SEBU', cover: 'Infusion downloaded from SpotiSongDownloader.com_.jpg', genre: 'Tech House', year: '2024' },
  { id: 9, title: 'Midnight Memories', artist: 'SEBU', cover: 'Midnight Memories downloaded from SpotiSongDownloader.com_.jpg', genre: 'Deep House', year: '2024' },
  { id: 10, title: 'Stay Tonight', artist: 'SEBU', cover: 'Stay Tonight downloaded from SpotiSongDownloader.com_.jpg', genre: 'Future House', year: '2024' },
  { id: 11, title: 'Evacuation', artist: 'SEBU', cover: 'Evacuation downloaded from SpotiSongDownloader.com_.jpg', genre: 'Big Room', year: '2024' },
  { id: 12, title: 'Voltage', artist: 'SEBU', cover: 'Voltage downloaded from SpotiSongDownloader.com_.jpg', genre: 'Electro House', year: '2024' },
  { id: 13, title: 'Crazy Moves', artist: 'SEBU', cover: 'Crazy Moves downloaded from SpotiSongDownloader.com_.jpg', genre: 'Dance Pop', year: '2024' }
];

const ARTISTS_DATA = [
  { 
    id: 1, 
    name: 'TRON!X 9', 
    image: 'Profile.jpg', 
    bio: 'Leading electronic music producer with a signature sound that blends progressive elements with cutting-edge production.',
    releases: 7,
    genre: 'Progressive House / Bass'
  },
  { 
    id: 2, 
    name: 'SEBU', 
    image: 'SEBU.png', 
    bio: 'Versatile artist exploring the depths of house music with innovative soundscapes and infectious rhythms.',
    releases: 6,
    genre: 'House / Tech House'
  },
  { 
    id: 3, 
    name: 'The Walkers', 
    image: 'Thewalkers.jpg', 
    bio: 'Electronic duo creating atmospheric and emotionally driven future bass anthems.',
    releases: 1,
    genre: 'Future Bass'
  }
];

// Components
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-lg border-b border-purple-500/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Music className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              {SITE_CONFIG.label.name}
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#releases" className="text-gray-300 hover:text-pink-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Releases</a>
              <a href="#artists" className="text-gray-300 hover:text-pink-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Artists</a>
              <a href="#social" className="text-gray-300 hover:text-pink-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Connect</a>
            </div>
          </div>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <div className={`w-5 h-0.5 bg-current mb-1 transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-5 h-0.5 bg-current mb-1 transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-5 h-0.5 bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-lg">
              <a href="#releases" className="text-gray-300 hover:text-pink-400 block px-3 py-2 rounded-md text-base font-medium">Releases</a>
              <a href="#artists" className="text-gray-300 hover:text-pink-400 block px-3 py-2 rounded-md text-base font-medium">Artists</a>
              <a href="#social" className="text-gray-300 hover:text-pink-400 block px-3 py-2 rounded-md text-base font-medium">Connect</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
          {SITE_CONFIG.label.name}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          {SITE_CONFIG.label.tagline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#releases" 
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-semibold hover:scale-105 transition-transform shadow-lg shadow-pink-500/25"
          >
            Explore Releases
          </a>
          <a 
            href="#artists" 
            className="px-8 py-4 border-2 border-purple-500 rounded-full text-purple-300 font-semibold hover:bg-purple-500/20 transition-colors"
          >
            Meet Artists
          </a>
        </div>
      </div>
    </section>
  );
};

const ReleaseCard = ({ release }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20">
      <div className="relative overflow-hidden">
        <img 
          src={release.cover} 
          alt={`${release.title} Cover`}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-pink-400 shadow-lg"
        >
          {isPlaying ? <Pause className="w-8 h-8 text-white" /> : <Play className="w-8 h-8 text-white ml-1" />}
        </button>
        {release.note && (
          <div className="absolute top-3 right-3 bg-yellow-500/90 text-black px-2 py-1 rounded-full text-xs font-medium">
            {release.note}
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-purple-400 font-medium">{release.genre}</span>
          <span className="text-xs text-gray-500">{release.year}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">
          {release.title}
        </h3>
        <p className="text-gray-400 mb-4">{release.artist}</p>
        <button className="w-full py-2 bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 rounded-lg transition-colors flex items-center justify-center gap-2">
          <ExternalLink className="w-4 h-4" />
          Listen Now
        </button>
      </div>
    </div>
  );
};

const Releases = () => {
  const [filter, setFilter] = useState('all');
  const genres = ['all', ...new Set(RELEASES_DATA.map(r => r.genre))];
  
  const filteredReleases = filter === 'all' 
    ? RELEASES_DATA 
    : RELEASES_DATA.filter(r => r.genre === filter);

  return (
    <section id="releases" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Latest Releases
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our catalog of cutting-edge electronic music from talented artists worldwide.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {genres.map(genre => (
            <button
              key={genre}
              onClick={() => setFilter(genre)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === genre
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              {genre.charAt(0).toUpperCase() + genre.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredReleases.map(release => (
            <ReleaseCard key={release.id} release={release} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ArtistCard = ({ artist }) => {
  return (
    <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20">
      <div className="relative overflow-hidden">
        <img 
          src={artist.image} 
          alt={artist.name}
          className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{artist.name}</h3>
          <p className="text-purple-400 font-medium mb-2">{artist.genre}</p>
          <p className="text-gray-300 text-sm mb-4">{artist.bio}</p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400">{artist.releases} Releases</span>
            <button className="px-4 py-2 bg-pink-500/80 hover:bg-pink-500 text-white rounded-full text-sm font-medium transition-colors">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Artists = () => {
  return (
    <section id="artists" className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Our Artists
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Meet the talented musicians shaping the future of electronic music.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTISTS_DATA.map(artist => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SocialMedia = () => {
  const socialLinks = [
    { name: 'Spotify', icon: Music, url: SITE_CONFIG.social.spotify, color: 'text-green-400' },
    { name: 'Instagram', icon: Instagram, url: SITE_CONFIG.social.instagram, color: 'text-pink-400' },
    { name: 'LinkedIn', icon: Linkedin, url: SITE_CONFIG.social.linkedin, color: 'text-blue-400' }
  ];

  return (
    <section id="social" className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Stay Connected
        </h2>
        <p className="text-gray-400 text-lg mb-12">
          Follow us for the latest releases, behind-the-scenes content, and exclusive updates.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {socialLinks.map(social => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl hover:from-gray-700 hover:to-gray-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl min-w-[200px]"
              >
                <IconComponent className={`w-8 h-8 ${social.color} group-hover:scale-110 transition-transform`} />
                <span className="text-white font-semibold">{social.name}</span>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black py-12 px-4 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Music className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            {SITE_CONFIG.label.name}
          </h3>
        </div>
        <p className="text-gray-400 mb-8">
          Pushing boundaries in electronic music since day one.
        </p>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-500 text-sm">
            © 2025 SixFiveTwoEight Records | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
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
