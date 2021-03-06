export interface User {
    id: number;
    useremail: string;
    password: string;
    password_two:string;
    dob:string;
    token: string;
}
export interface CreateLink {
  long: string;
  custom?: string;
}

export interface Link {
  id: string;
  long: string;
  short: string;
  visits: Visit[];
}

export interface HistoryLink extends Link {
  active?: boolean;
  clicked?: boolean;
}

export interface Visit {
  ip: string;
  visitedOn: string;
}
