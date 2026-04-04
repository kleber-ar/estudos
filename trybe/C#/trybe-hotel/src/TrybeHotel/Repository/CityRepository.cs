using TrybeHotel.Models;
using TrybeHotel.Dto;

namespace TrybeHotel.Repository
{
    public class CityRepository : ICityRepository
    {
        protected readonly ITrybeHotelContext _context;
        public CityRepository(ITrybeHotelContext context)
        {
            _context = context;
        }

        // 2. Desenvolva o endpoint GET /city
        public IEnumerable<CityDto> GetCities()
        {
            return _context.Cities.Select(city => new CityDto 
                {
                  CityId = city.CityId,
                  Name = city.Name
                }).ToList();
        }

        // 3. Desenvolva o endpoint POST /city
        public CityDto AddCity(City city)
        {
            _context.Cities.Add(city);
            _context.SaveChanges();

            return new CityDto
            {
              CityId = city.CityId,
              Name = city.Name,
              State = city.State
            };
        }

        public CityDto UpdateCity(City city)
        {
           var existingCity = _context.Cities.FirstOrDefault(c => c.CityId == city.CityId);
           if (existingCity == null)
           {
             throw new Exception("City not found");
           }

           existingCity.Name = city.Name;
           existingCity.State = city.State;

           _context.SaveChanges();

          return new CityDto
          {
            CityId = existingCity.CityId,
            Name = existingCity.Name,
            State = existingCity.State
          };
        }

    }
}
