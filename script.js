let ProductContainer = document.querySelector(".product-container");

const AmazingProducts = [
  {
    id: 1,
    title: "Apple 16x",
    price: "4,800,000",
    description: "موبایل اپل کم حجم سبک و زیبا دو سیم کارت",
    iamge: "./Images/i1.webp",
  },
  {
    id: 2,
    title: "x78",
    price: "240,000",
    description: "هندزفری بلوتوثی کم حجم سبک و زیبا دو سیم کارت",
    iamge: "./Images/i2.webp",
  },
  {
    id: 3,
    title: "lenovo",
    price: "34,000,000",
    description: "لپتاب لنوو فول اچ دی core i7سبک کم حجم زیبا",
    iamge: "./Images/i3.webp",
  },
  {
    id: 4,
    title: "iphone18pro",
    price: "78,000,000",
    description: "موبایل آیفون دوسیم کارت تاچ لمسی",
    iamge: "./Images/i4.webp",
  },
  {
    id: 5,
    title: "Sumsong128",
    price: "9,070,000",
    description: "سامسونگ حافظه ۱۲۸ ssd چهاردوربین",
    iamge: "./Images/i5.webp",
  },
  {
    id: 6,
    title: "Sumsong128",
    price: "19,080,000",
    description: "سامسونگ حافظه ۱۲۸ ssd چهاردوربین",
    iamge: "./Images/i6.webp",
  },
  {
    id: 7,
    title: "AppleWatch",
    price: "750,000",
    description: "ساعت هوشمند لمسی قابلیت تماس و ضبط صدا",
    iamge: "./Images/i7.webp",
  },
  {
    id: 8,
    title: "Casoka",
    price: "3,800,000",
    description: "ساعت مچی ضد آب ظریف و با کیفیت بالا",
    iamge: "./Images/i8.webp",
  },
  {
    id: 9,
    title: "Huawei",
    price: "13,800,000",
    description: "تبلت  ۱۲۸گیگ ظریف و با کیفیت بالا",
    iamge: "./Images/i9.webp",
  },
  {
    id: 10,
    title: "lenovo",
    price: "3,800,000",
    description: "لپتاب مهندسی رم8 corei5 intel",
    iamge: "./Images/i10.webp",
  },
  {
    id: 11,
    title: "HP",
    price: "3,800,000",
    description: "لپتاب گیمینگ فوق العاده قدرتمند",
    iamge: "./Images/i11.webp",
  },
  {
    id: 12,
    title: "KMP",
    price: "240,000",
    description: "هندزفری سیمی قابلیت پاسخگویی به تماس ",
    iamge: "./Images/i12.webp",
  },
  {
    id: 13,
    title: "sumsong",
    price: "180,000",
    description: "هندزفری سیمی فوق العاده باکیفیت",
    iamge: "./Images/i13.webp",
  },
];
AmazingProducts.forEach(function (product) {
  ProductContainer.innerHTML +=
    '<div class="product"><img src=' +
    product.iamge +
    ' alt="" /><p>' +
    product.description +
    "</p><h3>" +
    product.title +
    '</h3><div class="price"><h4>' +
    product.price +
    "</h4><h4>تومان</h4></div></div>";
});
