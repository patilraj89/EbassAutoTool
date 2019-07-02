import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransFileGeneratorComponent } from './trans-file-generator/trans-file-generator.component';
import { TopnavComponent } from './topnav/topnav.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { CorridorComponent } from './corridor/corridor.component';
import {HostService} from './Host-Service/host-ser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PipelineAutomationComponent } from './pipeline-automation/pipeline-automation.component';
import { PipelineCreationStepsComponent } from './pipeline-creation-steps/pipeline-creation-steps.component';
import {DatePipe} from '@angular/common';
import { ExcelService } from './ExcelService/excel-service';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TransFileGeneratorComponent,
    TopnavComponent,
    SidenavComponent,
    FooterComponent,
    CorridorComponent,
    PipelineAutomationComponent,
    PipelineCreationStepsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HostService,DatePipe,ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
