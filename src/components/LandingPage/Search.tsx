import { api } from "../../utils/api";
import { useEffect, useState, type ChangeEvent } from "react";

let libraries: string[] = [];
console.log(libraries, "fuckin libraries");

function useGetAutoCompleteResult(query: string): Promise<string[]> {
  return new Promise((resolve) => {
    resolve(
      libraries.filter((library) =>
        library.toLowerCase().includes(query.toLowerCase())
      )
    );
  });
}
export default function Search() {
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  libraries = api.library.titles.useQuery().data as string[];
  //   console.log(libraries, "some libraries");

  useEffect(() => {
    (async () => {
      if (!query) {
        return;
      }
      const data = await useGetAutoCompleteResult(query);
      setSuggestions(data);
    })();
  }, [query]);
  return (
    <div>
      <input
        className="mt-5 rounded-md border-2 border-slate-400 bg-transparent px-2 py-1 focus:outline-none"
        value={query}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
      />
      <div className="flex flex-col items-center bg-gray-900 text-gray-200">
        {suggestions.map((suggestion) => (
          <div key={suggestion}>{suggestion}</div>
        ))}
      </div>
    </div>
  );
}
