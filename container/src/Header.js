import React from "react";
import { navigateToUrl } from "single-spa";

export default function Header() {
  console.log('Header rendered'); 

  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/" onClick={navigateToUrl}>User</a>
          </li>
          <li>
            <a href="/purchase-order" onClick={navigateToUrl}>Purchase Order</a>
          </li>
          <li>
            <a href="/company" onClick={navigateToUrl}>Company</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
