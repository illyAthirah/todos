var Model = require('../models')

const todos = {

    getAllTodos: async (_req, res) => {
        let todos = []
        try {
                todos = await Model.Todos.findAll()
        } catch (error) {
            console.log(error)
        }
        res.json(todos)
    },

    postTodos: async (req, res) => {
        let todos = {}

        try {
            todos = await Model.Todos.create({
                title: req.body.title,
                text: req.body.text,
                CategoryId: req.params.id
            })
        } catch (error) {
            console.log(error)
        }
        res.json(todos)
    },

    updateTodos: async (req, res) => {
        let todos = {}

        try {
            todos = await Model.Todos.update(
              req.body, {
                where: {
                    id: req.params.id
                }
            });
        } catch (error) {
            console.log(error)
        } 
        res.json(todos)
    },

    deleteTodos: async (req, res) => {
        await Model.Todos.destroy({
            where: {
                id: req.params.id
            }
        })

        res.status(200).json({
            status: 'Todo deleted'
        })
    },


    addComment: async (req, res) => {
        let comment = {}
        
        try {
                comment = await Model.Comments.create({
                    comment: req.body.comment,
                    TodoId: req.params.id
                })
        } catch (error) {
            console.log(error)
        } 
          res.json(comment)
    },

    addCategories: async (req, res) => {
        let categories = {}
        
        try {
                category = await Model.Categories.create({
                    
                    category: req.body.category
                    
                })
        } catch (error) {
            console.log(error)
        } 
          res.json(categories)
    },

    getTodos: async (req, res) => {
		let categories = []
		try {
			categories = await Model.Categories.findOne({
				where: {
					id: req.params.id
				},
				include: Model.Todos
            })
		} catch(error) {
            console.log(error)
        }
        
        res.json(categories)
	}
       




}

module.exports = todos