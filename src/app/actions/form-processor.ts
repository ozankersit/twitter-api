"use server"

export const myFormProcessor = async (formData: FormData) => {
  async function getUserDetails(userName: string | undefined) {

    const url = `https://twitter154.p.rapidapi.com/user/details?username=${userName}`;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key":
          "fe8349e9c9mshe72502d59a5426ap17e5f8jsnf508c65999f0",
        "X-RapidAPI-Host": "twitter154.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log("ozan1", result);
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  try {
    console.log("formdata",formData.get("name"));
    const username = formData.get("name");
    getUserDetails(username as string | undefined);
  } catch (error) {
    throw new Error("Failed");
  }
}
