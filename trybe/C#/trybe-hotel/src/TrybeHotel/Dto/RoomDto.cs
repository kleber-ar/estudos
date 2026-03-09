using TrybeHotel.Dto;

namespace TrybeHotel.Dto;

public class RoomDto
{
    public int RoomId { get; set; }

    public string Name { get; set; } = string.Empty;

    public int Capacity { get; set; }

    public string Image { get; set; } = string.Empty;

    public HotelDto Hotel { get; set; } = null!;
}
