import type { User } from "../data/User";

const key = "usersKey";

export const getUsers = (): User[] => {
  // eslint-disable-next-line functional/no-try-statements
  try {
    const json = localStorage.getItem(key);

    return json === null ? [] : (JSON.parse(json) as User[]);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);

    return [];
  }
};

export const saveUsers = (users: User[]): void => {
  // eslint-disable-next-line functional/no-try-statements
  try {
    localStorage.setItem(key, JSON.stringify(users));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

/*
 *Export const getUsers = async (): Promise<User[]> =>
 *  new Promise(resolve => {
 *    const json = localStorage.getItem(key);
 *
 *    resolve(json === null ? [] : (JSON.parse(json) as User[]));
 *  });
 *
 *export const saveUsers = async (users: User[]): Promise<void> =>
 *  new Promise(resolve => {
 *    localStorage.setItem(key, JSON.stringify(users));
 *    resolve();
 *  });
 */
