import { Router } from "express";
const customer = Router();

customer
  .get("/", (req, res) => {
    //http.createserver() 와 같음
    res.send("get cusmomer");
  })
  .post("/", (req, res) => {
    //http.createserver() 와 같음
    res.send("post");
  });

export default customer;
