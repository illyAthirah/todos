var express = require('express');
var router = express.Router();
var todosController = require('../controllers/todos')


router.post('/:id/comment', todosController.addComment);
router.post('/category', todosController.addCategories);
router.get('/', todosController.getAllTodos);
router.post('/:id/category', todosController.postTodos);
router.patch('/:id', todosController.updateTodos);
router.delete('/:id', todosController.deleteTodos);
router.get('/categories/:id', todosController.getTodos);

module.exports = router;