// "use client";
// import { useFormState } from "react-dom";
// import { sendFeedBack } from "../function/sendFeedback";
// import FormSubmitButton from "./FormSubmitButton";
// import { useEffect, useRef } from "react";

// const FeedbackForm = () => {
//   const [state, formAction] = useFormState(sendFeedBack, null);
//   const formRef = useRef<HTMLFormElement>(null);

//   useEffect(() => {
//     const ele = document.querySelector("#feedbackViewer");
//     if (ele && state?.success) {
//       ele.scrollTo({ top: ele.scrollHeight, behavior: "smooth" });
//     }
//     if (state?.success) {
//       formRef.current?.reset();
//     }
//   });

//   return (
//     <section className="w-full sm:w-3/4 md:w-1/2">
//       <form
//         ref={formRef}
//         action={formAction}
//         className=" flex flex-col w-full gap-y-4 ">
//         <input
//           type="text"
//           placeholder="name"
//           name="userName"
//           className="w-1/2 px-2 py-1 rounded-md "
//         />
//         <textarea
//           className="resize-none px-2 py-1 w-full rounded-md "
//           rows={5}
//           cols={60}
//           placeholder="Enter your feedback here"
//           name="userFeedback"
//         />
//         <FormSubmitButton />
//       </form>
//       <p className="w-fit mx-auto text-sm font-semibold text-red-800 mt-4">
//         {!state?.success && state?.message}
//       </p>
//     </section>
//   );
// };

// export default FeedbackForm;
