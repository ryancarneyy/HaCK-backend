# Setting up a working backend

- With this backend, you will be able to send and recieve messages using MQTT protocol
- In order to connect your mqtt, make a file called .env inside of this folder, where your CONNECT_URL, MQTT_USER, and MQTT_PASS will be stored
- With these set up, you will be able to run your node server through port 8000, which will subscribe to 2 topics, 'temp' and 'ultrasonic', which you will be able to change if you please.