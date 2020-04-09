export interface Product {
  name:string,
  image:ImageBitmap,
  price:number,
  description:string,
  categoryId:number;
}

export const products = [
  {
    image: "assets/1.jpg",
    name: 'ХАН САМСА МЕКСИКАНСКАЯ (1000 ГР)',
    price: 3850,
    categoryId:1,
    description: 'Хан Самса из молочного теста с классической пикантной начинкой из нежной телятины, маринованными халапеньо и фасолью, свежими томатами, паприкой и сырами голландским и домашним сулугуни ',
    rating:12,
     },
  {
    image:"assets/2.jpg",
    name:'ХАН САМСА КУРИНАЯ',
    price:3750,
    categoryId:1,
    description:'Хан Самса из молочного теста с нежной начинкой из куриного филе, свежих томатов, репчатого лука, оливок, ароматного сыра и свежей зелени (тимьян, розмарин и базилик)',
    rating:4.9,
    },
  {
    image:"assets/3.png",
    name:'КУЫРДАК ПО-КАЗАХСКИ (ПОРЦИЯ: 250 ГР)',
    price:15000,
    categoryId:1,
    description:'Нежное мясо ягненка с кусочками сердца, легких, печени обжаренные с картофелем и репчатым луком',
    rating:5.9,
    },
  {
    image:"assets/4.jpg",
    name:'ПЛОВ ЧАЙХАНСКИЙ (ПОРЦИЯ: 3,3 КГ) ',
    price:15000,
    categoryId:1,
    description:'Приготовлен на основе рассыпчатого риса - "Лазер", с нежным мясом ягненка и телятины с добавлением сухофруктов на выбор',
    rating:4.9,
    },
  {
    image:"assets/5.jpg",
    name:'ЦЕЗАРЬ АГА ОВОЩНОЙ (ПОРЦИЯ 250 ГР) ',
    price:1635 ,
    categoryId:2,
    description:'ЦЕЗАРЬ АГА ОВОЩНОЙ (ПОРЦИЯ 250 ГР)Свежие листья салата с обжаренными баклажанами, сочными томатами под соусом Цезарь с сыром Пармезан',
    rating:4.9,
     },
  {
    image: "assets/6.jpg",
    name: 'ЕРОФЕЕВСКИЙ (ПОРЦИЯ: 200 ГР) ',
    price: 7350,
    categoryId:2,
    description: 'Ерофеевский Пикантный салат с нежным копченым куриным филе, домашним сыром Брынза и свежими томатами, заправленный соусом на основе майонеза ',
    rating:4.8,
      },
      {
        image: "assets/6.jpg",
        name: 'ЕРОФЕЕВСКИЙ (ПОРЦИЯ: 200 ГР) ',
        price: 7350,
        categoryId:2,
        description: 'Ерофеевский Пикантный салат с нежным копченым куриным филе, домашним сыром Брынза и свежими томатами, заправленный соусом на основе майонеза ',
        rating:4.8,
          },
          {
            image: "assets/6.jpg",
            name: 'ЕРОФЕЕВСКИЙ (ПОРЦИЯ: 200 ГР) ',
            price: 7350,
            categoryId:2,
            description: 'Ерофеевский Пикантный салат с нежным копченым куриным филе, домашним сыром Брынза и свежими томатами, заправленный соусом на основе майонеза ',
            rating:4.8,
              },
  {
    image: "assets/7.jpg",
    categoryId:3,
    name: 'ДОМАШНИЙ КОМПОТ',
    price: 1027.34,
    description: 'Домашний компот 1литр',
    },
  {
    image: "assets/8.png",
    name: 'ЧАЛАП',
    price: 1284,
    categoryId:3,
    description: 'ЧАЛАП домашний',
    },
  {
    image: "assets/9.png",
    name: 'МИНЕРАЛЬНАЯ ВОДА',
    price: 176,
    categoryId:3,
    description: 'МИНЕРАЛЬНАЯ ВОДА',
     },
  {
    image: "assets/10.jpg",
    name: 'БЛИНЧИКИ СО СМЕТАНОЙ (ПОРЦИЯ: 170 ГР)',
    price: 681,
    description: 'Посуда  1 маленький контейнер + 1 соусница',
     rating:4.9,
    categoryId:4,
    },
  {
    image: "assets/11.jpg",
    name: 'БЛИНЧИКИ С МЯСОМ (ПОРЦИЯ: 200 ГР) ',
    price: 9835,
    description: 'Блинчики с мясом Блинчики с мясом телятина с репчатым луком',
    rating:4.9,
    categoryId:4,
     },
  {
    image: "assets/12.jpg",
    name: 'САМСА С МЯСОМ  ',
    price: 1182.15 ,
    description: 'Самса с мясом, Домашняя выпечка',
    rating:4.9,
    categoryId:5,
     },
  {
    image: "assets/13.jpg",
    name: ' ЧЕБУРЕКИ С ДЖУСАЕМ (3ШТ)',
    price: 2156,
    description: 'Мини чебуреки с яйцом и зеленью джусай',
    rating:4.9,
    categoryId:5,
     },
  {
    image: "assets/.jpg",
    name: 'Испарительный Увлажнитель ',
    price: 37881,
    description: 'SMARTMI Испарительный Увлажнитель 2 без смога для дома воздушный демпфер Арома диффузор эфирное масло тумана Xiaomi Mijia приложение управление',
    rating:4.9,
    
    site:"https://aliexpress.ru/item/4000270991987.html?spm=2114.12010615.8148356.33.55092aa2h4EcI4&spm=a2g0o.store_home.hotSpots_833049449.1"
  },
  {
    image: "assets/ugos.jpg",
    name: 'ТВ-приставка Ugoos X3 PRO ',
    price: 21596.80,
    
    description: 'Android 9,0 4 Гб ОЗУ 32 Гб X3 Plus 64 Гб DDR4 Amlogic S905X3 2,4G/5G WiFi 1000M 4K X3 Cube 2 Гб 16 Гб телеприставка',
    rating:4.9,
    site:"https://aliexpress.ru/item/4000330035787.html?spm=a2g0o.productlist.0.0.3a08e67dMPg064&algo_pvid=0f39ab32-6488-4e99-8731-aad504506817&algo_expid=0f39ab32-6488-4e99-8731-aad504506817-0&btsid=b44bbdcd-e964-4c15-98a4-9ef8fef4015f&ws_ab_test=searchweb0_0,searchweb201602_2,searchweb201603_53"
  },
  {
    image:"assets/14.jpg",
    name:'ШАШЛЫК ИЗ ТЕЛЯТИНЫ (ПОРЦИЯ: 200 ГР)',
    price:1000,
    categoryId:6,
    description:'шашлык из телятины, Шашлыки ',
    },
  {
    image:"assets/15.jpg",
    name:'ХАНСКИЙ «ЛЮЛЯ КЕБАБ» (ПОРЦИЯ: 200 ГР)',
    price:1500,
    categoryId:6,
    description:'ХАНСКИЙ «ЛЮЛЯ КЕБАБ» (ПОРЦИЯ: 200 ГР),Посуда  1 маленький контейнер',
    rating:4.9,
    },
  {
    image:"assets/16.jpg",
    name:'ОКРОШКА ',
    price:1500,
    categoryId:7,
    description:'Окрошка,Холодный суп с мелко нарезанными овощами, заправленный кислой молочной заправкой ',
    rating:4.9,
    },
  {
    image:"assets/17.jpg",
    name:'ЧЕЧЕВИЧНЫЙ',
    price:220000,
    categoryId:7,
    description:'Нежный крем-суп из чечевицы и копченой курицы с добавлением сливок и дольки лимона ',
    rating:4.9,
    },
  
  
  {
    image: "assets/18.jpg",
    name: 'АДЖИКА ИЗ СПЕЛЫХ ТОМАТОВ (50ГР)',
    price: 1284,
    categoryId:8,
   },
  {
    image: "assets/19.jpg",
    name: 'КЕТЧУП (50ГР)',
    price: 176180,
    categoryId:8,
    rating:4.8,
     }
 
];


