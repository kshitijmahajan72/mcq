import { Routes } from '@angular/router';
import { LoginComponent } from './app/login/login.component';
import {TopicComponent} from './app/topic/topic.component';
import {FormComponent} from './app/form/form.component';
import {StudentComponent} from './app/student/student.component';
import {TeacherComponent} from './app/teacher/teacher.component';
import {OptionComponent} from './app/option/option.component';

export const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'topic', component: TopicComponent},
    {path: 'form', component: FormComponent},
    {path: 'student', component: StudentComponent},
    {path: 'teacher', component: TeacherComponent},
    {path: 'option', component: OptionComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'}

];
