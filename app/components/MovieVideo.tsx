
import prisma from "../utils/db"
import MovieButtons from "./MovieButtons"


async function  getData() {
    const data = await prisma.movie.findFirst({
        where: {
            category: "spiderman",
          },
         select: {
            title: true,
            overview: true,
            videoSource: true,
            imageString: true,
            release: true,
            duration: true,
            id: true,
            age: true,
            youtubeString: true,
         },

    })
    return data
}

export default async function MovieVideo() {
    const data = await getData()
    return (
        <div className="h-[55vh] lg:h-[60vh] w-full flex justify-start items-center">
            <video
             poster={data?.imageString}
             autoPlay
             muted
             loop
             src={data?.youtubeString}
             className="w-full absolute top-0 left-0 h-[60vh] object-cover -z-10 brightness-[70%] rounded-b-2xl shadow-xl"
            ></video>

            <div className="absolute w-[90%] lg:w-[40%] mx-auto">
                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">{data?.title}</h1>
                
                <div className="flex gap-x-3 mt-10">
                   <MovieButtons
                    age={data?.age as number}
                    duration={data?.duration as number}
                    id={data?.id as number}
                    overview={data?.overview as string}
                    releaseDate={data?.release as number}
                    title={data?.title as string}
                    youtubeUrl={data?.youtubeString as string}
                    key={data?.id}
                    videoSource={data?.videoSource as string}
                   />
                </div>
            </div>
        </div>
    )
}