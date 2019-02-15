import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PatientInfoComponent } from './patient-info/patient-info.component';
import { HealthRecordsComponent } from './health-records/health-records.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes :Routes=[
  {path:'PatientInfos', component:PatientInfoComponent },
  {path:'HealthRecordss', component:HealthRecordsComponent},
  {path:'home', component:AppComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    PatientInfoComponent,
    HealthRecordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
