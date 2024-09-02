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
  }: iAppProps) {
    return (
      <Dialog open={state} onOpenChange={() => changeState(!state)}>
      <DialogContent className=" z-50 flex flex-col bg-slate-800/30 p-0 m-0  w-1/2">
      <div className="mt-36 px-1 py-1 min-w-1/2">
      <div className='player-wrapper'>
       
      </div>
          <ReactPlayer url='https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4 '  width='100%'
          height='100%' playing/> 
        </div>
        <DialogHeader className="absolute top-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white z-10">
          <div className="flex justify-between items-center">
                    

            <div>
              <DialogTitle className="text-2xl font-semibold">{title}</DialogTitle>
              <div className="flex items-center gap-x-4 text-sm text-gray-300 mt-2">
                <p>{release}</p>
                <p className="border py-0.5 px-2 border-gray-500 rounded-lg">
                  {age}+
                </p>
                <p>{duration}h</p>
              </div>
            </div>
          
            <Button variant="ghost" className="text-white" onClick={() => changeState(false)}>
              ✕
            </Button>
          </div>
        </DialogHeader>
        
        <div className="flex items-center gap-x-2 text-2xl text-gray-300 mt-0">
                <p className="px-5 py-5 ">{overview}</p>
              </div>
      </DialogContent>
    </Dialog>
    );
  }