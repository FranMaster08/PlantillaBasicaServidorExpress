const app = require('./app')

app.listen(process.env.PORT, (err) => {
    let mensaje = `Ocurrio un error iniciando Servidor en el puerto :${process.env.PORT} :: error: err`
    if (!err) mensaje = `Servidor Corriendo en el puerto :${process.env.PORT}`
    console.log(mensaje);
})
