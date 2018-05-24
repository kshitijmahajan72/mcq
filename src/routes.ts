import { Routes } from '@angular/router';
import { LoginComponent } from './app/login/login.component';
import {TopicComponent} from './app/topic/topic.component';
import {FormComponent} from './app/form/form.component';
import {StudentComponent} from './app/student/student.component';


export const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'topic', component: TopicComponent},
    {path: 'form', component: FormComponent},
    {path: 'student', component: StudentComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'}

];
