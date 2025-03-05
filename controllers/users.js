const supabase = require('../config/supabaseConfig.js');

exports.getIndex = (req, res) => {
    console.log("Rendered home page!");
    res.render('index');
};

exports.getUserPage = (req,res) => {
    console.log("Rendered user page!");
    res.render('user');
}


exports.createItem = async (req, res) => {
    const { data, error } = await supabase.from('users').insert([req.body]);
    if (error) {
        console.error(error);
        res.redirect('/user?error=true');
    } else {
        res.redirect('/user');
    }
};
