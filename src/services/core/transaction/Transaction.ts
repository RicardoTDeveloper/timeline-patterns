import moment from "moment";

export class Transaction {
  typeEvent: string;
  event: string;

  constructor(data?: any) {
    this.typeEvent = data?.eventCategory;
    this.event = data?.eventId;
  }

  get type(): string {
    return this.typeEvent;
  }

  get eventId(): string {
    return this.event;
  }

  formatDate(date) {
    return moment(date, "YYYY-MM-DD").format("DD [de] MMMM [de] YYYY");
  }

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
