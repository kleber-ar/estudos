namespace TrybeHotel.Test;

using Microsoft.AspNetCore.Mvc.Testing;
using Newtonsoft.Json;
using TrybeHotel.Models;
using TrybeHotel.Repository;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System.Text;
using System.Net;
using System.Net.Http.Headers;

public class IntegrationTest : IClassFixture<WebApplicationFactory<Program>>
{
    public HttpClient _clientTest;

    public IntegrationTest(WebApplicationFactory<Program> factory)
    {
        _clientTest = factory.WithWebHostBuilder(builder =>
        {
            builder.ConfigureServices(services =>
            {
                var descriptor = services.SingleOrDefault(
                    d => d.ServiceType == typeof(DbContextOptions<TrybeHotelContext>)
                );

                if (descriptor != null)
                {
                    services.Remove(descriptor);
                }

                services.AddDbContext<ContextTest>(options =>
                {
                    options.UseInMemoryDatabase("InMemoryTestDatabase");
                });

                services.AddScoped<ITrybeHotelContext, ContextTest>();
                services.AddScoped<ICityRepository, CityRepository>();
                services.AddScoped<IHotelRepository, HotelRepository>();
                services.AddScoped<IRoomRepository, RoomRepository>();
                services.AddScoped<IUserRepository, UserRepository>();
                services.AddScoped<IBookingRepository, BookingRepository>();

                var sp = services.BuildServiceProvider();

                using (var scope = sp.CreateScope())
                using (var appContext = scope.ServiceProvider.GetRequiredService<ContextTest>())
                {
                    appContext.Database.EnsureDeleted();
                    appContext.Database.EnsureCreated();

                    // Cities
                    appContext.Cities.Add(new City { CityId = 1, Name = "Manaus" });
                    appContext.Cities.Add(new City { CityId = 2, Name = "Palmas" });

                    // Hotels
                    appContext.Hotels.Add(new Hotel { HotelId = 1, Name = "Trybe Hotel Manaus", Address = "Address 1", CityId = 1 });
                    appContext.Hotels.Add(new Hotel { HotelId = 2, Name = "Trybe Hotel Palmas", Address = "Address 2", CityId = 2 });

                    // Rooms
                    appContext.Rooms.Add(new Room { RoomId = 1, Name = "Room 1", Capacity = 2, Image = "Image 1", HotelId = 1 });
                    appContext.Rooms.Add(new Room { RoomId = 2, Name = "Room 2", Capacity = 3, Image = "Image 2", HotelId = 1 });

                    // Users
                    appContext.Users.Add(new User { UserId = 1, Name = "Ana", Email = "ana@trybehotel.com", Password = "Senha1", UserType = "admin" });
                    appContext.Users.Add(new User { UserId = 2, Name = "Beatriz", Email = "beatriz@trybehotel.com", Password = "Senha2", UserType = "client" });
                    appContext.Users.Add(new User { UserId = 3, Name = "Laura", Email = "laura@trybehotel.com", Password = "Senha3", UserType = "client" });

                    // Bookings
                    appContext.Bookings.Add(new Booking
                    {
                        BookingId = 1,
                        CheckIn = new DateTime(2023, 07, 02),
                        CheckOut = new DateTime(2023, 07, 03),
                        GuestQuant = 1,
                        UserId = 2,
                        RoomId = 1
                    });

                    appContext.SaveChanges();
                }
            });
        }).CreateClient();
    }

    // =========================
    // TESTES BÁSICOS
    // =========================

    [Theory]
    [InlineData("/city")]
    [InlineData("/hotel")]
    public async Task TestGet(string url)
    {
        var response = await _clientTest.GetAsync(url);
        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
    }

    [Fact]
    public async Task TestPostCity()
    {
        var city = new { Name = "Recife" };

        var response = await _clientTest.PostAsync("/city",
            new StringContent(JsonConvert.SerializeObject(city), Encoding.UTF8, "application/json"));

        Assert.Equal(HttpStatusCode.Created, response.StatusCode);
    }

    [Fact]
    public async Task TestPostHotel()
    {
        var hotel = new { Name = "Hotel Recife", Address = "Rua 1", CityId = 1 };

        var response = await _clientTest.PostAsync("/hotel",
            new StringContent(JsonConvert.SerializeObject(hotel), Encoding.UTF8, "application/json"));

        Assert.Equal(HttpStatusCode.Created, response.StatusCode);
    }

    [Fact]
    public async Task TestPostRoom()
    {
        var room = new { Name = "Room Test", Capacity = 2, Image = "Image Test", HotelId = 1 };

        var response = await _clientTest.PostAsync("/room",
            new StringContent(JsonConvert.SerializeObject(room), Encoding.UTF8, "application/json"));

        Assert.Equal(HttpStatusCode.Created, response.StatusCode);
    }

    [Fact]
    public async Task TestDeleteRoom()
    {
        var response = await _clientTest.DeleteAsync("/room/1");
        Assert.Equal(HttpStatusCode.NoContent, response.StatusCode);
    }

    // =========================
    // LOGIN
    // =========================

    [Fact]
    public async Task TestLogin()
    {
        var input = new { Email = "beatriz@trybehotel.com", Password = "Senha2" };

        var response = await _clientTest.PostAsync("/login",
            new StringContent(JsonConvert.SerializeObject(input), Encoding.UTF8, "application/json"));

        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
    }

    // =========================
    // USER
    // =========================

    [Fact]
    public async Task TestGetUsers()
    {
        var login = new { Email = "ana@trybehotel.com", Password = "Senha1" };

        var resLogin = await _clientTest.PostAsync("/login",
            new StringContent(JsonConvert.SerializeObject(login), Encoding.UTF8, "application/json"));

        var jsonLogin = JsonConvert.DeserializeObject<LoginJson>(
            await resLogin.Content.ReadAsStringAsync());

        _clientTest.DefaultRequestHeaders.Authorization =
            new AuthenticationHeaderValue("Bearer", jsonLogin.token);

        var response = await _clientTest.GetAsync("/user");

        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
    }

    [Fact]
    public async Task TestGetUsersUnauthorized()
    {
        var login = new { Email = "beatriz@trybehotel.com", Password = "Senha2" };

        var resLogin = await _clientTest.PostAsync("/login",
            new StringContent(JsonConvert.SerializeObject(login), Encoding.UTF8, "application/json"));

        var jsonLogin = JsonConvert.DeserializeObject<LoginJson>(
            await resLogin.Content.ReadAsStringAsync());

        _clientTest.DefaultRequestHeaders.Authorization =
            new AuthenticationHeaderValue("Bearer", jsonLogin.token);

        var response = await _clientTest.GetAsync("/user");

        Assert.Equal(HttpStatusCode.Unauthorized, response.StatusCode);
    }

    // =========================
    // BOOKING
    // =========================

    [Fact]
    public async Task TestGetBooking()
    {
        var login = new { Email = "beatriz@trybehotel.com", Password = "Senha2" };

        var resLogin = await _clientTest.PostAsync("/login",
            new StringContent(JsonConvert.SerializeObject(login), Encoding.UTF8, "application/json"));

        var jsonLogin = JsonConvert.DeserializeObject<LoginJson>(
            await resLogin.Content.ReadAsStringAsync());

        _clientTest.DefaultRequestHeaders.Authorization =
            new AuthenticationHeaderValue("Bearer", jsonLogin.token);

        var response = await _clientTest.GetAsync("/booking/1");

        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
    }

    [Fact]
    public async Task TestGetBookingUnauthorized()
    {
        var login = new { Email = "laura@trybehotel.com", Password = "Senha3" };

        var resLogin = await _clientTest.PostAsync("/login",
            new StringContent(JsonConvert.SerializeObject(login), Encoding.UTF8, "application/json"));

        var jsonLogin = JsonConvert.DeserializeObject<LoginJson>(
            await resLogin.Content.ReadAsStringAsync());

        _clientTest.DefaultRequestHeaders.Authorization =
            new AuthenticationHeaderValue("Bearer", jsonLogin.token);

        var response = await _clientTest.GetAsync("/booking/1");

        Assert.Equal(HttpStatusCode.Unauthorized, response.StatusCode);
    }
}

// =========================
// DTO AUXILIAR
// =========================

public class LoginJson
{
    public string token { get; set; } = string.Empty;
}
