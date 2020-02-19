const checkUrl = (req, res, next) => {
    const url = req.url;
    if(url.includes('?')){
        return res.status(400).json({SmartBin: 'Invalid URL', message: 'сheck, please URL'})
    };
    next();
}

module.exports = checkUrl;