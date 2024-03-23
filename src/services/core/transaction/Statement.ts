import moment from "moment";
import { Transaction } from "./Transaction";

enum StatementType {
  CLOSE = "CLOSE",
  OVERDUE = "OVERDUE",
}

export class Statement extends Transaction {
  #date: string;
  #value: number;

  constructor(data) {
    super(data);
    this.#date = data?.dueDate;
    this.#value = data?.amountDetails.currentBalance;
  }

  formatDate(date) {
    const dataFormatada = moment(date, "YYYY-MM-DD").format("D [de] MMMM");
    return `Vence em ${dataFormatada}`;
  }

  convertToReal() {
    return this.#value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  get icon() {
    return {
      [StatementType.CLOSE]: "STATEMENT",
      [StatementType.OVERDUE]: "STATEMENT",
    }[super.type];
  }

  get title() {
    return {
      [StatementType.CLOSE]: "Fatura fechada",
      [StatementType.OVERDUE]: "Fatura paga",
    }[super.type];
  }

  get subTitle() {
    return {
      [StatementType.CLOSE]: this.formatDate(this.#date),
      [StatementType.OVERDUE]: "limite liberado",
    }[super.type];
  }

  get value() {
    return this.convertToReal();
  }

  get numberOfInstallments() {
    return null;
  }
}
