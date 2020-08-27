using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebProjekat.Models;

namespace WebProjekat.Baza
{
    public class BazaContext : DbContext
    {
        public BazaContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<User> Users { get; set; }
        public DbSet<FriendRequest> FriendRequests { get; set; }

        public DbSet<RentCarCompany> RentCarCompanies { get; set; }

        public DbSet<Airline> Airlines { get; set; }
        public DbSet<Car> Cars { get; set; }
        public DbSet<Flight> Flights { get; set; }

        public DbSet<CarReservation> CarReservations { get; set; }

        public DbSet<ReservedSeat> ReservedSeats { get; set; }
        public DbSet<SeatReservationRequest> SeatReservationRequests { get; set; }

        public DbSet<FlightMark> FlightMarks { get; set; }

        public DbSet<CarMark> CarMarks { get; set; }


    }
}
