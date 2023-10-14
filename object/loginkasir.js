const { expect } = require("chai")
const request = require("supertest")

// Login
describe("login kasir" , () => {
    it("Response status is 201", async () =>{
        const response = await request("https://kasir-api.belajarqa.com")
        .post("/authentications")
        .send({
            "email": "cicitokopakedi@mailinator.com",
            "password": "XCsdwe23",
        })
        console.log(JSON.stringify(await response.body))
        //assertion
        expect(await response.status).equal(201)
    })
})