import { Input } from "antd";
import { usePathname, useRouter } from "next/navigation";
import "./index.css";

interface Props {}

/**
 * 搜索条
 * @constructs
 */
const SearchInput = (props: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const isVisible = !pathname.startsWith("/questions");
  return (
    <div
      
      className="search-input"
      aria-hidden
      style={{
        display: isVisible ? "flex":"none",
        alignItems: "center",
        marginInlineEnd: 24,
      }}
    >
      <Input.Search
        style={{
          borderRadius: 4,
          marginInlineEnd: 12,
        }}
        placeholder="搜索题目"
        onSearch={(value) => {
          router.push(`/questions?q=${value}`);
        }}
      />
    </div>
  );
};

export default SearchInput;
