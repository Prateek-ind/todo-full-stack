"use client";

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
  priority: "all" | "high" | "medium" | "low";
  onPriorityChange: (priority: "all" | "high" | "medium" | "low") => void;
};

export function PriorityFilter({ priority, onPriorityChange }: Props) {
  return (
    <Select value={priority} onValueChange={onPriorityChange}>
      <SelectTrigger className="w-32 max-w-xs ">
        <SelectValue className="text-zinc-500" placeholder="Select priority" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Priority</SelectLabel>
          <SelectItem defaultChecked value="all">Priority: All</SelectItem>
          <SelectItem value="low">Priority: Low</SelectItem>
          <SelectItem value="medium">Priority: Medium</SelectItem>
          <SelectItem value="high">Priority: High</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
