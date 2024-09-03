"use client";

import { Button } from "@/components/ui/button";
import { InfoIcon, PlayCircle } from "lucide-react";
import { useState } from "react";
import PlayVideoModal from "./PlayVideoModal";
import {  useRouter } from "next/navigation";

interface iAppProps {
  overview: string;
  youtubeUrl: string;
  id: number;
  age: number;
  title: string;
  releaseDate: number;
  duration: number;
  videoSource: string
}

export default function MovieButtons({
  age,
  duration,
  id,
  overview,
  releaseDate,
  title,
  videoSource,
  youtubeUrl,
}: iAppProps) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push('/home/playvideo');
  };
  return (
    <>
      <Button onClick={handleClick}  className="text-lg font-medium">
        <PlayCircle className="mr-2 h-6 w-6" /> Play
      </Button>
      <Button
        onClick={() => setOpen(true)}
        className="text-lg font-medium bg-white/40 hover:bg-white/30 text-white"
      >
        <InfoIcon className="mr-2 h-6 w-6" /> Learn More
      </Button>

      <PlayVideoModal
        state={open}
        changeState={setOpen}
        age={age}
        duration={duration}
        key={id}
        overview={overview}
        release={releaseDate}
        title={title}
        youtubeUrl={youtubeUrl}
        videoSource={videoSource}
      />
    </>
  );
}