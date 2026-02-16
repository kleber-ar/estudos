using code_first.Models;

namespace code_first
{
    public class Program
    {
        public static void Main(string[] args)
        {
            using(var ctx = new MarketContext())
            {
                ctx.Database.EnsureCreated();
                var category = new Category() { Id = 1, Name = "Alimentos" };
                var prod = new Product() { Name = "Cookie", CategoryId = 1 };

                ctx.Categories.Add(category);
                ctx.Products.Add(prod);
                ctx.SaveChanges();
            }
        }
    }
}

