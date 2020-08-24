using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using WebProjekat.Baza;
using WebProjekat.Models;

namespace WebProjekat.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FlightController : ControllerBase
    {
        private UserManager<User> _userManager;
        private BazaContext _context;
        private readonly ApplicationSettings _appSettings;
        public FlightController(UserManager<User> userManager, IOptions<ApplicationSettings> appSettings, BazaContext bz)
        {
            this._userManager = userManager;
            _appSettings = appSettings.Value;
            _context = bz;
        }

        // POST: api/Flight
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Flight/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }




        [HttpGet]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Route("GetFlightForAirline")]
        public async Task<Object> GetFlightForAirline()
        {

            string userID = User.Claims.ElementAt(0).Value;

            var user = _context.Users.Include(x => x.AirlineComnpany).Where(x => x.Id == userID).ToList().First();
            var company = _context.Airlines.Include(x => x.Flights).Where(x => x.Id == user.AirlineComnpany.Id).ToList().First();
            var listflight = company.Flights.ToList();

            return Ok(new { listflight });
        }

        [HttpPost]

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Route("AddingFlight")]

        public async Task<IActionResult> AddingFlight(Flight flightModel)
        {

            string userID = User.Claims.ElementAt(0).Value;
            var newflight = new Flight()
            {
                FlyingFrom = flightModel.FlyingFrom,
                FlyingTo = flightModel.FlyingTo,
                FlightDistance = flightModel.FlightDistance,
                DateDepart = flightModel.DateDepart,
                DateArrival = flightModel.DateArrival,

                TicketPrice = flightModel.TicketPrice,

                FirstStop = flightModel.FirstStop,
                SecondStop = flightModel.SecondStop,
                ThirdStop = flightModel.ThirdStop

            };

            var user = _context.Users.Include(x => x.AirlineComnpany).Where(x => x.Id == userID).ToList().First();
            var company = _context.Airlines.Include(x => x.Flights).Where(x => x.Id == user.AirlineComnpany.Id).ToList().First();
            company.Flights.Add(newflight);

            _context.Entry(company).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            await _context.SaveChangesAsync();


            return Ok(new { message = "Successfully Adding" });
        }




        [HttpGet]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Route("DeleteFlightFromList/{id}")]

        public async Task<Object> DeleteFlightFromList(int id)
        {
            var flight = _context.Flights.Where(x => x.Id == id).ToList().First();
            _context.Flights.Remove(flight);
            _context.Entry(flight).State = Microsoft.EntityFrameworkCore.EntityState.Deleted;
            await _context.SaveChangesAsync();

            return Ok();
        }


        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Route("saveChangesOnFlight/{id}")]
        public async Task<IActionResult> SaveChangesOnFlight(Flight flightModel, int id)
        {
            var s = "";
            var flight = _context.Flights.Where(x => x.Id == id).ToList().First();


            flight.FlyingFrom = flightModel.FlyingFrom;
            flight.FlyingTo = flightModel.FlyingTo;
            flight.FlightDistance = flightModel.FlightDistance;
            flight.DateDepart = flightModel.DateDepart;
            flight.DateArrival = flightModel.DateArrival;

            flight.TicketPrice = flightModel.TicketPrice;

            flight.FirstStop = flightModel.FirstStop;
            flight.SecondStop = flightModel.SecondStop;
            flight.ThirdStop = flightModel.ThirdStop;


            _context.Entry(flight).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            await _context.SaveChangesAsync();

            return Ok();
        }


        [HttpGet]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Route("GetCompanyInfo")]

        public async Task<Object> GetCompanyInfo()
        {
            string userID = User.Claims.ElementAt(0).Value;
            var user = _context.Users.Include(x => x.AirlineComnpany).Where(x => x.Id == userID).ToList().First();
            var comp = _context.Airlines.Where(x => x.Id == user.AirlineComnpany.Id).ToList().First();

            return Ok(new { comp });
        }

        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Route("SaveChangeInfo")]

        public async Task<IActionResult> SaveChangeInfo(Airline rentcarmodel)
        {
            var airline = _context.Airlines.Where(x => x.Id == rentcarmodel.Id).ToList().First();

            airline.CompanyName = rentcarmodel.CompanyName;
            airline.Description = rentcarmodel.Description;
            airline.Adress = rentcarmodel.Adress;

            _context.Entry(airline).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpGet]
        [Route("GetSearchedFlights/{flyingfrom}/{flyingTo}/{dateDepart}/{numberOfSeat}/{dateArrival}")]

        public async Task<Object> GetSearchedFlights(string flyingfrom, string flyingTo, string dateDepart, int numberOfSeat, string dateArrival)
        {
            List<Flight> Retflights = new List<Flight>();
            if (flyingfrom == "" && flyingTo == "" && dateDepart == "")
            {
                return BadRequest();
            }
            else
            {
                var DateDepart = DateTime.Parse(dateDepart);
                DateTime DateArrival;
                if (dateArrival != "-")
                {
                    DateArrival = DateTime.Parse(dateArrival);
                }

                var flights = _context.Flights.Where(x => x.FlyingFrom.ToUpper() == flyingfrom.ToUpper() && x.FlyingTo.ToUpper() == flyingTo.ToUpper() && x.VacantSeats >= numberOfSeat).ToList();

                foreach (Flight flight in flights)
                {
                    if (flight.DateDepart >= DateDepart && flight.DateDepart <= DateDepart.AddDays(3)) // period od 3 dana
                    {
                        Retflights.Add(flight);
                    }
                }
            }


            return Ok(new { Retflights });
        }

        [HttpGet]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Route("GetFlightWithId/{id}")]

        public async Task<Object> GetFlightWithId(int id)
        {
            var flight = _context.Flights.Where(x => x.Id == id).ToList().First();

            return Ok(new { flight });
        }

        [HttpPost]

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Route("SeatReservation")]

        public async Task<Object> SeatReservation(ReservedSeat reservation)
        {
            ReservedSeat seat = new ReservedSeat();
            seat.SeatName = reservation.SeatName;
            seat.SurnameOfUser = reservation.SurnameOfUser;
            seat.NameOfUser = reservation.NameOfUser;
            seat.passportNumberOfUser = reservation.passportNumberOfUser;
            //var UserId2 = reservation.UserId;
            string userID = User.Claims.ElementAt(0).Value;
            var user = _context.Users.Where(x => x.Id == userID).ToList().First();

            if (userID == reservation.UserId) //rezervise za sebe
            {
                user.ReservedSeats.Add(seat);
                _context.Entry(user).State = Microsoft.EntityFrameworkCore.EntityState.Modified;

            }
            else //salje zahtev prijatelju
            {

            }
            var result = await _context.SaveChangesAsync();
            return Ok(new { result });
        }



    }
}
