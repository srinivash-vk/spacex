import { RocketModel } from "../../Model/rockets.model";
import Button from "../../Components/Button";

interface _RocketDetailsProps {
  rocketDetails: RocketModel;
}

export default function RocketDetails(props: _RocketDetailsProps) {
  const { rocketDetails } = props;
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <>
      <div className="flex flex-col justify-center gap-y-6 md:mx-8 mx-5">
        <div className="font-thin text-2xl">{rocketDetails?.first_flight}</div>
        <div className="font-medium text-6xl">{rocketDetails?.name}</div>
        <div className="flex md:flex-row md:gap-x-4 xs:flex-col xs:gap-y-4">
          {rocketDetails?.payload_weights.map((payloadName) => (
            <div className="flex flex-row gap-x-4 rounded-full justify-center items-center md:px-4 md:py-2 xs:px-4 xs:py-4 bg-white text-black">
              <div>🚀</div>
              <div className="">{payloadName.name}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-x-4">
          <div>Company :</div>
          <div className="font-semibold">{rocketDetails.company}</div>
        </div>
        <div className="flex flex-row gap-x-4">
          <div>Country :</div>
          <div className="font-semibold">{rocketDetails.country}</div>
        </div>
        <div>{rocketDetails.description}</div>
        <div className="flex md:flex-row sm:flex-col md:items-center sm:items-start gap-8">
          <Button
            name="Wiki here..."
            onClick={() => openInNewTab(rocketDetails.wikipedia)}
          />
        </div>
      </div>
    </>
  );
}
