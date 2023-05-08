import { useGetLaunchByIdQuery, useGetLaunchesQuery } from "../Services/launchesApi";
import { useGetRocketByIdQuery, useGetAllRocketQuery } from "../Services/rocketsApi";

export const useLaunchesHook = ({ id }: { id?: string }) => {
    const { data: allLaunches, isLoading: isAllLaunchesLoading } = useGetLaunchesQuery();
    const { data: launchesDetails, isLoading: isLaunchesDetailsLoading } = useGetLaunchByIdQuery(id ? id : "", { skip: !id });

    return {
        allLaunches, isAllLaunchesLoading, launchesDetails, isLaunchesDetailsLoading
    }
}