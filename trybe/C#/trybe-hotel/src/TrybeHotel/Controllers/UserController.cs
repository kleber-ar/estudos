using Microsoft.AspNetCore.Mvc;
using TrybeHotel.Dto;
using TrybeHotel.Repository;

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
}
