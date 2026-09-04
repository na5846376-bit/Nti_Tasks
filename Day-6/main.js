let autoIncrementId = 1;

let products = [
  { id: autoIncrementId++, name: "Laptop",    price: 18500.5, category: "Electronics", quantity: 4 },
  { id: autoIncrementId++, name: "Mouse",     price: 180,     category: "Electronics", quantity: 25 },
  { id: autoIncrementId++, name: "Notebook",  price: 35,      category: "Stationery",  quantity: 100 },
  { id: autoIncrementId++, name: "Desk Lamp", price: 420,     category: "Home",        quantity: 0 }
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



let editingId = null;

function showMsg(text, type) {
  const el = document.getElementById("msg");
  el.textContent = text;
  el.className = type;
  clearTimeout(el._t);
  el._t = setTimeout(() => { el.className = ""; }, 3000);
}

function clearForm() {
  document.getElementById("f-name").value     = "";
  document.getElementById("f-category").value = "";
  document.getElementById("f-price").value    = "";
  document.getElementById("f-qty").value      = "";
  editingId = null;
}

function loadToForm(id) {
  const p = getProductById(id);
  if (!p) return;
  editingId = id;
  document.getElementById("f-name").value     = p.name;
  document.getElementById("f-category").value = p.category;
  document.getElementById("f-price").value    = p.price;
  document.getElementById("f-qty").value      = p.quantity;
}

function handleAdd() {
  const name     = document.getElementById("f-name").value;
  const category = document.getElementById("f-category").value;
  const price    = document.getElementById("f-price").value;
  const qty      = document.getElementById("f-qty").value || "0";

  const result = createProduct(name, price, category, qty);
  if (typeof result === "string") { showMsg(result, "err"); return; }

  showMsg("Product added!", "ok");
  clearForm();
  render();
}

function handleUpdate() {
  if (editingId === null) {
    showMsg("Click 'update' in the table first to select a product", "err");
    return;
  }
  const name     = document.getElementById("f-name").value;
  const category = document.getElementById("f-category").value;
  const price    = document.getElementById("f-price").value;
  const qty      = document.getElementById("f-qty").value;

  const result = updateProduct(editingId, name, price, category, qty);
  if (typeof result === "string") { showMsg(result, "err"); return; }

  showMsg("Product updated!", "ok");
  clearForm();
  render();
}

function handleDelete(id) {
  const result = deleteProduct(id);
  if (typeof result === "string" && result !== "Deletion canceled.") {
    showMsg(result, "err");
    return;
  }
  if (typeof result === "object") showMsg("Product deleted.", "ok");
  if (editingId === id) clearForm();
  render();
}

function render() {
  const tbody = document.getElementById("tbody");
  const list  = getAllProducts();

  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;color:#999;padding:20px">No products yet.</td></tr>`;
    return;
  }

  tbody.innerHTML = list.map(p => `
    <tr>
      <td>${p.id}</td>
      <td>${p.name}</td>
      <td>${p.category}</td>
      <td>${p.price}</td>
      <td>${p.quantity}</td>
      <td>
        <button onclick="loadToForm(${p.id})">update</button>
        <button class="btn-del" onclick="handleDelete(${p.id})">delete</button>
      </td>
    </tr>
  `).join("");
}

render();