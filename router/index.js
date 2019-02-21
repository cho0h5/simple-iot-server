const path = './data/';

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
        let device = {name: req.params.name, data: {}};
        fs.writeFile(`${path}${req.params.name}.json`, JSON.stringify(device, null, '\t'), 'utf-8', (error,data) => {
            checkError(error, res) ? : return;
			res.json({"result": "success"});
		});
	});

	app.put('/device/:name', (req, res) => {
		fs.readFile(`${path}${req.params.name}.json`, (error,data) => {
            checkError(error, res) ? : return;
			let device = JSON.parse(data);
			device["data"] = req.body;
			console.log(device)
			fs.writeFile(`${path}${req.params.name}.json`, JSON.stringify(device, null, '\t'), 'utf-8', (error,data) => {
                checkError(error, res) ? : return;
				res.json({"result": "success"});
			});
		});
		
	});

	app.get('/device/:name', (req, res) => {
		fs.readFile(`${path}${req.params.name}.json`, (error,data) => {
            checkError(error, res) ? : return;
			let device = JSON.parse(data);
			res.json(device);
		});
	});

	app.delete('/device/:name', (req, res) => {
		fs.unlink(`${path}${req.params.name}.json`, (error) => {
            checkError(error, res) ? : return;
			res.json({"result": "success"});
		});
	});
}

function checkError(error, res){
    if(error === null){
        return true;
    }
    else{
		res.json({"result": "fail"});
        return false;
    }
}
