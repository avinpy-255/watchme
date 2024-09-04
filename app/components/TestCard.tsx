"use client";

import { Button } from "@/components/ui/button";
import { Heart, PlayCircle } from "lucide-react";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { addTowatchlist, deleteFromWatchlist } from "../utils/action";

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
  videoSource: string;
  imageString: string
}

export function TestCard({
  movieId,
  overview,
  title,
  wachtListId,
  watchList,
  youtubeUrl,
  age,
  time,
  year,
  videoSource,
  imageString
}: iAppProps) {
  const pathName = usePathname();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/movies/${movieId}`);
  };

  return (
    <>
       <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
      {/* Play Button Overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
        <Button onClick={handleClick} className="text-lg font-medium bg-transparent rounded-full p-3">
          <PlayCircle className="w-10 h-10 text-white" />
        </Button>
      </div>

      {/* Movie Poster */}
      <img
        src={imageString} // Replace with actual image path
        alt={title}
        className="w-full h-64 object-cover"
      />

      {/* Watchlist Button */}
      <div className="absolute top-4 right-4 z-10">
        {watchList ? (
          <form action={deleteFromWatchlist}>
            <input type="hidden" name="watchlistId" value={wachtListId} />
            <input type="hidden" name="pathname" value={pathName} />
            <Button variant="outline" size="icon" className="bg-white bg-opacity-30 rounded-full">
              <Heart className="w-5 h-5 text-red-500" />
            </Button>
          </form>
        ) : (
          <form action={addTowatchlist}>
            <input type="hidden" name="movieId" value={movieId} />
            <input type="hidden" name="pathname" value={pathName} />
            <Button variant="outline" size="icon" className="bg-white bg-opacity-30 rounded-full">
              <Heart className="w-5 h-5 text-white" />
            </Button>
          </form>
        )}
      </div>

     
      <div className="p-4 bg-gray-800">
        <h1 className="font-bold text-lg line-clamp-1 text-white">{title}</h1>
        <div className="flex gap-x-2 items-center mt-2">
          <p className="font-normal text-sm text-gray-300">{year}</p>
          <p className="font-normal border py-0.5 px-2 border-rose-500 rounded text-xs text-rose-500">
            {age}+
          </p>
          <p className="font-normal text-sm text-gray-300">{time}h</p>
        </div>
        <p className="line-clamp-2 text-sm text-gray-400 font-light mt-2">
          {overview}
        </p>
      </div>
    </div>
    </>
  );
}
