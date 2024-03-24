import { Default } from "@/services/core/transaction/Default";
import { Statement } from "@/services/core/transaction/Statement";
import _ from "lodash";

export const variant = (data) => {
  switch (data?.eventType) {
    case "TRANSACTION":
      return new Default(data);

    case "STATEMENT":
      return new Statement(data);

    default:
      break;
  }
};

export const flatMapEvents = (data) => {
  return _.chain(data)
    .flatMap((item) =>
      _.flatMap(item.items, (subItem) => [
        { date: subItem.date },
        ...subItem.events.map((event) => ({ ...event, date: subItem.date })),
      ]),
    )
    .value();
};

export const countEvents = (flattenedData) => {
  return flattenedData?.reduce((count, item) => {
    if (item.eventId !== undefined) {
      return count + 1;
    }
    return count;
  }, 0);
};
