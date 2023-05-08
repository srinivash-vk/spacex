import { HistoryModel } from "../Model/history.model";
import { allApis } from "./allApis";

export const historyApi = allApis.injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
        getHistory: builder.query<HistoryModel[], void>({
            query: () => "history",
            providesTags: ["History"],
        })
    }),
});

export const { useGetHistoryQuery } = historyApi;