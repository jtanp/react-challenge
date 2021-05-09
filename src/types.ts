export interface Form {
  id: number;
  name: string;
  description: string;
  comment: string;
  showDetails: boolean;
}

export interface Store {
  forms: Form[];
}
