const isAuthenticated = (req, res, next) => {
    // Allow CORS preflight to pass
    if (req.method === 'OPTIONS') return next();

    const authed = req.session?.user || req.user;
    if (!authed) {
        const wantsJSON = (req.get('accept') || '').includes('application/json');
        if (wantsJSON) {
            return res.status(401).json({ error: 'You do not have access.' });
        }
        // Browser flow: send to login
        return res.redirect('/login?error=auth_required');
    }
    next();
};

module.exports = {
    isAuthenticated
}