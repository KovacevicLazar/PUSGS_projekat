using System;
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

            List<User> allOtherUsers = _context.Users.Where(x => x.Id != UserId).ToList();

            User user = _context.Users.Include(x => x.Friends).Where(x => x.Id == UserId).ToList().First();
            List<int> indexs = new List<int>();
            for (int i = 0; i < user.Friends.ToList().Count; i++)
            {
                for (int j = 0; j < allOtherUsers.Count; j++)
                {
                    bool found = false;
                    if (user.Friends.ToList()[i].UserId2 == allOtherUsers[j].Id)
                    {
                        found = true;
                    }
                    if (found)
                    {
                        indexs.Add(j);
                    }
                }
            }
            for (int i = indexs.Count - 1; i >= 0; i--)
            {
                allOtherUsers.RemoveAt(indexs[i]);
            }


            return Ok(new { allOtherUsers });
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



    }
}
