import { TransactionDetails } from "../TransactionDetails";
import Skeleton from "react-loading-skeleton";

export default function SkeletonDetails() {
  return (
    <>
      <TransactionDetails.Root>
        <div className=" my-3 flex justify-between">
          <Skeleton height={20} count={1} width={150} />
          <Skeleton height={20} count={1} width={150} />
        </div>

        <Skeleton height={50} count={1} width="50%" className=" mb-3" />
        <Skeleton height={20} count={1} width={150} className=" mb-3" />
        <Skeleton height={20} count={1} width={100} className=" mb-3" />

        <div className=" my-3 flex justify-between">
          <Skeleton height={20} count={1} width={150} />
          <Skeleton height={20} count={1} width={150} />
        </div>

        <div className=" my-3 flex">
          <Skeleton height={20} count={1} width={80} className=" mr-3" />
          <Skeleton height={20} count={1} width={80} className=" mr-3" />
          <Skeleton height={20} count={1} width={80} className=" mr-3" />
        </div>

        <div className=" my-3 flex">
          <Skeleton height={120} count={1} width={120} className=" mr-3" />
          <Skeleton height={120} count={1} width={120} className=" mr-3" />
        </div>

        <Skeleton height={200} count={3} className=" my-3" />
      </TransactionDetails.Root>
    </>
  );
}
