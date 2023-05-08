import { useGetRocketByIdQuery, useGetAllRocketQuery } from "../Services/rocketsApi";

export const useImageHook = () => {
    const BrokenImage =
  "https://i.postimg.cc/RZvT9tdr/guerrillabuzz-crypto-pr-Wtol-M5hsj14-unsplash.jpg";

    const imageOnLoad = (event:any) => {
        if (event.currentTarget.className !== "error") {
          event.currentTarget.className = "success";
        }
      };
      const imageOnError = (event:any) => {
        event.currentTarget.src = BrokenImage;
        event.currentTarget.className = "error";
      };

    return {
       imageOnError,imageOnLoad
    }
}