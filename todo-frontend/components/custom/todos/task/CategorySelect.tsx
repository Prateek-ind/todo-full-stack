'use client'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const CategorySelect = ({ value, onChange }: Props) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-32 max-w-xs mb-4">
        <SelectValue className="text-zinc-500" placeholder="Select category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Category</SelectLabel>
          <SelectItem value="work">Work</SelectItem>
          <SelectItem value="personal">Personal</SelectItem>
          <SelectItem value="shopping">Shopping</SelectItem>
          <SelectItem value="others">Others</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CategorySelect;
