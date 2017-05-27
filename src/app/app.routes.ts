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
  {
    path: 'home',
    component: Home
  },
  {
    path: 'users/:id',
    component: User,
    data: {}
  },
  {
    path: 'users/add',
    component: User,
    data: {}
  },
  {
    path: 'users',
    component: Users
  },
  {
    path: 'groups/:id',
    component: Group
  },
  {
    path: 'groups',
    component: Groups
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(appRoutes);
