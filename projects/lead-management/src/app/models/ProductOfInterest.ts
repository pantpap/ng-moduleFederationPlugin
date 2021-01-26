export interface IProductOfInterest {
    name: string;
    items: { name: string; selected: boolean; notes: string }[];
    selected?: boolean;
    notes?: string;
  }