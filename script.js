// Dishes Database
const dishesData = [
  {
    id: 1,
    name: "كبة شاميّة فاخرة",
    category: "starters",
    price: 6.50,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    shortDesc: "أقراص الكبة المقرمشة المحشوة باللحم الضأن البلدي والصنوبر المحمص.",
    longDesc: "كبة شامية محشية باللحم المفروم مع البصل والصنوبر، مقلية بحرفية لتمنحك قشرة مقرمشة من الخارج وطعماً غنياً بالبهارات الشامية من الداخل.",
    ingredients: ["برغل", "لحم ضأن", "صنوبر", "بصل", "بهارات شامية"],
    calories: 320
  },
  {
    id: 2,
    name: "سلطة سيزر بالدجاج المشوي",
    category: "starters",
    price: 8.00,
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=600&q=80",
    shortDesc: "خس طازج مع شرائح الدجاج المتبل، صوص السيزر وجبنة البارميزان.",
    longDesc: "توليفة منعشة من الخس الروماني الطازج، مغطاة بشرائح صدر الدجاج المشوي على الفحم، ومقرمشات الخبز بالمحمص مع صوص السيزر الخاص ورقائق البارميزان.",
    ingredients: ["خس روماني", "صدر دجاج", "جبن بارميزان", "خبز محمص", "صلصة سيزر"],
    calories: 280
  },
  {
    id: 3,
    name: "شوربة عدس بالليمون",
    category: "starters",
    price: 4.50,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80",
    shortDesc: "شوربة العدس الأصفر الكلاسيكية تقدم مع خبز محمص وشرائح الليمون.",
    longDesc: "شوربة عدس دافئة ومغذية محضرة على الطريقة التقليدية مع زيت الزيتون، الكمون، وتقدم مع المكعبات المقرمشة وقطع الليمون الطازج.",
    ingredients: ["عدس أصفر", "بصل", "كمون", "زيت زيتون", "خبز محمص"],
    calories: 210
  },
  {
    id: 4,
    name: "برجر لحم أنغوس بلدي",
    category: "mains",
    price: 12.50,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    shortDesc: "قطعة لحم أنغوس مشوية مع جبن الشيدر، الصوص الخاص والبطاطس المقرمشة.",
    longDesc: "برجر فاخر من لحم الأنغوس المشوي على اللهب، يعلوه شيدر ذائب، بصل كراميل، مخلل، وطماطم طازجة داخل خبز البريوش الطري مع بطاطس مقلية.",
    ingredients: ["لحم أنغوس", "جبن شيدر", "خبز بريوش", "صلصة خاصة", "بطاطس مقلية"],
    calories: 780
  },
  {
    id: 5,
    name: "وجبة شاورما عربي سوبر",
    category: "mains",
    price: 9.50,
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=600&q=80",
    shortDesc: "شرائح شاورما دجاج متبلة ومقطعة في خبز الصاج مع الثومية والبطاطس.",
    longDesc: "شرائح دجاج محمرة ومتبلة بالخلطة الشامية المميزة، ملفوفة بخبز الصاج المحمص ومقطعة، تقدم مع صلصة الثومية الفاخرة، المخلل، والبطاطس المقلية.",
    ingredients: ["دجاج متبل", "خبز صاج", "صلصة ثومية", "مخلل خيار", "بطاطس"],
    calories: 650
  },
  {
    id: 6,
    name: "ستيك ريب آي مشوي",
    category: "mains",
    price: 24.00,
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=600&q=80",
    shortDesc: "قطعة ستيك ريب آي طرية مشوية حسب الطلب مع خضار سوتيه وصلصة المشروم.",
    longDesc: "قطعة ستيك ريب آي معتقة ومتبلة بالأعشاب العطرية، مشوية ببراعة وتقدم مع بطاطس مهروسة بالزبدة، خضروات موسمية سوتيه، وصلصة الفطر الغنية.",
    ingredients: ["لحم ريب آي", "صلصة فطر", "بطاطس مهروسة", "إكليل الجبل", "خضار"],
    calories: 820
  },
  {
    id: 7,
    name: "بيتزا مارجريتا نابوليتانا",
    category: "mains",
    price: 11.00,
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=600&q=80",
    shortDesc: "عجينة إيطالية هشة، صلصة طماطم طازجة، جبنة موزاريلا وريحان.",
    longDesc: "بيتزا نابولية أصيلة متخمرة لمدة 24 ساعة، مفرودة يدوياً ومخبوزة في فرن الحطب، تعلوها صلصة طماطم وسان مارزانو، موزاريلا طازجة، وريحان خافق.",
    ingredients: ["دقيق إيطالي", "طماطم طازجة", "جبن موزاريلا", "ريحان", "زيت زيتون"],
    calories: 610
  },
  {
    id: 8,
    name: "عصير برتقال طازج",
    category: "drinks",
    price: 3.50,
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80",
    shortDesc: "عصير برتقال طبيعي 100% معصور فورياً بدون إضافة سكر.",
    longDesc: "كوب منعش ومليء بالفيتامينات من البرتقال الطبيعي المعصور طازجاً عند طلبك دون أي إضافات أو مواد حافظة.",
    ingredients: ["برتقال طازج 100%"],
    calories: 120
  },
  {
    id: 9,
    name: "موهيتو أزرق منعش",
    category: "drinks",
    price: 4.50,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
    shortDesc: "مشروب الموهيتو المنعش مع النعناع الطازج، شرائح الليمون وشراب البلو كوراساو.",
    longDesc: "مزيج منعش من النعناع الأخضر المهروس، شرائح الليمون الحامض، الصودا الفوارة وشراب البلو كوراساو الأزرق يقدم مع الثلج المكسر.",
    ingredients: ["نعناع", "ليمون", "صودا", "شراب بلو كوراساو", "ثلج"],
    calories: 150
  },
  {
    id: 10,
    name: "كافيه لاتيه بارد",
    category: "drinks",
    price: 5.00,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
    shortDesc: "جرعة اسبريسو مزدوجة مع حليب طازج ومكعبات ثلج.",
    longDesc: "قهوة اسبريسو غنية ومحضرة من حبوب البن المحمصة بامتياز، ممزوجة مع الحليب البارد والثلج لمذاق متوازن ينعش يومك.",
    ingredients: ["اسبريسو", "حليب طازج", "ثلج"],
    calories: 140
  },
  {
    id: 11,
    name: "كنافة بالجبنة النابلسية",
    category: "desserts",
    price: 6.00,
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=600&q=80",
    shortDesc: "كنافة ذهبية دافئة بجبن نابلسي ذائب، قطر وفستق حلبي.",
    longDesc: "عجينة كنافة مقرمشة محمرة بالسمن الحيواني، محشوة بالجبن النابلسي المطاطي، تقدم دافئة مع القطر العطري ورشة سخية من الفستق الحلبي.",
    ingredients: ["عجينة كنافة", "جبن نابلسي", "سمن بلدي", "قطر", "فستق حلبي"],
    calories: 490
  },
  {
    id: 12,
    name: "كيك الشوكولاتة الفاخرة",
    category: "desserts",
    price: 5.50,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
    shortDesc: "قطعة كيك شوكولاتة هشة محشوة بصلصة الشوكولاتة الداكنة الساخنة.",
    longDesc: "كيك شوكولاتة بلجيكية غنية وطرية، تتميز بقلب سائل ذائب من الشوكولاتة الساخنة، تقدم مع بولات فانيليا كريمية.",
    ingredients: ["شوكولاتة بلجيكية", "كاكاو داكن", "دقيق", "زبادي", "فانيليا"],
    calories: 530
  }
];

// App State
let currentCategory = "all";
let currentSearchQuery = "";
let cart = [];
let selectedDishForModal = null;
let modalQuantity = 1;

// DOM Elements
const dishesGrid = document.getElementById("dishes-grid");
const noResults = document.getElementById("no-results");
const searchInput = document.getElementById("search-input");
const categoryButtons = document.querySelectorAll(".category-btn");

// Modal Elements
const dishModal = document.getElementById("dish-modal");
const closeModalBtn = document.getElementById("close-modal-btn");
const modalImg = document.getElementById("modal-img");
const modalCategory = document.getElementById("modal-category");
const modalTitle = document.getElementById("modal-title");
const modalPrice = document.getElementById("modal-price");
const modalCalories = document.getElementById("modal-calories").querySelector("span");
const modalDescription = document.getElementById("modal-description");
const modalIngredients = document.getElementById("modal-ingredients");
const qtyMinus = document.getElementById("qty-minus");
const qtyPlus = document.getElementById("qty-plus");
const qtyCount = document.getElementById("qty-count");
const modalAddBtn = document.getElementById("modal-add-btn");

// Cart Elements
const openCartBtn = document.getElementById("open-cart-btn");
const closeCartBtn = document.getElementById("close-cart-btn");
const cartDrawer = document.getElementById("cart-drawer");
const cartOverlay = document.getElementById("cart-overlay");
const cartBadge = document.getElementById("cart-badge");
const cartItemsContainer = document.getElementById("cart-items-container");
const cartTotalPrice = document.getElementById("cart-total-price");
const clearCartBtn = document.getElementById("clear-cart-btn");
const checkoutBtn = document.getElementById("checkout-btn");

// Categories Mapping
const categoryNamesMap = {
  starters: "المقبلات",
  mains: "الأطباق الرئيسية",
  drinks: "المشروبات",
  desserts: "الحلويات"
};

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  renderDishes();
  setupEventListeners();
  updateCartUI();
});

// Setup Event Listeners
function setupEventListeners() {
  // Live Search
  searchInput.addEventListener("input", (e) => {
    currentSearchQuery = e.target.value.trim().toLowerCase();
    renderDishes();
  });

  // Filter Categories
  categoryButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      categoryButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category");
      renderDishes();
    });
  });

  // Modal Handlers
  closeModalBtn.addEventListener("click", closeModal);
  dishModal.addEventListener("click", (e) => {
    if (e.target === dishModal) closeModal();
  });

  qtyMinus.addEventListener("click", () => {
    if (modalQuantity > 1) {
      modalQuantity--;
      qtyCount.textContent = modalQuantity;
    }
  });

  qtyPlus.addEventListener("click", () => {
    modalQuantity++;
    qtyCount.textContent = modalQuantity;
  });

  modalAddBtn.addEventListener("click", () => {
    if (selectedDishForModal) {
      addToCart(selectedDishForModal.id, modalQuantity);
      closeModal();
      toggleCartDrawer(true);
    }
  });

  // Cart Drawer Handlers
  openCartBtn.addEventListener("click", () => toggleCartDrawer(true));
  closeCartBtn.addEventListener("click", () => toggleCartDrawer(false));
  cartOverlay.addEventListener("click", () => toggleCartDrawer(false));

  clearCartBtn.addEventListener("click", () => {
    if (cart.length === 0) return;
    if (confirm("هل أنت تأكد من تفريغ سلة الطلبات؟")) {
      cart = [];
      updateCartUI();
    }
  });

  checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
      alert("سلة الطلبات فارغة حالياً!");
      return;
    }
    alert("تم إرسال الطلب بنجاح! 🎉");
    cart = [];
    updateCartUI();
    toggleCartDrawer(false);
  });
}

// Render Dishes Grid
function renderDishes() {
  const filtered = dishesData.filter((dish) => {
    const matchesCategory = currentCategory === "all" || dish.category === currentCategory;
    const matchesSearch =
      dish.name.toLowerCase().includes(currentSearchQuery) ||
      dish.shortDesc.toLowerCase().includes(currentSearchQuery) ||
      dish.ingredients.some((ing) => ing.toLowerCase().includes(currentSearchQuery));

    return matchesCategory && matchesSearch;
  });

  dishesGrid.innerHTML = "";

  if (filtered.length === 0) {
    noResults.classList.remove("hidden");
  } else {
    noResults.classList.add("hidden");
    filtered.forEach((dish) => {
      const card = createDishCard(dish);
      dishesGrid.appendChild(card);
    });
  }
}

// Create Card DOM Element
function createDishCard(dish) {
  const card = document.createElement("div");
  card.className = "dish-card";

  card.innerHTML = `
    <div class="dish-img-wrapper">
      <img src="${dish.image}" alt="${dish.name}" class="dish-img" loading="lazy">
      <span class="dish-tag">${categoryNamesMap[dish.category] || "طبق"}</span>
    </div>
    <div class="dish-info">
      <h3 class="dish-title">${dish.name}</h3>
      <p class="dish-short-desc">${dish.shortDesc}</p>
      <div class="dish-bottom">
        <span class="dish-price">$${dish.price.toFixed(2)}</span>
        <button class="add-btn" data-id="${dish.id}">
          <i class="fa-solid fa-plus"></i> إضافة
        </button>
      </div>
    </div>
  `;

  card.addEventListener("click", (e) => {
    if (e.target.closest(".add-btn")) {
      e.stopPropagation();
      addToCart(dish.id, 1);
    } else {
      openModal(dish);
    }
  });

  return card;
}

// Open Details Modal
function openModal(dish) {
  selectedDishForModal = dish;
  modalQuantity = 1;

  modalImg.src = dish.image;
  modalImg.alt = dish.name;
  modalCategory.textContent = categoryNamesMap[dish.category] || "عام";
  modalTitle.textContent = dish.name;
  modalPrice.textContent = `$${dish.price.toFixed(2)}`;
  modalCalories.textContent = dish.calories;
  modalDescription.textContent = dish.longDesc;
  qtyCount.textContent = modalQuantity;

  modalIngredients.innerHTML = dish.ingredients
    .map((ing) => `<span class="ingredient-chip">${ing}</span>`)
    .join("");

  dishModal.classList.remove("hidden");
}

// Close Modal
function closeModal() {
  dishModal.classList.add("hidden");
  selectedDishForModal = null;
}

// Add Item to Cart
function addToCart(dishId, qty = 1) {
  const existingItem = cart.find((item) => item.id === dishId);

  if (existingItem) {
    existingItem.quantity += qty;
  } else {
    const dish = dishesData.find((d) => d.id === dishId);
    if (dish) {
      cart.push({
        id: dish.id,
        name: dish.name,
        price: dish.price,
        image: dish.image,
        quantity: qty
      });
    }
  }

  updateCartUI();
}

// Update Item Quantity in Cart
function updateCartQuantity(dishId, change) {
  const item = cart.find((i) => i.id === dishId);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    cart = cart.filter((i) => i.id !== dishId);
  }

  updateCartUI();
}

// Remove Item from Cart
function removeFromCart(dishId) {
  cart = cart.filter((i) => i.id !== dishId);
  updateCartUI();
}

// Update Cart UI, Total, and Badge
function updateCartUI() {
  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartBadge.textContent = totalItemsCount;

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotalPrice.textContent = `$${totalAmount.toFixed(2)}`;

  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-empty">
        <i class="fa-solid fa-basket-shopping cart-empty-icon"></i>
        <p>السلة فارغة حالياً</p>
      </div>
    `;
    return;
  }

  cart.forEach((item) => {
    const itemEl = document.createElement("div");
    itemEl.className = "cart-item";
    itemEl.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.name}</h4>
        <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
      </div>
      <div class="cart-item-actions">
        <button class="cart-item-qty-btn minus-btn"><i class="fa-solid fa-minus"></i></button>
        <span class="cart-item-qty">${item.quantity}</span>
        <button class="cart-item-qty-btn plus-btn"><i class="fa-solid fa-plus"></i></button>
      </div>
      <button class="remove-item-btn" title="حذف">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    `;

    itemEl.querySelector(".minus-btn").addEventListener("click", () => updateCartQuantity(item.id, -1));
    itemEl.querySelector(".plus-btn").addEventListener("click", () => updateCartQuantity(item.id, 1));
    itemEl.querySelector(".remove-item-btn").addEventListener("click", () => removeFromCart(item.id));

    cartItemsContainer.appendChild(itemEl);
  });
}

// Toggle Cart Drawer Visibility
function toggleCartDrawer(open) {
  if (open) {
    cartDrawer.classList.add("open");
    cartOverlay.classList.remove("hidden");
  } else {
    cartDrawer.classList.remove("open");
    cartOverlay.classList.add("hidden");
  }
}