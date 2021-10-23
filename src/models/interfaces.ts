export interface IAthenaResponse {
  copyright: string;
  dataset: any[];
  attribute: any[];
  dimension: IAthenaDimension[];
  fact: any[];
}

export interface IAthenaDimension {
  label: string;
  display: string;
  isMeasure: boolean;
  code: IAthenaCode[];
}

export interface IAthenaCode {
  label: string;
  display: string;
  display_sequence: number;
  url: string;
  attr: IAthenaAttribute[];
}

export interface IAthenaAttribute {
  category: string;
  value: string;
}
