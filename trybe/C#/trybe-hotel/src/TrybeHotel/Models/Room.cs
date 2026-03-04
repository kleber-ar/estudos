namespace TrybeHotel.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

// 1. Implemente as models da aplicação
public class Room {
  [Key]
  public int RoomId { get; set; }

  [Required]
  public string Name { get; set; } = string.Empty;

  public int Capacity {get; set;}

  public string Image { get; set; } = string.Empty;

  public int HotelId { get; set; }

  public Hotel? Hotel { get; set; }
}
