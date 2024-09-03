import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";

  import { Button } from "@/components/ui/button";
  import React from 'react'
 import ReactPlayer from 'react-player'
  
  interface iAppProps {
    title: string;
    overview: string;
    youtubeUrl: string;
    state: boolean;
    changeState: any;
    release: number;
    age: number;
    duration: number;
    videoSource: string
  }
  
  export default function PlayVideoModal({
    changeState,
    overview,
    state,
    title,
    youtubeUrl,
    age,
    duration,
    release,
    videoSource
    
  }: iAppProps) {
    return (
      <Dialog open={state} onOpenChange={() => changeState(!state)}>
      <DialogContent className=" z-50 flex flex-col bg-slate-800/30 p-0 m-0  w-1/2">
      <div className=" px-1 py-1 min-w-1/2">
      <div className='player-wrapper'>
       
      </div>
          <ReactPlayer 
          className="react-player"
          url={videoSource}    
          width="100%"
          height="100%"
          controls={true}
          config={{ file: { attributes: { controlsList: 'nodownload' } } }}/> 
        </div>
   
      
      </DialogContent>
    </Dialog>
    );
  }