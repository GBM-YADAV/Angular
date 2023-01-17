using System.ComponentModel.DataAnnotations;

namespace WEBAPI_With_LTIDB.Models
{
    public class Category
    {
        [Key]
        public int catid { get; set; }
        public string category { get; set; }
    }
}
