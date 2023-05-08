import Button from "../Components/Button";
import ImageComp from "../Components/Image";
import { ReactComponent as SATURN } from "../Assets/Icons/saturn.svg";
import useWindowDimensions from "../Hooks/useWindowDimensionsHook";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const {  windowDimensions } = useWindowDimensions();
const navigate=useNavigate()
  return (
    <div className="text-white flex flex-col m-auto xs:overflow-hidden justify-center items-center">
      <ImageComp
        className="h-[90.2vh] object-cover w-full"
        src={require("../Assets/Images/landing.jpeg")}
      />
      <div className="circle-container ">
        <>
          <div className="circle-text">
            <div className="font-extrabold md:text-7xl xs:text-3xl">
              PRIVATE {<br />} MISSION
            </div>
            <div className=" font-extrabold md:text-7xl xs:text-3xl bg-gradient-to-r from-orange-300 via-orange-500 to-orange-700 text-transparent bg-clip-text">
              TO MARS
            </div>
            <div className="font-medium md:text-lg xs:text-md mt-4 ">
              Mars is there, waiting to be reached!
            </div>
            <div className="mt-4 flex flex-row mx-auto items-center justify-center">
              <Button name="Explore here..." onClick={()=>{navigate('/launches')}}/>
            </div>
          </div>
        </>
      </div>
      {windowDimensions.width > 768 && (
        <SATURN className="circle circle-small" />
      )}
      {windowDimensions.width < 768 && (
        <SATURN className="absolute h-[10rem] top-[8rem] " />
      )}
      {windowDimensions.width < 768 && (
          <ImageComp
          className="absolute h-[8rem] bottom-[12rem] left-4"
          src={require("../Assets/Images/moon.png")}
        />
      )}
      <ImageComp
        className="absolute bottom-[2rem] right-5 select-none z-20 md:h-[20rem] lg:h-[40rem] xs:h-[15rem] translate-y-5 animate-wiggle"
        src={require("../Assets/Images/astronut.png")}
      />
    </div>
  );
}
