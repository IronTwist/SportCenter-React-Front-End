import { BACK_END_HOST_DOMAIN } from './host';

export const apiEndPoints = {
  login: `${BACK_END_HOST_DOMAIN}/api/login`,

  getPrograms: `${BACK_END_HOST_DOMAIN}/api/programs`,
  getProgram: `${BACK_END_HOST_DOMAIN}/api/programs/`,
  deleteProgram: `${BACK_END_HOST_DOMAIN}/api/programs/`,
  addProgram: `${BACK_END_HOST_DOMAIN}/api/programs`,
  updateProgram: `${BACK_END_HOST_DOMAIN}api/programs`,

  getUsers: `${BACK_END_HOST_DOMAIN}/api/users`,
  deleteUsers: `${BACK_END_HOST_DOMAIN}/api/users`,
};
