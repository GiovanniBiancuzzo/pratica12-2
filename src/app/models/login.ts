export interface Login {
  accessToken: string;
  user: {
    email: string;
    id: number;
    name: string;
    password: string;
  };
}
