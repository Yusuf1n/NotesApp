using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace NotesWebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class NotesController : ControllerBase
    {
        private readonly ILogger<NotesController> _logger;

        public NotesController(ILogger<NotesController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok("My first note.");
        }
    }
}
