module.exports = {
  getDashboard: ( req , res, next ) => {
    let user = req.session.user
    
    if( user == null ) {
      res.redirect('/login');
    }

    res.render('dashboard',{hello: 'Hellow World'})
  },

  logout: ( req , res ) => {
    req.session.user = null
    res.redirect('/login');
  }
}