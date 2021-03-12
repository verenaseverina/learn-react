# learn-react

## Learning Point
1. JSX
2. Rendering
3. Component & Props
4. Lifecycle
5. Event
6. Conditional Rendering
7. List and Keys
8. Form
9. Router

## Project
Membuat aplikasi untuk menampilkan dan membuat Post.

 

### Spesifikasi

Terdiri dari 2 halaman
1. Halaman List Post
`Menampilkan List dari Post.
List dapat di filter berdasarkan category, post_datetime, atau keyword (optional)
Data dapat dibuat mock dan disimpan di localStorage
Post dapat di edit dan akan di redirect ke halaman create_post`
2. Halaman Create Post
`Menampilkan form berisi 4 field, yaitu author, post_description, post_datetime, dan category
Kriteria Field:
author merupakan nama pembuat post, maksimal 20 karakter, dan terdiri dari huruf dan spasi
post_description merupakan konten dari post tersebut. maksimal 100 karakter.
post_datetime field disabled dan selalu terisi tanggal dan waktu sekarang dengan format seperti 21 Feb 2021 11:00 PM 
category dari post tersebut. Multivalue, minimal ada satu kategori terpilih (optional)
Validasi setiap submit`

Pergantian halaman menggunakan React-Router
