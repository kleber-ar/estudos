using Microsoft.EntityFrameworkCore;

namespace EShop.Models
{
    public class EShopContext : DbContext
    {
        public DbSet<Client> Clients { get; set; }
        public DbSet<Order> Orders { get; set; }

        public EShopContext(DbContextOptions<EShopContext> options)
             : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder ob)
        {
            ob.UseInMemoryDatabase("EShopDb");
        }

        protected override void OnModelCreating(ModelBuilder mb)
        {
            // Sua lógica aqui
        }
    }
}
