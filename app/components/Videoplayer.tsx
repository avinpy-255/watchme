import React from 'react';
import ReactPlayer from 'react-player';

interface iAppProps {
  youtubeUrl: string;
}

export default function Videoplayer({
  youtubeUrl
}: iAppProps) {
  return (
    <div className="player-wrapper relative">
      <ReactPlayer
        className="react-player"
        url={youtubeUrl}
        width="100%"
        height="100%"
        controls={true}
        config={{ file: { attributes: { controlsList: 'nodownload' } } }}
      />
    </div>
  );
}
