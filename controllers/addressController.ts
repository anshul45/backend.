import { Request, Response } from "express";
import knex from "../connectDb/db";

interface CreateAddressRequestBody {
    userId: string;  
     street: string;
    city: string;
    country: string;
}

interface Address {
    id:number,
    user_id: number;  
    street: string;
    city: string;
    country: string;
    created_at:string
}


export const createAddress = async (req:Request<{},{}, CreateAddressRequestBody>, res:Response) => {
    try {
        const {userId,street,city,country}=req.body;
        if(!userId || !street || !city || !country) {
            return res.status(404).json({ message: 'userId, street, city, and country are required!' });
        }
        const user = await knex('users').where({ id:userId }).first();
        if(!user) {
           return res.status(404).json({ message: 'Invalid user id' });
        }
        const [addressId] = await knex('address').insert({user_id:userId, street,city,country}).returning('id');
        res.status(201).json({ message: 'Address created', addressId });
    } catch (error) {
        res.status(500).json({ error: 'Error creating address' });
    }
}

export const getAddressByUser = async (req:Request<{userId:number},{},{}>, res:Response) => {
    try {
        const {userId} = req.params;
        if(!userId ) {
            return res.status(404).json({ message: 'userId required!' });
        }
        const user = await knex('users').where({ id:userId }).first();
        if(!user) {
           return res.status(404).json({ message: 'Invalid user id' });
        }
        const address :Address[] = await knex('address').where({user_id:userId}).select("*");
        res.status(200).json(address);
    } catch (error) {
        res.status(500).json({ error: 'Error creating address' });
    }
}


export const getAddressByAddressId = async (req:Request<{addressId:number},{},{}>, res:Response) => {
    try {
        const {addressId} = req.params;
        if(!addressId ) {
            return res.status(404).json({ message: 'addressId required!' });
        }
       
        const address :Address[] = await knex('address').where({id:addressId}).select("*");
        if(!address) {
           return res.status(404).json({ message: 'No address found!' });
        }
        res.status(200).json(address);
    } catch (error) {
        res.status(500).json({ error: 'Error creating address' });
    }
}