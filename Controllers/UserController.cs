using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;
using EduCollabRESTApi.Models;
using System.Web.Http.Cors;
using System.Web;
using EduCollabRESTApi.Models;

namespace EduCollabRESTApi.Controllers
{
    public class UserController : ApiController
    {
        private EduCollabDBEntities db = new EduCollabDBEntities();

        [Route("api/PostLogin")]
        public IHttpActionResult PostLogin(LoginModel lm)
        {
            string Email = lm.Email;
            string Password = lm.Password;
            var q = (from a in db.UserTables
                     where a.Email.ToString() == Email.ToString() && a.Password.ToString() == Password.ToString()
                     select a).FirstOrDefault();
            if (q != null)
            {
                return Ok(q);
            }
            else
            {
                return BadRequest("No data found");
            }
        }
        [Route("api/UserbyCourse/{id}")]
        public IHttpActionResult GetUsercourse(int id)
        {
            var q = from a in db.UserTables
                    where a.Qualification == id.ToString()
                    select a;
            if (q.Any())
            {
                return Ok(q);
            }

            return BadRequest();
        }

        [Route("api/SmsNoti")]
        public IHttpActionResult PostSmsNoti(Notification nt)
        {
            var q = (from a in db.UserTables
                     where a.Contact == nt.Contact
                     select a).FirstOrDefault();
            string destinationaddr = "91" + nt.Contact;
            string message = "Confedential!! Hi User Your Account Password is " + q.Password;

            String message1 = HttpUtility.UrlEncode(message);
            using (var wb = new WebClient())
            {
                byte[] response = wb.UploadValues("https://api.textlocal.in/send/", new System.Collections.Specialized.NameValueCollection()
                {
                {"apikey" , "8GwB0UYwCBE-kWa9pPEQW8b4r64y4opUmAxL2IiDK3"},
                {"numbers" , destinationaddr},
                {"message" , message1},
                {"sender" , "TXTLCL"}
                });
                string result = System.Text.Encoding.UTF8.GetString(response);
                return Ok("Send");
            }

        }
        // GET: api/User
        public IQueryable<UserTable> GetUserTables()
        {
            return db.UserTables;
        }

        // GET: api/User/5
        [ResponseType(typeof(UserTable))]
        public IHttpActionResult GetUserTable(int id)
        {
            UserTable userTable = db.UserTables.Find(id);
            if (userTable == null)
            {
                return NotFound();
            }

            return Ok(userTable);
        }

        // PUT: api/User/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUserTable(int id, UserTable userTable)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != userTable.Id)
            {
                return BadRequest();
            }

            db.Entry(userTable).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
                return Ok(userTable);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserTableExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/User
        [ResponseType(typeof(UserTable))]
        public IHttpActionResult PostUserTable(UserTable ud)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.UserTables.Add(ud);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = ud.Id }, ud);
        }

        // DELETE: api/User/5
        [ResponseType(typeof(UserTable))]
        public IHttpActionResult DeleteUserTable(int id)
        {
            UserTable userTable = db.UserTables.Find(id);
            if (userTable == null)
            {
                return NotFound();
            }

            db.UserTables.Remove(userTable);
            db.SaveChanges();

            return Ok(userTable);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserTableExists(int id)
        {
            return db.UserTables.Count(e => e.Id == id) > 0;
        }
    }
}