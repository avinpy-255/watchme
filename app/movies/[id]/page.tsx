import { cache } from 'react';
import prisma from '../../utils/db'; // your custom Prisma client setup
import { notFound } from 'next/navigation';
import ClientPlayer from '../../components/ClientPlayer';
import Navbar from '@/app/components/Navbar';
import MoreMovies from '@/app/components/MoreMovies';
import { Button } from '@/components/ui/button';
import TestCardAccsses from '@/app/components/TestCardAccsses';
import BackButton from '@/app/components/BackButton';

// Caching the getMovie function to avoid redundant calls
const getMovie = cache(async (id: number) => {
    const movie = await prisma.movie.findUnique({
        where: { id },
    });

    if (!movie) notFound();
    return movie;
});

export default async function MoviePage({ params }: { params: { id: string } }) {
    const movieId = parseInt(params.id);
    const movie = await getMovie(movieId);



    return (
        <>
            <Navbar />
           
            <div className="container mx-auto p-4 bg-slate-800 rounded-xl">
            <BackButton/>
                <h1 className="text-5xl font-semibold text-slate-300 font-bold mb-2 mt-4">{movie.title}</h1>
                <div className="flex gap-x-2 items-center mt-4 mb-4 ml-2">
                    <p className="font-semibold text-sm text-slate-400">{movie.release}</p>
                    <p className="font-semibold  py-0.5 px-1  rounded text-sm text-rose-200">
                        {movie.age}+
                    </p>
                    <p className="font-semibold text-sm text-slate-400">{movie.duration}h</p>
                </div>
                <ClientPlayer url={movie.videoSource} />
            
                <h1 className='font-sans font-extrabold  bg-gradient-to-t from-slate-200 to-slate-500 bg-clip-text text-transparent text-4xl mt-10'>Description</h1>
                <p className="text-lg mb-4 mt-2 text-2xl text-slate-200">{movie.overview}</p>
                <h1 className="font-sans font-extrabold  bg-gradient-to-t from-slate-200 to-slate-500 bg-clip-text text-transparent text-3xl mt-20">More Videos</h1>
                <TestCardAccsses/>
            </div>
          

        </>
    );
}
