import Input from "../../UI/Input";
import Header from "./Header";

//@ts-ignore
export default function Events({ formData, setFormData }) {
  return (
    <section className="mt-5 flex flex-col items-center gap-5">
      <Header
        title="Event"
        desc="Record event based on the yearly calender of the Library "
      />

      <Input
        label="Event Title"
        placeholder="Library Tech Summit"
        type="text"
        value={formData.eventsTitle}
        onChange={(e: any) => {
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
        value={formData.eventExtract}
        onChange={(e: any) => {
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
        value={formData.monthOfTheEvent}
        onChange={(e: any) => {
          setFormData({
            ...formData,
            monthOfTheEvent: e.target.value,
          });
        }}
      />
    </section>
  );
}
