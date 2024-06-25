const express = require("express");
const db = require("../db");
const router = express.Router();
const utils = require("../utils");

router.get("/", (request, response) => {
  
    let statement = `select * from products `;
  
    db.pool.execute(statement,(error, result) => {
        response.send(utils.createResult(error, result));
      }
    );
  });

//add Product
router.post("/", (request, response) => {
    const { p_name, p_desc, p_qunty, p_price } = request.body;
  
    let statement = `insert into products (p_name, p_desc, p_qunty, p_price) 
         values(?,?,?,?)`;    
  
    db.pool.execute(statement,[p_name, p_desc, p_qunty, p_price],(error, result) => {

        response.send(utils.createResult(error, result));
      }
    );
  });

  //delete Product
  router.delete("/:p_id", (request, response) => {
    const { p_id } = request.params;
  
    let statement = `delete from products where p_id =?`;
  
    db.pool.execute(statement,[p_id],(error, result) => {

        response.send(utils.createResult(error, result));
      }
    );
  });



module.exports = router;