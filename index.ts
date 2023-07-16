import { error } from "console";
import fs from "fs";

const app = "https://fakestoreapi.com/products/";

async function showProduct() {
  const response = await fetch(app);
  return await response.json();
}
async function displayProduct() {
  const products = await showProduct();
  console.log(products);
}

displayProduct();

async function getProductPrice() {
  const minPrice = 10;
  const maxPrice = 20;

  const products1: any = await showProduct();

  const filteredProducts = products1.filter((product: any) => {
    return product.price >= minPrice && product.price <= maxPrice;
  });

  console.log(filteredProducts);

  fs.writeFile("result_1.json", JSON.stringify(filteredProducts), (error) => {
    if (error) throw error;
    console.log('Results were written into a file: "result_1.json"');
  });
}

getProductPrice();

async function findTitle() {
  const products2: any = await showProduct();

  const findTitleProducts = products2.find((product: any) => {
    return product.title === "Mens Casual Slim Fit";
  });

  console.log(findTitleProducts);

  fs.writeFile("result_2.json", JSON.stringify(findTitleProducts), (error) => {
    if (error) throw error;
    console.log('Results were written into a file: "result_2.json"');
  });
}

findTitle();

async function findStringInDescription() {
  const products3: any = await showProduct();

  const findString = products3.filter((product: any) => {
    return product.description.includes("Cotton");
  });

  console.log(findString);

  fs.writeFile("result_3.json", JSON.stringify(findString), (error) => {
    if (error) throw error;
    console.log('Results were written into a file: "result_3.json"');
  });
}

findStringInDescription();

async function sortProduct() {
  const product4 = await showProduct();

  const sort1 = product4.map((product: any) => {
    return product.rating.rate;
  });

  const sort2 = sort1.sort((a: number, b: number) => b - a);

  console.log(sort2);

  fs.writeFile("result_4.json", JSON.stringify(sort2), (error) => {
    if (error) throw error;
    console.log('Results were written into a file: "result_4.json"');
  });
}
sortProduct();

async function sortProductRate() {
  const product5 = await showProduct();

  const sort3 = product5
    .map((product: any) => product.rating.rate)
    .filter((value: number) => value >= 3);

  const sort4 = sort3.sort((a: number, b: number) => a - b);

  console.log(sort4);

  fs.writeFile("result_5.json", JSON.stringify(sort4), (error) => {
    if (error) throw error;
    console.log('Results were written into a file: "result_5.json"');
  });
}
sortProductRate();

async function groupProducts() {
  const product6 = await showProduct();

  let electronics: any = [];
  let womensClothing: any = [];
  let jewelery: any = [];
  let mensClothing: any = [];

  for (let product of product6) {
    switch (product.description) {
      case "electronics":
        electronics.push(product);
        break;
      case "women's clothing":
        womensClothing.push(product);
        break;
      case "jewelery":
        jewelery.push(product);
        break;
      case "men's clothing":
        mensClothing.push(product);
        break;
    }
  }

  if (electronics.length > 0) {
    console.log(electronics);
  }

  if (womensClothing.length > 0) {
    console.log(womensClothing);
  }

  if (jewelery.length > 0) {
    console.log(jewelery);
  }

  if (mensClothing.length > 0) {
    console.log(mensClothing);
  }

  electronics.sort((a: any, b: any) => a.price - b.price);
  womensClothing.sort((a: any, b: any) => a.price - b.price);
  jewelery.sort((a: any, b: any) => a.price - b.price);
  mensClothing.sort((a: any, b: any) => a.price - b.price);

  fs.writeFile("result_6.json", JSON.stringify(product6), (error) => {
    if (error) throw error;
    console.log('Results were written into a file: "result_6.json"');
  });
}

groupProducts();

async function findImage() {
  const product7 = await showProduct();

  const image1 = product7.filter((product: any) => {
    return (
      !product.image.includes(".jpg") &&
      !product.image.includes(".png") &&
      !product.image.includes(".jpeg")
    );
  });

  console.log(image1);

  fs.writeFile("result_7.json", JSON.stringify(image1), (error) => {
    if (error) throw error;
    console.log('Results were written into a file: "result_7.json"');
  });
}

findImage();

async function cuteDescription() {
  const product8 = await showProduct();

  for (let product of product8) {
    if (product.description.length <= 30) {
      product.description = product.description;
    } else {
      product.description = product.description.slice(0, 28) + "...";
    }
  }
  console.log(product8);

  fs.writeFile("result_8.json", JSON.stringify(product8), (error) => {
    if (error) throw error;
    console.log('Results were written into a file: "result_8.json"');
  });
}

cuteDescription();

async function showDiscount() {
  const product9 = await showProduct();
  const discount = 50;

  for (let product of product9) {
    if (product.price) {
      product.price = product.price - product.price * (discount / 100);
    }
  }

  console.log(product9);

  fs.writeFile("result_9.json", JSON.stringify(product9), (error) => {
    if (error) throw error;
    console.log('Results were written into a file: "result_9.json"');
  });
}

showDiscount();

async function convertPriceProduct() {
  const product9 = await showProduct();

  for (let product of product9) {
    if (!Number.isInteger(product.price)) {
      product.price = Math.round(product.price);
    }
  }

  console.log(product9);

  fs.writeFile("result_10.json", JSON.stringify(product9), (error) => {
    if (error) throw error;
    console.log('Results were written into a file: "result_10.json"');
  });
}

convertPriceProduct();

async function showTotalCount() {
  const product10 = await showProduct();

  const totalCount = product10
    .map((product: any) => product.rating.count)
    .reduce((accumulator: number, currentValue: number) => {
      return accumulator + currentValue;
    });

  console.log(totalCount);

  fs.writeFile("result_11.json", JSON.stringify(totalCount), (error) => {
    if (error) throw error;
    console.log('Results were written into a file: "result_11.json"');
  });
}
showTotalCount();
