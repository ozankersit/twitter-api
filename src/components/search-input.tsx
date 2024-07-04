"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useRef, useState } from "react";


type Props = {
  username:string
}

export default function SearchInput({username}:Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const timeoutRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (searchTerm: string) => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }
    setIsLoading(true);
    timeoutRef.current = setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      if (searchTerm) {
        params.set("q", searchTerm);
      } else {
        params.delete("q");
      }
      replace(`${pathname}?${params.toString()}`);
      setIsLoading(false);
      timeoutRef.current = null;
    }, 750);
  };

  username = searchParams.get("q") as string;

  return (
    <>
    <div className="flex items-center relative">
      {/* <span>SearchInput: {search}</span> */}
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search Account"
        className="rounded-lg py-2 px-2.5 bg-red-700 text-slate-400 flex items-center gap-8"
        defaultValue={username?.toString()}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />
      {isLoading ? (
        <span className="absolute right-5">Searching...</span>
      ) : (
         <span>asd</span>
      )}
    </div>
    </>
    
  );
}
