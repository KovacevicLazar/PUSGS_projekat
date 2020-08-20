using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebProjekat.Models
{
    public class FriendRequest
    {
        [Key]
        public int Id { get; set; }
        public string UserId2 { get; set; }
        public StatusFriendRequest Status { get; set; }



    }
}
