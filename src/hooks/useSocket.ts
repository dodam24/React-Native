import {useCallback} from 'react';
import {io, Socket} from 'socket.io-client';
import Config from 'react-native-config';

let socket: Socket | undefined; // 소켓이 있을 수도 있고 없을 수도 있음
// custom hook
const useSocket = (): [typeof socket, () => void] => {
  const disconnect = useCallback(() => {
    if (socket) {
      socket.disconnect();
      socket = undefined;
    }
  }, []);
  // 소켓이 없는 경우, 새로 연결
  if (!socket) {
    socket = io(`${Config.API_URL}`, {
      transports: ['websocket'], // 소켓 라이브러리
    });
  }
  return [socket, disconnect];
};

export default useSocket;
