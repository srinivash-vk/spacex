import { RocketModel } from "../../Model/rockets.model";
import Button from "../../Components/Button";
import ImageComp from "../../Components/Image";
import { useNavigate } from "react-router-dom";

function RocketCard({ rocket }: { rocket: RocketModel }) {
  const navigate = useNavigate();
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div className="flex flex-col flex-1 gap-y-4 group ">
      <div className="h-[25rem] w-full rounded-lg overflow-hidden transition-all group-hover:md:rounded-lg duration-300">
        <ImageComp
          src={rocket.flickr_images[0]}
          className="h-full w-full object-cover transition-all group-hover:md:scale-150 duration-500"
        />
      </div>
      <div className="font-semibold text-2xl">
        {rocket.name} - {rocket.country}
      </div>
      <div className="font-thin text-lg">
        {new Date(rocket.first_flight).toDateString()}
      </div>
      <div className="font-thin line-clamp-1 text-md">{rocket.description}</div>
      <div className="flex flex-row gap-x-10 items-center">
        <Button
          name="Explore here..."
          onClick={() => {
            navigate(`/rocket/${rocket.id}`);
          }}
        />
        <div className="italic font-normal">or</div>
        <Button
          name="Wiki here..."
          onClick={() => openInNewTab(rocket.wikipedia)}
        />
      </div>
      <div className="h-4" />
    </div>
  );
}

export default RocketCard;
