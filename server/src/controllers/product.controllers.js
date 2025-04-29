// import { getConnection } from "../database/connection.js";
// import sql from 'mssql'
import Producto from "../models/Product.model.js";

export const getProducts = async (req, res) => {
// //     res.send("Obteniendo productos");
//     const pool = await getConnection();
//     const result = await pool.request().query("SELECT * FROM productos");
// sql.close()
// res.json(result.recordset);

    try {
        const products = await Producto.findAll({
            order: [
                ['id', 'DESC']
            ]
            // limit: 2,
            // attributes: {
            //     exclude: ['available']
            // }
        });
        res.json({
            message: "Productos obtenidos correctamente",
            data: products
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener los productos",
            error: error
        });
    }

}

export const getProduct = async (req, res) => {
    // // console.log(req.params.id);
    // const pool = await getConnection();
    // const result = await pool.request()
    //     .input('id', sql.Int, req.params.id)
    //     .query('SELECT * FROM productos WHERE id = @id');        
    //     // console.log(result);    
    // if(result.rowsAffected[0] === 0){
    //     sql.close()
    //     return res.status(404).json({ message: 'Producto no encontrado' });
    // }    
    // sql.close()
    // return res.json(result.recordset[0]);

    try {
        const product = await Producto.findByPk(req.params.id);
        if (!product) {
            return res.status(404).json({
                message: "Producto no encontrado",
                error: "No se encontró el producto"
            });
        }
        res.json({
            message: "Producto obtenido correctamente",
            data: product
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener el producto",
            error: error
        });
    }        
}

export const createProduct = async (req, res) => {
    // console.log(req.body);
    // const pool = await getConnection();
    // const result = await pool.request()
    //     .input('name', sql.VarChar, req.body.name)
    //     .input('price', sql.Decimal, req.body.price)
    //     .input('quantity', sql.Int, req.body.quantity)
    //     .input('description', sql.Text, req.body.description)
    //     .query('INSERT INTO productos (name, price, quantity, description) VALUES (@name, @price, @quantity, @description); SELECT SCOPE_IDENTITY() AS id;');

    // console.log('result ', result )
    // sql.close()
    // return res.json({
    //     id: result.recordset[0].id,
    //     name: req.body.name,
    //     price: req.body.price,
    //     quantity: req.body.quantity,
    //     description: req.body.description
    // })

    try {
        const product =  await Producto.create(req.body);
        res.status(201).json({
            message: "Producto creado correctamente",
            data: product
        });
    } catch (error) {
        res.status(500).json({ message: "Error al crear el producto" });
    }


}

export const updateProduct = async (req, res) => {
    // const pool = await getConnection();
    // const result = await pool.request()
    //     .input('id', sql.Int, req.params.id)
    //     .input('name', sql.VarChar, req.body.name)
    //     .input('price', sql.Decimal, req.body.price)
    //     .input('quantity', sql.Int, req.body.quantity)
    //     .input('description', sql.Text, req.body.description)
    //     .query('UPDATE productos SET name = @name, price = @price, quantity = @quantity, description = @description WHERE id = @id;');
    //     // console.log(result);        
    // if(result.rowsAffected[0] === 0){
    //     sql.close()
    //     return res.status(404).json({ message: 'Producto no encontrado' });
    // }
    // sql.close()
    // return res.json({        
    //     id: req.params.id,
    //     name: req.body.name,
    //     price: req.body.price,
    //     quantity: req.body.quantity,
    //     description: req.body.description,
    // });

    const { id } = req.params;
    try {
        const product = await Producto.findByPk(id); 
        if (!product) {
            return res.status(404).json({
                message: "Producto no encontrado",
                error: "No se encontró el producto"
            });
        }   
        // product.name = name; 
        // product.price = price;
        await product.update(req.body); // update actualiza solo lo que le mandes ya que PUT remplaza todo el objeto con lo que le envies, entonces con update aseguras que no va a borrar los demas campos si no los colocas en el body
        await product.save(); // save guarda el producto

        res.json({
            message: "Producto actualizado correctamente",
            data: product
        });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el producto" });
    }
}

export const deleteProduct = async (req, res) => {
    // const pool = await getConnection();
    // const result = await pool.request()
    //     .input('id', sql.Int, req.params.id)
    //     .query('DELETE FROM productos WHERE id = @id');
    //     // console.log(result);        
    // if(result.rowsAffected[0] === 0){
    //     sql.close()
    //     return res.status(404).json({ message: 'Producto no encontrado' });
    // }
    // sql.close()
    // return res.json({message: "Producto eliminado exitosamente"});
    const { id } = req.params;
    try {
        const product = await Producto.findByPk(id); 
        if (!product) {
            return res.status(404).json({
                message: "Producto no encontrado",
                error: "No se encontró el producto"
            });
        }   
        // product.name = name; 
        // product.price = price;
        await product.destroy(); // destroy elimina el producto de la BD (No recomendado para usarlo en un proyecto real, mejor usar update para cambiar el estado del producto a eliminado, en una nueva columna)
        res.json({
            message: "Producto eliminado correctamente",
            data: product
        });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el producto" });
    }
}