import { useGetRocketByIdQuery, useGetAllRocketQuery } from "../Services/rocketsApi";

export const useRocketsHook = ({ id }: { id?: string }) => {
    const { data: allRocketArray, isLoading: isAllRocketLoading } = useGetAllRocketQuery();
    const { data: rocketDetails, isLoading: isRocketDetailsLoading } = useGetRocketByIdQuery(id ? id : "", { skip: !id });

    return {
        allRocketArray, isAllRocketLoading, rocketDetails, isRocketDetailsLoading
    }
}