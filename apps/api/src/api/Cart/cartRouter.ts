// const express = require('express');
// const bodyParser = require('body-parser');
// const pool = require('../db');

// const router = express.Router();
// router.use(bodyParser.json());

// // Add to Cart API endpoint
// router.post('/add', async (req, res) => {
//   const { userId, productId, quantity } = req.body;

//   // Check user authentication (replace with your logic)
//   if (!userId || !isAuthenticated(userId)) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }

//   // Check product existence
//   const [product] = await pool.query('SELECT * FROM products WHERE id = ?', [productId]);
//   if (!product[0]) {
//     return res.status(404).json({ message: 'Product not found' });
//   }

//   // Check stock availability
//   if (product[0].stock < quantity) {
//     return res.status(400).json({ message: 'Insufficient stock' });
//   }

//   // Check if cart exists for user
//   const [cart] = await pool.query('SELECT * FROM carts WHERE user_id = ?', [userId]);

//   let cartId;
//   if (!cart[0]) {
//     // Create a new cart
//     const [newCart] = await pool.query('INSERT INTO carts (user_id) VALUES (?)', [userId]);
//     cartId = newCart.insertId;
//   } else {
//     cartId = cart[0].id;
//   }

//   // Check if product already exists in cart
//   const [existingItem] = await pool.query('SELECT * FROM cart_items WHERE cart_id = ? AND product_id = ?', [cartId, productId]);

//   if (existingItem[0]) {
//     // Update quantity in existing cart item
//     await pool.query('UPDATE cart_items SET quantity = quantity + ? WHERE id = ?', [quantity, existingItem[0].id]);
//   } else {
//     // Add new cart item
//     await pool.query('INSERT INTO cart_items (cart_id, product_id, quantity) VALUES (?, ?, ?)', [cartId, productId, quantity]);
//   }

//   // Update product stock
//   await pool.query('UPDATE products SET stock = stock - ? WHERE id = ?', [quantity, productId]);

//   // Get updated cart data
//   const [updatedCart] = await pool.query('SELECT c.*, p.* FROM carts c INNER JOIN cart_items ci ON c.id = ci.cart_id INNER JOIN products p ON ci.product_id = p.id WHERE c.id = ?', [cartId]);

//   res.status(200).json(updatedCart);
// });

// // Update Cart API endpoint (similar logic)
// router.put('/update', async (req, res) => {
//   const { userId, cartItems } =
