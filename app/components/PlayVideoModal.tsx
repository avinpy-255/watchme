'use client'
import React from 'react';
import ReactPlayer from 'react-player';

interface iAppProps {
  title: string;
  overview: string;
  youtubeUrl: string;
  state: boolean;
  changeState: any;
  release: number;
  age: number;
  duration: number;
  videoSource: string;
}

export default function PlayVideoModal({
  changeState,
  state,
  release,
  videoSource,
}: iAppProps) {
  if (!state) return null; // If the modal state is false, return null to hide it

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-slate-800/30 p-0 m-0 h-100 w-100">
        <button
          className="absolute top-2 right-2 text-white  rounded-full p-2"
          onClick={() => changeState(!state)}
        >
          X
        </button>
        <div className="px-1 py-1 h-full flex justify-center items-center">
          <div className="w-full h-full">
            <ReactPlayer
              className="react-player"
              url={videoSource}
              width="100%"
              height="100%"
              controls={true}
              config={{
                file: { attributes: { controlsList: 'nodownload' } },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}