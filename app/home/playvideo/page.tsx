'use client';

import React from 'react';
import ReactPlayer from 'react-player';

export default function PlayVideoPage() {
  const videoDetails = {
    title: "Big Buck Bunny",
    overview: `Big Buck Bunny is a short computer-animated comedy film that has captured the hearts of audiences with its charming characters and humorous storyline. The film follows the adventures of Big Buck Bunny, a lovable and
     gentle giant, as he navigates through a vibrant world filled with playful antics and unexpected challenges. 
     Despite its brief runtime, the film delivers a delightful blend of humor and animation, 
     making it an entertaining watch for viewers of all ages. With its lighthearted tone and visually appealing 
     animation, "Big Buck Bunny" is a testament to the creativity and skill of its creators, leaving a lasting impression 
     on anyone who watches it.`,
    youtubeUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    release: 2008,
    age: 7,
    duration: 1.34,
  };

  const { title, overview, youtubeUrl, age, duration, release } = videoDetails;

  return (
    <div className="flex flex-col items-center bg-slate-700/30 min-h-screen text-white">
      <div className="w-full max-w-4xl mt-20 px-4">
      <h1 className="text-3xl font-semibold mb-2">{title}</h1>
      <div className="flex items-center gap-x-4 text-sm text-gray-400 mb-4">
            <p>Release Year: {release}</p>
            <p className="border py-0.5 px-2 border-gray-500 rounded-lg">
              {age}+
            </p>
            <p>Duration: {duration}h</p>
          </div>
        <div className="player-wrapper relative">
          <ReactPlayer
            className="react-player"
            url={youtubeUrl}
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
        <div className="mt-4">
        <h1 className="text-3xl font-semibold mb-2">Description</h1>
          <p className="mt-4 text-lg">{overview}</p>
        </div>
      </div>
    </div>
  );
}