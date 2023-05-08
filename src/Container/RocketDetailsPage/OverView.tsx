import React from "react";
import { RocketModel } from "../../Model/rockets.model";
import { ReactComponent as ROCKETICON } from "../../Assets/rocket.svg";

interface _OverViewProps {
  rocketDetails: RocketModel;
}

export default function OverView(props: _OverViewProps) {
  const { rocketDetails } = props;
  return (
    <div>
      <li className="">
        <div className="flex-start flex items-center pt-0">
          <div className="-ml-[20px] mr-3 h-10 w-10 rounded-full bg-white justify-center items-center p-3">
            <ROCKETICON className="h-4 w-4 image" />
          </div>
          <div className="font-thin text-xl">OVERVIEW</div>
        </div>
        <div className="p-4 ml-8 max-w-md rounded-md bg-white transition-all hover:scale-110 duration-500 text-black">
          <div className="grid grid-cols-2">
            <div className="flex flex-col gap-y-3">
              <div>Height</div>
              <div>Diameter</div>
              <div>Mass</div>
              <div>Payload Weight</div>
            </div>
            <div className="flex flex-col gap-y-3">
              <div>
                {rocketDetails?.height.meters?? "~"}m {rocketDetails?.height.feet?? "~"}feet
              </div>
              <div>
                {rocketDetails?.diameter.meters?? "~"}m {rocketDetails?.diameter.feet?? "~"}
                feet
              </div>
              <div>
                {rocketDetails?.mass.kg?? "~"}/kg {rocketDetails?.mass.lb?? "~"}/lb
              </div>
              <div>
                {rocketDetails?.payload_weights[0].kg?? "~"}/kg{" "}
                {rocketDetails?.payload_weights[0].lb?? "~"}/lb
              </div>
            </div>
          </div>
        </div>
      </li>
      <div className="h-4" />
    </div>
  );
}
