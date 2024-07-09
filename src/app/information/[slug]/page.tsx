import { UsernameModel } from "@/components/models/username-model";
import NotFound from "./not-found";
import Image from "next/image";

export default async function ProfileInformation({
  params,
}: {
  params: { slug: string };
}) {
  async function getTwitterInformations(
    username: string
  ): Promise<UsernameModel> {
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

  const data = await getTwitterInformations(params.slug);

  const creationDate = data.creation_date.replace(/ \+\d{4}/, "");

  if (data.username !== params.slug) {
    return <NotFound />;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen lg:px-0 px-3">
      <span className="text-gradient lg:text-3xl text-xl mb-12 text-nowrap">
        Twitter Profile Informations
      </span>
      <div className="flex items-center border-b-2 border-white p-4 gap-3 mb-6">
        <Image
          src={`${data?.profile_pic_url}`}
          alt=""
          width={50}
          height={50}
          className="rounded"
        />
        <div className="flex flex-col justify-center">
          <div className="flex flex-col">
            <span className="text-xl">{data.username}</span>
            <span className="text-xl">{creationDate}</span>
          </div>
        </div>
      </div>
      <div className="border rounded-lg border-white p-4 flex items-center gap-3 lg:flex-row flex-col">
            <div className="flex flex-col justify-center gap-2 items-center">
              <span className="border-b-2 border-white">Follower Count: {data.follower_count}</span>
              <span className="border-b-2 border-white">Following Count: {data.following_count}</span>
            </div>
            <div className="flex flex-col justify-center gap-2 lg:border-l border-white pl-3 items-center">
            <span className="border-b-2 border-white">Favourites Count: {data.favourites_count}</span>
            <span className="border-b-2 border-white">Tweets Count: {data.number_of_tweets}</span>
            </div>
      </div>
    </div>
  );
}
