import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TransFileGeneratorComponent} from './trans-file-generator/trans-file-generator.component';
import {CorridorComponent} from './corridor/corridor.component';
import {PipelineAutomationComponent} from './pipeline-automation/pipeline-automation.component';
import {PipelineCreationStepsComponent} from './pipeline-creation-steps/pipeline-creation-steps.component';
const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'filegen', component: TransFileGeneratorComponent },
  { path: 'corridor', component: CorridorComponent },
  { path: 'pipelineautomation', component: PipelineAutomationComponent },
  { path: 'pipelinesteps', component: PipelineCreationStepsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
