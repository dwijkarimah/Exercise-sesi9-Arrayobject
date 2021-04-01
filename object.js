// membuat Object
let person1 = {
    name: "Skilvul",
    age: 1,
    isVerified: true,
  };
  
  const person2 = {
    name: "Impact Byte",
    age: 3,
    isVerified: true,
  };
  
  // membuat Object 2
  let car = {
    color: ["merah", "jingga", "kuning"],
    engine: undefined,
    // jika ingin memberikan nilai key ada spasi
    "total ban": 4,
  };
  console.log(car);
  // panggil variable di dalam property
  console.log(car.color);
  // panggil varable dengan bracket notation
  // console.log(car.total ban) // tidak bisa
  // cara benar untuk panggil variable dengan key ada spasinya
  console.log(car["total ban"]);
  
  // updating object
  
  let car = {
    color: ["merah", "jingga", "kuning"],
    engine: undefined,
    // jika ingin memberikan nilai key ada spasi
    "total ban": 4,
  };
  console.log(car);
  car.engine = "5000cc";
  console.log(car);
  
  car.plat = "b 1234 abc";
  console.log(car);
  // di object masih bisa update nilai/value dengan const
  
  // jika menggunakan const tidak bisa merombak seluruh value
  car = {
    velg: "17 inch",
  };
  
  console.log(car);
  
  // delete property
  delete car.velg;
  
  // method dalam object
  const greeting = {
    welcome: function () {
      return "Halo";
    },
    goodMorning: function () {
      return "Good Morning";
    },
    goodNight: function () {
      return " Good Night";
    },
  };
  
  // bedanya kalau memanggil method harus menggunakan ()
  // method adalah fungsi didalam object
  console.log(greeting.welcome());
  console.log(greeting.goodMorning());
  console.log(greeting.goodNight());
  
  // nested object
  const news = {
    title: "Indonesia bebas corona",
    description:
      "Seluruh warga indonesia sudah divaksin dan terbebas dari virus corona",
    author: {
      name: "Thoriq",
      umur: 15,
      city: "jakarta",
    },
  };
  
  // memanggil keseluruhan object
  console.log(news);
  // memanggil object dengan key author
  console.log(news.author);
  // memanggil object nested didalam author dengan key nama
  console.log(news.author.name);
  
  // pass By Reference
  let number = {
    valueA: 10,
    valueB: 99,
  };
  // membuat sebuah fungsi khusus untuk mengubah nilai dari object number
  function ubahAngka(obj) {
    (obj.valueA = 88), (obj.valueB = 33);
  }
  ubahAngka(number);
  console.log(number.valueA); //88
  console.log(number.valueB); //33
  
  // looping dalam object
  const news = {
    title: "Indonesia bebas corona",
    description:
      "Seluruh warga indonesia sudah divaksin dan terbebas dari virus corona",
    author: {
      name: "Thoriq",
      umur: 15,
      city: "jakarta",
    },
  };
  
  // melakukan looping di dalam object news untuk menampilkan semua isi dari news
  for (const data in news) {
    console.log(news[data]);
  }
  
  // melakukan looping di dalam object nested news
  // untuk menampilkan semua isi dari news author
  for (let data in news.author) {
    console.log(news.author[data]);
  }
  
  // array of object
  let student = [
    {
      name: "Thoriq",
      kelas: "1A",
    },
    {
      name: "Danu",
      kelas: "1B",
    },
    {
      name: "Lutfi",
      kelas: "1C",
    },
  ];
  
  // student.map((allStudent) => {
  //   console.log(allStudent);
  // });
  
  student.forEach((allStudent) => {
    console.log(allStudent);
  });
  
     
  