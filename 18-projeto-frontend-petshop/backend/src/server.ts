import fastify from 'fastify'
import cors from '@fastify/cors'
import { products } from '../products'

const app = fastify()

app
  .listen({
    port: 1992,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })


  

  async function ex(){
    await app.register(cors)
  }

  ex()

  app.get("/products", (request, reply) => {
    
    reply.send(products)
  })