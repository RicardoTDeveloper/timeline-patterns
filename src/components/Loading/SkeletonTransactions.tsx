import Skeleton from "react-loading-skeleton";

export default function SkeletonTransactions() {
  return (
    <>
      <Skeleton height={20} count={1} width={150} className=" mb-3" />
      <Skeleton height={70} count={3} className=" mb-3" />
      <Skeleton height={20} count={1} width={150} className=" mb-3" />
      <Skeleton height={70} count={3} className=" mb-3" />
    </>
  );
}
