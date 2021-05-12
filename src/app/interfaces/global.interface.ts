
export class Token {
  token: string;
}

export class Country{
  id:string;
  country:string;
}

export interface EnumCountries extends Array<Country>{}

let result: EnumCountries;

export class Types{
  id:string;
  description:string;
}

export interface EnumTypes extends Array<Types>{}
