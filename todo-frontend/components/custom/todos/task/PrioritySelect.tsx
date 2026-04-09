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

const PrioritySelect = ({ value, onChange }: Props) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-45 max-w-xs my-4">
        <SelectValue className="text-zinc-500" placeholder="Select priority" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Priority</SelectLabel>
          <SelectItem value="low">Low</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="high">High</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default PrioritySelect;
