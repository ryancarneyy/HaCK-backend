
# Setting up a working node server

- With this backend (index.js), you will be able to send and recieve messages using MQTT protocol
- In order to connect your mqtt, make a file called .env inside of this folder, where your CONNECT_URL, MQTT_USER, and MQTT_PASS will be stored
- With these set up, you will be able to run your node server through port 8000, which will subscribe to 2 topics, 'temp' and 'ultrasonic', which you will be able to change if you please.


# Setting up your frontend connection to your node server (EXAMPLE CODE)!

- These are just example functions, you will have to fill the contents of the functions yourself.
- Inside of the frontend directory, there is a file named Connect.js. This is where you connect using a socket to your node server.
- There are some examples for sending and receiving data through the socket which is connected with your node server


# Using connections.py for your Pico W

- You will be able to use 2 functions in connections.py
    - One for connection to the MQTT broker (connect_mqtt) and one for connecting to WIFI (connect_internet)

    - connect_mqtt(mqtt_server, mqtt_user, mqtt_pass):

        - mqtt_server: the server url which you have obtained by making a free serverless MQTT Broker on HIVEMQ
            - Should look something like: '37##616##db7#bd1##cac997eb01##13.s1.eu.hivemq.cloud'

        - mqtt_user:
            - This is the name of the user you create when you make a credential
                - The purpose of this is just to have a unique user in which the MQTT Broker can understand where the message is coming from 
                - Ex: username = 'pico' when creating credentials for the Raspberry Pi Pico W to send something

        - mqtt_pass:
            - This is the password that goes along with your mqtt_user
            - Just for the broker to validate the user
            - Make this whatever you want, just write it down

        - RETURNS client, which you can use 
            - client.subscribe(b"topic") to subscribe to a topic of your choice
            - client.publish(b"topic", b"message") to publish a message with a topic of your choice
            - client

    - connect_internet( ssid, password ):
        
        - ssid: 
            - This is the name of the wi-fi network you are trying to connect to

        - password:
            - this is the password of the wi-fi network you are trying to connect to

- Your Task:

    - subscribe to 

    