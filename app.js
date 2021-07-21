const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

const app = express();

const corsOptions = {
	origin: '*'
}

app.use(cors(corsOptions))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

async function main() {
	const HOST = process.env.HOST
	const PORT = process.env.PORT
	app.listen(PORT, HOST, () => console.log('Server has successfully started!'))
}