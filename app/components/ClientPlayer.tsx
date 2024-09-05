'use client';

import React from 'react';
import ReactPlayer from 'react-player';

interface ClientPlayerProps {
  url: string;
}

const ClientPlayer: React.FC<ClientPlayerProps> = ({ url }) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        url={url}
        className="rounded-lg"
        controls={true}
        width="100%"
        height="100%"
        config={{
          file: { attributes: { controlsList: 'nodownload' } },
        }}
      />
    </div>
  );
};

export default ClientPlayer;