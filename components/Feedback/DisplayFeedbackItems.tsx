// import FeedbackItem from "./FeedbackItem";
// const apiUrl = process.env.NEXT_PUBLIC_API_URL;
// console.log(apiUrl);
// const DisplayFeedbackItems = async () => {
//   const response = await fetch(`${apiUrl}/feedback/`);
//   const feedbackArray = (await response.json()) as {
//     name: string;
//     message: string;
//     date: Date;
//     _id: string;
//   }[];
//   return (
//     <section
//       id="feedbackViewer"
//       className="w-full h-96 overflow-y-auto sm:w-3/4 md:w-1/2">
//       <ul>
//         {feedbackArray.map((feedback) => {
//           return <FeedbackItem key={feedback._id} {...feedback} />;
//         })}
//       </ul>
//     </section>
//   );
// };

// export default DisplayFeedbackItems;
