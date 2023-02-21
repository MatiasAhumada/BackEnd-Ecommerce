import express from "express";
import morgan from "morgan";
import cors from 'cors'
import path from "path";
import './database'
import router from "./routes/productos.routes";
import routerUsuario from "./routes/usuarios.routes";
import routerPedidos from './routes/pedidos.routes'

const app = express()
app.set('port', process.env.PORT || 4000)

app.listen(app.get('port'), ()=>{
  console.log('Puert'+ app.get('port'))
})

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'../public')))
app.use('/tecnoMas', router)
app.use('/tecnoMas/user', routerUsuario)
app.use('/tecnoMas/pedido', routerPedidos)







