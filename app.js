const express = require('express');
const mongoose = require('mongoose');
const cron = require('node-cron');
const weaponController = require('./controllers/weaponController');
const path = require('path');
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/csdle')
    .then((result) => app.listen(3000))
    .catch((error) => console.log("error"))


cron.schedule('0 0 * * *', () => {
    weaponController.randomizeWeapon;

}, {
    scheduled: true,
    timezone: "America/Sao_Paulo"  // Defina o fuso horário correto se necessário
});
app.set('view engine', 'ejs');
app.use('/scripts', express.static(path.join(__dirname, 'scripts')));
app.use('/styles', express.static(path.join(__dirname, 'styles')));
app.use(express.json());

app.get('/', weaponController.index);
app.post('/getWeapon', weaponController.getWeapon);
app.post('/getWeaponOfDay', weaponController.getWeaponOfDay);
app.get('/teste', weaponController.randomizeWeapon);
