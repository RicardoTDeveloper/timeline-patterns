import { Observer } from "./Observer";
import _ from "lodash";

export class Filters extends Observer implements IFilters {
  filtersList: string[];
  selectedFilter: string[] = [];

  constructor() {
    super();
    this.addFilter = this.addFilter.bind(this);
    this.filtersList = [
      "fatura",
      "confirmados",
      "limite",
      "negados",
      "contestados",
      "com bloqueio (referidos)",
      "em análise",
      "pendentes",
      "cancelados",
      "rejeitados",
    ];
  }

  get filters() {
    return this.filtersList;
  }

  get paramsFilters() {
    return `&filters=${this.selectedFilter.join(",")}`;
  }

  convertToCamelCase(str: string): string {
    const cleanedStr = str.replace(/\(.*?\)/g, "");
    return _.camelCase(cleanedStr);
  }

  addFilter(ref: React.RefObject<HTMLElement>) {
    const element = ref?.current;
    if (!element) return;
    const childElement = element.firstChild as HTMLElement;

    if (element?.classList.contains("bg-rose-500")) {
      element?.classList.remove("bg-rose-500");
      childElement.classList.remove("text-white");
      childElement.classList.add("text-rose-500");
    } else {
      element?.classList.add("bg-rose-500");
      childElement.classList.add("text-white");
    }

    const filter = this.convertToCamelCase(childElement.textContent || "");

    try {
      if (this.selectedFilter.includes(filter)) {
        this.selectedFilter = this.selectedFilter.filter(
          (item) => item !== filter,
        );
      } else {
        this.selectedFilter = [...this.selectedFilter, filter];
      }
    } finally {
      super.notify(this.selectedFilter);
    }
  }
}
