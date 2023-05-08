import Button from "../Components/Button";
import ImageComp from "../Components/Image";
import { ReactComponent as SATURN } from "../Assets/saturn.svg";

export default function LandingPage() {
  return (
    <div className="text-white flex flex-col m-auto justify-center items-center">
      <ImageComp
        className="h-[89.9vh] object-cover w-full"
        src={require("../Assets/landing.jpeg")}
      />
      <div className="lol">
        <>
          <div className="circle-text">
            <div className="font-extrabold text-7xl">
              PRIVATE {<br />} MISSION
            </div>
            <div className=" font-extrabold text-7xl bg-gradient-to-r from-orange-300 via-orange-500 to-orange-700 text-transparent bg-clip-text">
              TO MARS
            </div>
            <div className="font-medium text-lg mt-4">
              Mars is there, waiting to be reached!
            </div>
            <div className="mt-4 flex flex-row mx-auto items-center justify-center">
              <Button name="Explore here..." />
            </div>
          </div>
        </>
      </div>
      <SATURN className="circle" />
      <ImageComp
        className="absolute bottom-[2rem] right-5  animate-bump-out-in-right select-none z-20 md:h-[40rem] xs:h-[25rem] translate-y-5 animate-wiggle"
        src={require("../Assets/astronut.png")}
      />
    </div>
  );
}
