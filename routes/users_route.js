"use strict";

const express = require('express');
const router  = express.Router();
const session     = require('express-session')
const fileUpload  = require('express-fileupload');

module.exports = (knex) => {



  router.get("/userid/", (req, res) => {

    let userid = req.session.userID;

    knex
      .select('map.title', 'map.id')
      .from('map')
      .innerJoin ('users','map.user_id', 'users.id')
      .where('users.name', userid )
      .then((results) => {
        res.json(results);
    });





  });

  router.post("/userid/mapid", (req, res) => {
    let userid = req.session.userID;

    knex
      .select()
      .from('map')
      .where('id', req.body.mapid )
      .then((results) => {

        res.json(results);
    });
  });


  router.post("/userid/newhike", (req, res) => {

    let name = req.session.userID;





    knex
      .select('id')
      .from('users')
      .where('name', name)
      .then((user) =>{


    console.log(user[0].id);

    knex('map')
      //.update({id: '10, user_id: user[0].id, title: req.body.title, description: req.body.description, travel_time: req.body.travel_time, path: req.body.path})
      .insert({'title': req.body.title, 'user_id': user[0].id, 'path':req.body.path, 'description' : req.body.description, 'travel_time' : req.body.travel_time})
      .then((results) => {

        res.send("Thank you for your submission");
        })
    });
  });

    router.put("/userid/:mapid", (req, res) => {
    let name = req.session.userID;
    let mapid = req.params.mapid

    knex('map')
      //.update({id: '10, user_id: user[0].id, title: req.body.title, description: req.body.description, travel_time: req.body.travel_time, path: req.body.path})
      .update({'title': req.body.title, 'path':req.body.path, 'description' : req.body.description, 'travel_time' : req.body.travel_time})
      .where('id', mapid)
      .then((results) => {

        res.send("Thank you for your submission");
        })

  });

    router.delete("/userid/:mapid", (req, res) => {
    let name = req.session.userID;
    let mapid = req.params.mapid

    knex('map')
      //.update({id: '10, user_id: user[0].id, title: req.body.title, description: req.body.description, travel_time: req.body.travel_time, path: req.body.path})
      .delete()
      .where('id', mapid)
      .then((results) => {

        res.send("Thank you for your submission");
        })

  });




  return router;
}
