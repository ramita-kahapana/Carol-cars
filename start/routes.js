'use strict'

const { route } = require('@adonisjs/framework/src/Route/Manager');
const AuthController = require('../app/Controllers/Http/AuthController');

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get("/login", "AuthController.login")
Route.post("/login", "AuthController.loginUser")

Route.get('/register', "AuthController.register")
Route.post("/register", "AuthController.registerUser")
Route.post("/api/register", "AuthController.registerUser")


Route.get("/home", "AuthController.home")

Route.get("/product", "AuthController.product")
Route.get("/promotion", "AuthController.promotion")
Route.get("/service", "AuthController.service")
Route.post("/service", "AuthController.serviceGet")

Route.get("/detail", "AuthController.detail")
Route.get("/detail2", "AuthController.detail2")
Route.get("/detail3", "AuthController.detail3")
Route.get("/detail4", "AuthController.detail4")
Route.get("/detail5", "AuthController.detail5")
Route.get("/detail6", "AuthController.detail6")

Route.get("/layout", "AuthController.renderLayout")