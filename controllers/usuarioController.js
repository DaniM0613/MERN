import Usuario from "../models/Usuario.js";

const registrar = async (req, res) => {
     //EVITAR REGISTROS DUPLICADOS
     const {email} = req.body;
     const existeUsuario = await Usuario.findOne({ email})

     if(existeUsuario){
        const error = new Error('Usuario ya registrado')
        return res.status(404).json({msg: error.message})
     }

   try {
      const usuario = new Usuario(req.body);
      const usuarioAlmacendo = await usuario.save()
      res.json(usuarioAlmacendo)
   }catch  (error){

   }

};

export { registrar };