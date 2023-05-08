import { RocketModel } from "../Model/rockets.model";
import { allApis } from "./allApis";

export const rocketApi = allApis.injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
        getAllRocket: builder.query<RocketModel[], void>({
            query: () => "rockets",
            providesTags: ["Rocket"],
        }),
        getRocketById: builder.query<RocketModel, any>({
            query: (id: string) => `rockets/${id}`,
            providesTags: ["Rocket"],
        }),
    }),
});

export const { useGetAllRocketQuery, useGetRocketByIdQuery } = rocketApi;