namespace code_first.Models
{
    public sealed class Product
    {
      public int ProductId { get; set; }
      public string? Name { get; set; }
      public int CategoryId { get; set; }
      public Category? Category { get; set; }
    }
}
