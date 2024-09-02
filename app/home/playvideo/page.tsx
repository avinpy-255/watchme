import OpenVideo from "../../components/OpenVideo"
import MoreMovies from "../../components/MoreMovies"

export default function HomePage() {
    return (
        <div className="p-5 lg:p-0">
            <OpenVideo />
            <h1 className="font-sans font-extrabold  bg-gradient-to-t from-slate-200 to-slate-500 bg-clip-text text-transparent text-3xl mt-2 ">More Movies</h1>
            <MoreMovies/>
        </div>
    )
}