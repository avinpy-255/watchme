import MovieVideo from "../components/MovieVideo"
import TestCardAccsses from "../components/TestCardAccsses"


export default function HomePage() {
    return (
        <div className="p-5 lg:p-0">
            <MovieVideo/>
            <h1 className="font-sans font-extrabold  bg-gradient-to-t from-slate-200 to-slate-500 bg-clip-text text-transparent text-3xl ">Recently Added</h1>
            <TestCardAccsses/>
        </div>
    )
}