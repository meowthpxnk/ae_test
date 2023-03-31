import { getMeFn, authMe } from '@/api';
import type { NavigationGuardNext } from 'vue-router';
import router from '..';

export default async function requireAuth({
  next,
  userDataStore,
}: {
  next: NavigationGuardNext;
  userDataStore: any;
}) {
  try {
    const user_data = localStorage.getItem('user_data')
    if (!user_data){
      return next({
        name: 'autorisation',
      });
    }

    const user_parse = JSON.parse(user_data)

    const user = await authMe(user_parse); 

    if (user.length <= 0 ){
      return next({
        name: 'autorisation',
      });
    }

    console.log(user[0])

    userDataStore.setAuthUser(user[0]);

    if (!user) {
      return next({
        name: 'autorisation',
      });
    }
  } catch (error) {
    document.location.href = '/autorisation';
  }

  return next();
}
