export class Tags {
  #cardType: string;
  #reason: string;
  #additional: boolean;
  #cardTypeList: { [key: string]: string } = {
    cartaoVirtual: "Cartão Virtual",
    cartaoFisico: "Cartão fisíco",
    carteiraDigital: "Samsung Pay",
    carteiraDigital2: "Apple Pay",
    carteiraDigital3: "Google Pay",
  };
  #colorDefaultBorder = "border border-zinc-600";
  #colorDefaultText = "text-zinc-600";
  #reasonlist: Map<string, [string, string, string]> = new Map([
    ["Confirmado", ["Confirmado", "bg-green-700", "text-white"]],
    ["Suspeito", ["Requer confirmação", "bg-amber-600", "text-white"]],
    ["Referido", ["Bloqueio (referido)", "bg-red-600", "text-white"]],
    ["Negado", ["Negado", "bg-zinc-600", "text-white"]],
    ["Contestado", ["Contestado", "bg-zinc-600", "text-white"]],
  ]);

  constructor(reason: string, additional: boolean, cardType: string) {
    this.#reason = reason;
    this.#additional = additional;
    this.#cardType = cardType;
  }

  get tags() {
    const tags = [];
    tags.push(this.#reasonlist.get(this.#reason));

    if (this.#additional) {
      tags.push([
        "Adicional",
        this.#colorDefaultBorder,
        this.#colorDefaultText,
      ]);
    }

    if (this.#cardType) {
      tags.push([
        this.#cardTypeList[this.#cardType],
        this.#colorDefaultBorder,
        this.#colorDefaultText,
      ]);
    }

    return tags;
  }
}
