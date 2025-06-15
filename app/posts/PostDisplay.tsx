"use client";

import PostSearchBar, { Search } from "@/components/Posts/PostSearcchBar";
import { useEffect, useState } from "react";
import Section from "@/components/sections/Section";
import PostGrid from "@/components/Posts/PostGrid";
import { ALL_TAGS } from "@/components/Posts/Tag";
import { PostCardInfo } from "@/components/Posts/PostCard";

const PostDisplay: React.FC<{
  posts: PostCardInfo[];
  tagsDisabled: boolean;
  pageTitle?: string;
}> = ({ posts: initialPostCards, tagsDisabled, pageTitle = "Posts" }) => {
  const defaultSearchValues: Search = {
    term: "",
    tagsToSearch: ALL_TAGS,
  };

  const [postcards, setPostCards] = useState(initialPostCards);
  const [searchValues, setSearchValues] = useState(defaultSearchValues);

  useEffect(() => {
    const filtered_for_tags = initialPostCards.filter((card) =>
      searchValues.tagsToSearch.includes(card.tag)
    );
    if (searchValues.term !== "") {
      const searchTerm = searchValues.term.toLocaleLowerCase().trim();
      const filtered_for_term = filtered_for_tags.filter(
        (card) =>
          card.title.toLocaleLowerCase().includes(searchTerm) ||
          card.desc.toLocaleLowerCase().includes(searchTerm)
      );
      setPostCards(filtered_for_term);
    } else {
      setPostCards(filtered_for_tags);
    }
  }, [searchValues]);

  return (
    <div className="w-full flex flex-col gap-8">
      <Section
        id="post-search"
        title={pageTitle}
        children={
          <PostSearchBar
            searchValues={searchValues}
            setSearchValues={setSearchValues}
            tagsDisabled={tagsDisabled}
            numberOfSearchResults={postcards.length}
          />
        }
      />
      {postcards.length > 0 ? (
        <Section
          id="post"
          title=""
          children={<PostGrid posts={postcards} displayTags={!tagsDisabled} />}
        />
      ) : (
        <Section id="posts" title="" children={<p>No posts found.</p>} />
      )}
    </div>
  );
};

export default PostDisplay;
