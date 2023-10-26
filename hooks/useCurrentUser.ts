import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const useCurrentUser = () => {
    const {data , error, isLoading, mutate} = useSWR('/api/current', fetcher);
    // SWR fetch this '/api/current' using fetcher which created and store it at it's global store
    // it's looked if data are exist and didn't change he doesn't it fetch again
    return {data, error , isLoading, mutate}
};

export default useCurrentUser;