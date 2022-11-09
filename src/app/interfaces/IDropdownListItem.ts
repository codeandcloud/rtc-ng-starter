export interface IDropDownListItem {
  text: string;
  value: string;
}

export class DropDownListItem implements IDropDownListItem {
  constructor(public text: string = '', public value: string = '0') {}
}
