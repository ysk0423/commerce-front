export type User = {
  id: number;
  username: string;
  displayName: string;
  email: string;
  profileImageUrl: string;
  description: string;
};

export type ApiContext = {
  apiRootUrl: string;
};
