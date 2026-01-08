let products = JSON.parse(localStorage.getItem("products")) || [];

function addProduct() {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;

  products.push({
    name: name,
    price: Number(price)
  });

  localStorage.setItem("products", JSON.stringify(products));
  alert("Produk tersimpan!");
}
