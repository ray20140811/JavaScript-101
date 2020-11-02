var products = {
    "iPhone": {
        id: 1,
        productName: "i phone",
        price: 100,
        getProductName: function () {
            return this.productName;
        }
    },
    "iPad": {
        id: 2,
        productName: "iPad",
    },
    "Mac": {
        id: 3,
        productName: "iMac",
    }
}

console.log(products);
console.log(Object.keys(products));
