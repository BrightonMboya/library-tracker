import { api } from "../../utils/api";
import { useEffect, useState, type ChangeEvent } from "react";
import Link from "next/link";

let libraries: { id: string; name: string }[] = [];
console.log(libraries, "fuckin libraries");

function GetAutoCompleteResult(
  query: string,
  signal?: AbortSignal
): Promise<{ id: string; name: string }[]> {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject("Request aborted");
    }
    resolve(
      libraries.filter((library) =>
        library.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  });
}

function useDebounceValue(value: string, time = 250) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, time);

    return () => {
      clearTimeout(handler);
    };
  }, [value, time]);

  return debouncedValue;
}
export default function Search() {
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<
    { id: string; name: string }[]
  >([]);
  const debounceQuery = useDebounceValue(query);
  const controller = new AbortController();

  libraries = api.library.titles.useQuery().data as {
    id: string;
    name: string;
  }[];
  //   console.log(libraries, "some libraries");

  useEffect(() => {
    const signal = controller.signal;
    (async () => {
      setSuggestions([]);
      if (query.length > 0) {
        const data = await GetAutoCompleteResult(debounceQuery, signal);
        setSuggestions(data);
      }
    })();

    return () => controller.abort("Cancel Request");
  }, [debounceQuery]);

  return (
    <div>
      <input
        className="mt-5 rounded-md border-2 border-slate-400 bg-transparent px-2 py-1 focus:outline-none"
        value={query}
        type="search"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
        placeholder="Find a Library"
      />
      <div className="mt-5 flex flex-col items-center text-gray-700">
        {suggestions.map((suggestion) => (
          <Link href={`/libraries/${suggestion.id}`} key={suggestion.id}>
            <p className="cursor-pointer">{suggestion.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
