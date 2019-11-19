import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { DashboardComponent } from './User/dashboard.component';
import { LoginComponent } from './User/login.component';
import { USidebarComponent } from './User/usidebar.component';
import { UNavbarComponent } from './User/unavbar.component';
import { USessionComponent } from './User/usession.component';
import { TSidebarComponent } from './Trainer/tsidebar.component';
import { TNavbarComponent } from './Trainer/tnavbar.component';
import { TDashboardComponent } from './Trainer/tdashboard.component';
import { TLoginComponent } from './Trainer/tlogin.component';
import { AddSessionComponent } from './Trainer/add-session.component';
import { ErrorComponent } from './error/error.component';
import { SessionListComponent } from './User/session-list.component';
import { LiveSessionComponent } from './User/live-session.component';
import { AssesmentComponent } from './User/assesment.component';
import { SessionPlaylistComponent } from './User/session-playlist.component';
import { ViewNotificationComponent } from './User/view-notification.component';
import { SendReviewsComponent } from './User/send-reviews.component';
import { ForgetComponent } from './User/forget.component';
import { RegisterComponent } from './User/register.component';
import { AdashboardComponent } from './Admin/adashboard.component';
import { AsidebarComponent } from './Admin/asidebar.component';
import { AnavbarComponent } from './Admin/anavbar.component';
import { AdduserComponent } from './Admin/adduser.component';
import { EducollabService } from './educollab.service';
import { ViewuserComponent } from './Admin/viewuser.component';
import { DataTablesModule } from 'angular-datatables';
import { AddsessionComponent } from './Admin/addsession.component';
import { AviewsessionComponent } from './Admin/aviewsession.component';
import { AddtrainerComponent } from './Admin/addtrainer.component';
import { ViewtrainerComponent } from './Admin/viewtrainer.component';
import { AddblogComponent } from './Admin/addblog.component';
import { AviewblogComponent } from './Admin/aviewblog.component';
import { AviewreviewsComponent } from './Admin/aviewreviews.component';
import { AddplaylistComponent } from './Admin/addplaylist.component';
import { ViewplaylistComponent } from './Admin/viewplaylist.component';
import { SafePipe } from './safe.pipe';
import { ANotificationComponent } from './Admin/a-notification.component';
import { TassesmentComponent } from './Trainer/tassesment.component';
import { AprofileComponent } from './Admin/aprofile.component';
import { TprofileComponent } from './Trainer/tprofile.component';
import { UprofileComponent } from './User/uprofile.component';
import { AloginComponent } from './Admin/alogin.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DashboardComponent,
    LoginComponent,
    USidebarComponent,
    UNavbarComponent,
    USessionComponent,
    TSidebarComponent,
    TNavbarComponent,
    TDashboardComponent,
    TLoginComponent,
    AddSessionComponent,
    ErrorComponent,
    SessionListComponent,
    LiveSessionComponent,
    AssesmentComponent,
    SessionPlaylistComponent,
    ViewNotificationComponent,
    SendReviewsComponent,
    ForgetComponent,
    RegisterComponent,
    AdashboardComponent,
    AsidebarComponent,
    AnavbarComponent,
    AdduserComponent,
    ViewuserComponent,
    AddsessionComponent,
    AviewsessionComponent,
    AddtrainerComponent,
    ViewtrainerComponent,
    AddblogComponent,
    AviewblogComponent,
    AviewreviewsComponent,
    AddplaylistComponent,
    ViewplaylistComponent,
    SafePipe,
    ANotificationComponent,
    TassesmentComponent,
    AprofileComponent,
    TprofileComponent,
    UprofileComponent,
    AloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule, DataTablesModule

  ],
  providers: [EducollabService],
  bootstrap: [AppComponent]
})
export class AppModule { }
