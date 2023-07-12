import useData from "./useData";

// "23" Platform List theke filter kore data dekhate ei custom hook
interface Platform {
    id: number;
    name: string;
    slug: string;
}
// ei j 1ta generic hook "useData" create krclm, ekhn khub e shamanno poriman code a 
const usePlatforms = () => useData<Platform>('/platforms/lists/parents');

export default usePlatforms;