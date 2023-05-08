import { useLaunchesHook } from "../../Hooks/launchesHook";
import { LaunchModel } from "../../Model/launches.model";
import LaunchCard from "./LaunchCard";
import Loading from "../../Components/Loading";
import ImageComp from "../../Components/Image";
import { ReactComponent as DOWNARROW } from "../../Assets/Icons/down_arrow.svg";
import { useRef } from "react";

export default function LaunchesPage() {
  const { allLaunches, isAllLaunchesLoading } = useLaunchesHook({
    id: undefined,
  });
  const firstItemRef = useRef<any>(null);

  if (isAllLaunchesLoading) {
    return <Loading />;
  }

  return (
    <div ref={firstItemRef} className="w-full text-white overflow-x-hidden">
      <div className="relative">
        <ImageComp
          className="h-[90vh] w-full"
          src={require("../../Assets/Images/launches_bg.jpeg")}
        />
        <div className="absolute text-6xl font-semibold animate-pulse inset-0 h-screen flex justify-center items-baseline">
          Launches
        </div>
        <div className="absolute -inset-10 h-[90vh] flex justify-center items-end animate-pulse cursor-pointer">
          <DOWNARROW
            onClick={() =>
              firstItemRef?.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full h-full gap-y-4 gap-x-4 px-10 mt-10">
        {allLaunches?.map((launchData: LaunchModel, index: number) => (
          <LaunchCard key={index} launch={launchData} />
        ))}
      </div>
    </div>
  );
}
