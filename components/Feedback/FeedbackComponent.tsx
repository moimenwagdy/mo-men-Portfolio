import SectionHeader from "../SectionHeader/sectionHeader";
import FeedbackForm from "./FeedbackFormComponent/FeedbackForm";
import DisplayFeedbackItems from "./DisplayFeedbackItems";

const Feedback = () => {
  return (
    <main className=" flex flex-col">
      <SectionHeader adress="Feedback" />
      <div className="mt-10 flex gap-x-4 flex-col md:flex-row mx-auto md:mx-0 px-4 sm:px-2 ">
        <FeedbackForm />
        <DisplayFeedbackItems />
      </div>
    </main>
  );
};

export default Feedback;
