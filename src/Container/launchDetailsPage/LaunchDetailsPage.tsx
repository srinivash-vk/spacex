import { useParams } from "react-router-dom";
import { useLaunchesHook } from "../../Hooks/launchesHook";
import Loading from "../../Components/Loading";
import ImageComp from "../../Components/Image";
import Button from "../../Components/Button";
import { useEffect, useState } from "react";

export default function LaunchDetailsPage() {
  const { id } = useParams();
  const { launchesDetails, isLaunchesDetailsLoading } = useLaunchesHook({ id });
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexScroll = () => {
    if (
      launchesDetails &&
      currentIndex === launchesDetails?.links?.flickr.original.length - 1
    ) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      currentIndexScroll();
    }, 2000);
    return () => clearInterval(interval);
  });

  if (isLaunchesDetailsLoading) {
    return <Loading />;
  }
  if (!launchesDetails) {
    return null;
  }

  return (
    <div className="h-full w-full mx-auto overflow-x-hidden justify-center md:px-20 xs:px-5 text-white bg-black pb-8">
      <div className="flex flex-col gap-y-6">
        <iframe
          className={`aspect-video w-full h-[35rem]`}
          src={`https://www.youtube.com/embed/${launchesDetails?.links.youtube_id}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="youtube"
        />
        <div className="h-4" />
        <div className="text-2xl font-thin uppercase">
          {new Date(launchesDetails.date_utc).toLocaleDateString()}
        </div>
        <div className="text-4xl font-semibold">{launchesDetails.name}</div>
        <div className="text-base font-light">{launchesDetails.details}</div>
        <div className="flex md:flex-row xs:flex-col md:gap-x-4 xs:gap-y-4">
          <Button
            name="Reddit here..."
            onClick={() => openInNewTab(launchesDetails.links.reddit.launch)}
          />
          <Button
            name="Wiki here..."
            onClick={() => openInNewTab(launchesDetails.links.wikipedia)}
          />
          <Button
            name="Article here..."
            onClick={() => openInNewTab(launchesDetails.links.article)}
          />
        </div>
        <div className="h-4" />
        {launchesDetails.links.flickr.original.length && (
          <div className="carousel-container">
            {launchesDetails.links.flickr.original.map((image, index) => {
              return (
                <ImageComp
                  key={index}
                  src={image}
                  className="carousel-item"
                  style={{
                    transform: `translate(-${currentIndex * 100}%)`,
                    gap: `(${currentIndex * 2}%)`,
                  }}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
