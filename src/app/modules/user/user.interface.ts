export type TUser = {
  id: string;
  password: string;
  needsPassword: boolean;
  role: 'admin' | 'student' | 'faculty';
  isDeleted: boolean;
};
