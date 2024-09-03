
import OpenVideo from '../../components/OpenVideo'
import MoreMovies from '../../components/MoreMovies'
import Videoplayer from '@/app/components/Videoplayer';
export default function PlayVideoPage(
) {
  return (
        <div className="p-5 lg:p-0">
            
            <h1 className="font-sans font-extrabold  bg-gradient-to-t from-slate-200 to-slate-500 bg-clip-text text-transparent text-3xl mt-2 ">More Movies</h1>
            <MoreMovies/>
        </div>
  );
}