export class Transaction {
  constructor() {}

  isActiveTransaction(ref: React.RefObject<HTMLElement>): void {
    const transactions: NodeListOf<HTMLElement> =
      document.querySelectorAll(".transaction-only");

    transactions.forEach((transaction: HTMLElement) => {
      transaction.classList.remove("bg-zinc-200");
    });
    const component: HTMLElement | null = ref.current;
    if (component) component.classList.add("bg-zinc-200");
  }
}
