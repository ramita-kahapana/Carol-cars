'use strict'
const Database = use("Database");
let arr;

class AuthController {

    async login({ view, request, response }) {

        return view.render("login");
    }

    async loginUser({ view, request, response }) {
        const { username, password } = request.body
        const index = await Database.select("*").from('customers').where({ username, password })
        arr = index;

        if (index.length) {
            return response.redirect('/home', { arr })
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
        return view.render("home", { arr });
    }

    product({ view, request, response }) {
        return view.render("product", { arr });
    }
    promotion({ view, request, response }) {
        return view.render("promotion", { arr });
    }
    service({ view, request, response }) {
        return view.render("service", { arr });
    }

    async serviceGet({ request, response }) {
        const { name, mobile, report } = request.body
        await Database.insert({ name, mobile, report }).into("starts")

        return response.redirect("service", { arr })
    }
    async detailGet({ request, response }) {
        const { name, lastname, address, phone } = request.body
        await Database.insert({ name, lastname, address, phone }).into("details")

        return response.redirect("buying", { arr })
    }



    buying({ view, request, response }) {
        return view.render("buying", { arr });
    }

    detail({ view, request, response }) {
        return view.render("detail", { arr });
    }
    detail2({ view, request, response }) {
        return view.render("detail2", { arr });
    }
    detail3({ view, request, response }) {
        return view.render("detail3", { arr });
    }
    detail4({ view, request, response }) {
        return view.render("detail4", { arr });
    }
    detail5({ view, request, response }) {
        return view.render("detail5", { arr });
    }
    detail6({ view, request, response }) {
        return view.render("detail6", { arr });
    }
    renderLayout({ view, request, response }) {
        return view.render("layout", { arr });
    }





}

module.exports = AuthController