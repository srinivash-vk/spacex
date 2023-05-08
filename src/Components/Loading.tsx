import { ReactComponent as Rocket } from "../Assets/rocket.svg";

export default function Loading() {
  return (
    <div className="h-[90.2vh] w-full mx-auto flex flex-row justify-center items-center gap-x-4 overflow-hidden">
      <div className=" flex flex-col items-center gap-y-4">
        <Rocket
          className="h-10 w-10 animate-bounce"
          fill="white"
          color="white"
        />
        <h2 className="text-center text-white text-xl font-semibold">
          Loading...
        </h2>
        <p className="w-full text-center text-white">
          This may take a few seconds, please don't close this page.
        </p>
      </div>
    </div>
  );
}
