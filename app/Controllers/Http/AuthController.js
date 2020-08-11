'use strict'
const Database = use("Database");


class AuthController {

    async login({ view, request, response }) {

        return view.render("login");
    }

    loginUser({ view, request, response }) {
        const { username, password } = request.body

        //return view.render("login")
        return response.redirect("/login")

    }

    register({ view }) {
        return view.render("register");
    }

    contact({ view }) {
        return view.render("contact");
    }

    async registerUser({ request, response }) {
        const { email, password, username } = request.body
        await Database.from("users").insert({ email, password, username });
        //await Database.insert({email,password}).into("users") เขียนได้สองแบบ

        return response.redirect("/register");
    }

    home({ view, request, response }) {
        return view.render("home");
    }

    product({ view, request, response }) {
        return view.render("product");
    }
    promotion({ view, request, response }) {
        return view.render("promotion");
    }
    service({ view, request, response }) {
        return view.render("service");
    }

    async serviceGet({ request, response }) {
        const { name, mobile, report } = request.body
        await Database.insert({ name, mobile, report }).into("starts")

        return response.redirect("service")
    }
    detail({ view, request, response }) {
        return view.render("detail");
    }
}

module.exports = AuthController