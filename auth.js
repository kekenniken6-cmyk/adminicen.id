function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "niken12345") {
    localStorage.setItem("adminLogin", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Username atau Password salah!");
  }
}

// PROTEKSI KHUSUS ADMIN
if (
  location.pathname.includes("/admin/dashboard") ||
  location.pathname.includes("/admin/products") ||
  location.pathname.includes("/admin/orders")
) {
  if (localStorage.getItem("adminLogin") !== "true") {
    window.location.href = "index.html";
  }
}
