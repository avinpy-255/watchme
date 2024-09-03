'use client'

import Videoplayer from "./Videoplayer";





interface iAppProps {
    overview: string;
    youtubeUrl: string;
    id: number;
    age: number;
    title: string;
    releaseDate: number;
    duration: number;
  }


export default function PlayVideoPage({
    youtubeUrl
}: iAppProps) {
  

  return (
       <Videoplayer
       youtubeUrl={youtubeUrl}
        />
  
  );
}