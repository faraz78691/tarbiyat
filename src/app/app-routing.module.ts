import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { HistoryComponent } from './component/history/history.component';
import { VisionComponent } from './component/vision/vision.component';
import { FounderMessageComponent } from './component/founder-message/founder-message.component';
import { SelfPacedComponent } from './component/self-paced/self-paced.component';
import { WeekendSchoolComponent } from './component/weekend-school/weekend-school.component';
import { AdmissionProcessComponent } from './component/admission-process/admission-process.component';
import { FeeComponent } from './component/fee/fee.component';
import { CalendarComponent } from './component/calendar/calendar.component';
import { LoginComponent } from './component/login/login.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { TechSupportComponent } from './component/tech-support/tech-support.component';
import { EmploymentComponent } from './component/employment/employment.component';
import { FaqsComponent } from './component/faqs/faqs.component';
import { EventsComponent } from './component/events/events.component';
import { AcademicProgramComponent } from './component/academic-program/academic-program.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { SignupComponent } from './component/signup/signup.component';
import { PrivacyPolicyComponent } from './component/privacy-policy/privacy-policy.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'welcome', component:WelcomeComponent},
  {path:'history', component:HistoryComponent},
  {path:'mission_vission', component:VisionComponent},
  {path:'founder_message', component:FounderMessageComponent},
  {path:'self_paced_learning', component:SelfPacedComponent},
  {path:'weekend_school', component:WeekendSchoolComponent},
  {path:'admissionProcess', component:AdmissionProcessComponent},
  {path:'fee', component:FeeComponent},
  {path:'calendar', component:CalendarComponent},
  {path:'login', component:LoginComponent},
  {path:'contact', component:ContactUsComponent},
  {path:'tech_support', component:TechSupportComponent},
  {path:'privacy_policy', component:PrivacyPolicyComponent},
  {path:'employment', component:EmploymentComponent},
  {path:'faq', component:FaqsComponent},
  {path:'eventsDetail', component:EventsComponent},
  {path:'academicProgram', component:AcademicProgramComponent},
  {path:'forgotpassword', component:ForgotPasswordComponent},
  {path:'signup', component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
