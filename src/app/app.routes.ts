/**
 * Created by denisziegler on 5/26/17.
 */

import {
    Routes,
    RouterModule
} from '@angular/router';

import {Home} from './components/home/home';
import {Users} from './components/users/users';
import {User} from './components/users/user';
import {Groups} from './components/groups/groups';
import {Group} from './components/groups/group';

const appRoutes: Routes = [
  { path: '',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'Users/:id',
    component: User,
    data: {}
  },
  {
    path: 'Users',
    component: Users
  },
  {
    path: 'Groups/:id',
    component: Group
  },
  {
    path: 'Groups',
    component: Groups
  }
];

export const routing = RouterModule.forRoot(appRoutes);
