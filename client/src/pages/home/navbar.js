import avalogo from '../../assest/avalogo.png';

export default function Navbar() {
  return (
    <div class="container">
  <div class="navbar">
    <div class="logo">
      <a href="index.html"><img src={avalogo} alt="RedStore" width="125px" /></a>
    </div>
    <nav>
      <ul id="MenuItems">
        <li><a href="index.html">Home</a></li>
        <li><a href="product.html">Products</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="account.html">Account</a></li>
      </ul>
    </nav>
    <a href="cart.html"><img src="https://i.ibb.co/PNjjx3y/cart.png" alt="" width="30px" height="30px" /></a>
    <img src="https://i.ibb.co/6XbqwjD/menu.png" alt="" class="menu-icon" onclick="menutoggle()" />
  </div>
</div>
  )
}
