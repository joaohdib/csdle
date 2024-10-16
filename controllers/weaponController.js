const Weapon = require('../models/weapon');
const Randomize = require('../models/randomize');

const index = (req, res) => {
    Weapon.find()
        .then(result => {
            res.render('index', { weapons: result });
        })
        .catch(err => {
            console.log(err);
        });
}

const getWeapon = (req, res) => {
    Weapon.findOne({ 'Name': req.body.name })
        .then(result => {
            console.log(result);
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        });
}

const getWeaponOfDay = (req, res) => {
    Randomize.find()
        .then(result => {
            //console.log(result);
            Weapon.findOne({ 'Name': result[0].Name })
                .then(result => {
                    console.log(result);
                    res.send(result);
                })
                .catch(err => {
                    console.log(err);
                });
        })
        .catch(err => {
            console.log(err);
        });
}

const randomizeWeapon = (req, res) => {
    Randomize.deleteMany()
        .then(() => {
            return Weapon.aggregate([{ $sample: { size: 1 } }]);
        })
        .then(result => {
            if (result.length > 0) {
                const weapon = new Randomize({ Name: result[0].Name });
                return weapon.save();
            } else {
                res.status(404).send('No weapon found');
                return Promise.reject();
            }
        })
        .then(savedWeapon => {
            res.send(savedWeapon);
        });
}



module.exports = {
    index,
    getWeapon,
    randomizeWeapon,
    getWeaponOfDay
}