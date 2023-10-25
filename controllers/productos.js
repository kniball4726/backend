const Productos = require('../models/Producto')

    const agregarProducto = async(req, res)=>{
    
    try {
        const datos = req.body;
        const productos = new Productos(datos)

        productos.save();

        return res.status(200).json({
            status:"success",
            mensaje:"Se ha creado producto exitosamente en la base de datos",
            productos
        })

    } catch (error) {
        throw new Error("No se ha podido agregar datos "+error)   
    }
}


    const mostrarProductos = async(req, res)=>{
    
    try {
        //const data = await Productos.find({})
        res.send(await Productos.find({}))
    
    } catch (error) {
        throw new Error("No se puede mostrar datos "+error)    
    }
    
    }


    const buscarProducto = async(req, res)=>{
        try {
            const codigo = req.params.codigo
            
            const datos = await Productos.findOne({codigo});
            res.status(200).json(datos);
            
       } catch (error) {
            throw new Error("No se encontro el codigo indicado "+error)
       }
       
                
}

    const actualizarProducto = async(req, res)=>{
        try {
            const codigo = req.params.codigo;
            
            const datos = await Productos.findOneAndUpdate({codigo}, req.body, {new: true});

                res.status(200).json({
                    estatus:"success",
                    mensaje:"Datos actualizados con exito",
                    datos
                })
            
        } catch (error) {
            throw new Error("No se encontro id "+error)
            }
    }
    
        
    
    const borrarProducto = async(req, res)=>{
        
        try {
            let codigo = req.params.codigo;
            const datos = await Productos.findOneAndDelete({codigo})
            res.status(200).json({
                status:"succes",
                mensaje:"Dato eliminado con exito",

                datos
            });
        
        } catch (error) {
            throw new Error("No se puede mostrar datos "+error)    
        }
    }




module.exports = {
    agregarProducto,
    mostrarProductos,
    buscarProducto,
    actualizarProducto, 
    borrarProducto
}