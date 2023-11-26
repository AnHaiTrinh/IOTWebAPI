# Xây dựng WebAPI với dữ liệu Sensor
## Tải về project
Cài đặt git theo hướng dẫn [tại đây](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) và tải về repo này:
```bash
git clone https://github.com/AnHaiTrinh/IOTWebAPI.git
```

### Chạy project
Tạo file *.env* chứa thông tin kết nối với MongoDB với các thông tin sau:
```
MONGO_USERNAME="MY_USERNAME"
MONGO_PASSWORD="MY_PASSWORD"
MONGO_HOST="MY_HOST"
MONGO_DATABASE="MY_DATABASE"
```

### Chạy local
Tải nodeJS từ [Node website](https://nodejs.org/en/). Kiểm tra cài đặt node thành công:
```bash 
node -v
```

Chạy các lệnh sau để khởi tạo server
```bash
npm install 
npm start
```

### Sử dụng docker
Tải docker và docker compose theo hướng dẫn [tại đây](https://docs.docker.com/get-docker/). Kiểm tra cài đặt thành công docker và docker compose:
```bash
docker -v
docker compose -v
```

Khởi tạo server và cơ sở dữ liệu:
```bash 
docker compose up -d
```

Kết thúc và giải phóng tài nguyên:
```bash
docker compose down
```