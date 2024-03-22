import { Tags } from "@/services/Tags";

export function TransactionDetailsTags() {
  const instance = new Tags("Confirmado", true, "");

  return (
    <>
      <div className="my-3 flex">
        {instance.tags.map((tag, index) => (
          <div key={index} className={`mr-3 rounded-sm ${tag?.[1]}`}>
            <p className={`p-1 text-xs ${tag?.[2]}`}>{tag?.[0]}</p>
          </div>
        ))}
      </div>
    </>
  );
}
