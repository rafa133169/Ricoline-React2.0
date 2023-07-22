const express = require("express");
const app = express();
const cors = require("cors");
const mercadopago = require('mercadopago');

app.use(express.json());
app.use(cors());


mercadopago.configure({
    // Poner las llavez Acess Token
    access_token: "TEST-6075035190532050-072216-74e5dafba8c0b45f5e351725738dc848-1385771063"
});

app.get("/", function(req, res){
    res.send("El servidor de mercado pago funciona");
});

app.post("/create_preference", (req, res) => {

    let preference = {
        //Se crea un objeto de acuerdo a tu modelo 
        // ó tabla producto

        items: [
            {
                title: req.body.title,
                unit_price: Number(req.body.unit_price),
                quantity: 1
                
            }
        ],

        //Aqui va el puerto donde corre tu proyecto de react
        //Este enlace es el que va por defecto cuando el pago se exitoso
        back_urls: {   
            success: "http://localhost:5174/",
            failure: "http://localhost:5174/",
            pending: "",
        },

        auto_return: "approved"
    };
    mercadopago.preferences
    .create(preference)
    .then(function (response){
        res.json({
            // id: response.body.PkProd
            id: response.body.id
        })
    })
    .catch(function(error){
        console.log(error)
    })
})

app.listen(8080, ()=>{
    console.log("El servirdor esta corriendo en el puerto 8080")
})