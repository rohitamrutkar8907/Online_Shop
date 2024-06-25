const express = require("express");
const db = require("../db");
const router = express.Router();
const utils = require("../utils");
const jwt = require("jsonwebtoken");
const config = require("../config");


router.get("/", (request, response) => {
  
    let statement = `select * from login `;
  
    db.pool.execute(statement,(error, result) => {
        response.send(utils.createResult(error, result));
      }
    );
  });

//add user
router.post("/signup", (request, response) => {
    const { username, password, role } = request.body;
  
    let statement = `insert into login (username, password,role) 
         values(?,?,?)`;    
  
    db.pool.execute(statement,[username,password,role],(error, result) => {

        response.send(utils.createResult(error, result));
      }
    );
  });

  //login

  router.post("/signin", (request, response) => {
    const { username, password } = request.body;
  
    let statement = `select * from  login where username=? and password=?`;    
  
    db.pool.execute(statement,[username,password],(error, result) => {

        response.send(utils.createResult(error, result));
      }
    );
  });



module.exports = router;