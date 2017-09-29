import { Routes } from '@angular/router';

import { CandidatsComponent } from './candidats/candidats.component';
import { TestsComponent } from './tests/tests.component';


export const DashboardRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'candidats',
      component: CandidatsComponent,
      data: {
        heading: 'candidats'
      }
    }, {
      path: 'tests',
      component: TestsComponent,
      data: {
        heading: 'tests'
      }
    }]
  }
];
