import React from "react";
import { IconChatBubbleLeft, IconCogTooth, IconPaperAirplane } from "../icons";

export function TransactionDetailsHistory() {
  return (
    <div className="mt-8 flex flex-col">
      <h4 className="mb-3 text-lg">Histórico</h4>
      <div className="flex items-center">
        <IconCogTooth />
        <p className=" text-md ml-3">exemplo update Log Falcon</p>
      </div>
      <hr className=" my-3" />
      <div className="flex items-center">
        <IconChatBubbleLeft />
        <div className="ml-4 flex flex-col">
          <p className=" text-md font-medium">
            exemplo mensagem ao cliente via APP ou SMS ao telefone +55 11
            123456789
          </p>
          <p className=" text-md font-light">30 de abril de 2022 ás 12:57</p>
        </div>
      </div>
      <hr className=" my-3" />
      <div className="flex items-center">
        <IconCogTooth />
        <p className=" text-md ml-3">exemplo update Log Falcon</p>
      </div>
    </div>
  );
}
