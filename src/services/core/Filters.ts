import { Observer } from "./Observer";
import _ from "lodash";

export class Filters extends Observer implements IFilters {
  filtersList: string[];
  selectedFilter: string = "";

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

  set setFilter(filters: string) {
    this.selectedFilter = filters;
  }

  get filters() {
    return this.filtersList;
  }

  get paramsFilters() {
    return `&filters=${this.selectedFilter}`;
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
