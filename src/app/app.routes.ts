import { Routes } from '@angular/router';
import { routes as UserRoutes } from './users/user/user.routes';

import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { UserTasksComponent } from './users/user-tasks/user-tasks.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path:'',
    component: NoTaskComponent,
  },
  {
    path: 'users/:userId',
    component: UserTasksComponent,
    children: UserRoutes,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
