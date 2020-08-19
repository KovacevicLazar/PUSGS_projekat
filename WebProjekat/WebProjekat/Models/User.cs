using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebProjekat.Models
{
    public class User : IdentityUser
    {
        public string First_name { get; set; }
        public string Last_name { get; set; }
        public string City { get; set; }
    }
}
