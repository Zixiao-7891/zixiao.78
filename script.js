// script.js

let cart = [];

function addToCart(productName, price) {
  cart.push({ productName, price });
  displayCart();
}

function displayCart() {
  const cartList = document.getElementById('cart-list');
  cartList.innerHTML = ''; // 清空购物车
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.productName} - ￥${item.price}`;
    cartList.appendChild(li);
  });
}

function proceedToCheckout() {
  alert('结算功能尚未实现！');
}

// 登录/注册功能
document.getElementById('login-btn').addEventListener('click', () => {
  document.getElementById('login').style.display = 'block';
});

document.getElementById('login-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  // 在这里进行登录验证
  alert(`欢迎回来，${email}!`);
  document.getElementById('login').style.display = 'none';
});
