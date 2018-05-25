import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule } from '@angular/router';
import { HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import { AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { TopicComponent } from './topic/topic.component';
import {appRoutes} from '../routes';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import {DataService} from './data.service';
import { TeacherComponent } from './teacher/teacher.component';
import { OptionComponent } from './option/option.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopicComponent,
    FormComponent,
    StudentComponent,
    TeacherComponent,
    OptionComponent,
 
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule,
   

  ],
  providers: [  DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
