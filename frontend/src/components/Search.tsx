import React from "react";
import { Button } from "@/components/ui/button";

const Search = () => {
  return (
    <div className="w-full border flex items-center justify-between rounded-sm">
      <input
        className="outline-none focus:outline-none pl-1"
        placeholder="Search"
        onChange={(e) => console.log(e.target.value)}
        value="helllo"
      />
      <Button
        variant="default"
        size="default"
        className="rounded-r-sm rounded-l-none"
      >
        Search
      </Button>

    </div>
  )
}

export default Search;