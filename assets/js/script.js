const Menu = [
    {
        name: 'The Lucky One',
        uid: 'theluckyone',
        price: 600,
        display: true,
        image: 'assets/images/items/theluckyone.png',
        items: 'Pizza, Sticks, Tiramisu, Wine',
        itemType: 'combo'
    },
    {
        name: 'The Italian Job',
        uid: 'theitalianjob',
        price: 500,
        display: true,
        image: 'assets/images/items/theitalianjob.png',
        items: 'Spaghetti Bolognese, Salad, Cannoli, Soda',
        itemType: 'combo'
    },
    {
        name: 'The High Roller',
        uid: 'thehighroller',
        price: 800,
        display: true,
        image: 'assets/images/items/thehighroller.png',
        items: '',
        itemType: 'combo'
    },    
    {
        name: 'Just Relax',
        uid: 'justrelax',
        price: 400,
        display: true,
        image: 'assets/images/items/justrelax.png',
        items: 'Pizza, Tiramisu, Soda',
        itemType: 'combo'
    },
    {
        name: 'A Little Bit of Luck',
        uid: 'alittlebitofluck',
        price: 250,
        display: true,
        image: 'assets/images/items/alittlebitofluck.png',
        items: 'Sticks, Wine',
        itemType: 'combo'
    },
    {
        name: 'Ciao Bella',
        uid: 'ciaobella',
        price: 400,
        display: true,
        image: 'assets/images/items/ciaobella.png',
        items: 'Pizza, Salad',
        itemType: 'combo'
    },
    {
        name: 'Just Keep Running',
        uid: 'justkeeprunning',
        price: 150,
        display: true,
        image: 'assets/images/items/justkeeprunning.png',
        items: 'Salad, Cannoli',
        itemType: 'combo'
    },
    {
        name: 'Margherita Maldini',
        uid: 'margheritamaldini',
        price: 350,
        display: true,
        image: 'assets/images/items/margheritamaldini.png',
        items: '',
        itemType: 'main'
    },
    {
        name: 'Spaghetti Bolognese',
        uid: 'spaghettibolognese',
        price: 300,
        display: true,
        image: 'assets/images/items/spaghettibolognese.png',
        items: '',
        itemType: 'main'
    },
    {
        name: 'Mozzarella Sticks',
        uid: 'mozzarellasticks',
        price: 150,
        display: true,
        image: 'assets/images/items/mozzarellasticks.png',
        items: '',
        itemType: 'side'
    },
    {
        name: 'Caesar Salad',
        uid: 'caesarsalad',
        price: 100,
        display: true,
        image: 'assets/images/items/caesarsalad.png',
        items: '',
        itemType: 'side'
    },
    {
        name: 'Tiramisu',
        uid: 'tiramisu',
        price: 100,
        display: true,
        image: 'assets/images/items/tiramisu.png',
        items: '',
        itemType: 'dessert'
    },
    {
        name: 'Cannoli ',
        uid: 'cannoli ',
        price: 100,
        display: true,
        image: 'assets/images/items/cannoli.png',
        items: '',
        itemType: 'dessert'
    },
    {
        name: 'Brunello Di Montalcino (Red wine)',
        uid: 'brunellodimontalcino',
        price: 150,
        display: true,
        image: 'assets/images/items/brunellodimontalcino.png',
        items: '',
        itemType: 'drink'
    },
    {
        name: 'Italian Creme Soda',
        uid: 'italiancremesoda',
        price: 100,
        display: true,
        image: 'assets/images/items/italiancremesoda.png',
        items: '',
        itemType: 'drink'
    }
];

function loadItems() {
    let itemList = document.getElementById('itemsContainer');
    let lastItemType = "";
    Menu.forEach(menuItem => {
        if (menuItem.display == true) {
            // Swap colors for italian flag effect
            let textColor = 'maldini-green';
            switch (menuItem.itemType) {
                case 'main':
                    textColor = 'maldini-white'
                    break;
                case 'side':
                    textColor = 'maldini-white'
                    break;
                case 'dessert':
                    textColor = 'maldini-red'
                    break;
                case 'drink':
                    textColor = 'maldini-red'
                    break;
                default:
                    break;
            }

            if (menuItem.itemType  !== lastItemType) {
                itemList.innerHTML += `<div class="col-md-12 col-sm-12 col-12 ${textColor}">${capitalizeFirstLetter(menuItem.itemType)}s</div>`;
                lastItemType = menuItem.itemType;
            }

            itemList.innerHTML += 
            `<div class="col-md-3 col-sm-3 col-3 text-center">
                <figure class="card card-product" onclick="addItem('${menuItem.uid}','${menuItem.name}',${menuItem.price},'${menuItem.image}','${menuItem.items}')">
                    <div class="img-wrap">
                        <img draggable="false" src=${menuItem.image}>
                    </div>
                    <figcaption class="info-wrap">
                        <span class="title h6 ${textColor}">${menuItem.name}</span>
                        <div class="action-wrap">
                            <span class="btn btn-primary disabled btn-sm"> <i
                                    class="fa fa-cart-plus"></i>$${menuItem.price} </span>
                        </div> <!-- action-wrap -->
                    </figcaption>
                </figure> <!-- card // -->
            </div> <!-- col // -->`
        }
    });
}

function addItem(uid, name, price, image, items) {
    var receiptItem = 'receipt-item-' + uid;
    var priceItem = 'price-item-' + uid;
    var quantityItem = 'quantity-item-' + uid;
    if (document.getElementById(receiptItem)) {
        let orderPriceString = document.getElementById(priceItem).innerText.replace(/\D/g, '');
        let orderQuantityString = document.getElementById(quantityItem).innerText.replace(/\D/g, '');
        let orderPrice = Number(orderPriceString);
        let orderQuantity = Number(orderQuantityString);
        orderPrice += 1 * price
        orderQuantity += 1
        document.getElementById(priceItem).innerText = '$' + orderPrice
        document.getElementById(quantityItem).innerText = orderQuantity
        totalPrice();
    }
    else {
        let receiptList = document.getElementById('tbody');
        let title = `<h6 class="title text-truncate menu-item">${name}</h6>`;
        if (items !== '') {
            title += `<h8 class="title text-truncate staff-help"><i>${items}</i></h8>`;
        }
        receiptList.innerHTML += 
        `<tr class="receipt-item" id="receipt-item-${uid}">
            <td>
                <figure class="media">
                    <div class="img-wrap"><img draggable="false" src="${image}"
                        class="img-thumbnail img-xs"></div>
                    <figcaption class="media-body">
                        ${title}
                    </figcaption>
                </figure>
            </td>
            <td class="text-center">
                <div class="m-btn-group m-btn-group--pill btn-group mr-2" role="group"
                    aria-label="...">
                    <button type="button" class="m-btn btn btn-default" onclick="removeItem('${uid}',${price},1)"><i
                            class="fa fa-minus"></i></button>
                    <button type="button" class="m-btn btn btn-default quantity" id="${quantityItem}" disabled>1</button>
                    <button type="button" class="m-btn btn btn-default" onclick="addItem('${uid}','${name}',${price},'${image}')"><i
                            class="fa fa-plus"></i></button>
                </div>
            </td>
            <td>
                <div class="price-wrap">
                    <var class="price" id="${priceItem}">$${price}</var>
                </div>
            </td>
            <td class="text-right">
                <span class="btn btn-outline-danger" onclick="deleteItem('${uid}')"> <i class="fa fa-trash"></i></span>
            </td>
        </tr>`
        totalPrice();
    }
}

function removeItem(uid, price, quantity) {
    if (document.getElementById('receipt-item-' + uid)) {
        let orderPriceString = document.getElementById('price-item-' + uid).innerText.replace(/\D/g, '');
        let orderQuantityString = document.getElementById('quantity-item-' + uid).innerText.replace(/\D/g, '');
        let orderPrice = Number(orderPriceString);
        let orderQuantity = Number(orderQuantityString);
        if (orderQuantity > 1) {
            orderPrice -= price
            orderQuantity -= quantity
            document.getElementById('price-item-' + uid).innerText = '$' + orderPrice
            document.getElementById('quantity-item-' + uid).innerText = orderQuantity
            totalPrice();
        }
    }  
}
function deleteItem(item) {
    document.getElementById('receipt-item-' + item).remove();
    totalPrice();
}

function resetTill(item) {
    document.getElementById('tbody').innerHTML = '';
    totalPrice();
}

function applyDiscount(discount) {
    let discountPercent = (discount / 100);
    let total = document.getElementById('totalCost').innerText.replace(/\D/g, '');
    let discountedTotal = Math.ceil(total - (total * discountPercent));
    document.getElementById('totalCost').innerText = '$' + discountedTotal;
}

function totalPrice() {
    var elements = document.getElementsByClassName('price');
    if (elements.length == 0) {
        document.getElementById('totalCost').innerText = '$' + 0
        generateComment();
    }
    else {
        prices = [];
        for (var i = 0; i < elements.length; ++i) {
            var priceElement = elements[i].innerHTML.replace(/\D/g, '');
            var price = Number(priceElement)
            prices.push(price);
            let total = prices.reduce(function (acc, val) { return acc + val; }, 0)
            document.getElementById('totalCost').innerText = '$' + total
            generateComment();
        }
    }
}

function generateComment() {
    document.getElementById('orderComment').innerText = "";
    var itemComments = []
    var itemQuantity = []
    var quantity = document.getElementsByClassName("quantity");
    for (var a = 0; a < quantity.length; a++) {
        itemQuantity.push(quantity[a].innerText);
    }
    var receiptItems = document.getElementsByClassName("menu-item");
    for (var i = 0; i < receiptItems.length; i++) {
        itemComments.push(quantity[i].innerText + "x " + receiptItems[i].innerText);
    }
    document.getElementById('orderComment').innerHTML = `<button class="btn btn-primary btn-lg" id='copyToClipBoard' data-clipboard-target="#orderComment">
    <span class="h5">Copy Order Comment</span>
  </button> <br> <div style="color:white;">`+  itemComments.join(' '); +"</div>" 
  let clipboard = new ClipboardJS('#copyToClipBoard');
  clipboard.on('success', function(e) {
    e.clearSelection();
});

}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

loadItems();