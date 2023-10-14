const { expect } = require("chai")
const request = require("supertest")
const user = require("../data/user.json")
const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ3YzFmZmE0LTAwNGUtNDA2MC05ZDViLTc0MDc2ODEzZDMyOCIsImNvbXBhbnlJZCI6IjNiYTg1YTk2LWNhY2ItNGUxNy1hMGZjLWZkMDBmM2UwMzA3OCIsImlhdCI6MTY5NzMwNzM3MH0.Or7iKay4gccMnuGZjX_JdGktSfsNfn85CxyZMxZQntI'

// Get All Users Kasir Aja
describe("Get Users" , () => {
    it("Response status is 200", async () =>{
        const response = await request("https://kasir-api.belajarqa.com")
        .get("/users")
        .set({ "Authorization": `Bearer ${accessToken}` })
        console.log(JSON.stringify(await response))
        //assertion
        expect(await response.status).equal(200)
    })
})

// Create Users Kasir Aja
describe("Create Users" , () => {
    it("Response status is 201", async () =>{
        const response = await request("https://kasir-api.belajarqa.com")
        .post("/users")
        .send(user)
        .set({ "Authorization": `Bearer ${accessToken}` })
        console.log(JSON.stringify(await response))
        //assertion
        expect(await response.status).equal(201)
    })
})

//Update Users Kasir Aja
    describe("Update Users" , () => {
    it("Response status is 200", async () =>{
        const response = await request("https://kasir-api.belajarqa.com")
        .put("/users/85ae232e-5391-4366-bc2b-59eedb103c03")
        .send({
           "name": "nur tok",
           "email": "nurtok@mailinator.com"
       })
        .set({ "Authorization": `Bearer ${accessToken}` })
        console.log(JSON.stringify(await response))
        //assertion
        expect(await response.status).equal(200)
   })
})

//Delete Users Kasir Aja
describe("Delete Users" , () => {
    it("Response status is 200", async () =>{
        const response = await request("https://kasir-api.belajarqa.com")
        .delete("/users/85ae232e-5391-4366-bc2b-59eedb103c03")
        .set({ "Authorization": `Bearer ${accessToken}` })
        console.log(JSON.stringify(await response))
        //assertion
        expect(await response.status).equal(200)
   })
})
