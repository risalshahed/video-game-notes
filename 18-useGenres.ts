import useData from "./useData";

export interface Genre {
  id: number,
  name: string
}

// "18" generic kra hoice (useData) tai lagbe na
/* interface FetchGenresResponse {
  count: number,
  results: Genre[]
} */

// eikhane amra endpoint er details ta useGenres hook er pisone hide krlm!
const useGenres = () => useData<Genre>('/genres')

export default useGenres;