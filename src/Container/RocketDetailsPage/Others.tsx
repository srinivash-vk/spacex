import React from "react";
import { RocketModel } from "../../Model/rockets.model";
import { ReactComponent as ROCKETICON } from "../../Assets/rocket.svg";

interface _OthersProps {
  rocketDetails: RocketModel;
}
export default function Others(props: _OthersProps) {
  const { rocketDetails } = props;
  return (
    <div>
      {" "}
      <li className="">
        <div className="flex-start flex items-center pt-3">
          <div className="-ml-[20px] mr-3 h-10 w-10 rounded-full bg-white justify-center items-center p-3">
            <ROCKETICON className="h-4 w-4 image" />
          </div>
          <div className="font-thin text-xl">OTHERS</div>
        </div>
        <div className="p-4 ml-8 max-w-md rounded-md bg-white transition-all hover:scale-110 duration-500 text-black">
          <div className="grid grid-cols-2">
            <div className="flex flex-col gap-y-3">
              <div>Booster</div>
              <div>Cost</div>
            </div>
            <div className="flex flex-col gap-y-3">
              <div>{rocketDetails?.boosters?? "~"}</div>
              <div>{rocketDetails?.cost_per_launch?? "~"} USD</div>
            </div>
          </div>
        </div>
      </li>
      <div className="h-4" />
    </div>
  );
}
