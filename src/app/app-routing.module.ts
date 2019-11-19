import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './User/login.component';
import { ErrorComponent } from './error/error.component';
import { DashboardComponent } from './User/dashboard.component';
import { SessionListComponent } from './User/session-list.component';
import { SessionPlaylistComponent } from './User/session-playlist.component';
import { LiveSessionComponent } from './User/live-session.component';
import { ViewNotificationComponent } from './User/view-notification.component';
import { AssesmentComponent } from './User/assesment.component';
import { ForgetComponent } from './User/forget.component';
import { SendReviewsComponent } from './User/send-reviews.component';
import { RegisterComponent } from './User/register.component';
import { AdashboardComponent } from './Admin/adashboard.component';
import { AdduserComponent } from './Admin/adduser.component';
import { ViewuserComponent } from './Admin/viewuser.component';
import { AddtrainerComponent } from './Admin/addtrainer.component';
import { ViewtrainerComponent } from './Admin/viewtrainer.component';
import { AddsessionComponent } from './Admin/addsession.component';
import { AviewsessionComponent } from './Admin/aviewsession.component';
import { AddblogComponent } from './Admin/addblog.component';
import { AviewblogComponent } from './Admin/aviewblog.component';
import { AviewreviewsComponent } from './Admin/aviewreviews.component';
import { AddplaylistComponent } from './Admin/addplaylist.component';
import { ViewplaylistComponent } from './Admin/viewplaylist.component';
import { ANotificationComponent } from './Admin/a-notification.component';
import { TDashboardComponent } from './Trainer/tdashboard.component';
import { TSidebarComponent } from './Trainer/tsidebar.component';
import { TNavbarComponent } from './Trainer/tnavbar.component';
import { TLoginComponent } from './Trainer/tlogin.component';
import { TassesmentComponent } from './Trainer/tassesment.component';
import { UprofileComponent } from './User/uprofile.component';
import { TprofileComponent } from './Trainer/tprofile.component';
import { AprofileComponent } from './Admin/aprofile.component';
import { AloginComponent } from './Admin/alogin.component';


const routes: Routes = [
  { path: 'index', component: IndexComponent },
 
  /* *************User Routes*************** */
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'user', component: DashboardComponent },
  { path: 'sessionList', component: SessionListComponent },
  { path: 'sessionPlaylist', component: SessionPlaylistComponent },
  { path: 'liveSession', component: LiveSessionComponent },
  { path: 'viewNotification', component: ViewNotificationComponent },
  { path: 'Assesment', component: AssesmentComponent },
  { path: 'SendReviews', component: SendReviewsComponent },
  { path: 'Forget', component: ForgetComponent },
  { path: 'Uprofile', component: UprofileComponent },
 
  /* ****************Trainer Routes****************** */
  { path: 'trainer', component: TDashboardComponent },
  { path: 'tsidebar', component: TSidebarComponent },
  { path: 'tnavbar', component: TNavbarComponent },
  { path: 'tlogin', component: TLoginComponent},
  { path: 'tassesment', component: TassesmentComponent},
  { path: 'Tprofile', component: TprofileComponent },
  { path: 'Tsession', component: TprofileComponent },

  






  //******************Admin Routes*******************/
  { path: 'admin', component: AdashboardComponent },
  { path: 'adduser', component: AdduserComponent },
  { path: 'viewuser', component: ViewuserComponent },
  { path: 'addtrainer', component: AddtrainerComponent },
  { path: 'viewtrainer', component: ViewtrainerComponent },
  { path: 'addsession', component: AddsessionComponent },
  { path: 'aviewusession', component: AviewsessionComponent },
  { path: 'addblog', component: AddblogComponent },
  { path: 'aviewblog', component: AviewblogComponent },
  { path: 'aviewreviews', component: AviewreviewsComponent },
  { path: 'addplaylist', component: AddplaylistComponent },
  { path: 'viewplaylist', component: ViewplaylistComponent },
  { path: 'anotification', component: ANotificationComponent },
  { path: 'Aprofile', component: AprofileComponent },
  { path: 'alogin', component:AloginComponent },




  { path: '', component: IndexComponent },
  { path: '**', redirectTo: 'error', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
