import Link from 'next/link'
import React from 'react'

type Props = {
  href: string;
}

export default function SearchIcon({href}:Props) {
  return (
    <div className="grid place-items-center h-full w-12 text-gray-300 px-3 border-l border-solid">
      <Link href={href}>
      <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
      </Link>
        </div>
  )
}
