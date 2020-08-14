module.exports = function(app) {

    app.get('/user/profile', async (req, res) => {
        const userData = {
            user: {
                name: 'Vladimir Konovalenko',
                email: 'konovalenko.vowa@gmail.com',
                avatar: '',
            },
            jwt: 'jwt_string_here',
        };
        return res.json(userData).status(200).end();
    });

    app.post('/user/login', async (req, res) => {
        try {
            const { email, password } = req.body.user;
            const authServiceInstance = new authService();
            const { user, token } = await authServiceInstance.Login(email, password);
            return res.json({ user, token }).end();
        } catch(e) {
            return res.json(e).status(500).end();
        }
    });

    app.post('/user/signup', async (req, res) => {
        try {
            const { name, email, password } = req.body.user;
            const authServiceInstance = new authService();
            const { user, token } = await authServiceInstance.SignUp(email, password, name);
            return res.json({ user, token }).end();
        } catch(e) {
            return res.json(e).status(500).end();
        }
    });

};
