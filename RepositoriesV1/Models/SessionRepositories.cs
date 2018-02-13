using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RepositoriesV1.Models
{
    //this model class holding the data of the repository item 
    public class SessionRepositories
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string AvatarUrl { get; set; }
    }
}