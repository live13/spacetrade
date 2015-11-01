package controllers;

import play.*;
import play.mvc.*;

import views.html.*;

public class Application extends Controller {

    public Result index() {
        response().setContentType("text/html");
        return ok("<h1>Hello World!</h1>");
        //return notFound("<h1>Page not found</h1>").as("text/html");
        //return redirect(controllers.routes.Application.hello("Bob"));
        //return ok(index.render("Space trader 2."));
    }
    public Result hello(String id) {
            return ok("hello"+id);
        }

}
