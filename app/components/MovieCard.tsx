"use client";

import { Button } from "@/components/ui/button";
import { Heart, PlayCircle } from "lucide-react";

import { useState } from "react";
import { addTowatchlist, deleteFromWatchlist } from "../utils/action";
import {  useRouter,  usePathname } from "next/navigation";
import PlayVideoModal from "./PlayVideoModal";



interface iAppProps {
  title: string;
  overview: string;
  movieId: number;
  watchList: boolean;
  wachtListId: string;
  youtubeUrl: string;
  year: number;
  age: number;
  time: number;
  videoSource: string
}

export function MovieCard({
  movieId,
  overview,
  title,
  wachtListId,
  watchList,
  youtubeUrl,
  age,
  time,
  year,
  videoSource
}: iAppProps) {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  const router = useRouter();

  const handleClick = () => {
    router.push('/home/playvideo');
  };
  return (
    <>
   <Button onClick={handleClick} className="text-lg font-medium bg-transparent rounded-3xl">
        <PlayCircle />
      </Button>

      <div className="right-5 top-5 absolute z-10">
        {watchList ? (
          <form action={deleteFromWatchlist}>
            <input type="hidden" name="watchlistId" value={wachtListId} />
            <input type="hidden" name="pathname" value={pathName} />
            <Button variant="outline" size="icon">
              <Heart className="w-4 h-4 text-red-500" />
            </Button>
          </form>
        ) : (
          <form action={addTowatchlist}>
            <input type="hidden" name="movieId" value={movieId} />
            <input type="hidden" name="pathname" value={pathName} />
            <Button variant="outline" size="icon">
              <Heart className="w-4 h-4" />
            </Button>
          </form>
        )}
      </div>

      <div className="p-5 absolute bottom-0 left-0">
        <h1 className="font-bold text-lg line-clamp-1 text-slate-200">{title}</h1>
        <div className="flex gap-x-2 items-center">
          <p className="font-normal text-sm text-slate-200">{year}</p>
          <p className="font-normal border py-0.5 px-1 border-rose-200 rounded text-sm text-rose-500">
            {age}+
          </p>
          <p className="font-normal text-sm text-slate-200">{time}h</p>
        </div>
        <p className="line-clamp-1 text-sm text-gray-200 font-light">
          {overview}
        </p>
      </div>

      <PlayVideoModal
        youtubeUrl={youtubeUrl}
        key={movieId}
        title={title}
        overview={overview}
        state={open}
        changeState={setOpen}
        age={age}
        duration={time}
        release={year}
        videoSource={videoSource}
      />
    </>
  );
}