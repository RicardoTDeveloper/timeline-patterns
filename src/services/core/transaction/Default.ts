import { Transaction } from "./Transaction";

enum DefaultType {
  AUTHORIZE = "AUTHORIZE",
  DECLINED = "DECLINED",
  CANCELLATION = "CANCELLATION",
}

enum IconType {
  FUEL = "FUEL",
}

export class Default extends Transaction implements ITransaction {
  #establishmentName: string;
  #value: number;
  #icon: string;
  #numberOfInstallments: number;
  #last4Digits: string;

  constructor(data) {
    super(data);
    this.#establishmentName = data?.establishmentName;
    this.#value = data?.amountDetails.contractAmount;
    this.#icon = data?.establishmentMerchantCategoryGroup;
    this.#numberOfInstallments = data?.numberOfInstallments;
    this.#last4Digits = data?.transactionDetails.last4Digits;
  }

  get icon() {
    return IconType[this.#icon];
  }

  get title() {
    return {
      [DefaultType.AUTHORIZE]: this.#establishmentName,
      [DefaultType.DECLINED]: `[Negado] ${this.#establishmentName}`,
      [DefaultType.CANCELLATION]: `[Negado] ${this.#establishmentName}`,
    }[super.type];
  }

  get subTitle() {
    return {
      [DefaultType.AUTHORIZE]: `Final ${this.#last4Digits}`,
      [DefaultType.DECLINED]: `Final ${this.#last4Digits}`,
      [DefaultType.CANCELLATION]: "Cancelada",
    }[super.type];
  }

  get value() {
    return super.convertToReal(this.#value);
  }

  get numberOfInstallments(): string | null {
    if (this.#numberOfInstallments === 1) return "Á vista";
    if (this.#numberOfInstallments > 1)
      return `Em ${this.#numberOfInstallments}x`;
    return null;
  }
}
