import { useGetHistoryQuery } from "../Services/historyApi";

export const useHistoryHook =()=>{
    const { data: getAllHistory, isLoading: isGetAllHistoryLoading } = useGetHistoryQuery();

    return {
       getAllHistory,isGetAllHistoryLoading
    }
}