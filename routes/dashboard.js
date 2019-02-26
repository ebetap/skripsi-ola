
let { stateDashboard } = require('./state/dashboardState')
module.exports = {
  getDashboard: ( req , res, next ) => {
    let user = req.session.user
    
    if( user == null ) {
      res.redirect('/login');
    }

    res.render('dashboard',{
      ...stateDashboard
    })
  },

  logout: ( req , res ) => {
    req.session.user = null
    res.redirect('/login');
  }
}