import { TagPill } from "./TagPill";

interface FilterBarProps {
   categories: string[];
   active: string;
   onChange: (category: string) => void;
}

export function FilterBar({ categories, active, onChange }: FilterBarProps) {
   return (
      <div className="flex flex-wrap gap-[2vw] md:gap-2 mb-[6vw] md:mb-10">
         {categories.map((cat) => (
            <TagPill
               key={cat}
               label={cat}
               active={active === cat}
               onClick={() => onChange(cat)}
            />
         ))}
      </div>
   );
}
