const supabase = require('../config/supabaseConfig.js');

exports.getIndex = (req, res) => {
    console.log("Rendered home page!");
    res.render('index');
};


exports.getUserPage = async (req,res) => {
    const { data, error } = await supabase
    .from('users')
    .select('*')
    .order('id', { ascending: true }); 
if (error) {
    console.error(error);
    res.redirect('/user?error=true');
} else {
    res.render('user', { users: data });
}
};


exports.createItem = async (req, res) => {
    const { data, error } = await supabase.from('users').insert([req.body]);
    if (error) {
        console.error(error);
        res.redirect('/user?error=true');
    } else {
        res.redirect('/user');
    }
};
