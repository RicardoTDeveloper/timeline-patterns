type ObserverFn = React.Dispatch<React.SetStateAction<any>>;

export class Observer {
  observers: ObserverFn[];

  constructor() {
    this.observers = [];
  }
  subscribe(observer: ObserverFn) {
    this.observers.push(observer);
  }
  removeObserver(observer: ObserverFn) {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }
  notify(data: any) {
    this.observers.forEach((observer) => observer(data));
  }
}
