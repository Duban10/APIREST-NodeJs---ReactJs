import { Router } from "express";
import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from "../controllers/product.controllers.js";
import { body, param } from 'express-validator';
import { handleInputErrors } from '../middleware/index.js';

const router = Router();

router.get("/productos", getProducts);

router.get("/productos/:id", 
        param('id').isInt().withMessage('El id debe ser un número')
        .notEmpty().withMessage("El id es requerido"), 
        handleInputErrors, // middleware para validar los errores de las validaciones       
        getProduct
);

router.post("/productos", 
        body("name") 
                .notEmpty().withMessage("El nombre es requerido"),
        body("price")
                .isNumeric().withMessage("El precio debe ser un número")
                .notEmpty().withMessage("El precio es requerido")
                .custom((value) => value > 0).withMessage("El precio debe ser mayor que 0"),  
        body("quantity")
                .isNumeric().withMessage("La cantidad debe ser un número")
                .notEmpty().withMessage("La cantidad es requerida")
                .custom((value) => value > 0).withMessage("La cantidad debe ser mayor que 0"),
        body("description")
                .notEmpty().withMessage("La descripción es requerida"),
        handleInputErrors,
        createProduct
);

router.put("/productos/:id", 
        body("name") 
                .notEmpty().withMessage("El nombre es requerido"),
        body("price")
                .isNumeric().withMessage("El precio debe ser un número")
                .notEmpty().withMessage("El precio es requerido")
                .custom((value) => value > 0).withMessage("El precio debe ser mayor que 0"),  
        body("quantity")
                .isNumeric().withMessage("La cantidad debe ser un número")
                .notEmpty().withMessage("La cantidad es requerida")
                .custom((value) => value > 0).withMessage("La cantidad debe ser mayor que 0"),
        body("description")
                .notEmpty().withMessage("La descripción es requerida"),
        handleInputErrors,
        updateProduct

);

router.delete("/productos/:id", 
        param("id")
                .isInt().withMessage("El id debe ser un número")
                .notEmpty().withMessage("El id es requerido"),
        handleInputErrors,
        deleteProduct
);

export default router;
