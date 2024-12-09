import { UserModel } from "../models/UsersModel.js"
import bcrypt from "bcrypt"
import jsonwebtoken from "jsonwebtoken"





export default {
    register: async (req,res)=>{

        try {
            const hash = bcrypt.hash(req.body.password,10)
            const user ={

                name: req.body.name,
                password: hash,
                 email: req.body.email,
                 curp: req.body.curp,
                 rol: req.body.rol

                 }

                await UserModel.create(user)
                res.status(200).json({msg: "usuario registrado con exito"})

        } catch (error) {
            res.status(500).json({msg: "ocurrio un error ala registrarte"})

            console.log(error)
        }
        
    },

    login: async (req,res)=>{
        const email = req.body.email
        const password = req.body.password

        if(!email || !password){

            return res.status(400).json({msg: "parametros invalidos"})
        }

        const user = await UserModel.findOne({email})

        if(!user){
            return res.status(400).json({msg: "credenciales invalidas"})
        }

       if (!bcrypt.compare(password,user.password)){
        return res.status(400).json({msg:"credenciales invalidas"})

       }


       const token = await jwt.sign(JSON.stringify(user),process.env.PRIVATE_KEY)

       return res.status(200).json({token})
    },
    
    updateProfile: async (req,res)=>{

        try {
            const user = await UserModel.findById(req.params.id)

            if (!user){
                return res.status(400).json({msg:"usuario no encontrado"})
            }
    
            user.name = req.body.name ? req.body.name : user.name
    
            user.password = req.body.password ? await bcrypt.hash(req.body.password,10): user.password
    
            user.email = req.body.email ? req.body.email : user.email
    
            user.curp = req.body.curp ? req.body.curp : user.curp

            await UserModel.create.findOneAndUpdate(user._id,user)
            res.status(201).json({msg:"usuario actualizado con exito"})


        } catch (error) {
             res.status(500).json({msg: "ocurrio un error ala registrarte"})

            console.log(error)
        }

       

    },

    getUsers:async (req, res) => {
        try {
            const users = await UserModel.find()
            return res.status(200).json(users)
        } catch (error) {
                return res.status(500).json({msg:"Ocurrio un error al obterner los usuarios"})
        }
    }

}