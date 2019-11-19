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
    public class TrainerTablesController : ApiController
    {
        private EduCollabDBEntities db = new EduCollabDBEntities();


        [Route("api/PostTLogin")]
        public IHttpActionResult PostTLogin(TLoginModel tlm)
        {
            string Email = tlm.Email;
            string Password = tlm.Password;
            var q = (from a in db.TrainerTables
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
        // GET: api/TrainerTables
        public IQueryable<TrainerTable> GetTrainerTables()
        {
            return db.TrainerTables;
        }

        // GET: api/TrainerTables/5
        [ResponseType(typeof(TrainerTable))]
        public IHttpActionResult GetTrainerTable(int id)
        {
            TrainerTable trainerTable = db.TrainerTables.Find(id);
            if (trainerTable == null)
            {
                return NotFound();
            }

            return Ok(trainerTable);
        }

        // PUT: api/TrainerTables/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutTrainerTable(int id, TrainerTable trainerTable)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != trainerTable.id)
            {
                return BadRequest();
            }

            db.Entry(trainerTable).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TrainerTableExists(id))
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

        // POST: api/TrainerTables
        [ResponseType(typeof(TrainerTable))]
        public IHttpActionResult PostTrainerTable(TrainerTable trainerTable)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.TrainerTables.Add(trainerTable);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = trainerTable.id }, trainerTable);
        }

        // DELETE: api/TrainerTables/5
        [ResponseType(typeof(TrainerTable))]
        public IHttpActionResult DeleteTrainerTable(int id)
        {
            TrainerTable trainerTable = db.TrainerTables.Find(id);
            if (trainerTable == null)
            {
                return NotFound();
            }

            db.TrainerTables.Remove(trainerTable);
            db.SaveChanges();

            return Ok(trainerTable);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TrainerTableExists(int id)
        {
            return db.TrainerTables.Count(e => e.id == id) > 0;
        }
    }
}