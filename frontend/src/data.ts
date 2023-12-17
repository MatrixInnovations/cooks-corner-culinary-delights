type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 1,
    title: 'Grilled Salmon',
    desc: 'Savor the exquisite Grilled Salmon, a succulent fillet cooked to perfection and accompanied by a bright lemon dill sauce, served with garlic-infused quinoa and sautéed asparagus for a delightful and wholesome dining experience.',
    img: '/food1.png',
    price: 29.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: 'Parmesan Garlic Mashed',
    desc: 'Indulge in the flavorful Parmesan Garlic Mashed Potatoes, a delectable side dish featuring creamy mashed potatoes infused with aromatic garlic and enriched with the distinctive taste of Parmesan cheese, offering a perfect complement to any main course.',
    img: '/food2.jpg',
    price: 20.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: 'Seared Ribeye',
    desc: 'Savor the exquisite Seared Ribeye, a prime cut of beef expertly seared to perfection, offering a succulent and flavorful dining experience, paired with a rich red wine reduction, truffle-infused mashed potatoes, and roasted Brussels sprouts for a truly indulgent main course.',
    img: '/food3.jpg',
    price: 24.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: 'Grilled Chicken',
    desc: 'Enjoy the Grilled Chicken, a delicious dish featuring tender and succulent chicken, expertly grilled to perfection, and served with a medley of vibrant seasonal vegetables, creating a wholesome and satisfying dining experience.',
    img: '/grilledchicken.jpg',
    price: 26.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 5,
    title: 'Honey Pepper Turkey Meatballs',
    desc: 'Satisfy your palate with the delightful Honey Pepper Turkey Meatballs, a savory and sweet fusion of lean turkey meatballs glazed in a delectable honey pepper sauce, offering a flavorful and appetizing twist to this mouthwatering dish.',
    img: '/food4.jpg',
    price: 29.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 6,
    title: 'Rice Pilaf',
    desc: 'Delight in the aromatic Rice Pilaf, a fragrant and savory side dish featuring fluffy basmati rice infused with a medley of herbs and spices, creating a perfect accompaniment to elevate your dining experience with its subtle complexity and satisfying texture.',
    img: '/food5.jpg',
    price: 24.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 7,
    title: 'Quinoa and brown rice',
    desc: 'Experience a wholesome and nutritious blend with Quinoa and Brown Rice, a health-conscious side dish combining the nutty richness of brown rice with the protein-packed quinoa, expertly seasoned to perfection for a delightful and balanced addition to your culinary journey.',
    img: '/food6.jpg',
    price: 28.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 8,
    title: 'Roasted Assorted vegetables',
    desc: 'Savor the vibrant flavors of Roasted Assorted Vegetables, a colorful medley of seasonal veggies expertly roasted to perfection, offering a delightful combination of textures and tastes that elevate this side dish into a flavorful and healthful culinary experience.',
    img: '/food7.jpg',
    price: 32.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 9,
    title: 'Hawaiian Teriyaki',
    desc: 'Experience a taste of the tropics with a juicy beef patty glazed in tangy teriyaki sauce, topped with grilled pineapple, crispy bacon, and fresh lettuce, and all the classic fixings on a toasted bun.',
    img: '/temporary/p9.png',
    price: 29.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
];

export const grilled: Products = [
  {
    id: 1,
    title: 'Grilled Salmon',
    desc: 'Savor the exquisite Grilled Salmon, a succulent fillet cooked to perfection and accompanied by a bright lemon dill sauce, served with garlic-infused quinoa and sautéed asparagus for a delightful and wholesome dining experience.',
    img: '/food1.png',
    price: 29.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: 'Parmesan Garlic Mashed',
    desc: 'Indulge in the flavorful Parmesan Garlic Mashed Potatoes, a delectable side dish featuring creamy mashed potatoes infused with aromatic garlic and enriched with the distinctive taste of Parmesan cheese, offering a perfect complement to any main course.',
    img: '/food2.jpg',
    price: 20.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: 'Seared Ribeye',
    desc: 'Savor the exquisite Seared Ribeye, a prime cut of beef expertly seared to perfection, offering a succulent and flavorful dining experience, paired with a rich red wine reduction, truffle-infused mashed potatoes, and roasted Brussels sprouts for a truly indulgent main course.',
    img: '/food3.jpg',
    price: 24.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: 'Grilled Chicken',
    desc: 'Enjoy the Grilled Chicken, a delicious dish featuring tender and succulent chicken, expertly grilled to perfection, and served with a medley of vibrant seasonal vegetables, creating a wholesome and satisfying dining experience.',
    img: '/grilledchicken.jpg',
    price: 26.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
];

export const singleProduct: Product = {
  id: 1,
  title: 'Grilled Salmon',
  desc: 'Savor the exquisite Grilled Salmon, a succulent fillet cooked to perfection and accompanied by a bright lemon dill sauce, served with garlic-infused quinoa and sautéed asparagus for a delightful and wholesome dining experience.',
  img: '/food1.jpg',
  price: 29.9,
  options: [
    {
      title: 'Small',
      additionalPrice: 0,
    },
    {
      title: 'Medium',
      additionalPrice: 4,
    },
    {
      title: 'Large',
      additionalPrice: 6,
    },
  ],
};

type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: 'chicken',
    title: 'Grilled Chicken',
    desc: 'Enjoy the Grilled Chicken, a delicious dish featuring tender and succulent chicken and expertly grilled to perfection.',
    img: '/grilledchicken.jpg',
    color: 'white',
  },
  {
    id: 2,
    slug: 'rice',
    title: 'Rice Pilaf',
    desc: 'Rice Pilaf is a fragrant and savory side dish featuring fluffy basmati rice infused with a medley of herbs and spices.',
    img: '/food5.jpg',
    color: 'black',
  },
  {
    id: 3,
    slug: 'vegetables',
    title: 'Roasted Assorted vegetables',
    desc: 'Roasted Assorted Vegetables is a colorful medley of seasonal veggies expertly roasted to perfection.',
    img: '/food7.jpg',
    color: 'white',
  },
];
