let products = [];
let STTHT = 10;
let productForm = document.getElementById("product-form");
let productCode = document.getElementById("product-code");
let productName = document.getElementById("product-name");
let productPrice = document.getElementById("product-price");
let productTable = document.getElementById("product-table");

function addProduct(event) {
    event.preventDefault();
    let STT = STTHT + 1;
    let addCode = productCode.value;
    let addName = productName.value;
    let addPrice = +productPrice.value;

    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${STT}</td>
                <td>${addCode}</td>
                <td>${addName}</td>
                <td>${addPrice}</td>
                <td>
                  <div class="action-buttons">
                    <button class="btn-edit">Sửa</button>
                    <button class="btn-delete">Xóa</button>
                  </div>
                </td>`
    let newProduct = { code: addCode, name: addName, price: addPrice }
    products.push(newProduct);
    productTable.appendChild(tr);
    productForm.reset();
}

productForm.addEventListener("submit", addProduct);