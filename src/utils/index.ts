import { Default } from "@/services/core/transaction/Default";
import { Statement } from "@/services/core/transaction/Statement";

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
