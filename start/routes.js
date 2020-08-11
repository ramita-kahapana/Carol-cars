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
Route.get("/supercar", "AuthController.supercar")
Route.get("/campervan", "AuthController.campervan")
Route.get("/car", "AuthController.car")
Route.get("/contact", "AuthController.contact")
Route.get("/detail", "AuthController.detail")