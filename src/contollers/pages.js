import fetch from "node-fetch";

 export const home = async (req, res) => {
    const result = await fetch("http://192.168.18.22:3000/product", { 
        method: "GET",
    });

    const products = await result.json();
    const resultTestimoni = await fetch("http://192.168.18.22:3000/testimoni", { 
        method: "GET",
    });

    const testimoni = await resultTestimoni.json();

    console.log(products)
    res.render("pages/home/index.ejs", {
        products,
        testimoni

    });
 };
