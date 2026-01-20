using Microsoft.AspNetCore.Mvc;
using CustomerCrud.Core;
using CustomerCrud.Requests;
using CustomerCrud.Repositories;

namespace CustomerCrud.Controllers;

//REQ 1: Método GetAll

[ApiController]
[Route("customers")]
public class CustomerController : ControllerBase
{
  private readonly ICustomerRepository _repository;

  public CustomerController(ICustomerRepository repository)
  {
    _repository = repository;
  }

  [HttpGet]
  public ActionResult GetAll()
  {
    var customers = _repository.GetAll();
    return Ok(customers);
  }

//REQ 2: Método GetById

  [HttpGet("{id}", Name = "GetById")]
  public ActionResult GetById(int id)
  {
    var customer = _repository.GetById(id);
    if (customer == null) return NotFound("Customer not found");
    return Ok(customer);
  }

//REQ 3: Método create

  [HttpPost]
  public ActionResult Create(CustomerRequest request)
  {
    var id = _repository.GetNextIdValue();
    var customer = new Customer(id, request);
    _repository.Create(customer);

    return CreatedAtAction("GetById", new { id = customer.Id }, customer);
    }
}
