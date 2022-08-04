using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SemCountdown.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CountDown : ControllerBase
    {
        [HttpGet]
        [Route("getTimeLeft")]
        public TimeSpan TimeLeft()
        {
            var date = DateTime.Now;
            System.DateTime date1 = new (2022, 09, 05, 23, 30, 0);
            System.DateTime date2 = new (date.Year, date.Month, date.Day, date.Hour, date.Minute, date.Second);
            return date1 - date2;
        }
    }
}
