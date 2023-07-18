import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDependencyModule } from './material-dependency.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';
import { NewWorkoutComponent } from './training/new-workout/new-workout.component';
import { WorkoutInprogressComponent } from './training/workout-inprogress/workout-inprogress.component';
import { WorkoutHistoryComponent } from './training/workout-history/workout-history.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    NewWorkoutComponent,
    WorkoutInprogressComponent,
    WorkoutHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDependencyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
