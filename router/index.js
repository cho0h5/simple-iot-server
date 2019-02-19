const path = '/home/pi/nodejs/homeIoT/data/';

module.exports = (app, fs) => {

	app.get('/', (req, res) => {
		res.end("hello");
	});

	app.get('/list', (req, res) => {
		fs.readdir(path, (error, filelist) => {
			let list = {list: filelist}
			res.end(JSON.stringify(list));
		});	
	});

	app.post('/device/:name', (req, res) => {
		let device = {name: req.params.name, data: {}}
		fs.writeFile(`${path}${req.params.name}.json`, JSON.stringify(device, null, '\t'), 'utf-8', (error,data) => {
			res.json({"result": "success"});
		});
	});

	app.put('/device/:name', (req, res) => {
		fs.readFile(`${path}${req.params.name}.json`, (error,data) => {
			let device = JSON.parse(data);
			device["data"] = req.body;
			console.log(device)
			fs.writeFile(`${path}${req.params.name}.json`, JSON.stringify(device, null, '\t'), 'utf-8', (error,data) => {
				res.json({"result": "success"});
			});
		});
		
	});

	app.get('/device/:name', (req, res) => {
		fs.readFile(`${path}${req.params.name}.json`, (error,data) => {
			let device = JSON.parse(data);
			res.json(device);
			console.log("get");
		});
	});

	app.delete('/device/:name', (req, res) => {
		fs.unlink(`${path}${req.params.name}.json`, () => {
			res.json({"result": "success"});
		});
	});
}
