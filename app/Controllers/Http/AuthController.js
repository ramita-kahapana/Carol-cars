'use strict'

const DB = user("Database");

class AuthController {
    login({ view, request, response }) {
        const user = await DB.select("*").from("user").where("name","!=", "age").from("user");
        const name = "wiraphan";
        const age = 12;
        const friends = ["b1", "b2", "b3"]
        const address = {
            postcode: "50220",
            country: "Thailand",
        };


        return view.render("login", { name, age, friends, address });
    }
    register({ view }) {
        return view.render("register");
    }
    class AuthController{
        async login({ view, request, response}){
            return view.render("login", {});
        }
        loginUser reaponse.redirect("/login");
        const { username, password } = request.body
        
        return ({view.render("register");
    }
    async * registerUser({ request, response }){
        const { email, password} = request.body
        await
        yield

        return response.redirect("/login")
    }
}

module.exports = AuthController;
