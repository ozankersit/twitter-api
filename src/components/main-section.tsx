import { UsernameModel } from "./models/username-model";
import SearchInput from "./search-input";


export default async function MainSection() {
 
  async function getTwitterInformations(username: string):Promise<UsernameModel> {
    const url = `https://twitter154.p.rapidapi.com/user/details?username=${username}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '6f952bb04cmsh9f59fbe61ae887bp1fcf37jsn4e66fdbcdd5a',
        'x-rapidapi-host': 'twitter154.p.rapidapi.com'
      }
    };
    const res = await fetch(url,options)
  
    const data = await res.json();
    console.log("ozan",data)
    return data
  }

  return (
    <div>
      <SearchInput username=""/>
    </div>
  );
}
