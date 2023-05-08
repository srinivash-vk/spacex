import { useParams } from "react-router-dom";
import { useRocketsHook } from "../../Hooks/RocketsHook";
import Loading from "../../Components/Loading";
import ImageComp from "../../Components/Image";
import RocketDetails from "./RocketDetails";
import OverView from "./OverView";
import FirstStage from "./FirstStage";
import SecondStage from "./SecondStage";
import Others from "./Others";

export default function RocketDetailsPage() {
  const { id } = useParams();
  const { rocketDetails, isRocketDetailsLoading } = useRocketsHook({ id });
  if (!rocketDetails) {
    return null;
  }

  if (isRocketDetailsLoading) {
    return <Loading />;
  }

  return (
    <div className="h-full w-full mx-auto overflow-x-hidden justify-center md:px-20 xs:px-5 text-white bg-black pb-8">
      <div className="grid lg:grid-cols-2 xs:grid-cols-1 h-full md:w-full overflow-hidden">
        <div className="flex md:flex-row xs:flex-col order-last xs:mt-4 md:order-none sm:items-center md:justify-around md:items-start">
          <ol className="md:border-l md:border-white">
            <OverView rocketDetails={rocketDetails} />
            <FirstStage rocketDetails={rocketDetails} />
            <SecondStage rocketDetails={rocketDetails} />
            <Others rocketDetails={rocketDetails} />
          </ol>
          <ImageComp
            src={require("../../Assets/Images/rocket.png")}
            className="h-full object-cover image"
          />
        </div>
        <div>
          {rocketDetails && <RocketDetails rocketDetails={rocketDetails} />}
          <>
            <div className="h-4" />
            <div
              className={`grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 md:gap-x-4 gap-y-5 w-full px-5 md:px-8`}
            >
              {rocketDetails.flickr_images.map((image, index) => {
                return (
                  <>
                    <ImageComp
                      key={index}
                      src={image}
                      className="h-[20rem] w-full object-cover rounded-md hover:scale-110 transition-all duration-300"
                    />
                  </>
                );
              })}
            </div>
          </>
        </div>
      </div>
    </div>
  );
}
