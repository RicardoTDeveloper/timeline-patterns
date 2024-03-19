import {
  IconCheckCircle,
  IconExclamationTriangleWhite,
  IconPaperAirplane,
} from "../icons";

const buttonsProps = {
  contest: {
    icon: <IconExclamationTriangleWhite />,
    text: "Contestar compra",
  },
  confirm: {
    icon: <IconCheckCircle />,
    text: "Confirmar compra",
  },
  refer: {
    icon: <IconPaperAirplane />,
    text: "Derivar para o 2º nível",
  },
};

export function TransactionDetailsButtons() {
  return (
    <div className="flex">
      <div className=" mr-3 flex h-32 w-32 flex-col justify-between rounded-2xl bg-fuchsia-800 p-3 hover:cursor-pointer hover:bg-fuchsia-600">
        <IconCheckCircle />
        <p className=" text-md break-words font-bold text-white">
          Confirmar compra
        </p>
      </div>
      <div className=" mr-3 flex h-32 w-32 flex-col justify-between rounded-2xl bg-fuchsia-800 p-3 hover:cursor-pointer hover:bg-fuchsia-600">
        <IconExclamationTriangleWhite />
        <p className=" text-md break-words font-bold text-white">
          Contestar compra
        </p>
      </div>
      <div className=" mr-3 flex h-32 w-32 flex-col justify-between rounded-2xl bg-fuchsia-800 p-3 hover:cursor-pointer hover:bg-fuchsia-600">
        <IconPaperAirplane />
        <p className=" text-md break-words font-bold text-white">
          Derivar para o 2º nível
        </p>
      </div>
    </div>
  );
}
