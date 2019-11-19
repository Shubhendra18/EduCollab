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
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class adminViewReviewsTablesController : ApiController
    {
        private EduCollabDBEntities db = new EduCollabDBEntities();

        // GET: api/adminViewReviewsTables
        public IQueryable<adminViewReviewsTable> GetadminViewReviewsTables()
        {
            return db.adminViewReviewsTables;
        }

        // GET: api/adminViewReviewsTables/5
        [ResponseType(typeof(adminViewReviewsTable))]
        public IHttpActionResult GetadminViewReviewsTable(int id)
        {
            adminViewReviewsTable adminViewReviewsTable = db.adminViewReviewsTables.Find(id);
            if (adminViewReviewsTable == null)
            {
                return NotFound();
            }

            return Ok(adminViewReviewsTable);
        }

        // PUT: api/adminViewReviewsTables/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutadminViewReviewsTable(int id, adminViewReviewsTable adminViewReviewsTable)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != adminViewReviewsTable.id)
            {
                return BadRequest();
            }

            db.Entry(adminViewReviewsTable).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!adminViewReviewsTableExists(id))
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

        // POST: api/adminViewReviewsTables
        [ResponseType(typeof(adminViewReviewsTable))]
        public IHttpActionResult PostadminViewReviewsTable(adminViewReviewsTable adminViewReviewsTable)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.adminViewReviewsTables.Add(adminViewReviewsTable);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = adminViewReviewsTable.id }, adminViewReviewsTable);
        }

        // DELETE: api/adminViewReviewsTables/5
        [ResponseType(typeof(adminViewReviewsTable))]
        public IHttpActionResult DeleteadminViewReviewsTable(int id)
        {
            adminViewReviewsTable adminViewReviewsTable = db.adminViewReviewsTables.Find(id);
            if (adminViewReviewsTable == null)
            {
                return NotFound();
            }

            db.adminViewReviewsTables.Remove(adminViewReviewsTable);
            db.SaveChanges();

            return Ok(adminViewReviewsTable);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool adminViewReviewsTableExists(int id)
        {
            return db.adminViewReviewsTables.Count(e => e.id == id) > 0;
        }
    }
}