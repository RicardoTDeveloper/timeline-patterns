import { useDetails } from "@/context";

export function TransactionDetailsTags() {
  const { isTagsVisible, tags } = useDetails();

  if (!isTagsVisible) {
    return null;
  }

  return (
    <>
      <div className="my-3 flex">
        {tags.map((tag, index) => (
          <div key={index} className={`mr-3 rounded-sm ${tag?.[1]}`}>
            <p className={`p-1 text-xs ${tag?.[2]}`}>{tag?.[0]}</p>
          </div>
        ))}
      </div>
    </>
  );
}
