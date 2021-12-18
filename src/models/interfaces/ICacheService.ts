import { ICode } from './IHealthDataService';

export default interface ICacheService {
  baseKey: string;
  client: any;
  get(key: string): Promise<string | null>;
  set(key: string, value: string, period: number): Promise<boolean>;
  getCodes(key: string): Promise<ICode[]>;
  setCodes(key: string, value: ICode[], period: number): Promise<boolean>;
}
