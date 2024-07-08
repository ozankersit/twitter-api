import { Suspense } from "react";
import SearchInput from "./search-input";


export default async function MainSection() {
 
  return (
    <div className="justify-center items-center flex h-screen flex-col">
      <Suspense>
        <SearchInput/>
      </Suspense>
    </div>
  );
}
