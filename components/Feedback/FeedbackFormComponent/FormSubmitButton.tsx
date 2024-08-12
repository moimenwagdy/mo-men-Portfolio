"use client";
import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";

const FormSubmitButton: React.FC<{
  suspend: boolean;
}> = ({ suspend }) => {
  const { pending } = useFormStatus();
  const [reviewed, setReviewed] = useState<boolean>(false);

  useEffect(() => {
    const storedValue = window.localStorage.getItem("reviewed");
    if (storedValue === "true") {
      setReviewed(true);
    }
  }, []);

  return (
    <>
      <button
        className="bg-darkBlue text-white disabled:bg-darkGray rounded-md w-fit self-center px-10 py-1 "
        disabled={pending || suspend || reviewed}
        type="submit">
        {pending ? "Submitting ..." : "Submit"}
      </button>
      {(suspend || reviewed) && (
        <>
          <p className="text-center text-xs">Thanks for your feedback</p>
        </>
      )}
    </>
  );
};

export default FormSubmitButton;
