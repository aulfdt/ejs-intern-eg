import {home} from "../contollers/pages.js";

export const route = (app) => {
    app.get("/", home);
    app.get("/cek-turnitin" , (req,res) => {
        res.render("pages/home/cek-turnitin.ejs")
    });
    app.get("/translate-in" , (req,res) => {
        res.render("pages/home/translate-in.ejs")
    });
    app.get("/parafrasein-in" , (req,res) => {
        res.render("pages/home/parafrase-in.ejs")
    });
    app.get("/sarang-freelance" , (req,res) => {
        res.render("pages/home/sarang-freelance.ejs")
    });
}