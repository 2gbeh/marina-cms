export type TPost = {
  id: number;
  thumbnail?: string;
  title: string;
  body: string;
  userId: number;
};

export type TPosts = Array<TPost>;

export type TUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export type TUsers = Array<TUser>;