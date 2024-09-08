import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './shared components/footer/footer.component';
import { HeaderComponent } from './shared components/header/header.component';
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
import { PrivacyPolicyComponent } from './component/privacy-policy/privacy-policy.component';
import { EmploymentComponent } from './component/employment/employment.component';
import { FaqsComponent } from './component/faqs/faqs.component';
import { HomePageFooterComponent } from './shared components/home-page-footer/home-page-footer.component';
import { EventsComponent } from './component/events/events.component';
import { AcademicProgramComponent } from './component/academic-program/academic-program.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { SignupComponent } from './component/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    WelcomeComponent,
    HistoryComponent,
    VisionComponent,
    FounderMessageComponent,
    SelfPacedComponent,
    WeekendSchoolComponent,
    AdmissionProcessComponent,
    FeeComponent,
    CalendarComponent,
    LoginComponent,
    ContactUsComponent,
    TechSupportComponent,
    PrivacyPolicyComponent,
    EmploymentComponent,
    FaqsComponent,
    HomePageFooterComponent,
    EventsComponent,
    AcademicProgramComponent,
    ForgotPasswordComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
