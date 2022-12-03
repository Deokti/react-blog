import { Profile, ValidateProfileErrors } from '../../types/profile';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) return [ValidateProfileErrors.NO_DATA];

  const { firstname, lastname, username } = profile;
  const errors: ValidateProfileErrors[] = [];

  if (!firstname || !lastname) {
    errors.push(ValidateProfileErrors.INCORRECT_USER_DATA);
  }

  if (!username) {
    errors.push(ValidateProfileErrors.INCORRECT_USERNAME);
  }

  return errors;
};
