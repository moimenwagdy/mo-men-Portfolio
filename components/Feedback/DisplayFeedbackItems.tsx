import FeedbackItem from "./FeedbackItem";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export default async function DisplayFeedbackItems() {
  try {
    const response = await fetch(`${apiUrl}/feedback/`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch feedback");
    }

    const feedbackArray = (await response.json()) as {
      name: string;
      message: string;
      date: Date;
      _id: string;
    }[];

    return (
      <section
        id="feedbackViewer"
        className="w-full h-96 overflow-y-auto sm:w-3/4 md:w-1/2">
        <ul>
          {feedbackArray.map((feedback) => (
            <FeedbackItem key={feedback._id} {...feedback} />
          ))}
        </ul>
      </section>
    );
  } catch (error) {
    return <div>Error loading feedback</div>;
  }
}
