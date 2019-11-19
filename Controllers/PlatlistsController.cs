using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using EduCollabRESTApi.Models;
using System.Web.Http.Cors;

namespace EduCollabRESTApi.Controllers
{


    public class PlatlistsController : ApiController
    {
        private EduCollabDBEntities db = new EduCollabDBEntities();
        [Route("api/GetPlaylist")]
        public IHttpActionResult GetPlaylist()
        {
            var q = from a in db.Playlist() select a;
            if (q != null)
            {
                return Ok(q);
            }
            else
            {
                return BadRequest("No Data Found");
            }
        }
        // GET: api/Platlists
        public IQueryable<Platlist> GetPlatlists()
        {
            return db.Platlists;
        }

        // GET: api/Platlists/5
        [ResponseType(typeof(Platlist))]
        public IHttpActionResult GetPlatlist(int id)
        {
            Platlist platlist = db.Platlists.Find(id);
            if (platlist == null)
            {
                return NotFound();
            }

            return Ok(platlist);
        }

        // PUT: api/Platlists/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPlatlist(int id, Platlist platlist)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != platlist.id)
            {
                return BadRequest();
            }

            db.Entry(platlist).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PlatlistExists(id))
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

        // POST: api/Platlists
        [ResponseType(typeof(Platlist))]
        public IHttpActionResult PostPlatlist(Platlist platlist)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Platlists.Add(platlist);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = platlist.id }, platlist);
        }

        // DELETE: api/Platlists/5
        [ResponseType(typeof(Platlist))]
        public IHttpActionResult DeletePlatlist(int id)
        {
            Platlist platlist = db.Platlists.Find(id);
            if (platlist == null)
            {
                return NotFound();
            }

            db.Platlists.Remove(platlist);
            db.SaveChanges();

            return Ok(platlist);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PlatlistExists(int id)
        {
            return db.Platlists.Count(e => e.id == id) > 0;
        }
    }
}