import { useDispatch, useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components";
import {genres} from '../assets/constants'
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const Discover = () => {
  
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) =>  state.player);

  //use to fetch data
  const { data, isFetching, error} = useGetTopChartsQuery();
  const genreTitle = 'POP';

  if(isFetching) return <Loader title="Loading songs..."/>;

  if(error) return <Error/>;

  const data1 = data.tracks.map((track) => ({
    ...track,
  }))

  return (
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center
            sm:flex-row flex-col mt-4 mb-10">
                <h2 className="font-bold text-3xl text-white text-left">
                Discover {genreTitle}</h2>
                <select
                  onChange={() => {}}
                  value=""
                  className="bg-black text-gray-300 p-3 text-sm rounded-ld
                    outline-none sm:mt-0 mt-5"
                >
                    {genres.map((genre) => <option key={genre.value}>{genre.title}</option>)}
                </select>
            </div>

            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                { 
                  data1?.map((song, i) => (
                    <SongCard 
                      key={song.key} 
                      song={song}
                      isPlaying={isPlaying}
                      activeSong={activeSong}
                      data={data1}
                      i={i}
                    />
                ))}
            </div>
        </div>
  );

}
export default Discover;
