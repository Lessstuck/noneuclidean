hit = require('../app.js');

const beat = () => {
    setInterval(() => {
        hit.hit();
    }, 500);
}

exports.beat = beat;
