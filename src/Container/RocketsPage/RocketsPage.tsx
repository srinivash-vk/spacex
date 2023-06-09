import { useRocketsHook } from "../../Hooks/RocketsHook";
import RocketCard from "./RocketCard";
import Loading from "../../Components/Loading";
import ImageComp from "../../Components/Image";
import { ReactComponent as DOWNARROW } from "../../Assets/Icons/down_arrow.svg";

function RocketsPage() {
  const { allRocketArray, isAllRocketLoading } = useRocketsHook({
    id: undefined,
  });

  if (isAllRocketLoading) {
    return <Loading />;
  }

  return (
    <div className="h-full w-full mx-auto overflow-x-hidden justify-center text-white">
      <div className="relative">
        <ImageComp
          className="h-[90vh] w-full"
          src={require("../../Assets/Images/rockets_bg.jpeg")}
        />
        <div className="absolute text-6xl font-semibold animate-pulse inset-2 h-screen flex justify-center items-baseline">
          Rockets
        </div>
        <div className="absolute -inset-10 h-[90vh] flex justify-center items-end animate-pulse cursor-pointer">
          <DOWNARROW />
        </div>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-x-4 px-10 mt-10">
        {allRocketArray?.map((rocket, index) => {
          return <RocketCard key={index} rocket={rocket} />;
        })}
      </div>
    </div>
  );
}

export default RocketsPage;
