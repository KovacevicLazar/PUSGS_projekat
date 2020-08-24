﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query.Expressions;
using Microsoft.Extensions.Options;
using Microsoft.VisualStudio.Web.CodeGeneration.Contracts.Messaging;
using WebProjekat.Baza;
using WebProjekat.Models;

namespace WebProjekat.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RentCarController : ControllerBase
    {
        // GET: api/RentCar
        private UserManager<User> _userManager;
        private BazaContext _context;
        private readonly ApplicationSettings _appSettings;
        public RentCarController(UserManager<User> userManager, IOptions<ApplicationSettings> appSettings, BazaContext bz)
        {
            this._userManager = userManager;
            _appSettings = appSettings.Value;
            _context = bz;
        }


        // GET: api/RentCar/5


        // POST: api/RentCar
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/RentCar/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        [HttpPost]

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Route("AddingCar")]

        public async Task<IActionResult> AddingCar(Car carModel)
        {

            string userID = User.Claims.ElementAt(0).Value;
            var newCar = new Car()
            {
                BabySeats = carModel.BabySeats,
                Location = carModel.Location,
                NumberOfSeats = carModel.NumberOfSeats,
                Year = carModel.Year,
                Model = carModel.Model,
                PricePerDay = carModel.PricePerDay,
                Brand = carModel.Brand


            };

            var user = _context.Users.Include(x => x.CarCompany).Where(x => x.Id == userID).ToList().First();
            var company = _context.RentCarCompanies.Include(x => x.Cars).Where(x => x.Id == user.CarCompany.Id).ToList().First();
            company.Cars.Add(newCar);

            _context.Entry(company).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            await _context.SaveChangesAsync();


            return Ok();
        }

        [HttpGet]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Route("GetCarForCompany")]
        public async Task<Object> a()
        {
            string userID = User.Claims.ElementAt(0).Value;

            var user = _context.Users.Include(x => x.CarCompany).Where(x => x.Id == userID).ToList().First();
            var company = _context.RentCarCompanies.Include(x => x.Cars).Where(x => x.Id == user.CarCompany.Id).ToList().First();
            var listcar = company.Cars.ToList();

            return Ok(new { listcar });
        }

        [HttpGet]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Route("GetCarWithId/{id}")]

        public async Task<Object> GetCarWithId(int id)
        {
            var car = _context.Cars.Where(x => x.Id == id).ToList().First();

            return Ok(new { car });
        }


        [HttpPost]

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Route("SaveChangesOnCar/{id}")]
        public async Task<IActionResult> SaveChangesOnCar(Car carModel, int id)
        {
            var car = _context.Cars.Where(x => x.Id == id).ToList().First();



            car.BabySeats = carModel.BabySeats;
            car.Location = carModel.Location;
            car.NumberOfSeats = carModel.NumberOfSeats;
            car.Year = carModel.Year;
            car.Model = carModel.Model;
            car.PricePerDay = carModel.PricePerDay;
            car.Brand = carModel.Brand;






            _context.Entry(car).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            await _context.SaveChangesAsync();


            return Ok();
        }

        [HttpGet]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Route("DeleteCarFromList/{id}")]

        public async Task<Object> DeleteCarFromList(int id)
        {
            var car = _context.Cars.Where(x => x.Id == id).ToList().First();
            _context.Cars.Remove(car);
            _context.Entry(car).State = Microsoft.EntityFrameworkCore.EntityState.Deleted;
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpGet]
        [Route("GetAllCarCompanies")]

        public async Task<Object> GetAllCarCompanies()
        {
            var allCompanies = _context.RentCarCompanies.ToList();
            return Ok(new { allCompanies });
        }

        [HttpGet]
        [Route("GetDescription/{id}")]

        public async Task<Object> GetDescription(int id)
        {
            var description = _context.RentCarCompanies.Where(x => x.Id == id).ToList().First().Description;

            return Ok(new { description });
        }

        [HttpGet]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Route("GetCompanyInfo")]

        public async Task<Object> GetCompanyInfo()
        {
            string userID = User.Claims.ElementAt(0).Value;
            var user = _context.Users.Include(x => x.CarCompany).Where(x => x.Id == userID).ToList().First();
            var comp = _context.RentCarCompanies.Where(x => x.Id == user.CarCompany.Id).ToList().First();

            return Ok(new { comp });
        }

        [HttpPost]

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Route("SaveChangeInfo")]

        public async Task<IActionResult> SaveChangeInfo(RentCarCompany rentcarmodel)
        {
            var rccomp = _context.RentCarCompanies.Where(x => x.Id == rentcarmodel.Id).ToList().First();

            rccomp.CompanyName = rentcarmodel.CompanyName;
            rccomp.Description = rentcarmodel.Description;
            rccomp.Adress = rentcarmodel.Adress;

            _context.Entry(rccomp).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpGet]
        
        [Route("ShowBranches/{id}")]

        public async Task<Object> ShowBranches(int id)
        {
            var company = _context.RentCarCompanies.Include(x => x.Cars).Where(x => x.Id == id).ToList().First();
            var listcar = company.Cars.ToList();
            return Ok(new { listcar });
        }

        [HttpGet]
        [Route("GetSearchedCars/{location}/{pickUpDate1}/{numberOfSeats}/{babySeats}")]
       
        public async Task<Object> GetSearchedCars(string location,string pickUpDate1,int numberOfSeats,int babySeats)
        {
            List<Car> cars = null;
            if(location != "_")
            {
                cars = _context.Cars.Include(x =>x.CarReservations).Where(x => x.Location == location).ToList();
            }
            if(pickUpDate1 != "")
            {
                DateTime pickUpDate =  DateTime.Parse(pickUpDate1.Replace("_", " "));
                if(cars == null)
                {
                    cars = new List<Car>();
                   var cars1 = _context.Cars.Include(x => x.CarReservations).ToList();
                    foreach (var item in cars1)
                    {
                        bool test = false;
                        foreach (var item1 in item.CarReservations)
                        {
                            if(item1.PickupDate <= pickUpDate && item1.ReturnDate >= pickUpDate)
                            {
                                test = true;
                            }
                        }

                        if(test != true)
                        {
                            cars.Add(item);
                        }
                    }
                }
                else
                {
                    var cars1 = cars;
                    cars = new List<Car>();

                    foreach (var item in cars1)
                    {
                        bool test = false;
                        foreach (var item1 in item.CarReservations)
                        {
                            if (item1.PickupDate <= pickUpDate && item1.ReturnDate >= pickUpDate)
                            {
                                test = true;
                            }
                        }

                        if (test != true)
                        {
                            cars.Add(item);
                        }
                    }

                }
            }

            if(numberOfSeats != 0)
            {
                if(cars == null)
                {

                    cars = _context.Cars.Include(x => x.CarReservations).Where(x => x.NumberOfSeats >= numberOfSeats).ToList();
                }
                else
                {
                    var cars1 = cars;
                    cars = new List<Car>();

                    foreach (var item in cars1)
                    {
                        if(item.NumberOfSeats >= numberOfSeats)
                        {
                            cars.Add(item);
                        }
                    }
                }
            }

            if (babySeats != 0)
            {
                if (cars == null)
                {

                    cars = _context.Cars.Include(x => x.CarReservations).Where(x => x.BabySeats >= babySeats).ToList();
                }
                else
                {
                    var cars1 = cars;
                    cars = new List<Car>();

                    foreach (var item in cars1)
                    {
                        if (item.BabySeats >= babySeats)
                        {
                            cars.Add(item);
                        }
                    }
                }
            }
            if(cars == null)
            {
                cars = _context.Cars.ToList();
            }
            return Ok(new { cars});
        }

        [HttpPost]

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Route("CarReservation")]

        public async Task<Object> CarReservation(MakeReservationcs reservation)
        {
            var car = _context.Cars.Include(x => x.CarReservations).Where(x => x.Id == reservation.CarId).ToList().First();
            bool test = false;
            string userID = User.Claims.ElementAt(0).Value;
            var user = _context.Users.Include(x => x.CarReservations).Where(x => x.Id == userID).ToList().First();
            foreach (var item in car.CarReservations)
            {
                if (reservation.PickupDate > item.PickupDate && reservation.PickupDate < item.ReturnDate)
                {
                    test = true;
                    break;
                }

                if (reservation.PickupDate > item.PickupDate && reservation.ReturnDate < item.ReturnDate)
                {
                    test = true;
                    break;
                }



                if (reservation.PickupDate < item.PickupDate && reservation.ReturnDate > item.PickupDate)
                {
                    test = true;
                    break;
                }

                if (reservation.PickupDate < item.PickupDate && reservation.ReturnDate > item.ReturnDate)
                {
                    test = true;
                    break;
                }




            }
            if (test)
            {
                return BadRequest(new { message = "Already reserved in this period" });
            }
            else {
                var carreservation = new CarReservation();
                carreservation.NumberOfDays = reservation.NumberOfDays;
                carreservation.PickupDate = reservation.PickupDate;
                carreservation.ReturnDate = reservation.ReturnDate;
                carreservation.TotalPrice = reservation.NumberOfDays * car.PricePerDay;
                carreservation.Location = car.Location;
                carreservation.Brand = car.Brand;
                carreservation.Model = car.Model;
                car.CarReservations.Add(carreservation);
                user.CarReservations.Add(carreservation);
                _context.Entry(car).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                _context.Entry(user).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
               var result= await _context.SaveChangesAsync();
                return Ok(new { result });
            }
           
        }

    }
}