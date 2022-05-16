export class ConfirmRemove {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly type: ElementType
  ) {}
}

export enum ElementType {
  PRODUCT,
  CATEGORY,
}

