let { stateLogin } = require('./state/loginState');

module.exports = {
  getLogin: (req , res) => {
    res.render('login', { 
      ...stateLogin
    });
  },

  postLogin: (req , res) => {
    let userName = req.body.username
    let pass = req.body.password

    if (userName === 'ola' && pass === 'skripsi'){
      req.session.user = 'ola';
      res.redirect('/dashboard');
    } else {
      res.render('login',{
        ...stateLogin,
        status: 'Failed'
      })
    }
  }
}