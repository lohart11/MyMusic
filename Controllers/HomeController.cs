using Microsoft.AspNetCore.Mvc;

namespace SongwritingHobby.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Calculator()
        {
            return View();
        }
        public IActionResult Privacy()
        {
            return View();
        }
    }
}



