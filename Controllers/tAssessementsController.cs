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

namespace EduCollabRESTApi.Controllers
{
    public class tAssessementsController : ApiController
    {
        private EduCollabDBEntities db = new EduCollabDBEntities();

        // GET: api/tAssessements
        public IQueryable<tAssessement> GettAssessements()
        {
            return db.tAssessements;
        }

        // GET: api/tAssessements/5
        [ResponseType(typeof(tAssessement))]
        public IHttpActionResult GettAssessement(int id)
        {
            tAssessement tAssessement = db.tAssessements.Find(id);
            if (tAssessement == null)
            {
                return NotFound();
            }

            return Ok(tAssessement);
        }

        // PUT: api/tAssessements/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PuttAssessement(int id, tAssessement tAssessement)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tAssessement.id)
            {
                return BadRequest();
            }

            db.Entry(tAssessement).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!tAssessementExists(id))
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

        // POST: api/tAssessements
        [ResponseType(typeof(tAssessement))]
        public IHttpActionResult PosttAssessement(tAssessement tAssessement)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.tAssessements.Add(tAssessement);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = tAssessement.id }, tAssessement);
        }

        // DELETE: api/tAssessements/5
        [ResponseType(typeof(tAssessement))]
        public IHttpActionResult DeletetAssessement(int id)
        {
            tAssessement tAssessement = db.tAssessements.Find(id);
            if (tAssessement == null)
            {
                return NotFound();
            }

            db.tAssessements.Remove(tAssessement);
            db.SaveChanges();

            return Ok(tAssessement);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool tAssessementExists(int id)
        {
            return db.tAssessements.Count(e => e.id == id) > 0;
        }
    }
}