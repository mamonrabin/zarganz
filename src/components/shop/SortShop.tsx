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
      <SelectTrigger className="w-[180px] border rounded-[1px] outline-none text-primary cursor-pointer">
        <SelectValue className="" placeholder="Sort by Relevance" />
      </SelectTrigger>
      <SelectContent className="rounded-sm border border-primary/40 z-50 bg-white cursor-pointer">
        <SelectItem value="a-z"> Sorting by A to Z</SelectItem>
        <SelectItem value="z-a">Sorting by Z to A</SelectItem>
        <SelectItem value="low-high">Price, low to high</SelectItem>
        <SelectItem value="high-low">Price, high to low</SelectItem>
        <SelectItem value="new-old">Product, New to Old</SelectItem>
        <SelectItem value="old-new">Product, Old to New</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SortShop;
