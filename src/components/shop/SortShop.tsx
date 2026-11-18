
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SortShop = () => {
  return (
    <Select>
      <SelectTrigger className="h-9 w-[175px] rounded-md border border-gray-200 bg-white px-3 text-xs font-medium text-[#262626] shadow-none transition hover:border-[#AC0000] focus:ring-0 focus:ring-offset-0">
        <SelectValue placeholder="Sort: Relevance" />
      </SelectTrigger>

      <SelectContent
        position="popper"
        className="z-50 rounded-md border border-gray-100 bg-white p-1 shadow-lg"
      >
        <SelectItem
          value="a-z"
          className="cursor-pointer rounded-sm py-2 text-xs focus:bg-red-50 focus:text-[#AC0000]"
        >
          Name: A to Z
        </SelectItem>

        <SelectItem
          value="z-a"
          className="cursor-pointer rounded-sm py-2 text-xs focus:bg-red-50 focus:text-[#AC0000]"
        >
          Name: Z to A
        </SelectItem>

        <SelectItem
          value="low-high"
          className="cursor-pointer rounded-sm py-2 text-xs focus:bg-red-50 focus:text-[#AC0000]"
        >
          Price: Low to High
        </SelectItem>

        <SelectItem
          value="high-low"
          className="cursor-pointer rounded-sm py-2 text-xs focus:bg-red-50 focus:text-[#AC0000]"
        >
          Price: High to Low
        </SelectItem>

        <SelectItem
          value="new-old"
          className="cursor-pointer rounded-sm py-2 text-xs focus:bg-red-50 focus:text-[#AC0000]"
        >
          Newest First
        </SelectItem>

        <SelectItem
          value="old-new"
          className="cursor-pointer rounded-sm py-2 text-xs focus:bg-red-50 focus:text-[#AC0000]"
        >
          Oldest First
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SortShop;
