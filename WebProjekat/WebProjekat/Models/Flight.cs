using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebProjekat.Models
{
    public class Flight
    {
        [Key]
        public int Id { get; set; }

        public string FlyingFrom { get; set; }
        public string FlyingTo { get; set; }
        public DateTime DateDepart { get; set; }
        public DateTime DateArrival { get; set; }

        public int FlightDistance { get; set; }


        public int VacantSeats { get; set; }
        public int BusySeats { get; set; }
        public int TicketPrice { get; set; }

        public string FirstStop { get; set; }
        public string SecondStop { get; set; }
        public string ThirdStop { get; set; }


        // Transitlocations: Array<string>;
        // reservedSeats= new Array<Seat>() ;//['A2', 'A3', 'F5', 'F1', 'F2','F6', 'F7', 'F8'];



    }
}
