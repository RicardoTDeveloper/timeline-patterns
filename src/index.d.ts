interface ITransaction {
  get icon(): string | undefined;
  get title(): string | undefined;
  get subTitle(): string | undefined;
  get value(): string | null;
  get numberOfInstallments(): string | null;
  get value(): string | null;
  get numberOfInstallments(): string | null;
}

interface ITags {
  get tags(): (string[] | undefined)[];
}
