import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EducollabService {
  private baseurl = "http://localhost:60626/api"
  /*******addUserApi************* */
  constructor(private q: HttpClient) { }
  addUser(ud) {
    return this.q.post(this.baseurl + "/User", ud);
  }
  getUser() {
    return this.q.get(this.baseurl + "/User");
  }
  deleteUser(id) {
    return this.q.delete(this.baseurl + "/User/" + id);
  }
  loginUser(lm) {
    return this.q.post(this.baseurl + "/PostLogin", lm);
  }
  getUserbycourse(id) {
    return this.q.get(this.baseurl + "/UserbyCourse/" + id);
  }
  updateProfile(ud) {
    return this.q.put(this.baseurl + "/User/" + ud.Id, ud);
  }
  forgetPassword(fp) {
    return this.q.post(this.baseurl + "/SmsNoti", fp);
  }
  /*******addTrainerApi************* */
  addTrainer(td) {
    return this.q.post(this.baseurl + "/TrainerTables", td);
  }
  getTrainer() {
    return this.q.get(this.baseurl + "/TrainerTables");
  }
  deleteTrainer(id) {
    return this.q.delete(this.baseurl + "/TrainerTables/" + id);
  }
  tloginUser(tlm) {
    return this.q.post(this.baseurl + "/PostTLogin", tlm);
  }

  /*******addSessionApi************* */
  addSession(sd) {
    return this.q.post(this.baseurl + "/asessionTables", sd);
  }
  getSession() {
    return this.q.get(this.baseurl + "/GetSession");
  }
  deleteSession(id) {
    return this.q.delete(this.baseurl + "/asessionTables/" + id);
  }

  /*******PlaylistApi************* */

  addPlaylist(pd) {
    return this.q.post(this.baseurl + "/Platlists", pd);
  }
  getPlaylist() {
    return this.q.get(this.baseurl + "/GetPlaylist");
  }
  deletePlaylist(id) {
    return this.q.delete(this.baseurl + "/Platlists/" + id);
  }

  /*******reviewIndexApi************* */
  addReview(rd) {
    return this.q.post(this.baseurl + "/adminViewReviewsTables", rd);
  }
  getReview() {
    return this.q.get(this.baseurl + "/adminViewReviewsTables");
  }
  /*******BlogApi************* */
  addBlog(bd) {
    return this.q.post(this.baseurl + "/Blogs", bd);
  }
  getBlog() {
    return this.q.get(this.baseurl + "/Blogs");
  }

  /*******tAssessmentApi************* */
  addtAssessment(tad) {
    return this.q.post(this.baseurl + "/tAssessements", tad);
  }
  gettAssessment() {
    return this.q.get(this.baseurl + "/tAssessements");
  }

  /*******notificationAPI************* */
  sendnotification(em) {
    return this.q.post(this.baseurl + "/Email/SendEmail", em);
  }



}
