﻿using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Microsoft.VisualStudio.Web.CodeGeneration.Contracts.Messaging;
using WebProjekat.Baza;
using WebProjekat.Models;

namespace WebProjekat.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private UserManager<User> _userManager;
        private BazaContext _context;
        private readonly ApplicationSettings _appSettings;
        public UserController(UserManager<User> userManager, IOptions<ApplicationSettings> appSettings, BazaContext bz)
        {
            this._userManager = userManager;
            _appSettings = appSettings.Value;
            _context = bz;
        }

        // GET: api/User
        [HttpGet]
        public async Task<Object> Get()
        {
            var userr = _userManager.FindByEmailAsync("superadmin@gmail.com");
            if (userr.Result == null)
            {
                var user = new User()
                {
                    UserName = "superadmin",
                    Role = UserRole.SystemAdmin,
                    PhoneNumber = "000000000000",

                    Name = "superadmin",
                    Surname = "superadmin",
                    Address = "superadmin",
                    Email = "superadmin@gmail.com"

                };
                try
                {
                    var result = await _userManager.CreateAsync(user, "password");


                }
                catch (Exception ex)
                {
                    throw ex;
                }


            }
            return new string[] { "value1", "value2" };
        }

        // GET: api/User/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/User
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/User/5
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
        [Route("Register")]
        public async Task<Object> Register(UserSignUp model)
        {

            var kk = await _userManager.FindByEmailAsync(model.Email);
            if (kk == null)
            {
                var applicationUser = new User()
                {
                    UserName = model.Username,
                    Email = model.Email,
                    Name = model.Name,
                    Surname = model.Surname,
                    PhoneNumber = model.PhoneNumber,
                    Address = model.Address,
                    Role = UserRole.Registred,

                };

                try
                {
                    var result = await _userManager.CreateAsync(applicationUser, model.Password);

                    return Ok(result);
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            else
            {
                return BadRequest(new { message = "Email already exist" });
            }
        }

        [HttpPost]
        [Route("SendRequest")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> SendRequest(UserRequest userId)
        {
            string UserId = User.Claims.First().Value;

            User user = _context.Users.Include(x => x.Friends).Where(x => x.Id == UserId).ToList().First();
            FriendRequest friendRequest = new FriendRequest();


            friendRequest.UserId2 = userId.UserId2;
            friendRequest.Status = StatusFriendRequest.OnWait;

            user.Friends.Add(friendRequest);

            _context.Entry(user).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            await _context.SaveChangesAsync();
            return Ok();

        }



        [HttpGet]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Route("GetUserProfileInfo")]
        public async Task<Object> GetUserProfileInfo()
        {
            string UserId = User.Claims.First().Value;
            var user = await _userManager.FindByIdAsync(UserId);
            UserSignUp userinfo = new UserSignUp();
            userinfo.PhoneNumber = user.PhoneNumber;
            userinfo.Surname = user.Surname;
            userinfo.Username = user.UserName;
            userinfo.Name = user.Name;
            userinfo.Email = user.Email;
            userinfo.Address = user.Address;
            return Ok(new { userinfo });
        }




        [HttpGet]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Route("GetOtherUsers")]
        public async Task<Object> GetOtherUsers()
        {
            string UserId = User.Claims.First().Value;

            List<User> allOtherUsers = _context.Users.Where(x => x.Id != UserId && x.Role == UserRole.Registred).ToList();

            User user = _context.Users.Include(x => x.Friends).Where(x => x.Id == UserId).ToList().First();

            var FriendRequests = _context.FriendRequests.Where(x => x.UserId == UserId ||  x.UserId2 == UserId).ToList();
            List<int> indexs = new List<int>();

            for (int i = 0; i < FriendRequests.Count; i++)
            {
                for (int j = 0; j < allOtherUsers.Count; j++)
                {
                   if(FriendRequests[i].UserId == UserId)
                   {
                        if(FriendRequests[i].UserId2 == allOtherUsers[j].Id)
                        {
                            indexs.Add(j);
                        }
                   }
                   else if (FriendRequests[i].UserId2 == UserId && FriendRequests[i].UserId != null)
                   {
                        if (FriendRequests[i].UserId == allOtherUsers[j].Id)
                        {
                            indexs.Add(j);
                        }
                   }
                }
            }
            for (int i = indexs.Count - 1; i >= 0; i--)
            {
                allOtherUsers.RemoveAt(indexs[i]);
            }
            return Ok(new { allOtherUsers });
        }



        [HttpGet]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Route("GetFriends")]
        public async Task<Object> GetFriends()
        {
            string UserId = User.Claims.First().Value;

            List<User> Friends = new List<User>();
            var FriendRequests = _context.FriendRequests.Where(x => x.UserId == UserId || x.UserId2 == UserId).ToList();
          
            for (int i = 0; i < FriendRequests.Count; i++)
            {
                 if (FriendRequests[i].Status== StatusFriendRequest.Accepted && FriendRequests[i].UserId2==UserId)
                 {
                    if(FriendRequests[i].UserId != null)
                    {
                         User friend = _context.Users.Where(x => x.Id == FriendRequests[i].UserId).ToList().First();
                         Friends.Add(friend);
                    }
                   
                 }
                 else if (FriendRequests[i].Status == StatusFriendRequest.Accepted && FriendRequests[i].UserId == UserId)
                 {
                    User friend = _context.Users.Where(x => x.Id == FriendRequests[i].UserId2).ToList().First();
                    Friends.Add(friend);
                 }
            }

            return Ok(new { Friends });
        }


        [HttpPost]
        [Route("RemoveFriend")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> RemoveFriend(UserRequest friendId)
        {
            string UserId = User.Claims.First().Value;

            var FriendRequests = _context.FriendRequests.Where(x => (x.UserId == UserId && x.UserId2 == friendId.UserId2) || (x.UserId == friendId.UserId2 && x.UserId2 == UserId)).ToList().First();

            if(FriendRequests != null)
            {
                _context.FriendRequests.Remove(FriendRequests);
                _context.Entry(FriendRequests).State = Microsoft.EntityFrameworkCore.EntityState.Deleted;
                await _context.SaveChangesAsync();
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }


        [HttpPost]
        [Route("DeleteRequest")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> DeleteRequest(UserRequest friendId)
        {
            string UserId = User.Claims.First().Value;

            var FriendRequests = _context.FriendRequests.Where(x => x.UserId == friendId.UserId2 && x.UserId2 == UserId).ToList().First();

            if (FriendRequests != null)
            {
                _context.FriendRequests.Remove(FriendRequests);
                _context.Entry(FriendRequests).State = Microsoft.EntityFrameworkCore.EntityState.Deleted;
                await _context.SaveChangesAsync();
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }



        [HttpPost]
        [Route("AcceptFriendRequest")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> AcceptFriendRequest(UserRequest friendId)
        {
            string UserId = User.Claims.First().Value;

            FriendRequest friendRequest = _context.FriendRequests.Where(x => x.UserId2 == UserId && x.UserId == friendId.UserId2).ToList().First();

            if (friendRequest != null && friendRequest.Status == StatusFriendRequest.OnWait)
            {
                   
                friendRequest.Status = StatusFriendRequest.Accepted;
                _context.Entry(friendRequest).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                await _context.SaveChangesAsync();
                return Ok();
           
            }
            else
            {
                return BadRequest();
            }
           
        }


        [HttpGet]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Route("GetFriendRequests")]
        public async Task<Object> GetFriendRequests()
        {
            string UserId = User.Claims.First().Value;
         
            List<User> users = new List<User>(); // korisnici koji su poslali zahtev

            List<FriendRequest> friendRequests = _context.FriendRequests.Where(x => x.UserId2 == UserId && x.Status == StatusFriendRequest.OnWait).ToList();

            for (int i = 0; i < friendRequests.Count; i++)
            {
                if(friendRequests[i].UserId != null)
                {
                    var user = _context.Users.Where(x => x.Id == friendRequests[i].UserId).ToList().First();
                    users.Add(user);
                }
            }

            return Ok(new { users });
        }


        [HttpGet]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Route("GetFriendSentRequest")]
        public async Task<Object> GetFriendSentRequest()
        {
            string UserId = User.Claims.First().Value;

            List<User> users = new List<User>(); // korisnici kojima je poslat zahtev za projateljstvo
            List<FriendRequest> friendRequests = _context.FriendRequests.Where(x => x.UserId == UserId && x.Status == StatusFriendRequest.OnWait).ToList();

            for (int i = 0; i < friendRequests.Count; i++)
            {
               var user = _context.Users.Where(x => x.Id == friendRequests[i].UserId2).ToList().First();
               users.Add(user);
            }

            return Ok(new { users });
        }


        [HttpPost]
        [Route("CancelRequest")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> CancelRequest(UserRequest friendId)
        {
            string UserId = User.Claims.First().Value;

            var FriendRequests = _context.FriendRequests.Where(x => x.UserId == UserId && x.UserId2 == friendId.UserId2).ToList().First();

            if (FriendRequests != null)
            {
                _context.FriendRequests.Remove(FriendRequests);
                _context.Entry(FriendRequests).State = Microsoft.EntityFrameworkCore.EntityState.Deleted;
                await _context.SaveChangesAsync();
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }


        [HttpPost]
        [Route("Login")]
        //POST : /api/User/Login
        public async Task<IActionResult> Login(LoginModel model)
        {
            if (model.Password == null)
            {
                return BadRequest(new { message = "Bad data" });
            }
            if (model.Password.Length < 6)
            {
                return BadRequest(new { message = "Bad data" });
            }
            var user = await _userManager.FindByEmailAsync(model.Email);
            if (user != null && await _userManager.CheckPasswordAsync(user, model.Password))
            {
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new Claim("UserId",user.Id.ToString()),
                        new Claim("Roles", user.Role.ToString()),


                     }),
                    Expires = DateTime.UtcNow.AddDays(1),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_appSettings.JWT_Secret)), SecurityAlgorithms.HmacSha256Signature)
                };
                var tokenHandler = new JwtSecurityTokenHandler();
                var securityToken = tokenHandler.CreateToken(tokenDescriptor);
                var token = tokenHandler.WriteToken(securityToken);

                return Ok(new { token });
            }
            else
                return BadRequest(new { message = "Username or password is incorrect." });
        }

        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Route("AddingAdmin")]

        public async Task<IActionResult> AddingAdmin(AddAdmin userModel)
        {
            string role = User.Claims.ElementAt(1).Value;
            if(role != UserRole.SystemAdmin.ToString())
            {
                return BadRequest(new { message = "Bad data" });
                
            }
            var applicationUser = new User()
            {
                UserName = userModel.AdminUsername,
                Email = userModel.Email,
                Name = "",
                Surname = "",
                PhoneNumber = "",
                Address = userModel.Address,
               

            };

            if (userModel.TypeOfCompany == "airline")
            {
                Airline air = new Airline();
                air.Adress = userModel.Address;
                air.Description = userModel.Description;
                air.CompanyName = userModel.CompanyName;
                applicationUser.Role = UserRole.AirlineAdmin;

                try
                {
                    var result = await _userManager.CreateAsync(applicationUser, userModel.Email);
                    var kk1 = await _userManager.FindByEmailAsync(userModel.Email);
                    kk1.AirlineComnpany = air;


                    _context.Entry(kk1).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                    await _context.SaveChangesAsync();



                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            else
            {
                RentCarCompany carC = new RentCarCompany();
                carC.Adress = userModel.Address;
                carC.Description = userModel.Description;
                carC.CompanyName = userModel.CompanyName;
                applicationUser.Role = UserRole.CarAdmin;

                try
                {
                    var result = await _userManager.CreateAsync(applicationUser, userModel.Email);
                    var kk1 = await _userManager.FindByEmailAsync(userModel.Email);
                    kk1.CarCompany = carC;


                    _context.Entry(kk1).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                    await _context.SaveChangesAsync();



                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            return Ok();
        }


        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Route("SaveProfileInfoChanges")]

        public async Task<IActionResult> SaveProfileInfoChanges(UserSignUp userModel)
        {
            if (userModel.Username == "" || userModel.Username == null)
            {
                return BadRequest(new { message = "Bad data" });
            }
            if (userModel.Email == "" || userModel.Email == null)
            {
                return BadRequest(new { message = "Bad data" });
            }
            if (userModel.Name == "" || userModel.Name == null)
            {
                return BadRequest(new { message = "Bad data" });
            }
            if (userModel.Surname == "" || userModel.Surname == null)
            {
                return BadRequest(new { message = "Bad data" });
            }
            if (userModel.Address == "" || userModel.Address == null)
            {
                return BadRequest(new { message = "Bad data" });
            }
            var user = await _userManager.FindByEmailAsync(userModel.Email);
            if (user != null)
            {
                user.UserName = userModel.Username;
                user.PhoneNumber = userModel.PhoneNumber;
                user.Address = userModel.Address;
                user.Name = userModel.Name;
                user.Surname = userModel.Surname;
                if (userModel.NewPassword.Length >= 6)
                {
                    if (await _userManager.CheckPasswordAsync(user, userModel.Password))
                    {
                        if (userModel.NewPassword == userModel.ConfirmPassword)
                        {
                            var result = await _userManager.ChangePasswordAsync(user, userModel.Password, userModel.NewPassword);
                        }
                        else
                        {
                            return BadRequest(new { message = "Passwords are mismatched." });
                        }
                    }
                    else
                    {
                        return BadRequest(new { message = "Password is incorrect." });
                    }
                }

                _context.Entry((User)user).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                await _context.SaveChangesAsync();
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }



        [HttpGet]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Route("GetCarAdmins")]
        public async Task<Object> GetCarAdmins()
        {
            var users = _context.Users.Include(x => x.CarCompany).Where(x => x.Role == UserRole.CarAdmin).ToList();
            return Ok(new { users });

        }

        [HttpGet]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Route("GetAirAdmins")]
        public async Task<Object> GetAirAdmins()
        {
            var users = _context.Users.Include(x => x.AirlineComnpany).Where(x => x.Role == UserRole.AirlineAdmin).ToList();
            return Ok(new { users });

        }


        [HttpGet]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Route("GetCarReservations")]
        public async Task<Object> GetCarReservations()
        {
            string userId = User.Claims.ElementAt(0).Value;
            var user = _context.Users.Include(x => x.CarReservations).Where(x => x.Id == userId).ToList().First();
            var reservations = user.CarReservations.ToList();





            return Ok(new { reservations});
        }


    }
}