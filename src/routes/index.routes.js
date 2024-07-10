import {home} from "../contollers/pages.js";
import { cekTurnitin, parafraseIn, sarangFreelance, translateIn } from "../contollers/services.js";
import { profile } from "../contollers/user.js";

export const route = (app) => {
    app.get("/", home);
    app.get("/cek-turnitin" , cekTurnitin);
    app.get("/translate-in" , translateIn);
    app.get("/parafrasein-in" , parafraseIn);
    app.get("/sarang-freelance" , sarangFreelance);
    app.get("/profile" , profile );
}