
"use client";

import { useEffect, useState } from "react";
import { Input } from "../../ui/input";
import { useDebounce } from "@/hooks/useDebounce";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState(value);

  const debouncedValue = useDebounce({ value: inputValue, delay: 500 });
  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  useEffect(() => {
    onChange(debouncedValue);
  }, [debouncedValue, onChange]);

  return (
    <div className=" max-w-3xl rounded-2xl ">
      <Input
        name="search"
        placeholder="Search Tasks..."
        value={inputValue}
        onChange={handleInputChange}
        className="rounded-2xl"
      />
    </div>
  );
};

export default SearchBar;
