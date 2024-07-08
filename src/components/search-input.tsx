"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useRef, useState } from "react";
import SearchIcon from "./search-icon";
import SpinnerIcon from "./spinner-icon";

export default function SearchInput() {
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

  const search = searchParams.get("q") as string;

  return (
    <>
      <div className="relative flex items-center rounded-lg focus-within:shadow-lg bg-white overflow-hidden lg:w-1/2 w-3/4 h-16">
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search Profile"
          className="peer h-full w-full outline-none text-xl pr-2 pl-3"
          defaultValue={search?.toString()}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
        {isLoading ? <SpinnerIcon/> : <SearchIcon href={`/information/${search}`} />}
      </div>
    </>
  );
}
