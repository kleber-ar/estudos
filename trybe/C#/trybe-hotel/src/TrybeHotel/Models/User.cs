namespace TrybeHotel.Models;

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class User {
  [Key]
  public int UserId { get; set; }

  public string Name { get; set; } = string.Empty;

  public string Email { get; set; } = string.Empty;

  public string Password { get; set; } = string.Empty;

  public string UserType { get; set; } = string.Empty;

  // 1:N → Um usuário tem várias reservas
  public ICollection<Booking>? Bookings {get; set;}
}
