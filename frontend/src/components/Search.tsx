import React from "react";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface SearchProps {
  searchText : string,
  searchProducts : () => void
};

const Search = () => {
  const path = usePathname();
  const router = useRouter();

  const goToSearchPage = () => {
    if (path === "s") {
      return;
    }
    router.push("/s");
  };

  

  return (
    <>
      <div onClick={goToSearchPage} className="w-full h-full border flex items-center justify-between rounded-sm">
        <input
          onFocus={goToSearchPage}
          className="bg-transparent outline-none focus:outline-none pl-1 h-full w-full"
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
    </>
  )
}

export default Search;