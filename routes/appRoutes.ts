import express from "express";
import { createAddress,getAddressByUser,getAddressByAddressId } from "../controllers/addressController";
import { getUsers,getUserById,createUser } from "../controllers/userContorllers";

const router = express.Router();

//user router
router.post('/user',createUser);
router.get('/users',getUsers);
router.get('/user/:id',getUserById);


//address router
router.post('/address',createAddress);
router.get('/addressbyuser/:userId',getAddressByUser);
router.get('/address/:addressId',getAddressByAddressId);


export default router;