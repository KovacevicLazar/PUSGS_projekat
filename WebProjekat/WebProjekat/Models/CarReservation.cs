using System;
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

        public DateTime FirstDayOfReservaton { get; set; }

        public DateTime LastDayOfReservaton { get; set; }

        public int TotalPrice { get; set; }
    }
}
