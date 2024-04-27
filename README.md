# Dokumentasi API

## Endpoint 1: /

Deskripsi: Endpoint ini adalah beranda dari API, memberikan pesan selamat datang kepada pengguna.

### Request:

- Method: GET
- Path: /

### Response:

- Status Code: 200 OK
- Body:
Selamat datang di API 3122500036_Mei Rosa Widyawati_Level 2!


### Contoh Penggunaan:

```bash
curl -X GET http://localhost:3000/

## Endpoint 2: /api/data
Deskripsi: Endpoint ini memberikan contoh data dari API.

### Request:
Method: GET
Path: /api/data
Response:
Status Code: 200 OK
body :
{
  "message": "Ini adalah contoh data dari API"
}

### Contoh Penggunaan:
curl -X GET http://localhost:3000/api/data

