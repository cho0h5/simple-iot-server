# simple-iot-server

Consult this : https://github.com/dominoyh5/simple-iot-server/wiki

## Start server

```
npm install
```
![gn1](./README-Screenshot/gn1.png)
```
node app.js
```
![gn1](./README-Screenshot/gn2.png)

## Request API

### GET /list
```
localhost:3000/list
```
![gn1](./README-Screenshot/gn3.png)

### POST /device/:name
```
localhost:3000/device/servomotor
```
![gn1](./README-Screenshot/gn4.png)

### PUT /device/:name
```
localhost:3000/device/servomotor
```
```json
{
	"degree": 90
}
```
![gn1](./README-Screenshot/gn5.png)

### GET /device/:name
```
localhost:3000/device/servomotor
```
![gn1](./README-Screenshot/gn6.png)

### DELETE /device/:name
```
localhost:3000/device/servomotor
```
![gn1](./README-Screenshot/gn7.png)
