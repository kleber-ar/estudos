using TrybeHotel.Dto;
using TrybeHotel.Repository;

namespace TrybeHotel.Services
{
    public interface IGeoService
    {
        Task<object> GetGeoStatus();
    }
}
