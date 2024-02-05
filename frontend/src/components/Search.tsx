import React from "react";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon } from "lucide-react";

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
        variant="ghost"
        size="default"
        className="rounded-r-sm rounded-l-none border-l"
      >
        <SearchIcon className="h-5 w-5" />
      </Button>

    </div>
  )
}

export default Search;