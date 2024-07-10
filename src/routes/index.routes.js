import { home } from "../contollers/pages.js";
import { cekTurnitin, parafraseIn, sarangFreelance, translateIn } from "../contollers/services.js";
import { affiliate, profile, withdraw, myProject } from "../contollers/user.js";

export const route = (app) => {
    app.get("/", home);                   
    app.get("/cek-turnitin", cekTurnitin);        
    app.get("/translate-in", translateIn);         
    app.get("/parafrase-in", parafraseIn);         
    app.get("/sarang-freelance", sarangFreelance); 
    app.get("/profile", profile);         
    app.get("/affiliate", affiliate);     
    app.get("/withdraw", withdraw);       
    app.get("/my-project", myProject);    
};
