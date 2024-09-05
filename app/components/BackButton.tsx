"use client";

import { Button } from "@/components/ui/button";
import { ArrowBigLeft  } from "lucide-react";

import {  useRouter } from "next/navigation";



export default function MovieButtons(
 ) {
 
  const router = useRouter();

  const handleClick = () => {
    router.push(`/home`);
  };
  
  return (
    <>
      <Button onClick={handleClick} className="text-lg font-medium">
        < ArrowBigLeft  className="mr-2 h-6 w-6" /> Back
      </Button>
     
    </>
  );
}