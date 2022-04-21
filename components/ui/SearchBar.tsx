import React, { useState } from "react";
import { useRouter } from "next/router";
import { Container, Input } from "@nextui-org/react";

const SearchBar = () => {
  const [query, setQuery] = useState<string>();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${query}`);
  };

  return (
    <Container display="flex" alignItems="center" justify="center">
      <form onSubmit={handleSubmit}>
        <Input
          bordered
          name="search"
          color="warning"
          placeholder="Search recipe"
          contentRight={<Icon />}
          size="md"
          aria-label="search"
          id="search"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
      </form>
    </Container>
  );
};

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={24}
      height={24}
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
};

export default SearchBar;
