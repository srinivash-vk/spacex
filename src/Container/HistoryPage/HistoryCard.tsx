import { HistoryModel } from "../../Model/history.model";
import { ReactComponent as CALENDER } from "../../Assets/Icons/calender.svg";
import { ReactComponent as NAIVGATE_ARROW } from "../../Assets/Icons/navigate_arrow.svg";

interface _HistoryCardProps {
  history: HistoryModel;
}

export default function HistoryCard(props: _HistoryCardProps) {
  const { history } = props;
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div className="w-full p-4 text-center hover:bg-zinc-400 hover:bg-opacity-20 rounded-lg shadow sm:p-8 mb-5 hover:scale-105 transition-all duration-300 group">
      <h5 className="mb-2 text-3xl text-white font-bold">{history.title}</h5>
      <p className="mb-5 text-base sm:text-lg line-clamp-2">
        {history.details}
      </p>
      <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <div className="w-full sm:w-auto bg-white text-black rounded-lg inline-flex items-center justify-center px-4 py-2.5">
          <CALENDER className="mr-3 w-5 h-5" fill="black" />
          <div className="text-left">
            <div className="text-xs">
              {new Date(history.event_date_utc).toLocaleDateString()} -{" "}
              {new Date(history.event_date_unix).toLocaleTimeString()}
            </div>
          </div>
        </div>
      </div>
      <div
        className="cursor-pointer inline-flex text-white items-center group-hover:underline mt-5 ml-2"
        onClick={() => openInNewTab(history.links.article)}
      >
        Learn more...
        <NAIVGATE_ARROW fill="white" />
      </div>
    </div>
  );
}
