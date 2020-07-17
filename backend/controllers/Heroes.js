const heroes = require("../models/Heroes");

module.exports = {
	// create: (req, res, next) => {
	// 	heroes.create(
	// 		{
	// 			name: req.body.name,
	// 			born: req.body.born,
	// 			dead: req.body.dead,
	// 			description: req.body.description,
	// 			establishment: req.body.establishment,
	// 		},
	// 		(err, result) => {
	// 			if (err) {
	// 				next(err);
	// 			} else {
	// 				res.json(result);
	// 			}
	// 		},
	// 	);
	// },
	create: (req, res, next) => {
		heroes
			.create({
				name: req.body.name,
				born: req.body.born,
				dead: req.body.dead,
				description: req.body.description,
				establishment: req.body.establishment,
			})
			.then((result) => {
				res.json(result);
			})
			.catch((err) => {
				res.json(err);
			});
	},
	getAllData: (req, res) => {
		heroes
			.find({})
			.then((result) => {
				res.json(result);
			})
			.catch((err) => {
				res.json(err);
			});
	},
	getDataById: (req, res) => {
		heroes
			.findById(req.params.heroesId)
			.then((result) => res.json(result))
			.catch((err) => res.json(err));
	},
	updateDataById: (request, res) => {
		heroes
			.findByIdAndUpdate(request.params.heroesId, {
				name: request.body.name,
				born: request.body.born,
				dead: request.body.dead,
				description: request.body.description,
				establishment: request.body.establishment,
			})
			.then((result) => res.json(result))
			.catch((err) => res.json(err));
	},
	deletDataById: (req, res) => {
		heroes
			.findByIdAndRemove(req.params.heroesId)
			.then((result) => res.json(result))
			.catch((err) => res.json(err));
	},
};
