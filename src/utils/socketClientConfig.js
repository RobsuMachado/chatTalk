
import { Platform } from "react-native";
import { useEffect, useState } from 'react';
import { io } from "socket.io-client";
// puxar o ip da maquina pelo env

const ipMachine ='192.168.137.1'

// inserir manualmente o ip da máquina
const BaseUrl =
  Platform.OS === "android" ? `http://${ipMachine}:3333/` : "http://localhost:3333";


let socket;

export default function useSocket() {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    socket = io(BaseUrl);
    setIsInitialized(true);

    return () => {
      socket.disconnect();
    };
  }, []);

  return { socket, isInitialized };
}
