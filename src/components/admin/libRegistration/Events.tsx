import Input from "../../UI/Input";
import Header from "./Header";
import { ChangeEvent } from "react";

//@ts-ignore
export default function Events({ formData, setFormData }) {
  return (
    <section className="mt-5 flex flex-col items-center gap-5 md:gap-[1.5rem]">
      <Header
        title="Event"
        desc="Record event based on the yearly calender of the Library "
      />

      <Input
        label="Event Title"
        placeholder="Library Tech Summit"
        type="text"
        value={formData.eventsTitle}
        classes="md:w-[500px]"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setFormData({
            ...formData,
            eventsTitle: e.target.value,
          });
        }}
      />
      <Input
        label="Tell Us a little bit about the event"
        placeholder="Yes"
        type="text"
        classes="md:w-[500px]"
        value={formData.eventExtract}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setFormData({
            ...formData,
            eventExtract: e.target.value,
          });
        }}
      />
      <Input
        label="What Month does this event hold?"
        placeholder="January"
        type="text"
        classes="md:w-[500px]"
        value={formData.monthOfTheEvent}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setFormData({
            ...formData,
            monthOfTheEvent: e.target.value,
          });
        }}
      />
    </section>
  );
}
