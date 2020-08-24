﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebProjekat.Models
{
    public class CarReservation
    {
        [Key]
        public int Id { get; set; }

        public DateTime PickupDate { get; set; }

        public DateTime ReturnDate { get; set; }

        public int TotalPrice { get; set; }

        public int NumberOfDays { get; set; }

        public string Brand { get; set; }
        public string Model { get; set; }
        public string Location { get; set; }
    }
}