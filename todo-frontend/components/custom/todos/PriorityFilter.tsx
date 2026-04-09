"use client";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

type Props = {
  priority: "all" | "high" | "medium" | "low";
  onPriorityChange: (priority: "all" | "high" | "medium" | "low") => void;
};

export function PriorityFilter({ priority, onPriorityChange }: Props) {
  return (
    <ToggleGroup
      type="single"
      size="sm"
      variant="outline"
      value={priority}
      onValueChange={(value) => {
        if (!value) {
          onPriorityChange("all");
        } else{
          onPriorityChange(value as Props["priority"]);
        }
      }}
    >
      <ToggleGroupItem value="all" aria-label="Toggle all">
        All
      </ToggleGroupItem>
      <ToggleGroupItem value="low" aria-label="Toggle low">
        Low
      </ToggleGroupItem>
      <ToggleGroupItem value="medium" aria-label="Toggle medium">
        Medium
      </ToggleGroupItem>
      <ToggleGroupItem value="high" aria-label="Toggle high">
        High
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
