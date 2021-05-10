
export interface Technology {
  tech: string;
  year: string;
  author: string;
  license: string;
  language: string;
  type: string;
  logo: string;
}

export interface EnumTechnologyItems extends Array<Technology>{}

let result: EnumTechnologyItems;

