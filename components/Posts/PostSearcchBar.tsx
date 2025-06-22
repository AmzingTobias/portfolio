import Tag, { ALL_TAGS, TAGS } from "@/components/Posts/Tag";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export type Search = {
  term: string;
  tagsToSearch: TAGS[];
};

const PostSearchBar: React.FC<{
  searchValues: Search;
  setSearchValues: React.Dispatch<React.SetStateAction<Search>>;
  tagsDisabled: boolean;
  numberOfSearchResults: number;
}> = ({
  searchValues,
  setSearchValues,
  tagsDisabled,
  numberOfSearchResults,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Search"
        value={searchValues.term}
        onChange={(event) =>
          setSearchValues((prev) => ({ ...prev, term: event.target.value }))
        }
      />
      <div
        className={cn(
          "flex flex-col md:flex-row items-baseline md:items-center gap-4 md:gap-0",
          tagsDisabled ? "justify-end" : "justify-between"
        )}
      >
        {tagsDisabled ? (
          <></>
        ) : (
          <div className="flex flex-col md:flex-row gap-4 md:items-center">
            <p className="font-semibold">Filter by tag:</p>
            <div className="flex flex-col gap-2 md:flex-row">
              {ALL_TAGS.map((t, index) => (
                <div key={index} className="flex flex-row items-center gap-1.5">
                  <div
                    onClick={() => {
                      setSearchValues((prev) => ({
                        ...prev,
                        tagsToSearch: prev.tagsToSearch.includes(t)
                          ? prev.tagsToSearch.filter((tag) => tag !== t)
                          : [...prev.tagsToSearch, t],
                      }));
                    }}
                  >
                    <Tag
                      tag_for_post={t}
                      selectable={{
                        selected: searchValues.tagsToSearch.includes(t),
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <small>Posts Retrieved: {numberOfSearchResults}</small>
      </div>
    </div>
  );
};

export default PostSearchBar;
