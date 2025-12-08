/* --- 1. MASSIVE PRODUCT DATABASE (80+ Items) --- */
const initialProducts = [
    // --- WOMEN'S FASHION (20 Items) ---
    { id: 101, name: "Floral Summer Dress", price: 45, category: "Fashion", type: "women", img: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500" },
    { id: 102, name: "Elegant Evening Gown", price: 120, category: "Fashion", type: "women", img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500" },
    { id: 103, name: "Chic Blazer Set", price: 85, category: "Fashion", type: "women", img: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=500" },
    { id: 104, name: "Boho Maxi Skirt", price: 35, category: "Fashion", type: "women", img: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500" },
    { id: 105, name: "Silk Blouse", price: 55, category: "Fashion", type: "women", img: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=500" },
    { id: 106, name: "High-Waist Jeans", price: 60, category: "Fashion", type: "women", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500" },
    { id: 107, name: "Leather Handbag", price: 150, category: "Fashion", type: "women", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500" },
    { id: 108, name: "Red Stiletto Heels", price: 90, category: "Fashion", type: "women", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500" },
    { id: 109, name: "Cozy Knitted Sweater", price: 40, category: "Fashion", type: "women", img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500" },
    { id: 110, name: "Designer Sunglasses", price: 180, category: "Fashion", type: "women", img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500" },
    { id: 111, name: "Casual Denim Jacket", price: 70, category: "Fashion", type: "women", img: "https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?w=500" },
    { id: 112, name: "Party Cocktail Dress", price: 95, category: "Fashion", type: "women", img: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500" },
    { id: 113, name: "Yoga Activewear Set", price: 50, category: "Fashion", type: "women", img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=500" },
    { id: 114, name: "Winter Scarf", price: 25, category: "Fashion", type: "women", img: "https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=500" },
    { id: 115, name: "Gold Plated Necklace", price: 110, category: "Fashion", type: "women", img: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?w=500" },
    { id: 116, name: "Sun Hat", price: 30, category: "Fashion", type: "women", img: "https://images.unsplash.com/photo-1521335629791-ce4aec6c1201?w=500" },
    { id: 117, name: "Velvet Clutch", price: 45, category: "Fashion", type: "women", img: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500" },
    { id: 118, name: "Ankle Boots", price: 85, category: "Fashion", type: "women", img: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500" },
    { id: 119, name: "Trench Coat", price: 130, category: "Fashion", type: "women", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500" },
    { id: 120, name: "Silk Pajama Set", price: 60, category: "Fashion", type: "women", img: "https://images.unsplash.com/photo-1589810635657-232948472d98?w=500" },

    // --- MEN'S FASHION (20 Items) ---
    { id: 201, name: "Classic White Shirt", price: 45, category: "Fashion", type: "men", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500" },
    { id: 202, name: "Navy Blue Suit", price: 250, category: "Fashion", type: "men", img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500" },
    { id: 203, name: "Leather Jacket", price: 180, category: "Fashion", type: "men", img: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=500" },
    { id: 204, name: "Slim Fit Chinos", price: 55, category: "Fashion", type: "men", img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500" },
    { id: 205, name: "Casual Hoodie", price: 40, category: "Fashion", type: "men", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500" },
    { id: 206, name: "Running Sneakers", price: 90, category: "Fashion", type: "men", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500" },
    { id: 207, name: "Oxford Leather Shoes", price: 120, category: "Fashion", type: "men", img: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=500" },
    { id: 208, name: "Designer Watch", price: 300, category: "Fashion", type: "men", img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500" },
    { id: 209, name: "Polo T-Shirt", price: 35, category: "Fashion", type: "men", img: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=500" },
    { id: 210, name: "Denim Jeans", price: 65, category: "Fashion", type: "men", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500" },
    { id: 211, name: "Winter Overcoat", price: 160, category: "Fashion", type: "men", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500" },
    { id: 212, name: "Gym Shorts", price: 25, category: "Fashion", type: "men", img: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500" },
    { id: 213, name: "Leather Belt", price: 30, category: "Fashion", type: "men", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500" },
    { id: 214, name: "Aviator Sunglasses", price: 80, category: "Fashion", type: "men", img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500" },
    { id: 215, name: "Silk Tie", price: 45, category: "Fashion", type: "men", img: "https://images.unsplash.com/photo-1589756823695-278bc923f962?w=500" },
    { id: 216, name: "Bomber Jacket", price: 95, category: "Fashion", type: "men", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500" },
    { id: 217, name: "Travel Backpack", price: 75, category: "Fashion", type: "men", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500" },
    { id: 218, name: "Beanie Hat", price: 20, category: "Fashion", type: "men", img: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=500" },
    { id: 219, name: "Loafers", price: 100, category: "Fashion", type: "men", img: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=500" },
    { id: 220, name: "Checkered Shirt", price: 50, category: "Fashion", type: "men", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500" },

    // --- HOME DECOR & FURNITURE (20 Items) ---
    { id: 301, name: "Modern Grey Sofa", price: 450, category: "Home", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500" },
    { id: 302, name: "Wooden Coffee Table", price: 120, category: "Home", img: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=500" },
    { id: 303, name: "Ceramic Flower Vase", price: 40, category: "Home", img: "https://images.unsplash.com/photo-1589363360147-4f2d5154a541?w=500" },
    { id: 304, name: "King Size Bed", price: 800, category: "Home", img: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=500" },
    { id: 305, name: "Abstract Wall Art", price: 90, category: "Home", img: "https://images.unsplash.com/photo-1579783902614-a3fb39279c75?w=500" },
    { id: 306, name: "Minimalist Floor Lamp", price: 110, category: "Home", img: "https://images.unsplash.com/photo-1507473888900-52e1adad54cd?w=500" },
    { id: 307, name: "Persian Rug", price: 200, category: "Home", img: "https://images.unsplash.com/photo-1596162955779-9c8f7f43f096?w=500" },
    { id: 308, name: "Indoor Potted Plant", price: 35, category: "Home", img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500" },
    { id: 309, name: "Kitchen Dining Set", price: 600, category: "Home", img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500" },
    { id: 310, name: "Velvet Armchair", price: 300, category: "Home", img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500" },
    { id: 311, name: "Bookshelf Unit", price: 150, category: "Home", img: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=500" },
    { id: 312, name: "Luxury Bed Sheets", price: 80, category: "Home", img: "https://images.unsplash.com/photo-1522771753035-4848235a6f48?w=500" },
    { id: 313, name: "Decorative Cushions", price: 25, category: "Home", img: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500" },
    { id: 314, name: "Wall Mirror", price: 130, category: "Home", img: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=500" },
    { id: 315, name: "Scented Candles", price: 20, category: "Home", img: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500" },
    { id: 316, name: "Curtains Set", price: 55, category: "Home", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500" },
    { id: 317, name: "Office Desk Chair", price: 180, category: "Home", img: "https://images.unsplash.com/photo-1505797149-43b0069ec25b?w=500" },
    { id: 318, name: "Wall Clock", price: 45, category: "Home", img: "https://images.unsplash.com/photo-1563861826100-9cb868c0feed?w=500" },
    { id: 319, name: "Bathroom Towel Set", price: 40, category: "Home", img: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=500" },
    { id: 320, name: "Table Lamp", price: 65, category: "Home", img: "https://images.unsplash.com/photo-1534349762913-5c1c0249f67d?w=500" },

    // --- BEAUTY & COSMETICS (20 Items) ---
    { id: 401, name: "Matte Lipstick Red", price: 25, category: "Beauty", img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500" },
    { id: 402, name: "Liquid Foundation", price: 40, category: "Beauty", img: "https://images.unsplash.com/photo-1631729371254-42c2a89de40b?w=500" },
    { id: 403, name: "Eyeshadow Palette", price: 55, category: "Beauty", img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500" },
    { id: 404, name: "Luxury Perfume", price: 110, category: "Beauty", img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500" },
    { id: 405, name: "Makeup Brush Set", price: 35, category: "Beauty", img: "https://images.unsplash.com/photo-1620331317312-74b88bf40907?w=500" },
    { id: 406, name: "Face Moisturizer", price: 45, category: "Beauty", img: "https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?w=500" },
    { id: 407, name: "Mascara Volumizer", price: 20, category: "Beauty", img: "https://images.unsplash.com/photo-1591360236480-9432d152c156?w=500" },
    { id: 408, name: "Nail Polish Kit", price: 30, category: "Beauty", img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500" },
    { id: 409, name: "Hair Straightener", price: 80, category: "Beauty", img: "https://images.unsplash.com/photo-1588710929895-6ee6d3d95b5c?w=500" },
    { id: 410, name: "Skin Serum", price: 60, category: "Beauty", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500" },
    { id: 411, name: "Blush Compact", price: 28, category: "Beauty", img: "https://images.unsplash.com/photo-1596462502278-27bfdd403348?w=500" },
    { id: 412, name: "Makeup Sponge", price: 10, category: "Beauty", img: "https://images.unsplash.com/photo-1599305090598-fe179d501227?w=500" },
    { id: 413, name: "Face Cleanser", price: 22, category: "Beauty", img: "https://images.unsplash.com/photo-1556228720-1917374e643c?w=500" },
    { id: 414, name: "Hair Dryer", price: 95, category: "Beauty", img: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=500" },
    { id: 415, name: "Bath Bombs", price: 18, category: "Beauty", img: "https://images.unsplash.com/photo-1605264964528-06403738d6dc?w=500" },
    { id: 416, name: "Eyeliner Pencil", price: 15, category: "Beauty", img: "https://images.unsplash.com/photo-1625093742435-09c69319972b?w=500" },
    { id: 417, name: "Sunscreen SPF 50", price: 32, category: "Beauty", img: "https://images.unsplash.com/photo-1526947425960-94d046f45b19?w=500" },
    { id: 418, name: "Body Lotion", price: 25, category: "Beauty", img: "https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?w=500" },
    { id: 419, name: "Face Mask Sheets", price: 12, category: "Beauty", img: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=500" },
    { id: 420, name: "Grooming Kit", price: 50, category: "Beauty", img: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=500" },

    // --- ELECTRONICS (20 Items) ---
    { id: 501, name: "4K Smart TV 55\"", price: 600, category: "Electronics", img: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500" },
    { id: 502, name: "iPhone 13 Pro", price: 999, category: "Electronics", img: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=500" },
    { id: 503, name: "Wireless Earbuds", price: 150, category: "Electronics", img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500" },
    { id: 504, name: "Gaming Laptop", price: 1500, category: "Electronics", img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500" },
    { id: 505, name: "Washing Machine", price: 450, category: "Electronics", img: "https://images.unsplash.com/photo-1626806775351-538af440648e?w=500" },
    { id: 506, name: "DSLR Camera", price: 850, category: "Electronics", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500" },
    { id: 507, name: "Smart Watch", price: 250, category: "Electronics", img: "https://images.unsplash.com/photo-1544117963-5107ef548abc?w=500" },
    { id: 508, name: "Bluetooth Speaker", price: 80, category: "Electronics", img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500" },
    { id: 509, name: "Tablet Pro", price: 700, category: "Electronics", img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500" },
    { id: 510, name: "Drone 4K", price: 1200, category: "Electronics", img: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=500" },
    { id: 511, name: "Gaming Console", price: 500, category: "Electronics", img: "https://images.unsplash.com/photo-1605901309584-818e25960b8f?w=500" },
    { id: 512, name: "VR Headset", price: 400, category: "Electronics", img: "https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?w=500" },
    { id: 513, name: "Mechanical Keyboard", price: 130, category: "Electronics", img: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500" },
    { id: 514, name: "Electric Microwave", price: 110, category: "Electronics", img: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=500" },
    { id: 515, name: "Coffee Maker", price: 90, category: "Electronics", img: "https://images.unsplash.com/photo-1520970014086-2208d157c9e2?w=500" },
    { id: 516, name: "Action Camera", price: 300, category: "Electronics", img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500" },
    { id: 517, name: "Robot Vacuum", price: 220, category: "Electronics", img: "https://images.unsplash.com/photo-1563823251-40b92557e532?w=500" },
    { id: 518, name: "Refrigerator", price: 950, category: "Electronics", img: "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=500" },
    { id: 519, name: "Hair Trimmer", price: 40, category: "Electronics", img: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=500" },
    { id: 520, name: "Power Bank 20000mAh", price: 35, category: "Electronics", img: "https://images.unsplash.com/photo-1609592425027-e816a7f805a9?w=500" },
];

/* --- 2. LOCALSTORAGE INITIALIZATION --- */
// Logic: If products are missing or count is low, reset them.
const currentProducts = JSON.parse(localStorage.getItem('products') || '[]');
if (currentProducts.length < 50) {
    localStorage.setItem('products', JSON.stringify(initialProducts));
}
if (!localStorage.getItem('cart')) localStorage.setItem('cart', JSON.stringify([]));
if (!localStorage.getItem('orders')) localStorage.setItem('orders', JSON.stringify([]));

/* --- 3. HELPER FUNCTIONS --- */
function getProducts() { return JSON.parse(localStorage.getItem('products')); }
function getCart() { return JSON.parse(localStorage.getItem('cart')); }

function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((acc, item) => acc + item.qty, 0);
    const badge = document.getElementById('cart-count');
    if(badge) badge.innerText = count;
}

function addToCart(id) {
    let products = getProducts();
    let cart = getCart();
    let product = products.find(p => p.id == id);
    let existing = cart.find(item => item.id == id);

    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    // Toast Notification
    const btn = event.target;
    const originalText = btn.innerText;
    btn.innerText = "Added!";
    btn.style.background = "#4a4e69";
    btn.style.color = "white";
    setTimeout(() => {
        btn.innerText = originalText;
        btn.style.background = "transparent";
        btn.style.color = "#4a4e69";
    }, 1500);
}

/* --- 4. RENDER LOGIC --- */

// A. HOME PAGE
function renderHome() {
    const featuredContainer = document.getElementById('featured-grid');
    const newArrivalsContainer = document.getElementById('new-arrivals-grid');
    
    if (featuredContainer && newArrivalsContainer) {
        const products = getProducts();
        // Featured: Mix of Fashion and Electronics
        featuredContainer.innerHTML = products.filter(p => p.id % 20 === 0).slice(0, 4).map(createProductCard).join('');
        // New Arrivals: Latest items
        newArrivalsContainer.innerHTML = products.slice(0, 4).map(createProductCard).join('');
    }
}

// B. SHOP PAGE
function renderShop() {
    const container = document.getElementById('shop-grid');
    if (!container) return;
    
    const products = getProducts();
    
    // Check for URL Query Param for Filtering (e.g. ?cat=Electronics)
    const urlParams = new URLSearchParams(window.location.search);
    const filterCat = urlParams.get('cat');

    let displayProducts = products;
    if (filterCat) {
        displayProducts = products.filter(p => p.category.toLowerCase() === filterCat.toLowerCase());
    }

    container.innerHTML = displayProducts.map(createProductCard).join('');
}

// Helper
function createProductCard(p) {
    return `
        <div class="product-card">
            <img src="${p.img}" class="card-img" loading="lazy">
            <div class="card-body">
                <span class="category-tag">${p.category}</span>
                <h4>${p.name}</h4>
                <p class="price">$${p.price}</p>
                <button class="add-btn" onclick="addToCart(${p.id})">Add to Cart</button>
            </div>
        </div>
    `;
}

// C. CART PAGE
function renderCart() {
    const container = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    if (!container) return;

    let cart = getCart();
    let total = 0;

    if(cart.length === 0) {
        container.innerHTML = "<p>Your cart is empty.</p>";
        totalEl.innerText = "0.00";
        return;
    }

    container.innerHTML = cart.map((item, index) => {
        total += item.price * item.qty;
        return `
            <div class="cart-item">
                <div class="cart-img-box">
                    <img src="${item.img}">
                </div>
                <div class="cart-details">
                    <h4>${item.name}</h4>
                    <p class="cart-price">$${item.price} x ${item.qty}</p>
                </div>
                <button onclick="removeFromCart(${index})" class="remove-btn">Remove</button>
            </div>
        `;
    }).join('');

    totalEl.innerText = total.toFixed(2);
}

function removeFromCart(index) {
    let cart = getCart();
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    updateCartCount();
}

function checkout() {
    const cart = getCart();
    if(cart.length === 0) return alert("Cart is empty");
    localStorage.setItem('cart', JSON.stringify([])); 
    alert("Order Placed Successfully!");
    window.location.href = "index.html";
}

// D. ADMIN PAGE
function renderAdmin() {
    const tableBody = document.getElementById('admin-products-list');
    if(!tableBody) return;

    const products = getProducts();
    // Only show last 20 added items to keep admin page clean
    const recentProducts = products.slice(-20); 

    tableBody.innerHTML = recentProducts.map((p, index) => `
        <tr>
            <td>${p.id}</td>
            <td><img src="${p.img}" style="width:40px;"></td>
            <td>${p.name}</td>
            <td>$${p.price}</td>
            <td>
                <button onclick="deleteProduct(${index})" style="color:red; border:none; background:none; cursor:pointer;">Delete</button>
            </td>
        </tr>
    `).join('');
}

function deleteProduct(index) {
    if(confirm("Are you sure?")) {
        let products = getProducts();
        // Since we slice(-20) in admin view, we need to find actual index or just delete from main
        // For simplicity in this mock, we delete the exact item found
        products.splice(products.length - 20 + index, 1); 
        localStorage.setItem('products', JSON.stringify(products));
        renderAdmin();
    }
}

/* --- 5. INITIALIZATION --- */
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    
    // Page Routing Check
    if(document.getElementById('featured-grid')) renderHome();
    if(document.getElementById('shop-grid')) renderShop();
    if(document.getElementById('cart-items')) renderCart();
    if(document.getElementById('admin-products-list')) renderAdmin();
});

// Category Filter Helper
function filterCategory(cat) {
    window.location.href = `shop.html?cat=${cat}`;
}