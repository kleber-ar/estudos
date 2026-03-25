using Microsoft.AspNetCore.Mvc;
using TrybeHotel.Models;
using TrybeHotel.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Http;
using System.Security.Claims;
using TrybeHotel.Dto;


[ApiController]
[Route("user")]
public class UserController : ControllerBase
{
    private readonly IUserRepository _repository;

    public UserController(IUserRepository repository)
    {
        _repository = repository;
    }

    [HttpPost]
    public IActionResult Add([FromBody] UserDtoInsert user)
    {
        try
        {
            var result = _repository.Add(user);
            return Created("", result); // 201
        }
        catch (Exception ex)
        {
            return Conflict(new { message = ex.Message }); // 409
        }
    }

    [HttpGet]
    [Authorize(Policy = "Admin")]
      public IActionResult GetUsers(){
        var users = _repository.GetUsers();
        return Ok(users);
      }

}
