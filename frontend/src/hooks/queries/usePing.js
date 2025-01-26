import { useQuery } from "@tanstack/react-query";
import { pingApi } from "../../apis/ping";


export default function usePing() {
    const {isLoading, isError, data, error} = useQuery({
        queryFn: pingApi, //function where networking logic is written 
        queryKey: "ping", //unique key to cache the response of pingApi
        staleTime: 10000, //time in milliseconds after which the data is considered stale
    })

    return {isLoading, isError, data, error};
}
