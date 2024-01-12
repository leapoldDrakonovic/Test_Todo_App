const { Todo } = require ( "../models/models")

class TodoController {

    async getAllTodo (req, res) {
        try {
            const data = await Todo.findAll()
            return res.json(data)
        } catch (error) {
            console.log(error);
        }

    }

    async getWaitTodo (req, res) {
        try {
            const data = await Todo.findAll({where: {
                status: "Wait"
            }})
            return res.json(data)
        } catch (error) {
            console.log(error);
        }


    }

    async getProcessTodo (req, res) {
        try {
            const data = await Todo.findAll({where: {
                status: "In process"
            }})
    
            return res.json(data)
        } catch (error) {
            console.log(error);
        }
    }

    async getDoneTodo (req, res) {
        try {
            const data = await Todo.findAll({where: {
                status: "Done"
            }})
            return res.json(data)
        } catch (error) {
            console.log(error);
        }

    }

    async addTodo (req, res) {
        try {
            console.log(req.body);
            const {title, description, status} = req.body
            if (!status) {
                status = 'Wait'
            }
            const todo = await Todo.create({title: title, description: description, status: status})
            return res.json(todo)
        } catch (error) {
            console.log(error);
        }

    }

    async deleteTodo (req, res) {
        try {
            const { Id } = req.body; 
            console.log(req.body);
            if(!Id) {
                throw new Error ({message: 'No id'})
            }
            await Todo.destroy({where:{Id: Id}});
            return res.json({message: "Deleted"})

        } catch (error) {
            console.log(error);
        }
    }

    async updateTodo(req, res) {
        try {
          const { Id, title, description, status } = req.body;
          if (!Id) {
            throw new Error({ message: 'No id' });
          }
          console.log(req.body);
          console.log(req.params);
          await Todo.update({ title, description, status }, { where: { Id: Id } });
          return res.json({ message: 'Updated' });
        } catch (error) {
          console.log(error);
        }
    }
}

module.exports = new TodoController