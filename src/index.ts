import express from 'express'
import helmet from 'helmet'
import urlController from "./routes/urlController";
import {LinkDb} from './repositories/db'
import cors from 'cors'

const app = express()

app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())


app.use("/", urlController)

const _linkDb = new LinkDb()

const PORT = process.env.PORT

const main = async () => {
    await _linkDb.RunDb().then(() =>
        app.listen(PORT, () => console.log(`Listening on ${PORT}`))
    )
}

main()
