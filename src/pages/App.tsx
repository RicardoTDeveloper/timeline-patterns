import { TransactionDetails } from "@/components/TransactionDetails";
import { OtherReleases } from "@/components/OtherReleases";
import TransactionsCritical from "@/components/TransactionsCritical";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Body from "@/layout/Body";
import Header from "@/layout/Header";
import HeaderCBWeb from "@/layout/HeaderCBWeb";

function Timeline() {
  return (
    <>
      <HeaderCBWeb />
      <div className=" container bg-zinc-50 pt-20">
        <Header />

        <div className="mt-10 grid grid-cols-2">
          <Body>
            <TransactionsCritical />
            <OtherReleases />
          </Body>
          <Body>
            <TransactionDetails.Root>
              <TransactionDetails.Header />
              <TransactionDetails.Tags />
              <TransactionDetails.Referred />
              <TransactionDetails.Buttons />
              <TransactionDetails.History />
              <TransactionDetails.Guidelines />
            </TransactionDetails.Root>
          </Body>
        </div>
      </div>
    </>
  );
}

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Timeline />
    </QueryClientProvider>
  );
}
