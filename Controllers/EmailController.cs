using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using EduCollabRESTApi.Models;
using System.Net.Mail;

namespace EduCollabRESTApi.Controllers
{
    public class EmailController : ApiController
    {
        public IHttpActionResult PostSendEmail(Email em)
        {
            MailMessage mm = new MailMessage();
            mm.To.Add(em.to);
            mm.From = new MailAddress("meandeveloper2019@gmail.com");
            mm.Subject = em.sub;
            mm.Body = em.msg;
            mm.IsBodyHtml = true;

            SmtpClient smtp = new SmtpClient();
            smtp.Host = "smtp.gmail.com";
            smtp.Port = 587;

            NetworkCredential nc = new NetworkCredential();
            nc.UserName = "meandeveloper2019@gmail.com";
            nc.Password = "mean2019";
            smtp.UseDefaultCredentials = true;
            smtp.Credentials = nc;
            smtp.EnableSsl = true;
            smtp.Send(mm);
            return Ok("Mail Send");

        }

    }
}
