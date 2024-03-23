import moment from "moment";
import "moment-timezone";
import "moment/locale/pt-br";
import { Tags } from "./Tags";

moment.locale("pt-br");

export class Details {
  data: string;

  constructor(data: string) {
    this.data = data;
  }

  static convertToSaoPauloTimezone(dateString: string): string {
    const date = moment(dateString);
    // 2021-10-10T10:00:00Z
    return date
      .clone()
      .tz("America/Sao_Paulo")
      .format("DD [de] MMMM [de] YYYY [às] HH:mm");
  }

  static addCurrencySymbol(location: string, value: number): string {
    const currencySymbols: Record<string, string> = {
      us: "$",
      eu: "€",
      uk: "£",
      jp: "¥",
      br: "R$",
    };

    const symbol = currencySymbols[location.toLowerCase()];

    if (!symbol) {
      throw new Error(`No currency symbol found for location: ${location}`);
    }

    return `${symbol}${value}`;
  }

  get isTagsVisible(): boolean {
    return true;
  }

  get isReferredVisible(): boolean {
    return true;
  }

  get isButtonsVisible(): boolean {
    return true;
  }

  get isHistoryVisible(): boolean {
    return true;
  }

  get isGuidelinesVisible(): boolean {
    return true;
  }

  get tags() {
    return new Tags("Confirmado", true, "cartaoVirtual").tags;
  }
}
