import io from 'socket.io-client';

const socket = io('http://localhost:8000');


  const [data, setData] = useState(null); 

  useEffect(() => {
    // Listen for temperature updates
    socket.on('example_topic', (data) => {
      setTemp(data);
    });

    

    return () => {
      socket.off('example_topic');
    };
  }, []);

  const exampleSend = (message) => {
    socket.emit('example_topic', message);
  };
