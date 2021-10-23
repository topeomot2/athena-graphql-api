export default interface IHealthDataService {
  baseUrl: string;
  // eslint-disable-next-line no-unused-vars
  getData(path: string): Promise<IDimension[]>;
}

export interface IResponse {
  dimension: IDimension[];
}

export interface IDimension {
  label: string;
  display: string;
  isMeasure: boolean;
  code: ICode[];
}

export interface ICode {
  label: string;
  display: string;
  display_sequence: number;
  url: string;
  attr: IAttribute[];
}

export interface IAttribute {
  category: string;
  value: string;
}
