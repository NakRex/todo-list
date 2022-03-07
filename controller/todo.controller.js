const User = require('../model/user')
exports.register = (req, res) => {
    const { name, email,phone, password } = req.body;
    let isAlreadyexist = await User.findOne({ email });
    if (!isAlreadyexist) {
        let user = new User({
            name: name,
            email: email,
            phone:phone,
            password: bcrypt.hashSync(password, 8)
        });
        user.save((err, user) => {
            if (err) {
                return res.status(500).send({ success: false, message: err })
            
            }
            return res.status(200).json('you are registered successfully')
        });
    } else {
        return res.status(501).send({msg: 'user already exist', success: false});
    }
}

exports.login = (req, res) => {
    
}

exports.AddTodo = (req, res) => {
    
}

exports.updateTitle = (req, res) => {
    
}

exports.doneTodo = (req, res) => {
    
}

exports.deleteTodo = (req, res) => {
    
}

exports.findAllTodos = (req, res) => {
    
}

exports.findAllTodosByCategory = (req, res) => {
    
}

exports.sortbyCreatedAt = (req, res) => {
    
}

exports.gettAllTodosforSingleUser = (req, res) => {
    
}