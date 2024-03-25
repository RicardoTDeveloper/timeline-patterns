import { Observer } from "./Observer";
import _ from "lodash";

enum TransactionTypeTitle {
  FATURA = "Lançamentos de fatura",
  CONFIRMADOS = "Lançamentos confirmados",
  LIMITE = "Lançamentos de limite",
  NEGADOS = "Lançamentos negados",
  CONTESTADOS = "Lançamentos contestados",
}

export class Filters extends Observer implements IFilters {
  filtersList: string[];
  selectedFilter: string = "";
  title: boolean = true;
  filter: string | undefined;
  pendingFilterTitle: "requerConfirmacaoDoCliente" | "comBloqueio" =
    "comBloqueio";

  constructor(filter?: string) {
    super();
    this.filter = filter;
    this.addFilter = this.addFilter.bind(this);
    this.filtersList = [
      "fatura",
      "confirmados",
      "limite",
      "negados",
      "contestados",
      "com bloqueio (referidos)",
      "requer confirmação do cliente (suspeitos)",
    ];
  }

  get isTitle() {
    return this.title;
  }

  get pendingFilter() {
    return this.pendingFilterTitle;
  }

  set setFilter(filters: string) {
    this.selectedFilter = filters;
  }

  get filters() {
    return this.filtersList;
  }

  get paramsFilters() {
    return `&filters=${this.selectedFilter}`;
  }

  get titleFilter(): string {
    const current = this.filter?.substring(9);

    const withoutTitle = (current) => {
      this.pendingFilterTitle = current;
      this.title = false;
    };

    if (current)
      return (
        TransactionTypeTitle[current.toUpperCase()] ?? withoutTitle(current)
      );

    return "Demais lançamentos";
  }

  get isNotVisibleTransactionsCritical() {
    const current = this.filter?.substring(9);
    return (
      current === "requerConfirmacaoDoCliente" || current === "comBloqueio"
    );
  }

  get isCloseTransactionsCritical() {
    const a = this.filter;
    if (a && a.length > 9) {
      return true;
    }
    return false;
  }

  convertToCamelCase(str: string): string {
    const cleanedStr = str.replace(/\(.*?\)/g, "");
    return _.camelCase(cleanedStr);
  }

  isActiveFilter(ref: React.RefObject<HTMLElement>): void {
    const component = ref.current;
    if (!component) return;
    const childElement = component.firstChild as HTMLElement;

    const filters: NodeListOf<HTMLElement> =
      document.querySelectorAll(".filter-only");

    const removeAllFilters = () => {
      filters.forEach((filter: HTMLElement) => {
        const childElement = filter.firstChild as HTMLElement;
        if (filter?.classList.contains("bg-rose-500")) {
          filter?.classList.remove("bg-rose-500");
          childElement.classList.remove("text-white");
          childElement.classList.add("text-rose-500");
        }
      });
    };

    if (this.selectedFilter === childElement.textContent) {
      removeAllFilters();
      return;
    }

    removeAllFilters();

    if (component) {
      component?.classList.add("bg-rose-500");
      childElement.classList.add("text-white");
    }
  }

  addFilter(ref: React.RefObject<HTMLElement>) {
    const element = ref?.current;
    if (!element) return;
    const childElement = element.firstChild as HTMLElement;
    this.isActiveFilter(ref);
    const filter = this.convertToCamelCase(childElement.textContent || "");

    try {
      if (this.selectedFilter === childElement.textContent) {
        this.setFilter = "";
        return;
      }
      this.setFilter = filter;
    } finally {
      super.notify(this.selectedFilter);
    }
  }
}
