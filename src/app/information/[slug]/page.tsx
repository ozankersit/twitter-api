import { UsernameModel } from "@/components/models/username-model";
import NotFound from "./not-found";
import Image from "next/image";

export default async function ProfileInformation({ params }: { params: { slug: string } }) {

  async function getTwitterInformations(username: string): Promise<UsernameModel> {
    const url = `https://twitter154.p.rapidapi.com/user/details?username=${username}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "6f952bb04cmsh9f59fbe61ae887bp1fcf37jsn4e66fdbcdd5a",
        "x-rapidapi-host": "twitter154.p.rapidapi.com",
      },
    };
    const res = await fetch(url, options);

    const data = await res.json();
    console.log("ozan", data);
    return data;
  }

  const data = await getTwitterInformations(params.slug)

  if (data.username !== params.slug) {
    return (
      <NotFound/>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <span>Your Twitter Profile Informations</span>
      <span>{data.username}</span>
      <Image src={`${data?.profile_pic_url}`} alt="" width={50} height={50} className="rounded" />
    </div>
  ) 
}
