import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { NavbarModule } from './navbar/navbar.module';
import { LoginModule } from './login/login.module';
import { LoginService } from './login/login.service';
import { StudentModule } from './student/student.module';
import { StudentComponent } from './student/student.component';
import { RosefireAdapterService } from './rosefire-adapter/rosefire-adapter.service';
import { RolesAdapterService } from './roles-adapter/roles-adapter.service';
import { ActiveUsersService } from './active-users/active-users.service';
import { CoursesService } from './courses/courses.service';
import { CardLoginComponent } from './card-login/card-login.component';
import { CardLoginModule } from './card-login/card-login.module';
import { CardLoginService } from './card-login/card-login.service';
import { ApiModule } from './api/api.module';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/cardLogin', pathMatch: 'full' },
  { path: 'cardLogin', component:  CardLoginComponent},
  { path: 'student', component:  StudentComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NavbarModule,
    LoginModule,
    StudentModule,
    CardLoginModule,
    ApiModule.forRoot(environment.settings.backend)
  ],
  providers: [
    LoginService,
    RosefireAdapterService,
    RolesAdapterService,
    ActiveUsersService,
    CoursesService,
    CardLoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
