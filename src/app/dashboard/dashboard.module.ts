import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { DashboardRoutes } from './dashboard.routing';
import { CandidatsComponent } from './candidats/candidats.component';
import { TestsComponent } from './tests/tests.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    NgxChartsModule
  ],
  declarations: [CandidatsComponent, TestsComponent]
})

export class DashboardModule {}
