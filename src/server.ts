import express, { response } from "express"
// @types/express
const app = express();
/**
 * GET => Seach for informations
 * POST => Insert/Create informations into API
 * PUT =>  Update information
 * DELETE => Remove information
 * PATH => Update only one data
 */
app.get("/test",(request, response)=>{
  return response.send("Hello NLW");
}); 
app.post("/test-post",(request, response) =>{
  return response.send("Hello method POST");
});
//http://localhost:3000
app.listen(3000,()=>{console.log("Server running NLW...");});