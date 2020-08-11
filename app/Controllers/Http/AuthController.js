'use strict'
const Database = use("Database");


class AuthController {

    async login({ view, request, response }) {

        return view.render("login");
    }

    async loginUser({ view, request, response }) {
        const { username, password } = request.body
        const index = await Database.select("*").from('customers').where({ username, password })
        if (index.length) {
            return response.redirect('/home')
        } else {
            return response.redirect("/login")
        }
        //return view.render("login")


    }

    register({ view }) {
        return view.render("register");
    }

    contact({ view }) {
        return view.render("contact");
    }

    async registerUser({ request, response }) {
        const { name, lastname, username, password } = request.body
        await Database.from("customers").insert({ name, lastname, username, password });
        //await Database.insert({email,password}).into("users") เขียนได้สองแบบ

        return response.redirect("/login");
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
    detail2({ view, request, response }) {
        return view.render("detail2");
    }
    detail3({ view, request, response }) {
        return view.render("detail3");
    }
    detail4({ view, request, response }) {
        return view.render("detail4");
    }
    detail5({ view, request, response }) {
        return view.render("detail5");
    }
    detail6({ view, request, response }) {
        return view.render("detail6");
    }

}

module.exports = AuthController