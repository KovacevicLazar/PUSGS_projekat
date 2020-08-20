﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebProjekat.Models
{
    public class Airline
    {
        [Key]
        public int Id { get; set; }
        public string Description { get; set; }
        public string CompanyName { get; set; }
        public string Adress { get; set; }
    }
}
