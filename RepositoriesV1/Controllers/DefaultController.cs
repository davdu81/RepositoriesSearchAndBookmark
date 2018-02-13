using RepositoriesV1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.SessionState;

namespace RepositoriesV1.Controllers
{
    public class DefaultController : Controller
    {
        // GET: Default
        //This Method showing the home page
        public ActionResult Index()
        {
            
            return View();
        }

        // GET: Default/bookmarks
        //This Method showing the home page (only for support navigate)
        public ActionResult Bookmarks()
        {

            return View("index");
        }

        //this post method request  is getting the bookmark item
        //and store it to the session["items"]
        [HttpPost]
        public string setSessionOfRepositories(SessionRepositories Item)
        {
            List<SessionRepositories> items = new List<SessionRepositories>();

            if (Session["items"] == null)
            {
                items.Add(Item);
                Session["items"] = items;
            }
            else
            {
                items = (List<SessionRepositories>)Session["items"];
                if(items.Exists(x => x.ID == Item.ID))
                {
                    return "ALREADY BOOKMARKED";
                }
                else
                {
                    items.Add(Item);
                    Session["items"] = items;
                }
                

            }
            return "Succes";
            
        }

        //this method is sending all the bookmarks items from session["items"]
        public ActionResult getBookmarks()
        {
            
            List<SessionRepositories> SessionRepos = new List<SessionRepositories>();
            SessionRepos = (List<SessionRepositories>)Session["items"];

            object[] items = new object[0];
            int total_count = 0;
            
            if (SessionRepos != null)
            {
                total_count = SessionRepos.Count;
                items = new object[SessionRepos.Count];
                int index = 0;
                foreach (var item in SessionRepos)
                {
                    items[index] = new
                    {
                        id = item.ID,
                        name = item.Name,
                        owner = new
                        {
                            avatar_url = item.AvatarUrl
                        }
                    };
                    index++;
                }

            }

            var data = new
            {
                total_count,
                items
            };
            return Json(data, JsonRequestBehavior.AllowGet);
        }



    }
}