import io from 'socket.io-client';

const socket = io('http://localhost:8000');


  const [temp, setTemp] = useState(null);
  const [ultrasonic, setUltrasonic] = useState(null);

  useEffect(() => {
    // Listen for temperature updates
    socket.on('temp', (data) => {
      setTemp(data);
    });

    // Listen for ultrasonic updates
    socket.on('ultrasonic', (data) => {
      setUltrasonic(data);
    });

    return () => {
      socket.off('temp');
      socket.off('ultrasonic');
    };
  }, []);

  const exampleSend = (message) => {
    socket.emit('topic', message);
  };
