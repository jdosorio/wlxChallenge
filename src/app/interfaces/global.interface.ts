
export interface Token {
  token: string;
}

export class Country{
  id: string;
  country: string;
}

export type EnumCountries = Country[];

export class Types{
  id: string;
  description: string;
}

export type EnumTypes = Types[];

export interface FilterCount {
  count: number;
}
