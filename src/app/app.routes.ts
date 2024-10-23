import { CanMatchFn, RedirectCommand, Router, Routes } from '@angular/router';

import { routes as UserRoutes } from './users/user/user.routes';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { resolveTitle, resolveUserName, UserTasksComponent } from './users/user-tasks/user-tasks.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { inject } from '@angular/core';

const dummyCanMatch: CanMatchFn = (route, segments) =>{
  const router = inject(Router);
  const shouldGetAccess = Math.random();

  if (shouldGetAccess < 0.5) {
    return true;
  } else {
    return new RedirectCommand(router.parseUrl('/unauthorized'));
  }

}
export const routes: Routes = [
  {
    path:'',
    component: NoTaskComponent,
    title: 'Home',
  },
  {
    path: 'users/:userId',
    component: UserTasksComponent,
    children: UserRoutes,
    canMatch: [dummyCanMatch],
    data: {
      message: 'Hello from UserTasksComponent',
    },
    resolve: {
      userName: resolveUserName
    },
    title: resolveTitle
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
