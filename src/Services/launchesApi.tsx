import { LaunchModel } from "../Model/launches.model";
import { allApis } from "./allApis";

export const launchesApi = allApis.injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
        getLaunches: builder.query<LaunchModel[], void>({
            query: () => "launches",
            providesTags: ["Launches"],
        }),
        getLaunchById: builder.query<LaunchModel, any>({
            query: (id: string) => `launches/${id}`,
            providesTags: ["Launches"],
        })
    }),
});

export const { useGetLaunchesQuery, useGetLaunchByIdQuery } = launchesApi;