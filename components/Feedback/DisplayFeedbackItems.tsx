import FeedbackItem from "./FeedbackItem";

const DisplayFeedbackItems = async () => {
  const response = await fetch(`${process.env.API_URL}/feedback/`);
  const feedbackArray = (await response.json()) as {
    name: string;
    message: string;
    date: Date;
    _id: string;
  }[];
  console.log(feedbackArray);
  return (
    <section
      id="feedbackViewer"
      className="w-full h-96 overflow-y-auto sm:w-3/4 md:w-1/2">
      <ul>
        {feedbackArray.map((feedback) => {
          return <FeedbackItem key={feedback._id} {...feedback} />;
        })}
      </ul>
    </section>
  );
};

export default DisplayFeedbackItems;
