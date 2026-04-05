using TrybeHotel.Models;
using TrybeHotel.Dto;

namespace TrybeHotel.Repository
{
    public class RoomRepository : IRoomRepository
    {
        protected readonly ITrybeHotelContext _context;
        public RoomRepository(ITrybeHotelContext context)
        {
            _context = context;
        }

        // 6. Desenvolva o endpoint GET /room/:hotelId
        public IEnumerable<RoomDto> GetRooms(int HotelId)
        {
          return _context.Rooms
            .Where(room => room.HotelId == HotelId)
            .Select(room => new RoomDto
            {
              RoomId = room.RoomId,
              Name = room.Name,
              Capacity = room.Capacity,
              Image = room.Image,

              Hotel = new HotelDto
              {
                HotelId = room.Hotel!.HotelId,
                Name = room.Hotel.Name,
                Address = room.Hotel.Address,
                CityId = room.Hotel.CityId,
                CityName = room.Hotel.City!.Name,
                State = room.Hotel.City.State
              }
            }).ToList();
        }

        // 7. Desenvolva o endpoint POST /room
        public RoomDto AddRoom(Room room) {
          _context.Rooms.Add(room);
          _context.SaveChanges();

          var hotel = _context.Hotels
            .FirstOrDefault(h => h.HotelId == room.HotelId);

          if (hotel == null)
          {
            throw new Exception("Hotel not found");
          }

          var city = _context.Cities
            .FirstOrDefault(c => c.CityId == hotel.CityId);

          return new RoomDto
          {
            RoomId = room.RoomId,
            Name = room.Name,
            Capacity = room.Capacity,
            Image = room.Image,

            Hotel = new HotelDto
            {
              HotelId = hotel.HotelId,
              Name = hotel.Name,
              Address = hotel.Address,
              CityId = hotel.CityId,
              CityName = city.Name,
              State = city.State
            }
          };
        }

        // 8. Desenvolva o endpoint DELETE /room/:roomId
        public void DeleteRoom(int RoomId) {
          var room = _context.Rooms
              .Where(r => r.RoomId == RoomId)
              .First();

          _context.Rooms.Remove(room);
          _context.SaveChanges();
        }
    }
}
