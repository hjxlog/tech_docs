## 网络编程

### Socket 的概念

Python提供了几个模块来处理网络编程，最常用的是`socket`模块。

**Socket（套接字）** 是网络编程的核心概念，它是应用程序与网络协议之间的接口，用于实现不同主机之间的通信。简单来说，Socket 是网络通信的“端点”，它允许程序通过网络发送和接收数据。

- **Socket 是通信的端点**：它由 IP 地址和端口号组成，用于标识网络中的一台设备和一个具体的服务。
- **Socket 是双向的**：可以通过 Socket 发送和接收数据。
- **Socket 是抽象的**：它隐藏了底层网络协议的复杂性，提供了一套简单的 API 供开发者使用。

### Socket 的工作流程

Socket 通信通常分为客户端和服务器端，其工作流程如下：

#### 服务器端

1. 创建 Socket。
2. 绑定 Socket 到一个 IP 地址和端口。
3. 监听连接请求。
4. 接受客户端连接。
5. 与客户端通信（发送和接收数据）。
6. 关闭连接。

#### 客户端

1. 创建 Socket。
2. 连接到服务器的 IP 地址和端口。
3. 与服务器通信（发送和接收数据）。
4. 关闭连接。

### Socket 的类型

Socket 主要分为两种类型，分别对应两种网络协议：

#### 流式 Socket（TCP Socket）

- 基于 TCP 协议，提供可靠的、面向连接的通信。
- 数据以字节流的形式传输，保证数据顺序和完整性。
- 适合需要可靠传输的场景，如文件传输、网页浏览。

#### 数据报 Socket（UDP Socket）

- 基于 UDP 协议，提供无连接的通信。
- 数据以数据报的形式传输，不保证可靠性和顺序。
- 适合需要快速传输的场景，如视频流、在线游戏。

### Socket 的简单示例

以下是一个 TCP Socket 的简单示例：

#### **服务器端代码**

```python
import socket

# 创建 Socket
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# 绑定 IP 和端口
server_address = ('localhost', 12345)
server_socket.bind(server_address)

# 监听连接
server_socket.listen(1)
print("等待客户端连接...")

# 接受连接
connection, client_address = server_socket.accept()
print(f"连接来自: {client_address}")

# 接收数据
data = connection.recv(1024)
print(f"收到数据: {data.decode()}")

# 发送数据
connection.sendall(b"Hello, Client!")

# 关闭连接
connection.close()
server_socket.close()
```

#### **客户端代码**

```python
import socket

# 创建 Socket
client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# 连接服务器
server_address = ('localhost', 12345)
client_socket.connect(server_address)

# 发送数据
client_socket.sendall(b"Hello, Server!")

# 接收数据
data = client_socket.recv(1024)
print(f"收到数据: {data.decode()}")

# 关闭连接
client_socket.close()
```

### **Socket 的应用场景**

- **客户端-服务器模型**：如网页服务器、聊天应用。
- **实时通信**：如视频通话、在线游戏。
- **文件传输**：如 FTP 服务器。
- **分布式系统**：如集群节点之间的通信。