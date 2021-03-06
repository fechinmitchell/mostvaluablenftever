import React from 'react'
import Link from 'next/link';

export default function Nav() {
    return (
        <div className="py-4 px-8 bg-black text-white flex justify-between">
            <div className="text-xl"><img
                  src={"/img/logo/MVNFTE_Logo.png"}
                  alt=""/></div>
            <div className="flex">
            <nav className="border-b p-1">
            
             
            
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-6 text-yellow-300">
              Home
            </a>
          </Link>
          <Link href="/create-item">
            <a className="mr-6 text-yellow-300">
              Create INOFF
            </a>
          </Link>
          <Link href="/collection">
            <a className="mr-6 text-yellow-300">
              Collection
            </a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-6 text-yellow-300">
              The One and Only
            </a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-6 text-yellow-300">
              Creator Dashboard
            </a>
          </Link>
        </div>
      </nav>
            </div>
        </div>
    )
}
