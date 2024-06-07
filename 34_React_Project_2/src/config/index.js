export const PRODUCT_CATEGORIES = [
    {
      label: 'UI Kits',
      value: 'ui_kits',
      featured: [
        {
          name: 'Editor picks',
          href: `/products?category=ui_kits`,
          imageSrc: '/nav/ui-kits/mixed.jpg',
        },
        {
          name: 'New Arrivals',
          href: '/products?category=ui_kits&sort=desc',
          imageSrc: '/nav/ui-kits/blue.jpg',
        },
        {
          name: 'Bestsellers',
          href: '/products?category=ui_kits',
          imageSrc: '/nav/ui-kits/purple.jpg',
        },
      ],
    },
    {
      label: 'Icons',
      value: 'icons',
      featured: [
        {
          name: 'Favorite Icon Picks',
          href: `/products?category=icons`,
          imageSrc: '/nav/icons/picks.jpg',
        },
        {
          name: 'New Arrivals',
          href: '/products?category=icons&sort=desc',
          imageSrc: '/nav/icons/new.jpg',
        },
        {
          name: 'Bestselling Icons',
          href: '/products?category=icons',
          imageSrc: '/nav/icons/bestsellers.jpg',
        },
      ],
    },
  ]



  export const products = [
    {
        id: "1",
        title: "Modern UI Kit",
        price: 29.99,
        description: "A sleek and modern UI kit perfect for web and mobile applications.",
        author: "DesignPros",
        image: "/product_1.png",
        likes: "150",
    },
    {
        id: "2",
        title: "Flat Design Icons",
        price: 19.99,
        description: "A set of flat design icons suitable for any project.",
        author: "IconFactory",
        image: "/product_2.png",
        likes: "200",
    },
    {
        id: "3",
        title: "Vintage UI Elements",
        price: 39.99,
        description: "Vintage styled UI elements for a unique look.",
        author: "RetroDesigns",
        image: "/product_3.png",
        likes: "75",
    },
    {
        id: "4",
        title: "Minimalist Wireframes",
        price: 25.99,
        description: "Minimalist wireframes to streamline your design process.",
        author: "WireframeMaster",
        image: "/product_4.png",
        likes: "180",
    },
    {
        id: "5",
        title: "E-commerce UI Kit",
        price: 49.99,
        description: "A comprehensive UI kit designed for e-commerce applications.",
        author: "ShopBuilder",
        image: "/product_5.png",
        likes: "300",
    },
    {
        id: "6",
        title: "Social Media Pack",
        price: 15.99,
        description: "A pack of social media templates and icons.",
        author: "SocialMediaGuru",
        image: "/product_6.png",
        likes: "220",
    },
    {
        id: "7",
        title: "Dashboard UI Kit",
        price: 59.99,
        description: "A detailed UI kit for creating modern dashboards.",
        author: "DashDesigns",
        image: "/product_7.png",
        likes: "350",
    },
    {
        id: "8",
        title: "3D Icons Pack",
        price: 29.99,
        description: "A pack of 3D icons for adding depth to your designs.",
        author: "3DIconFactory",
        image: "/product_8",
        likes: "95",
    }
];
