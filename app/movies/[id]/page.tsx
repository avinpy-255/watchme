import { cache } from 'react';
import prisma from '../../utils/db'; // your custom Prisma client setup
import { notFound } from 'next/navigation';
import ClientPlayer from '../../components/ClientPlayer';

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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
      <p className="text-lg mb-4">{movie.overview}</p>
      <ClientPlayer url={movie.videoSource} />
      <div className="flex gap-x-2 items-center mt-4">
        <p className="font-normal text-sm text-slate-200">{movie.release}</p>
        <p className="font-normal border py-0.5 px-1 border-rose-200 rounded text-sm text-rose-500">
          {movie.age}+
        </p>
        <p className="font-normal text-sm text-slate-200">{movie.duration}h</p>
      </div>
    </div>
  );
}
