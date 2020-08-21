using System;
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
using Microsoft.Extensions.Options;
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
            var company = _context.RentCarCompanies.Include(x=> x.Cars).Where(x => x.Id == user.CarCompany.Id).ToList().First();
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

            return Ok(new { listcar});
        }

        [HttpGet]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Route("GetCarWithId/{id}")]

        public async Task<Object> GetCarWithId(int id)
        {
            var car = _context.Cars.Where(x => x.Id == id).ToList().First();

            return Ok(new { car});
        }


        [HttpPost]

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Route("SaveChangesOnCar/{id}")]
        public async Task<IActionResult> SaveChangesOnCar(Car carModel,int id)
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
    }
}
