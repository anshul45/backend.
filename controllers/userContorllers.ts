import { Request,Response } from "express";
import knex from "../connectDb/db";

interface Address {
  id:number,
  user_id: number;  
  street: string;
  city: string;
  country: string;
  created_at:string
}

interface User {
  id:number,
  name:string,
  created_at:string
}

export const createUser = async(req:Request<{},{},{name:string}>, res:Response) => {
    try {
        const {name} = req.body;
        if(!name) {
          return res.status(404).json({ message: 'name is required!' });
        }
        const [userId] = await knex('users').insert({name}).returning('id');
        res.status(201).json({ message: 'User created', userId });
     } catch (error) {
        res.status(500).json({ error: 'Error creating user' });
    }
}

export const getUsers = async(req:Request,res:Response) => {
    try {
        const users = await knex('users').select('*');
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error creating user' });
    }
}

export const getUserById = async (req: Request<{id:number}>, res: Response) => {
    try {
      const { id } = req.params;
      if(!id) {
        return res.status(404).json({ message: 'id is required!' });
      }
      const user:User = await knex('users').where({ id }).first();
      if (user) {
        const address:Address[] = await knex('address').where({ user_id:id }).select('*');
        res.status(200).json({user, address});
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error fetching user' });
    }
  };