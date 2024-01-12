const Router = require('express').Router
const router = new Router()
const todoController = require('../controllers/todo_controller')


router.get('/tasks/all', todoController.getAllTodo)
router.get('/tasks/done', todoController.getDoneTodo)
router.get('/tasks/inprocess', todoController.getProcessTodo)
router.get('/tasks/wait', todoController.getWaitTodo)

router.post('/tasks/add', todoController.addTodo)
router.post('/tasks/delete', todoController.deleteTodo)
router.put('/tasks/update', todoController.updateTodo)



module.exports = router