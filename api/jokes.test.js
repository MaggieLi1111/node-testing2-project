const request = require("supertest")
const db = require("../data/db-config")
const server = require("./server")
const Joke = require("./jokes/jokesModel")

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach(async () => {
    await db("jokes").truncate()
})

afterAll( async () => {
    await db.destroy()
})

it("correct env var", () => {
    expect(process.env.DB_ENV).toBe("testing")
})

describe("Jokes model funcitons", () => {
    describe("create joke", () => {
        it("add joke to the db", async () => {
            let jokes 
            await Joke.createJoke(joke1)
            jokes = await db("jokes")
            expect(jokes).toHaveLength(1)
        })
    })
})