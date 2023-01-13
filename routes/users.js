import express from "express";
// import { createUser  } from "../controllers/users.js";

import {v4 as uuidv4} from 'uuid' ;

const router = express.Router() ;

let users = [
{"name" : "moomen" , "age" : 20},{"name" : "ahmad" , "age" : 20},{"name" : "husom" , "age" : 20}
]

router.get('/' , (req , res) => {
    console.log(users)
    res.send(users)
});
router.post('/' , (req , res) => {
    const userWithID = { ...req.body, id : uuidv4()}
    users.push(userWithID)
    res.send(`User with the username ${req.body.firstName} and the age ${req.body.age} added to database`)
})

router.get('/:id' , (req , res) => {
    const { id } = req.params ; 
    const foundUser = users.find((user) => user.id ===id ) ;
    res.send(foundUser)
})

router.delete('/:id' ,(req , res) => {
    const { id } = req.params ;
    users = users.filter((user) => user.id !==id) ;
    res.send(`User with the id ${id} deleted from the database`)
})

router.patch("/:id" , (req , res) => {
    const { id } = req .params ;
    const { firstName , lastName , age } = req.body ;
    const userToUpdated = users.find((user) => user.id === id);

    if(firstName){
        userToUpdated.firstName = firstName
    }
    if(lastName){
        userToUpdated.lastName = lastName
    }
    if(age){
        userToUpdated.age = age
    }

    res.send(`User the id $${id} have been updated`)
})

export default router;