
# Setting up a working node server

- With this backend (index.js), you will be able to send and recieve messages using MQTT protocol
- In order to connect your mqtt, make a file called .env inside of this folder, where your CONNECT_URL, MQTT_USER, and MQTT_PASS will be stored
- With these set up, you will be able to run your node server through port 8000, which will subscribe to 2 topics, 'temp' and 'ultrasonic', which you will be able to change if you please.


# Setting up your frontend connection to your node server (EXAMPLE CODE)!

- These are just example functions, you will have to fill the contents of the functions yourself.
- Inside of the frontend directory, there is a file named Connect.js. This is where you connect using a socket to your node server.
- There are some examples for sending and receiving data through the socket which is connected with your node server


# Using connections.py

- You will be able to use 2 functions in connections.py
    - One for connection to the MQTT broker, and one for connecting to WIFI