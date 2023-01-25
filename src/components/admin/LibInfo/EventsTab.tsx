import { BsCalendar4 } from "react-icons/bs";

interface Props {
  eventsTitle: string;
  eventExtract: string;
  monthOfTheEvent: string;
}
const EventsTab = (props: Props) => {
  return (
    <div className="mt-5 pl-5">
      <div className="h-[142px] w-[335px] rounded-md border-l-[4px] border-l-blue bg-[#F6F6F6]">
        <div className="pl-[2rem] pt-5">
          <h3 className="text-xl font-medium tracking-wider">
            {props.eventsTitle}
          </h3>
          <p className="mt-2 text-lg">{props.eventExtract}</p>
          <div className="mt-2 flex items-center gap-3 text-lg">
            <BsCalendar4 />
            {props.monthOfTheEvent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsTab;
