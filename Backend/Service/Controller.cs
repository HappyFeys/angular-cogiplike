using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.JsonPatch;
using System.Linq;

[ApiController]
[Route("[controller]")]
public class ClientController : ControllerBase
{
    [HttpGet("global")]
    public IActionResult GetClients([FromQuery] string search = "", [FromQuery] string sort = "", [FromQuery] int page = 1, [FromQuery] int pageSize = 10)
    {
        var clients = BDD.Clients.AsQueryable();

        if (!string.IsNullOrEmpty(search))
        {
            clients = clients.Where(c => c.Nom.Contains(search) || c.Prenom.Contains(search));
        }

        if (!string.IsNullOrEmpty(sort))
        {
            clients = sort switch
            {
                "nom" => clients.OrderBy(c => c.Nom),
                "prenom" => clients.OrderBy(c => c.Prenom),
                _ => clients
            };
        }

        var paginatedClients = clients.Skip((page - 1) * pageSize).Take(pageSize).ToList();

        return Ok(paginatedClients);
    }

    [HttpGet("specifique/{id}")]
    public IActionResult GetClient(int id)
    {
        var client = BDD.Clients.FirstOrDefault(c => c.Id == id);
        if (client == null)
        {
            return NotFound();
        }
        return Ok(client);
    }

    [HttpPatch("specifique/{id}")]
    public IActionResult UpdateClient(int id, [FromBody] JsonPatchDocument<Client> patchDoc)
    {
        var client = BDD.Clients.FirstOrDefault(c => c.Id == id);
        if (client == null)
        {
            return NotFound();
        }

        patchDoc.ApplyTo(client);
        return Ok(client);
    }

    [HttpPost("global")]
    public IActionResult AddClient([FromBody] Client newClient)
    {
        newClient.Id = BDD.Clients.Count > 0 ? BDD.Clients.Max(c => c.Id) + 1 : 1;
        BDD.Clients.Add(newClient);
        return CreatedAtAction(nameof(GetClient), new { id = newClient.Id }, newClient);
    }

    [HttpDelete("global/{id}")]
    public IActionResult DeleteClient(int id)
    {
        var client = BDD.Clients.FirstOrDefault(c => c.Id == id);
        if (client == null)
        {
            return NotFound();
        }

        BDD.Clients.Remove(client);
        return NoContent();
    }
}
