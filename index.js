const express = require('express')
const postgres = require('postgres')
require('dotenv').config()

const sql = postgres({
    host: process.env.postgres,
    database: 'postgres',            // Name of database to connect to
    username: process.env.postgres_user,            // Username of database user
    password: process.env.postgres_pass,
})
async function main() {
    console.log(await sql`select * from  participant;`)

}

main()

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/meeting/:id', async (req, res) => {
    res.json({
        meeting_detail: await sql` select * from meeting where id = ${req.params.id}`,
        participant: await sql` select * from participant a 
        join meeting_participant b on b.participant_id = a.id where b.meeting_id = ${req.params.id}`,
        content: await sql` select a.id, a.discusion, b.item, b.due, b.pic, c.name from content a
        join action b on b.content_id = a.id
        join participant c on c.id = b.pic 
        where meeting_id = ${req.params.id}`,
    })
})
app.use(express.static('public'))
app.use('/app', express.static('build'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})