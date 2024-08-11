"use server";
import { revalidatePath } from "next/cache";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
 
console.log(apiUrl);
export const sendFeedBack = async (_prvState: any, formData: any) => {
  const data = {
    name: formData.get("userName"),
    message: formData.get("userFeedback"),
    date: new Date().toISOString(),
  };
  if (
    !data.name ||
    !data.message ||
    data.name.trim() === "" ||
    data.message.trim() === ""
  ) {
    return {
      success: false,
      message: "Name and feedback message cannot be empty.",
    };
  }

  try {
    const response = await fetch(`${apiUrl}/feedback/`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      return {
        success: false,
        message: "sending failed!, please try again later.",
      };
    }
    revalidatePath("/");
    const responsed = await response.json();
    return {
      success: true,
      data: responsed,
    };
  } catch (error) {
    throw new Error("failed to send feedback");
  }
};
