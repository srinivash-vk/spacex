import React from "react";
import { ReactComponent as ROCKETICON } from "../../Assets/rocket.svg";
import { RocketModel } from "../../Model/rockets.model";

interface _FirstStageProps {
  rocketDetails: RocketModel;
}

export default function FirstStage(props: _FirstStageProps) {
  const { rocketDetails } = props;
  return (
    <div>
      <li className="">
        <div className="flex-start flex items-center pt-3">
          <div className="md:-ml-[20px] mr-3 h-10 w-10 rounded-full bg-white justify-center items-center p-3">
            <ROCKETICON className="h-4 w-4 image" />
          </div>
          <div className="font-thin text-xl">FIRST STAGE</div>
        </div>
        <div className="p-4 md:ml-8 md:w-full xs:mt-4 xs:w-[23.3rem] rounded-md bg-white transition-all hover:scale-110 duration-500 text-black">
          <div className="grid grid-cols-2">
            <div className="flex flex-col gap-y-3">
              <div>Engines</div>
              <div>Burntime</div>
              <div>Fuel amount</div>
              <div>Reusability</div>
              <div>Thrust sea level</div>
            </div>
            <div className="flex flex-col gap-y-3">
              <div>{rocketDetails?.first_stage.engines??'~'}</div>
              <div>{rocketDetails?.first_stage.burn_time_sec ?? "~"}/sec</div>
              <div>{rocketDetails?.first_stage.fuel_amount_tons?? "~"}/tons</div>
              {rocketDetails?.first_stage.reusable ? (
                <div>Yes</div>
              ) : (
                <div>No</div>
              )}
              <div>
                {rocketDetails?.first_stage.thrust_sea_level.kN ?? "~"}/kn{" "}
                {rocketDetails?.first_stage.thrust_sea_level.lbf ?? "~"}/lbf
              </div>
            </div>
          </div>
        </div>
      </li>
      <div className="h-4" />
    </div>
  );
}
