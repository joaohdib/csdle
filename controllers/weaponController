const Weapon = require('../models/weapon');

const index = (req, res) => {
    Weapon.find()
        .then(result => {
            res.render('index', { weapons: result });
        })
        .catch(err => {
            console.log(err);
        });
}

const getWeapon =  (req, res) => {
    Weapon.findOne({'Name': req.body.name})
        .then(result => {
            console.log(result);
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        });
    }

const getAk =  (req, res) => {
        Weapon.find()
            .then(result => {
                res.render('index', { weapons: result });
            })
            .catch(err => {
                console.log(err);
            });
        }

module.exports = {
    index,
    getWeapon
}