import Fastify from "fastify";
import cors from "@fastify/cors"

const app = Fastify()

app.register(cors)


app.get('/', () => {
    return 'Hello Habits'
})

app.listen({
    port: 3000
}).then(()=> {
    console.log("Server rodando")
})
