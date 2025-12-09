import React, { useState, useEffect } from 'react';

// --- 1. MASSIVE DATA (80+ Items with Reliable Links) ---
const initialData = [
  // --- FASHION (21 Items) ---
  { id: 101, name: "Kanjeevaram Silk Saree", price: 4999, originalPrice: 12999, category: "Fashion", img: "https://images.unsplash.com/photo-1610189012906-4783382c5914?w=500" },
  { id: 103, name: "Men's Kurta Set", price: 899, originalPrice: 1999, category: "Fashion", img: "https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?w=500" },
  { id: 105, name: "Red Lehenga", price: 15999, originalPrice: 25999, category: "Fashion", img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500" },
  { id: 107, name: "Wedding Sherwani", price: 11999, originalPrice: 18999, category: "Fashion", img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500" },
  { id: 109, name: "Printed Kurti", price: 499, originalPrice: 999, category: "Fashion", img: "https://images.unsplash.com/photo-1621535451690-31c36399a941?w=500" },
  { id: 111, name: "Silver Jhumkas", price: 299, originalPrice: 599, category: "Fashion", img: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=500" },
  { id: 113, name: "Silk Dupatta", price: 1299, originalPrice: 2499, category: "Fashion", img: "https://images.unsplash.com/photo-1583391733958-e0b0467a211e?w=500" },
  { id: 115, name: "Punjabi Jutti", price: 799, originalPrice: 1599, category: "Fashion", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500" },
  { id: 117, name: "Linen Shirt", price: 1299, originalPrice: 2299, category: "Fashion", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500" },
  { id: 119, name: "Nehru Jacket", price: 1499, originalPrice: 2999, category: "Fashion", img: "https://images.unsplash.com/photo-1559582798-678dfc71ccd8?w=500" },
  { id: 121, name: "Party Anarkali", price: 2599, originalPrice: 5099, category: "Fashion", img: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500" },
  { id: 123, name: "Chikankari Kurta", price: 1899, originalPrice: 3099, category: "Fashion", img: "https://images.unsplash.com/photo-1589810635657-232948472d98?w=500" },
  { id: 125, name: "Bangles Set", price: 499, originalPrice: 999, category: "Fashion", img: "https://images.unsplash.com/photo-1579618195431-1559403a3d36?w=500" },
  { id: 127, name: "Kids Ethnic", price: 999, originalPrice: 1499, category: "Fashion", img: "https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?w=500" },
  { id: 129, name: "Leather Wallet", price: 599, originalPrice: 1299, category: "Fashion", img: "https://images.unsplash.com/photo-1627123424574-181ce5171c98?w=500" },
  { id: 131, name: "Palazzo Set", price: 699, originalPrice: 1299, category: "Fashion", img: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500" },
  { id: 133, name: "Handkerchiefs", price: 199, originalPrice: 399, category: "Fashion", img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500" },
  { id: 135, name: "Running Shoes", price: 899, originalPrice: 1999, category: "Fashion", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500" },
  { id: 137, name: "Slim Fit Jeans", price: 1199, originalPrice: 2499, category: "Fashion", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500" },
  { id: 139, name: "Summer Dress", price: 799, originalPrice: 1699, category: "Fashion", img: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500" },
  { id: 141, name: "Aviator Shades", price: 499, originalPrice: 1499, category: "Fashion", img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500" },

  // --- ELECTRONICS (21 Items) ---
  { id: 201, name: "OnePlus Nord 3", price: 32999, originalPrice: 35999, category: "Electronics", img: "https://images.unsplash.com/photo-1598327773297-9c6795ae6460?w=500" },
  { id: 203, name: "boAt Airdopes", price: 1299, originalPrice: 2999, category: "Electronics", img: "https://images.unsplash.com/photo-1572569028738-411a097746fc?w=500" },
  { id: 205, name: "Sony Bravia 55", price: 54999, originalPrice: 85999, category: "Electronics", img: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500" },
  { id: 207, name: "Galaxy Watch", price: 13999, originalPrice: 27999, category: "Electronics", img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500" },
  { id: 209, name: "JBL Speaker", price: 5999, originalPrice: 9999, category: "Electronics", img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500" },
  { id: 211, name: "Dell Laptop", price: 44999, originalPrice: 60999, category: "Electronics", img: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=500" },
  { id: 213, name: "iPad Air 5", price: 54999, originalPrice: 60999, category: "Electronics", img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500" },
  { id: 215, name: "Gaming Mouse", price: 1599, originalPrice: 2499, category: "Electronics", img: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500" },
  { id: 217, name: "Canon DSLR", price: 57999, originalPrice: 65999, category: "Electronics", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500" },
  { id: 219, name: "Power Bank", price: 1499, originalPrice: 2099, category: "Electronics", img: "https://images.unsplash.com/photo-1625946110827-2c976985d88c?w=500" },
  { id: 221, name: "Beard Trimmer", price: 899, originalPrice: 1299, category: "Electronics", img: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=500" },
  { id: 223, name: "Refrigerator", price: 17999, originalPrice: 24999, category: "Electronics", img: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=500" },
  { id: 225, name: "Washing Machine", price: 21999, originalPrice: 30999, category: "Electronics", img: "https://images.unsplash.com/photo-1626806775351-538af440648e?w=500" },
  { id: 227, name: "Microwave Oven", price: 7999, originalPrice: 11999, category: "Electronics", img: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=500" },
  { id: 229, name: "Induction Cooktop", price: 2499, originalPrice: 3999, category: "Electronics", img: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=500" },
  { id: 231, name: "Action Camera", price: 6999, originalPrice: 12999, category: "Electronics", img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500" },
  { id: 233, name: "PlayStation 5", price: 49999, originalPrice: 54999, category: "Electronics", img: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500" },
  { id: 235, name: "Robot Vacuum", price: 15999, originalPrice: 25999, category: "Electronics", img: "https://images.unsplash.com/photo-1563823251-40b92557e532?w=500" },
  { id: 237, name: "RGB Keyboard", price: 2499, originalPrice: 4999, category: "Electronics", img: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500" },
  { id: 239, name: "Smart Ring", price: 4999, originalPrice: 9999, category: "Electronics", img: "https://images.unsplash.com/photo-1599643477877-530eb83abc5e?w=500" },
  { id: 241, name: "Wi-Fi Router", price: 2999, originalPrice: 5999, category: "Electronics", img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500" },

  // --- HOME (21 Items) ---
  { id: 301, name: "Wall Art", price: 499, originalPrice: 999, category: "Home", img: "https://images.unsplash.com/photo-1582201942988-13e60e4556ee?w=500" },
  { id: 303, name: "Bed Sheet Set", price: 899, originalPrice: 1999, category: "Home", img: "https://images.unsplash.com/photo-1522771753035-4848235a6f48?w=500" },
  { id: 305, name: "Brass Idol", price: 1199, originalPrice: 2499, category: "Home", img: "https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?w=500" },
  { id: 307, name: "Coffee Table", price: 8499, originalPrice: 14999, category: "Home", img: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=500" },
  { id: 309, name: "Bean Bag", price: 1599, originalPrice: 2999, category: "Home", img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500" },
  { id: 311, name: "Fairy Lights", price: 299, originalPrice: 599, category: "Home", img: "https://images.unsplash.com/photo-1542827763-7c703b0d4538?w=500" },
  { id: 313, name: "Dinner Set", price: 2999, originalPrice: 4999, category: "Home", img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500" },
  { id: 315, name: "Indoor Plant", price: 249, originalPrice: 499, category: "Home", img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500" },
  { id: 317, name: "Scented Candles", price: 399, originalPrice: 799, category: "Home", img: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500" },
  { id: 319, name: "Cotton Rug", price: 1499, originalPrice: 2999, category: "Home", img: "https://images.unsplash.com/photo-1596162955779-9c8f7f43f096?w=500" },
  { id: 321, name: "Vintage Clock", price: 599, originalPrice: 1199, category: "Home", img: "https://images.unsplash.com/photo-1563861826100-9cb868c0feed?w=500" },
  { id: 323, name: "LED Study Lamp", price: 799, originalPrice: 1499, category: "Home", img: "https://images.unsplash.com/photo-1534349762913-5c1c0249f67d?w=500" },
  { id: 325, name: "Curtains", price: 999, originalPrice: 1799, category: "Home", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500" },
  { id: 327, name: "Flower Vase", price: 649, originalPrice: 999, category: "Home", img: "https://images.unsplash.com/photo-1612196808214-b7e239e5f6b7?w=500" },
  { id: 329, name: "Copper Bottle", price: 499, originalPrice: 799, category: "Home", img: "https://images.unsplash.com/photo-1602143407151-01114195bc51?w=500" },
  { id: 331, name: "Foam Pillow", price: 1299, originalPrice: 2499, category: "Home", img: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500" },
  { id: 333, name: "Office Chair", price: 4999, originalPrice: 9999, category: "Home", img: "https://images.unsplash.com/photo-1505797149-43b0069ec25b?w=500" },
  { id: 335, name: "Bookshelf", price: 3499, originalPrice: 6999, category: "Home", img: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=500" },
  { id: 337, name: "Towels Set", price: 699, originalPrice: 1399, category: "Home", img: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=500" },
  { id: 339, name: "Floor Lamp", price: 1999, originalPrice: 3999, category: "Home", img: "https://images.unsplash.com/photo-1507473888900-52e1adad54cd?w=500" },
  { id: 341, name: "Wall Painting", price: 899, originalPrice: 1799, category: "Home", img: "https://images.unsplash.com/photo-1579783902614-a3fb39279c75?w=500" },

  // --- BEAUTY (21 Items) ---
  { id: 401, name: "Red Lipstick", price: 299, originalPrice: 450, category: "Beauty", img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500" },
  { id: 403, name: "Black Kajal", price: 199, originalPrice: 299, category: "Beauty", img: "https://images.unsplash.com/photo-1631214500115-598fc2cb8d2d?w=500" },
  { id: 405, name: "Shampoo", price: 449, originalPrice: 799, category: "Beauty", img: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500" },
  { id: 407, name: "Face Wash", price: 349, originalPrice: 499, category: "Beauty", img: "https://images.unsplash.com/photo-1556228720-1917374e643c?w=500" },
  { id: 409, name: "Luxury Perfume", price: 1199, originalPrice: 2399, category: "Beauty", img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500" },
  { id: 411, name: "Makeup Brushes", price: 599, originalPrice: 1299, category: "Beauty", img: "https://images.unsplash.com/photo-1620331317312-74b88bf40907?w=500" },
  { id: 413, name: "Moisturizer", price: 249, originalPrice: 399, category: "Beauty", img: "https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?w=500" },
  { id: 415, name: "Hair Serum", price: 299, originalPrice: 599, category: "Beauty", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500" },
  { id: 417, name: "Aloe Vera Gel", price: 199, originalPrice: 349, category: "Beauty", img: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=500" },
  { id: 419, name: "Sunscreen", price: 499, originalPrice: 899, category: "Beauty", img: "https://images.unsplash.com/photo-1526947425960-94d046f45b19?w=500" },
  { id: 421, name: "Grooming Kit", price: 1499, originalPrice: 2499, category: "Beauty", img: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=500" },
  { id: 423, name: "Hair Dryer", price: 999, originalPrice: 1799, category: "Beauty", img: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=500" },
  { id: 425, name: "Face Masks", price: 399, originalPrice: 699, category: "Beauty", img: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=500" },
  { id: 427, name: "Bath Bombs", price: 449, originalPrice: 799, category: "Beauty", img: "https://images.unsplash.com/photo-1605264964528-06403738d6dc?w=500" },
  { id: 429, name: "Nail Polish", price: 499, originalPrice: 999, category: "Beauty", img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500" },
  { id: 431, name: "Eye Shadow", price: 699, originalPrice: 1399, category: "Beauty", img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500" },
  { id: 433, name: "Face Serum", price: 599, originalPrice: 1199, category: "Beauty", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500" },
  { id: 435, name: "Face Wash", price: 249, originalPrice: 499, category: "Beauty", img: "https://images.unsplash.com/photo-1556228720-1917374e643c?w=500" },
  { id: 437, name: "Lip Balm", price: 99, originalPrice: 199, category: "Beauty", img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500" },
  { id: 439, name: "Straightener", price: 1299, originalPrice: 2499, category: "Beauty", img: "https://images.unsplash.com/photo-1588710929895-6ee6d3d95b5c?w=500" },
  { id: 441, name: "Body Lotion", price: 349, originalPrice: 699, category: "Beauty", img: "https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?w=500" }
];

// --- 2. COMPONENTS ---

const Navbar = ({ setView, cartCount, user, handleLogout }) => {
  return (
    <nav className="flex justify-between items-center p-5 bg-white shadow-md sticky top-0 z-50">
      <div className="text-3xl font-extrabold text-gray-800 cursor-pointer tracking-tighter" onClick={() => setView('home')}>
        Luxe<span className="text-red-500">.</span>
      </div>
      
      <div className="hidden md:flex gap-8">
        {['Home', 'Shop', 'Offers'].map((item) => (
          <button 
            key={item} 
            onClick={() => setView(item.toLowerCase())}
            className="text-gray-600 hover:text-red-500 font-semibold transition uppercase tracking-wide text-sm"
          >
            {item}
          </button>
        ))}
        {user && (
          <button onClick={() => setView('admin')} className="text-gray-600 hover:text-red-500 font-semibold transition uppercase tracking-wide text-sm">
            Admin
          </button>
        )}
      </div>

      <div className="flex items-center gap-6">
        {user ? (
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-gray-700 hidden sm:block">Hi, {user.name}</span>
            <button onClick={handleLogout} className="text-red-500 text-xs border border-red-500 px-2 py-1 rounded hover:bg-red-500 hover:text-white transition">Logout</button>
          </div>
        ) : (
          <button onClick={() => setView('login')} className="text-gray-600 font-semibold hover:text-red-500">Login</button>
        )}
        <button onClick={() => setView('cart')} className="relative group">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-700 group-hover:text-red-500 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white">
            {cartCount}
          </span>
        </button>
      </div>
    </nav>
  );
};

const ProductCard = ({ product, addToCart }) => {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  const fallbackImage = "https://images.unsplash.com/photo-1557821552-17105176677c?w=500&auto=format&fit=crop";

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
      <div className="h-64 overflow-hidden relative">
        <img 
            src={product.img} 
            alt={product.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
            onError={(e) => { e.target.onerror = null; e.target.src = fallbackImage; }}
        />
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
            {product.category}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h4 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1">{product.name}</h4>
        
        <div className="mt-auto">
            <div className="flex items-center gap-2 mb-3">
                <span className="text-xl font-extrabold text-gray-900">₹{product.price.toLocaleString('en-IN')}</span>
                <span className="text-sm text-gray-400 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                <span className="bg-red-50 text-red-600 text-xs font-bold px-2 py-1 rounded border border-red-100">
                    {discount}% OFF
                </span>
            </div>

            <button 
                onClick={() => addToCart(product)}
                className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition-colors active:scale-95 duration-200 shadow-lg shadow-gray-200"
            >
                Add to Cart
            </button>
        </div>
      </div>
    </div>
  );
};

const Footer = () => (
    <footer className="bg-gray-900 text-white py-12 mt-auto">
        <div className="container mx-auto px-6 text-center">
            <div className="text-2xl font-bold mb-4">Luxe.</div>
            <p className="text-gray-400 mb-8">Premium e-commerce experience tailored for India.</p>
            <div className="text-sm text-gray-500">
                &copy; 2025 LuxeStore India. All Rights Reserved.
            </div>
        </div>
    </footer>
);

// --- 3. PAGES ---

const HomePage = ({ setView, setCategory, products, addToCart }) => (
  <div className="animate-fade-in">
    {/* HERO */}
    <header className="relative h-[500px] flex items-center justify-center bg-gray-100 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600" className="w-full h-full object-cover opacity-90" alt="Hero"/>
            <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">The Big Indian Sale</h1>
            <p className="text-xl md:text-2xl mb-8 font-light text-gray-100">Up to 70% Off on Fashion, Electronics & Home</p>
            <button 
                onClick={() => setView('offers')}
                className="bg-red-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-red-600 transition duration-300 shadow-2xl"
            >
                View Special Offers
            </button>
        </div>
    </header>

    {/* CATEGORIES */}
    <section className="py-20 container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Shop By Category</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {['Fashion', 'Electronics', 'Home', 'Beauty'].map(cat => (
             <div key={cat} className="group cursor-pointer text-center" onClick={() => { setCategory(cat); setView('shop'); }}>
                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:border-red-500 transition duration-300 mx-auto mb-4">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
                         src={
                            cat === 'Fashion' ? "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400" :
                            cat === 'Electronics' ? "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=400" :
                            cat === 'Home' ? "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400" :
                            "https://images.unsplash.com/photo-1522335789203-abd7fe01f1f5?w=400"
                         } alt={cat} />
                </div>
                <h4 className="text-xl font-bold text-gray-700 group-hover:text-red-600">{cat}</h4>
             </div>
        ))}
      </div>
    </section>

    {/* TRENDING GRID */}
    <section className="py-20 bg-gray-50 px-6">
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Trending Now</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {products.filter((_, i) => i % 5 === 0).slice(0, 8).map(p => (
                    <ProductCard key={p.id} product={p} addToCart={addToCart} />
                ))}
            </div>
        </div>
    </section>
  </div>
);

const ShopPage = ({ products, category, setCategory, addToCart, showOffersOnly }) => {
  let filteredProducts = products;

  // Filter Logic
  if (showOffersOnly) {
     filteredProducts = products.filter(p => {
        const discount = ((p.originalPrice - p.price) / p.originalPrice) * 100;
        return discount >= 40; // Only show items with 40%+ discount
     });
  } else if (category !== 'All') {
     filteredProducts = products.filter(p => p.category === category);
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            {showOffersOnly ? "Special Offers 🔥" : `${category} Collection`}
        </h2>
        {showOffersOnly && <p className="text-center text-red-500 font-semibold mb-8">Items with 40% OFF or more!</p>}
        
        {!showOffersOnly && (
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {['All', 'Fashion', 'Electronics', 'Home', 'Beauty'].map(cat => (
                    <button key={cat} 
                            onClick={() => setCategory(cat)}
                            className={`px-6 py-2 rounded-full font-semibold transition ${category === cat ? 'bg-gray-900 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-200'}`}>
                        {cat}
                    </button>
                ))}
            </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map(p => (
                <ProductCard key={p.id} product={p} addToCart={addToCart} />
            ))}
        </div>
        
        {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-gray-500 text-xl">No products found in this category.</div>
        )}
      </div>
    </div>
  );
};

const CartPage = ({ cart, updateQty, removeFromCart, checkout }) => {
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="p-8 border-b border-gray-100">
                <h2 className="text-3xl font-bold text-gray-800">Your Cart ({cart.length})</h2>
            </div>
            
            {cart.length === 0 ? (
                <div className="p-20 text-center">
                    <p className="text-gray-400 text-lg mb-6">Your cart is currently empty.</p>
                </div>
            ) : (
                <div className="p-8 space-y-6">
                    {cart.map(item => (
                        <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 p-4 border rounded-2xl hover:border-gray-300 transition">
                            <img src={item.img} alt={item.name} className="w-24 h-24 object-cover rounded-xl" />
                            <div className="flex-1 text-center sm:text-left">
                                <h4 className="font-bold text-gray-800 text-lg">{item.name}</h4>
                                <p className="text-gray-500">₹{item.price.toLocaleString('en-IN')}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                                    <button onClick={() => updateQty(item.id, -1)} className="px-4 py-2 hover:bg-gray-100 font-bold">-</button>
                                    <span className="px-4 font-semibold text-gray-800">{item.qty}</span>
                                    <button onClick={() => updateQty(item.id, 1)} className="px-4 py-2 hover:bg-gray-100 font-bold">+</button>
                                </div>
                                <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:bg-red-50 p-2 rounded-full transition">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            
            {cart.length > 0 && (
                <div className="bg-gray-50 p-8 border-t border-gray-200">
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-2xl font-bold text-gray-600">Total Amount</span>
                        <span className="text-3xl font-black text-gray-900">₹{total.toLocaleString('en-IN')}</span>
                    </div>
                    <button onClick={checkout} className="w-full bg-black text-white py-4 rounded-2xl font-bold text-lg hover:bg-gray-800 transition shadow-xl">
                        Proceed to Checkout
                    </button>
                </div>
            )}
        </div>
      </div>
    );
};

const LoginPage = ({ handleLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if(email && password) {
            handleLogin({ name: "Moulika", email: email });
        } else {
            alert("Please enter details");
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-black text-gray-900">Welcome Back</h2>
                    <p className="text-gray-500 mt-2">Login to access your account</p>
                </div>
                <form onSubmit={onSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2 ml-1">Email Address</label>
                        <input 
                            type="email" 
                            className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition" 
                            placeholder="admin@luxe.com" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2 ml-1">Password</label>
                        <input 
                            type="password" 
                            className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition" 
                            placeholder="••••••••" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <button className="w-full bg-red-600 text-white py-3 rounded-xl font-bold text-lg hover:bg-red-700 transition shadow-lg shadow-red-200">
                        Login Securely
                    </button>
                </form>
            </div>
        </div>
    )
}

const AdminPage = ({ products, deleteProduct, addProduct }) => {
  const [newProduct, setNewProduct] = useState({ name: '', price: '', originalPrice: '', category: 'Fashion', img: '' });

  const handleSubmit = (e) => {
      e.preventDefault();
      if(!newProduct.name || !newProduct.price) return alert("Fill details");
      addProduct({
          ...newProduct,
          id: Date.now(), // Odd ID generation via timestamp
          price: Number(newProduct.price),
          originalPrice: Number(newProduct.originalPrice)
      });
      setNewProduct({ name: '', price: '', originalPrice: '', category: 'Fashion', img: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Admin Dashboard</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* ADD FORM */}
            <div className="bg-white p-8 rounded-2xl shadow-lg h-fit">
                <h3 className="text-xl font-bold mb-6 text-gray-700 border-b pb-4">Add New Product</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" placeholder="Product Name" className="w-full p-3 border rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-red-200"
                           value={newProduct.name} onChange={e => setNewProduct({...newProduct, name: e.target.value})} required/>
                    <div className="grid grid-cols-2 gap-4">
                        <input type="number" placeholder="Price (₹)" className="w-full p-3 border rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-red-200"
                            value={newProduct.price} onChange={e => setNewProduct({...newProduct, price: e.target.value})} required/>
                        <input type="number" placeholder="MRP (₹)" className="w-full p-3 border rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-red-200"
                            value={newProduct.originalPrice} onChange={e => setNewProduct({...newProduct, originalPrice: e.target.value})} required/>
                    </div>
                    <select className="w-full p-3 border rounded-lg bg-gray-50 outline-none" value={newProduct.category} onChange={e => setNewProduct({...newProduct, category: e.target.value})}>
                        <option value="Fashion">Fashion</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Home">Home</option>
                        <option value="Beauty">Beauty</option>
                    </select>
                    <input type="text" placeholder="Image URL" className="w-full p-3 border rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-red-200"
                           value={newProduct.img} onChange={e => setNewProduct({...newProduct, img: e.target.value})} />
                    <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-black transition">Add Product</button>
                </form>
            </div>

            {/* LIST */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-100 text-gray-600">
                            <tr>
                                <th className="p-4">Product</th>
                                <th className="p-4">Price</th>
                                <th className="p-4">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {products.slice().reverse().map(p => (
                                <tr key={p.id} className="hover:bg-gray-50">
                                    <td className="p-4 flex items-center gap-4">
                                        <img src={p.img} alt="" className="w-12 h-12 rounded-lg object-cover" />
                                        <span className="font-semibold text-gray-700">{p.name}</span>
                                    </td>
                                    <td className="p-4">₹{p.price}</td>
                                    <td className="p-4">
                                        <button onClick={() => deleteProduct(p.id)} className="text-red-500 hover:bg-red-50 px-3 py-1 rounded-lg text-sm font-bold">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

// --- 4. MAIN APP ---
function App() {
  // Persistence Logic
  const [currentView, setCurrentView] = useState('home');
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
  const [products, setProducts] = useState(() => JSON.parse(localStorage.getItem('products')) || initialData);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [user, setUser] = useState(null);

  useEffect(() => localStorage.setItem('cart', JSON.stringify(cart)), [cart]);
  useEffect(() => localStorage.setItem('products', JSON.stringify(products)), [products]);

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
    // Simple Alert for now (Toast needs external lib)
    alert(`${product.name} added to cart!`);
  };

  const updateQty = (id, delta) => {
    setCart(cart.map(item => item.id === id && (item.qty + delta) > 0 ? { ...item, qty: item.qty + delta } : item));
  };
  const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));
  const deleteProduct = (id) => setProducts(products.filter(p => p.id !== id));
  const addProduct = (p) => setProducts([...products, p]);

  const handleLogin = (u) => { setUser(u); setCurrentView('home'); };
  const handleLogout = () => { setUser(null); setCurrentView('home'); };
  const checkout = () => { alert("Order Placed Successfully!"); setCart([]); setCurrentView('home'); };

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-gray-50">
      {currentView !== 'login' && <Navbar setView={setCurrentView} cartCount={cart.reduce((acc, item) => acc + item.qty, 0)} user={user} handleLogout={handleLogout} />}
      
      <main className="flex-grow">
        {currentView === 'home' && <HomePage setView={setCurrentView} setCategory={setSelectedCategory} products={products} addToCart={addToCart} />}
        {currentView === 'shop' && <ShopPage products={products} category={selectedCategory} setCategory={setSelectedCategory} addToCart={addToCart} showOffersOnly={false} />}
        {currentView === 'offers' && <ShopPage products={products} category="All" setCategory={setSelectedCategory} addToCart={addToCart} showOffersOnly={true} />}
        {currentView === 'cart' && <CartPage cart={cart} updateQty={updateQty} removeFromCart={removeFromCart} checkout={checkout} />}
        {currentView === 'admin' && user && <AdminPage products={products} deleteProduct={deleteProduct} addProduct={addProduct} />}
        {currentView === 'login' && <LoginPage handleLogin={handleLogin} />}
      </main>

      <Footer />
    </div>
  );
}

export default App;