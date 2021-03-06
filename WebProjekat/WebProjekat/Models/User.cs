﻿using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebProjekat.Models
{
    public class User : IdentityUser
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Address { get; set; }
        public UserRole Role { get; set; }

        
        public ICollection<FriendRequest> Friends { get; set; }
       
        public Airline AirlineComnpany { get; set; }
        public RentCarCompany CarCompany { get; set; }

        public ICollection<CarReservation> CarReservations { get; set; }

        public ICollection<ReservedSeat> ReservedSeats { get; set; }
        
        public ICollection<SeatReservationRequest> SeatReservationRequests { get; set; }


        public ICollection<FlightMark> FlightMarks { get; set; }

        public ICollection<CarMark> CarMarks { get; set; }

        public bool isConfirmed { get; set; }


    }
}
