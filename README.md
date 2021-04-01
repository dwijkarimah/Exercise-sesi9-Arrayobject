#sesi9-Arrayobject menggunakan javasript dan regex


Exercise 1

Buatlah sebuah object hewan yang berisikan:
ciri-ciri (atribute) :
 nama: String
kaki: Number
warna: Array
spesies: String (mamalia/unggas/dll)
makanan: Array
keahliannya (method) :
terbang / loncat / berburu / dll

Tampilkan dengan console.log seperti ini, Contoh :
Nama: Kucing
Kaki :  4
Spesies: Mamalia
Warna: oren, putih, item
Makanan : Ikan, Ayam
Suara: Miaaaaw

Exercise 2

const data = 
[
  {
    name: ‘Alpha’,
    class: ‘Dragon’,
    club: ['Bola', 'Bulutangkis']
  },
  {
    name: Beta,
    class: ‘Lizard’,
    club: ['Membaca', 'Bulutangkis']
  },
]

Tampilkanlah seperti ini
Alpha ada di kelas Dragon, dia mengikuti club Bola, Bulutangkis
Beta ada di kelas Lizard, dia mengikuti club Membaca, Bulutangkis



Exercise 3

let todos = [
  {id: 1, todo: "belajar coding"},
  {id: 2, todo: "nanti tidur"}
]

Buatlah function CRUD sederhana pada data di atas

printAll(), hasil:
1, "belajar coding"
2, "nanti tidur"

printByID(id), hasil
1, "belajar coding"

add(newTodo), hasil
1, "belajar coding"
2, "nanti tidur"
3, "ngerjain tugas"

deleteByID(id), hasil :
1, "belajar coding"
2, "ngerjain tugas"

updateByID(newTodo), hasil
1, "belajar CRUD"
3, "ngerjain tugas"

Exercise 4:

Buatlah tampilan buah menggunakan array of object
Data yang perlu ditampilkan
Nama, warna, nama latin, tipe biji, gambar buah
