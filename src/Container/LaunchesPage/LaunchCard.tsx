import { LaunchModel } from "../../Model/launches.model";
import ImageComp from "../../Components/Image";
import Button from "../../Components/Button";
import { useNavigate } from "react-router-dom";

interface _LaunchCardProps {
  launch: LaunchModel;
}

export default function LaunchCard(props: _LaunchCardProps) {
  const { launch } = props;
  const navigate = useNavigate();

  if (!launch.links.flickr.original[0]) {
    return null;
  }

  return (
    <div className="flex flex-col flex-1 gap-y-4 group ">
      <div className="h-[25rem] w-full rounded-lg overflow-hidden transition-all group-hover:md:rounded-lg duration-300">
        <ImageComp
          src={launch.links.flickr.original[0]}
          className="h-full w-full object-cover transition-all group-hover:md:scale-150 duration-500"
        />
      </div>
      <div className="font-semibold text-2xl">
        {launch.name} - {launch.flight_number}
      </div>
      <div className="font-thin text-lg">
        {new Date(launch.date_local).toDateString()} -{" "}
        {new Date(launch.date_local).toLocaleTimeString()}
      </div>
      {launch.details && (
        <div className="font-thin line-clamp-1 text-md">{launch.details}</div>
      )}
      <div className="flex flex-row">
        <Button
          name="Explore here..."
          onClick={() => {
            navigate(`/launches/${launch.id}`);
          }}
        />
      </div>
      <div className="h-4" />
    </div>
  );
}
