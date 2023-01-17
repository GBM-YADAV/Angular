using Microsoft.EntityFrameworkCore;

namespace WEBAPI_With_LTIDB.Models
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext>options):base(options)
        {

        }
        public DbSet<Product>Products { get; set; }
        public DbSet<Category> Categories { get; set; }
    }
}
