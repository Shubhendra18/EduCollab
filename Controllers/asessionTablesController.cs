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

    public class asessionTablesController : ApiController
    {
        private EduCollabDBEntities db = new EduCollabDBEntities();

        // GET: api/asessionTables
        public IQueryable<asessionTable> GetasessionTables()
        {
            return db.asessionTables;
        }
        [Route("api/GetSession")]
        public IHttpActionResult GetSession()
        {
            var q = from a in db.Sessions() select a;
            if (q != null)
            {
                return Ok(q);
            }
            else
            {
                return BadRequest("No Data Found");
            }
        }
        // GET: api/asessionTables/5
        [ResponseType(typeof(asessionTable))]
        public IHttpActionResult GetasessionTable(int id)
        {
            asessionTable asessionTable = db.asessionTables.Find(id);
            if (asessionTable == null)
            {
                return NotFound();
            }

            return Ok(asessionTable);
        }

        // PUT: api/asessionTables/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutasessionTable(int id, asessionTable asessionTable)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != asessionTable.id)
            {
                return BadRequest();
            }

            db.Entry(asessionTable).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!asessionTableExists(id))
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

        // POST: api/asessionTables
        [ResponseType(typeof(asessionTable))]
        public IHttpActionResult PostasessionTable(asessionTable asessionTable)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.asessionTables.Add(asessionTable);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = asessionTable.id }, asessionTable);
        }

        // DELETE: api/asessionTables/5
        [ResponseType(typeof(asessionTable))]
        public IHttpActionResult DeleteasessionTable(int id)
        {
            asessionTable asessionTable = db.asessionTables.Find(id);
            if (asessionTable == null)
            {
                return NotFound();
            }

            db.asessionTables.Remove(asessionTable);
            db.SaveChanges();

            return Ok(asessionTable);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool asessionTableExists(int id)
        {
            return db.asessionTables.Count(e => e.id == id) > 0;
        }
    }
}