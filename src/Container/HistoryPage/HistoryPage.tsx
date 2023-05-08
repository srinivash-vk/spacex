import { useHistoryHook } from "../../Hooks/HistoryHook";
import ImageComp from "../../Components/Image";
import { HistoryModel } from "../../Model/history.model";
import { ReactComponent as DOWNARROW } from "../../Assets/Icons/down_arrow.svg";
import Loading from "../../Components/Loading";
import HistoryCard from "./HistoryCard";

export default function HistoryPage() {
  const { getAllHistory, isGetAllHistoryLoading } = useHistoryHook();

  if (isGetAllHistoryLoading) {
    return <Loading />;
  }

  return (
    <div
      className="w-full text-white overflow-x-hidden "
    >
      <div className="relative ">
        <ImageComp
          className="h-[90vh] w-full"
          src={require("../../Assets/Images/history_bg.jpeg")}
        />
        <div className="absolute text-6xl font-semibold animate-pulse inset-0 h-screen flex justify-center items-baseline">
          History
        </div>
        <div className="absolute -inset-10 h-[90vh] flex justify-center items-end animate-pulse cursor-pointer">
          <DOWNARROW/>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full h-full gap-y-4 gap-x-4 md:px-20 xs:px-5 mt-10">
        {getAllHistory?.map((HistoryData: HistoryModel, index: number) => (
          <HistoryCard key={index} history={HistoryData} />
        ))}
      </div>
    </div>
  );
}
