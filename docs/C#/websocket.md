# websocket

## SuperWebSocket

1、 在NuGet中查找添加SuperWebSocketNETServer

2、 server端代码

```C#
 private static void StartWebSocketServer()
        {
            ws = new WebSocketServer();
            ws.NewSessionConnected += Ws_NewSessionConnected;
            ws.NewMessageReceived += Ws_NewMessageReceived;
            ws.SessionClosed += Ws_SessionClosed;
            if (!ws.Setup("127.0.0.1", 51234))
            {
                Console.WriteLine("设置WebSocket服务侦听地址失败");
                return;
            }

            if (!ws.Start())
            {
                Console.WriteLine("启动WebSocket服务侦听失败");
                return;
            }
        }

        private static void Ws_NewSessionConnected(WebSocketSession session)
        {
            SendToAll(session, "NewSessionConnected");
        }

        private static void Ws_NewMessageReceived(WebSocketSession session, string value)
        {
             SendToAll(session,"NewMessageReceived:"+ value);
        }

        private static void Ws_SessionClosed(WebSocketSession session, SuperSocket.SocketBase.CloseReason value)
        {
            SendToAll(session, "SessionClosed");
        }

        private static void SendToAll(WebSocketSession session, string msg)
        {
            foreach (var sendSession in session.AppServer.GetAllSessions())
            {
                sendSession.Send(msg);
            }
        }
```

## fleck
