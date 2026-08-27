let autoIncrementId = 1;

let products = [
  { id: autoIncrementId++, name: "Laptop", price: 18500.5, category: "Electronics", quantity: 4 },
  { id: autoIncrementId++, name: "Mouse", price: 180, category: "Electronics", quantity: 25 },
  { id: autoIncrementId++, name: "Notebook", price: 35, category: "Stationery", quantity: 100 },
  { id: autoIncrementId++, name: "Desk Lamp", price: 420, category: "Home", quantity: 0 }
];

function isValidString(str) {
  return typeof str === "string" && str.trim().length > 0;
}

function createProduct(name, price, category, quantity = 0) {
  if (!isValidString(name)) {
    return "Error: name is required";
  }

  if (!isValidString(category)) {
    return "Error: category is required";
  }

  const parsedPrice = parseFloat(price);
  const parsedQuantity = parseInt(quantity, 10);

  if (isNaN(parsedPrice) || parsedPrice <= 0) {
    return "Error: price must be greater than 0";
  }

  if (isNaN(parsedQuantity) || parsedQuantity < 0) {
    return "Error: quantity must be >= 0";
  }

  const nameExists = products.some(
    (p) => p.name.trim().toLowerCase() === name.trim().toLowerCase()
  );
  if (nameExists) {
    return `Error: product '${name.trim()}' already exists`;
  }

  const newProduct = {
    id: autoIncrementId++,
    name: name.trim(),
    price: parsedPrice,
    category: category.trim(),
    quantity: parsedQuantity
  };

  products.push(newProduct);
  return newProduct;
}

function printProducts(list = products) {
  if (!Array.isArray(list) || list.length === 0) {
    console.log("No products available to display.");
    return;
  }
  console.table(list);
}

function getAllProducts() {
  return products;
}

function getProductById(id) {
  const parsedId = parseInt(id, 10);
  const found = products.find((p) => p.id === parsedId);
  return found || null;
}

function updateProduct(id, name, price, category, quantity) {
  const product = getProductById(id);
  if (!product) {
    return "Error: product not found";
  }

  if (name !== null && name !== undefined && isValidString(name)) {
    const nameExists = products.some(
      (p) => p.id !== product.id && p.name.trim().toLowerCase() === name.trim().toLowerCase()
    );
    if (nameExists) {
      return `Error: product '${name.trim()}' already exists`;
    }
    product.name = name.trim();
  }

  if (price !== null && price !== undefined && String(price).trim() !== "") {
    const parsedPrice = parseFloat(price);
    if (!isNaN(parsedPrice) && parsedPrice > 0) {
      product.price = parsedPrice;
    }
  }

  if (category !== null && category !== undefined && isValidString(category)) {
    product.category = category.trim();
  }

  if (quantity !== null && quantity !== undefined && String(quantity).trim() !== "") {
    const parsedQuantity = parseInt(quantity, 10);
    if (!isNaN(parsedQuantity) && parsedQuantity >= 0) {
      product.quantity = parsedQuantity;
    }
  }

  return product;
}

function deleteProduct(id) {
  const index = products.findIndex((p) => p.id === parseInt(id, 10));
  if (index === -1) {
    return "Error: product not found";
  }

  const isConfirmed = confirm(`Are you sure you want to delete '${products[index].name}'?`);
  if (isConfirmed) {
    const [deletedItem] = products.splice(index, 1);
    return deletedItem;
  }
  return "Deletion canceled.";
}

function filterProducts(keyword = "") {
  const cleanKeyword = keyword.trim().toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(cleanKeyword) ||
      p.category.toLowerCase().includes(cleanKeyword)
  );
}

function sortByPrice(order = "asc") {
  return products.toSorted((a, b) => (order === "desc" ? b.price - a.price : a.price - b.price));
}

function getStoreStats() {
  if (products.length === 0) {
    return { totalItems: 0, totalInventoryValue: 0, averagePrice: "0.00", outOfStockCount: 0 };
  }

  const totalItems = products.length;
  const totalValue = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
  const totalPriceSum = products.reduce((sum, p) => sum + p.price, 0);
  const avgPrice = (totalPriceSum / totalItems).toFixed(2);
  const outOfStock = products.filter((p) => p.quantity === 0).length;

  return {
    totalItems: totalItems,
    totalInventoryValue: totalValue,
    averagePrice: avgPrice,
    outOfStockCount: outOfStock
  };
}

function groupByCategory() {
  return products.reduce((acc, product) => {
    const category = product.category;
    acc[category] = acc[category] || [];
    acc[category].push(product);
    return acc;
  }, {});
}

function filterByPriceRange(min = 0, max = Infinity) {
  return products.filter((p) => p.price >= min && p.price <= max);
}

const getInStock = (list = products) => list.filter((p) => p.quantity > 0);

function withAfterAction(fn, callback) {
  const result = fn();
  if (typeof callback === "function") {
    callback();
  }
  return result;
}

function addMany(...items) {
  const addedProducts = [];
  for (const item of items) {
    const res = createProduct(item.name, item.price, item.category, item.quantity);
    if (typeof res === "object") {
      addedProducts.push(res);
    }
  }
  return addedProducts;
}

function startApp() {
  let running = true;

  while (running) {
    const menu = `
===== NTI Mini Store =====
1) Add product
2) Show all products
3) Show product by ID
4) Update product
5) Delete product
6) Search / Filter
7) Store Stats
0) Exit
Enter choice (0-7):`;

    const choice = prompt(menu);

    if (choice === null || choice.trim() === "0") {
      alert("Exiting NTI Mini Store application. Goodbye!");
      running = false;
      break;
    }

    switch (choice.trim()) {
      case "1": {
        const name = prompt("Enter product name:");
        const price = prompt("Enter product price:");
        const category = prompt("Enter product category:");
        const quantity = prompt("Enter product quantity:");
        const result = createProduct(name, price, category, quantity);
        alert(typeof result === "string" ? result : "Product created successfully!");
        console.log("Create Result:", result);
        break;
      }
      case "2": {
        console.log("--- ALL PRODUCTS ---");
        printProducts(getAllProducts());
        break;
      }
      case "3": {
        const id = prompt("Enter Product ID:");
        const product = getProductById(id);
        if (product) {
          console.log("--- PRODUCT DETAILS ---");
          console.table([product]);
        } else {
          alert("Error: product not found");
        }
        break;
      }
      case "4": {
        const id = prompt("Enter Product ID to update:");
        const name = prompt("Enter new name (leave empty to keep current):");
        const price = prompt("Enter new price (leave empty to keep current):");
        const category = prompt("Enter new category (leave empty to keep current):");
        const quantity = prompt("Enter new quantity (leave empty to keep current):");
        const result = updateProduct(id, name, price, category, quantity);
        alert(typeof result === "string" ? result : "Product updated successfully!");
        console.log("Update Result:", result);
        break;
      }
      case "5": {
        const id = prompt("Enter Product ID to delete:");
        const result = deleteProduct(id);
        alert(typeof result === "string" ? result : "Product deleted successfully!");
        console.log("Delete Result:", result);
        break;
      }
      case "6": {
        const keyword = prompt("Enter keyword to search (Name or Category):");
        const results = filterProducts(keyword || "");
        console.log(`--- SEARCH RESULTS FOR: "${keyword}" ---`);
        printProducts(results);
        break;
      }
      case "7": {
        console.log("--- STORE STATS ---");
        console.table([getStoreStats()]);
        break;
      }
      default:
        alert("Invalid option! Please select a number between 0 and 7.");
    }
  }
}