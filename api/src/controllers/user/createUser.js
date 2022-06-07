const { Console } = require('console');
const userSchema = require('../../models/user');
const createUsuario = (req, res) => {
    const user = userSchema(req.body);
    
    user.save()
        .then((data) => {
            console.log(data);
            res.json(data);//responde con los datos del usuario creado     
        })
        .catch((err) => {
            res.json({ message: err });
        });
}


module.exports = createUsuario;