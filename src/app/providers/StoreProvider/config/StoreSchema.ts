import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface StoreSchema {
  user: UserSchema;
  login: LoginSchema;
}
