# Dokumentasi API

## Endpoint 1: /
Deskripsi: Endpoint ini adalah beranda dari API, memberikan pesan selamat datang kepada pengguna.
## Endpoint 2: /api/data
Deskripsi: Endpoint ini memberikan contoh data dari API.

### Request 1:
- Method: GET
- Path: /
### Request 2:
- Method: GET
- Path: /api/data

### Response:
- Status Code: 200 OK
- Body:
  Selamat datang di API 3122500036_Mei Rosa Widyawati_Level 2!
### Response 2:
{
  "message": "Ini adalah contoh data dari API"
}
  
### Penggunaan 
1. curl -X GET http://localhost:3000/
2. curl -X GET http://localhost:3000/api/data
