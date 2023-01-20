import Input from "../../UI/Input";
import Header from "./Header";
import { ChangeEvent } from "react";
//@ts-ignore
export default function Resources({ formData, setFormData }) {
  return (
    <section className="mt-5 flex flex-col items-center gap-5">
      <Header
        title="Resources"
        desc="Fill the form below based on the resources available in the library."
      />
      <Input
        label="Number Of Computer Sets"
        placeholder="3000"
        type="text"
        value={formData.numberOfComputerSet}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setFormData({
            ...formData,
            numberOfComputerSets: e.target.value,
          });
        }}
      />
      <Input
        label="Number Of E-Libraries Plartform"
        placeholder="45"
        type="text"
        value={formData.numberOfELibrariesPlartform}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setFormData({
            ...formData,
            numberOfELibrariesPlartform: e.target.value,
          });
        }}
      />
      <Input
        label="Reading Space Capacity"
        placeholder="1000"
        type="text"
        value={formData.readingSpaceCapacity}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setFormData({
            ...formData,
            readingSpaceCapacity: e.target.value,
          });
        }}
      />
      <Input
        label="Number Of Reading Tablets"
        placeholder="200"
        type="text"
        value={formData.numberOfReadingTablets}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setFormData({
            ...formData,
            numberOfReadingTablets: e.target.value,
          });
        }}
      />
      <Input
        label="Number Of Books"
        placeholder="1205"
        type="text"
        value={formData.numberOfBooks}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setFormData({
            ...formData,
            numberOfBooks: e.target.value,
          });
        }}
      />
      <Input
        label="Number Of Journals"
        placeholder="205"
        type="text"
        value={formData.numberOfJournals}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setFormData({
            ...formData,
            numberOfJournals: e.target.value,
          });
        }}
      />
    </section>
  );
}
