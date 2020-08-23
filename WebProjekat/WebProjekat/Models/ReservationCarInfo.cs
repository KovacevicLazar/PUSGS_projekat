using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebProjekat.Models
{
    public class ReservationCarInfo
    {
        public int IdRes { get; set; }
        public int NumberOfDays { get; set; }
        public DateTime PickUpDate { get; set; }
        public DateTime ReturnDate { get; set; }
        public int TotalPrice { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
    }
}
