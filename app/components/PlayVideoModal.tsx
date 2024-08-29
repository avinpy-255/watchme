import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";

  import { Button } from "@/components/ui/button";
  
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
      <DialogContent className="fixed inset-0 z-50 flex flex-col bg-black p-0 m-0">
        <DialogHeader className="absolute top-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white z-10">
          <div className="flex justify-between items-center">
            <div>
              <DialogTitle className="text-2xl font-semibold">{title}</DialogTitle>
              <DialogDescription className="text-sm mt-2 text-gray-200">
                {overview}
              </DialogDescription>
              <div className="flex items-center gap-x-4 text-sm text-gray-300 mt-2">
                <p>{release}</p>
                <p className="border py-0.5 px-2 border-gray-500 rounded-lg">
                  {age}+
                </p>
                <p>{duration}h</p>
              </div>
            </div>
            {/* Optional: Add a close button */}
            <Button variant="ghost" className="text-white" onClick={() => changeState(false)}>
              ✕
            </Button>
          </div>
        </DialogHeader>
        
        {/* Fullscreen Video */}
        <div className="flex-1 flex items-center justify-center">
          <iframe
            src={youtubeUrl}
            className="w-full h-full"
            allowFullScreen
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
    );
  }