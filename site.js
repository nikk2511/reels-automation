const STORE = {
  brand: {
    name: "Natural Craft",
    tagline: "handcrafted with love, softened by nature"
  },
  categories: [
    {
      id: "all",
      name: "All Editions",
      eyebrow: "Full House",
      copy: "Textiles, wardrobe staples, and ritual objects designed to work together across the home.",
      href: "collections.html",
      toneA: "#efe0ce",
      toneB: "#c58e67"
    },
    {
      id: "Table Linen",
      name: "Table Linen",
      eyebrow: "Host Better",
      copy: "Scalloped napkins, runners, and all the table pieces that make dinner feel considered.",
      href: "collections.html?category=Table%20Linen",
      toneA: "#f0dfc7",
      toneB: "#c79463"
    },
    {
      id: "Decor",
      name: "Decor",
      eyebrow: "Quiet Impact",
      copy: "Serveware, lighting, and small objects with warm materiality and strong silhouettes.",
      href: "collections.html?category=Decor",
      toneA: "#d6e0d0",
      toneB: "#7f8e76"
    },
    {
      id: "Women",
      name: "Women",
      eyebrow: "Resort Soft",
      copy: "Relaxed shapes cut for movement, with refined drape and easy day-to-evening styling.",
      href: "collections.html?category=Women",
      toneA: "#ecd2c3",
      toneB: "#c57e68"
    },
    {
      id: "Men",
      name: "Men",
      eyebrow: "Tailored Ease",
      copy: "Camp shirts, lounge sets, and clean separates built for summer travel and city wear.",
      href: "collections.html?category=Men",
      toneA: "#d9d8cb",
      toneB: "#8b876d"
    },
    {
      id: "Bedroom",
      name: "Bedroom",
      eyebrow: "Rest Rituals",
      copy: "Layered quilts, cushions, and tactile bedding that pull the whole palette together.",
      href: "collections.html?category=Bedroom",
      toneA: "#e5d8cc",
      toneB: "#af8d73"
    }
  ],
  testimonials: [
    {
      quote: "It feels like a full design language, not random products. The table linens, clothes, and decor all speak to each other.",
      name: "Rhea Mehta",
      role: "Interior stylist, Mumbai"
    },
    {
      quote: "The site has the clarity luxury stores usually miss. Everything from texture notes to styling suggestions feels intentional.",
      name: "Karan Sethi",
      role: "Hotel consultant, Goa"
    },
    {
      quote: "I ordered a runner and ended up building an entire gifting list here. The merchandising is sharper than most craft-led brands.",
      name: "Naina Bhasin",
      role: "Creative producer, Delhi"
    }
  ],
  journal: [
    {
      title: "How to layer a dinner table without over-styling it",
      copy: "A simple framework for getting contrast, height, and texture right with linen, brass, and ceramics.",
      href: "story.html"
    },
    {
      title: "Why washed linen looks richer than polished perfection",
      copy: "The lived-in drape, the softened color, and the way it elevates casual spaces without trying too hard.",
      href: "story.html"
    },
    {
      title: "Build a vacation capsule around four grounded tones",
      copy: "A wardrobe edit using clay, oat, moss, and smoke so every piece coordinates from morning through dinner.",
      href: "story.html"
    }
  ],
  products: [
    {
      id: 1,
      slug: "dune-bloom-napkin-set",
      name: "Dune Bloom Napkin Set",
      line: "Host Edition",
      category: "Table Linen",
      price: 1890,
      compareAt: 2290,
      tag: "Best Seller",
      artLabel: "SCALLOPED LINEN",
      palette: ["#e8c7af", "#bb7f59", "#718066", "#f4e5d3"],
      excerpt: "Stonewashed napkins with contrast scallop edging and a soft fall that improves after every wash.",
      description: "A set built for long lunches and candlelit dinners. The linen has enough structure to frame a place setting, but enough softness to keep the table relaxed.",
      material: "European linen with cotton contrast piping",
      craft: "Cut, washed, and hand-finished in small studio batches",
      care: "Cold wash. Air dry or warm iron for a sharper table line.",
      impact: "Low-water dye process and reusable keepsake pouch included.",
      sizes: ["Set of 4", "Set of 6", "Set of 8"],
      colors: [
        { name: "Rose Sand", value: "#d3a38e" },
        { name: "Oat Milk", value: "#eadccf" },
        { name: "Moss Trim", value: "#798565" }
      ],
      features: ["Restaurant weight linen", "Gift-boxed finish", "Mixes with runners and placemats"],
      featured: true
    },
    {
      id: 2,
      slug: "saffron-trace-runner",
      name: "Saffron Trace Runner",
      line: "Gathering Table",
      category: "Table Linen",
      price: 2490,
      compareAt: 2990,
      tag: "Limited Shade",
      artLabel: "BLOCK BORDER",
      palette: ["#f0d9ba", "#c98e4e", "#a95f3f", "#fff1dc"],
      excerpt: "A long-format runner with hand-drawn border panels and a warm clay base that anchors a table instantly.",
      description: "This runner is the quickest way to sharpen a tablescape. It works under ceramics, wood, brass, and clear glass without feeling too formal.",
      material: "Slub cotton-linen blend",
      craft: "Hand block border with stone wash finish",
      care: "Machine wash gentle. Lay flat to preserve edge definition.",
      impact: "Dyed with azo-free pigments in low-volume production runs.",
      sizes: ["72 in", "90 in"],
      colors: [
        { name: "Saffron Clay", value: "#d38f4e" },
        { name: "Terracotta", value: "#b96a47" },
        { name: "Milk", value: "#f5ebdd" }
      ],
      features: ["Hand-drawn border rhythm", "Layer-friendly neutral base", "Pairs with scalloped napkins"],
      featured: true
    },
    {
      id: 3,
      slug: "clay-bloom-serving-bowl",
      name: "Clay Bloom Serving Bowl",
      line: "Table Object",
      category: "Decor",
      price: 2590,
      compareAt: 3190,
      tag: "Hand Cast",
      artLabel: "MATTE GLAZE",
      palette: ["#d9b597", "#bc704e", "#6f7f67", "#f6ecde"],
      excerpt: "Wide-rimmed ceramic serving bowl with a matte bloom glaze and a softly tapered foot.",
      description: "Designed for shared tables. The interior has a soft sheen while the outer wall stays chalky and tactile, making it feel collected rather than factory-finished.",
      material: "Stoneware ceramic with hand-rubbed matte glaze",
      craft: "Slip cast, glazed, and kiln fired in small runs",
      care: "Dishwasher safe. Avoid thermal shock.",
      impact: "Plastic-free packaging with molded pulp inserts.",
      sizes: ["Medium", "Large"],
      colors: [
        { name: "Bloom Clay", value: "#c47755" },
        { name: "Warm Sand", value: "#ead8c3" },
        { name: "Moss Smoke", value: "#6d7b65" }
      ],
      features: ["Statement rim profile", "Food-safe glaze", "Display-worthy even off the table"],
      featured: true
    },
    {
      id: 4,
      slug: "reed-halo-lantern",
      name: "Reed Halo Lantern",
      line: "Evening Light",
      category: "Decor",
      price: 3490,
      compareAt: 3990,
      tag: "New Arrival",
      artLabel: "WOVEN GLOW",
      palette: ["#d3c1a6", "#887252", "#5f6e59", "#f5e7d3"],
      excerpt: "A woven cane lantern with a brushed brass base that throws a softer, warmer light pool.",
      description: "Sized to sit on consoles, bedside tables, or outdoor dining setups. The reed weave creates a patterned glow without looking rustic or heavy.",
      material: "Natural cane weave with brushed brass-finish steel",
      craft: "Hand-laced weave over a lightweight metal structure",
      care: "Dust dry. Keep away from prolonged rain exposure.",
      impact: "Replaceable LED insert and repairable frame.",
      sizes: ["Small", "Tall"],
      colors: [
        { name: "Wheat", value: "#d7c6ad" },
        { name: "Brass", value: "#c6a05d" },
        { name: "Olive Shadow", value: "#6e7760" }
      ],
      features: ["Warm shadow play", "Indoor-outdoor styling", "Cordless LED insert"],
      featured: false
    },
    {
      id: 5,
      slug: "noor-wrap-co-ord",
      name: "Noor Wrap Co-Ord",
      line: "Travel Wardrobe",
      category: "Women",
      price: 5890,
      compareAt: 6890,
      tag: "Signature Fit",
      artLabel: "SOFT DRAPE",
      palette: ["#efcfbe", "#cb8169", "#8c9a83", "#f7ede3"],
      excerpt: "Wrap shirt and fluid pant set cut to move from day plans to late dinners without a changeover.",
      description: "The shirt has a hidden tie detail for shape while the pant stays easy through the hip. It is the kind of set that looks polished with almost no effort.",
      material: "Tencel-linen blend with a cool hand feel",
      craft: "Pattern-matched, soft washed, and finished with shell buttons",
      care: "Cold wash or dry clean. Steam lightly before wear.",
      impact: "Made in small runs to reduce overproduction.",
      sizes: ["XS", "S", "M", "L"],
      colors: [
        { name: "Blush Clay", value: "#cc8a74" },
        { name: "Shell", value: "#f1dfd3" },
        { name: "Moss", value: "#8a9880" }
      ],
      features: ["Shape-adjusting wrap detail", "Vacation-to-city styling", "Elastic comfort at the back waist"],
      featured: true
    },
    {
      id: 6,
      slug: "mira-panel-dress",
      name: "Mira Panel Dress",
      line: "Soft Structure",
      category: "Women",
      price: 6290,
      compareAt: 7490,
      tag: "Editor's Pick",
      artLabel: "VOLUME PANEL",
      palette: ["#e9d9cc", "#b9765c", "#6f806b", "#fff5ea"],
      excerpt: "A panelled midi dress with sculpted volume, hidden pockets, and a clean square neckline.",
      description: "Made to hold shape without stiffness. The panel seams add movement and the neckline layers well with minimal jewelry and flat sandals.",
      material: "Cotton poplin with enzyme wash",
      craft: "Panel-cut construction with covered topstitching",
      care: "Gentle machine wash. Warm iron on reverse.",
      impact: "Cut with low-waste marker planning.",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: [
        { name: "Clay Rose", value: "#be785f" },
        { name: "Shell White", value: "#efe4d8" },
        { name: "Forest Tea", value: "#73826d" }
      ],
      features: ["Side seam pockets", "Architectural drape", "Easy day-to-night silhouette"],
      featured: false
    },
    {
      id: 7,
      slug: "arav-camp-shirt-set",
      name: "Arav Camp Shirt Set",
      line: "Resort Tailoring",
      category: "Men",
      price: 5490,
      compareAt: 6390,
      tag: "Top Rated",
      artLabel: "RESORT CUT",
      palette: ["#d7cfbf", "#8a7c63", "#677561", "#f5ecdf"],
      excerpt: "Relaxed camp shirt and drawstring trouser set with a refined shoulder line and weightless feel.",
      description: "The balance is precise: easy enough for travel, sharp enough for dinner. It is the best-performing menswear shape in the line for a reason.",
      material: "Cotton-linen twill",
      craft: "Garment washed and finished with corozo buttons",
      care: "Machine wash cold. Dry flat or tumble low.",
      impact: "Produced in limited color batches to improve fabric yield.",
      sizes: ["S", "M", "L", "XL"],
      colors: [
        { name: "Oat Stone", value: "#d7cfbf" },
        { name: "Olive Smoke", value: "#6f7d67" },
        { name: "Walnut", value: "#87745c" }
      ],
      features: ["Relaxed but clean shoulder", "Travel-ready wrinkle texture", "Easy matching set"],
      featured: true
    },
    {
      id: 8,
      slug: "sol-stripe-lounge-set",
      name: "Sol Stripe Lounge Set",
      line: "Soft Stripe",
      category: "Men",
      price: 5890,
      compareAt: 6690,
      tag: "Weekend Essential",
      artLabel: "YARN STRIPE",
      palette: ["#e8ddce", "#a27e5d", "#60715c", "#fff6ed"],
      excerpt: "A tonal stripe overshirt and short set that works by the pool, on the road, or layered in the city.",
      description: "The stripe is woven in, not printed, giving the set more depth and a richer finish than typical resortwear.",
      material: "Yarn-dyed cotton-linen stripe",
      craft: "Woven stripe yardage with garment-softened finish",
      care: "Cold wash. Hang dry to protect the stripe texture.",
      impact: "Packaged in reusable canvas garment sleeve.",
      sizes: ["S", "M", "L", "XL"],
      colors: [
        { name: "Sand Stripe", value: "#c8a988" },
        { name: "Milk Stripe", value: "#f2e7dc" },
        { name: "Sage Stripe", value: "#6b7a62" }
      ],
      features: ["Woven stripe depth", "Overshirt + short pairing", "Works open or buttoned"],
      featured: false
    },
    {
      id: 9,
      slug: "meadow-quilt-cover",
      name: "Meadow Quilt Cover",
      line: "Bedroom Ritual",
      category: "Bedroom",
      price: 4690,
      compareAt: 5490,
      tag: "Sleep Edit",
      artLabel: "LAYERED QUILT",
      palette: ["#e7d7ca", "#ba8c73", "#87917e", "#f9efe3"],
      excerpt: "A light quilted cover with a softly padded hand feel and contrast piping for a more tailored bed.",
      description: "This is built for layered beds, not heavy hotel bulk. It adds depth and order without weighing down the room.",
      material: "Cotton voile shell with light recycled fill",
      craft: "Grid quilted and edged with contrast piping",
      care: "Machine wash cold. Tumble low with dryer balls.",
      impact: "Recycled fill and low-impact wash process.",
      sizes: ["Queen", "King"],
      colors: [
        { name: "Rose Fog", value: "#cd9e88" },
        { name: "Oat", value: "#ece0d4" },
        { name: "Sage Reed", value: "#88917b" }
      ],
      features: ["Light layer for year-round use", "Tailored bed styling", "Pairs with matching cushion covers"],
      featured: true
    },
    {
      id: 10,
      slug: "cedar-brass-board",
      name: "Cedar Brass Board",
      line: "Serve Object",
      category: "Decor",
      price: 2190,
      compareAt: 2590,
      tag: "Gift Favorite",
      artLabel: "WOOD + BRASS",
      palette: ["#dbc1a3", "#9a6b48", "#7f8a6d", "#f8ead7"],
      excerpt: "A cedar serving board with a brass inlay line that makes cheese, bread, and fruit service feel elevated.",
      description: "The profile is slim enough to store easily, but distinctive enough to leave on open shelving. A reliable gift piece that never feels generic.",
      material: "Sealed cedar wood with brass inlay detail",
      craft: "Hand-sanded edges and food-safe seal finish",
      care: "Wipe clean. Oil occasionally to preserve tone.",
      impact: "Finished in durable batches to extend product life.",
      sizes: ["Standard", "Long"],
      colors: [
        { name: "Cedar", value: "#a67954" },
        { name: "Brass Glow", value: "#c89f60" },
        { name: "Stone Cream", value: "#eee1d0" }
      ],
      features: ["Integrated brass line", "Shelf-worthy silhouette", "Ideal for gifting"],
      featured: false
    },
    {
      id: 11,
      slug: "haze-cushion-pair",
      name: "Haze Cushion Pair",
      line: "Bedroom Accent",
      category: "Bedroom",
      price: 1890,
      compareAt: 2290,
      tag: "Layering Piece",
      artLabel: "SOFT EDGE",
      palette: ["#eddccf", "#c4876b", "#78846f", "#fff5e9"],
      excerpt: "Double-sided cushion covers with soft piping and muted tones designed to bridge quilts, throws, and upholstered seating.",
      description: "Use them on a bed, bench, or low lounge chair. They are deliberately subdued so the texture reads before the color does.",
      material: "Washed cotton-linen with concealed zipper",
      craft: "Piped edge and reversible face pairing",
      care: "Cold wash gentle. Dry in shade.",
      impact: "Ships flat to reduce packaging bulk.",
      sizes: ["18 x 18 in", "20 x 20 in"],
      colors: [
        { name: "Dust Rose", value: "#c98f78" },
        { name: "Milk", value: "#f4e8dd" },
        { name: "Olive Grey", value: "#7b8573" }
      ],
      features: ["Reversible styling", "Quiet texture for layering", "Sold as a pair"],
      featured: false
    },
    {
      id: 12,
      slug: "loomed-picnic-edit",
      name: "Loomed Picnic Edit",
      line: "Outdoor Table",
      category: "Table Linen",
      price: 3290,
      compareAt: 3890,
      tag: "Bundle",
      artLabel: "OUTDOOR SET",
      palette: ["#f0ddc5", "#cb9260", "#6f7e6a", "#fff1dc"],
      excerpt: "A coordinated outdoor bundle with woven mat, striped napkins, and a carrying wrap for park lunches and road stops.",
      description: "This set turns casual outdoor eating into a styled moment without becoming precious. Everything rolls together and packs cleanly.",
      material: "Woven cotton mat with linen napkins and tie wrap",
      craft: "Bundle assembled from our table basics with custom travel wrap",
      care: "Spot clean the wrap. Machine wash napkins separately.",
      impact: "Multi-use bundle designed to replace disposable picnic sets.",
      sizes: ["2 person", "4 person"],
      colors: [
        { name: "Sun Clay", value: "#cf9866" },
        { name: "Soft Milk", value: "#f4e7d6" },
        { name: "Moss Reed", value: "#738168" }
      ],
      features: ["Ready-to-go bundle", "Travel wrap included", "Mixes storage and function"],
      featured: true
    }
  ]
};

const CART_KEY = "natural-craft-cart";
const money = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0
});

function formatPrice(value) {
  return money.format(value || 0);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function paletteStyle(palette) {
  return `--tone-1:${palette[0]}; --tone-2:${palette[1]}; --tone-3:${palette[2]}; --tone-4:${palette[3]};`;
}

function productLink(slug) {
  return `product.html?slug=${encodeURIComponent(slug)}`;
}

function getProductBySlug(slug) {
  return STORE.products.find((product) => product.slug === slug) || STORE.products[0];
}

function getCategoryById(categoryId) {
  return STORE.categories.find((category) => category.id === categoryId) || STORE.categories[0];
}

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function cartItemId(slug, size, color) {
  return [slug, size || "", color || ""].join("::");
}

function buildCartLine(item) {
  const product = getProductBySlug(item.slug);
  if (!product) {
    return null;
  }
  return {
    ...item,
    product,
    lineTotal: product.price * item.quantity
  };
}

function getCartLines() {
  return loadCart().map(buildCartLine).filter(Boolean);
}

function getCartCount() {
  return getCartLines().reduce((count, line) => count + line.quantity, 0);
}

function getCartSubtotal() {
  return getCartLines().reduce((sum, line) => sum + line.lineTotal, 0);
}

function addToCart(slug, options = {}) {
  const product = getProductBySlug(slug);
  if (!product) {
    return;
  }

  const size = options.size || product.sizes[0] || "Standard";
  const color = options.color || (product.colors[0] && product.colors[0].name) || "Default";
  const quantity = Math.max(1, Number.parseInt(options.quantity || 1, 10) || 1);
  const id = cartItemId(slug, size, color);
  const cart = loadCart();
  const existing = cart.find((entry) => entry.id === id);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ id, slug, size, color, quantity });
  }

  saveCart(cart);
}

function changeCartItem(id, delta) {
  const cart = loadCart()
    .map((entry) => {
      if (entry.id !== id) {
        return entry;
      }
      return {
        ...entry,
        quantity: entry.quantity + delta
      };
    })
    .filter((entry) => entry.quantity > 0);

  saveCart(cart);
}

function removeCartItem(id) {
  saveCart(loadCart().filter((entry) => entry.id !== id));
}

function clearCart() {
  saveCart([]);
}

function sortProducts(products, sortMode) {
  const items = [...products];

  if (sortMode === "price-low") {
    return items.sort((a, b) => a.price - b.price);
  }

  if (sortMode === "price-high") {
    return items.sort((a, b) => b.price - a.price);
  }

  if (sortMode === "latest") {
    return items.sort((a, b) => b.id - a.id);
  }

  return items.sort((a, b) => {
    if (a.featured === b.featured) {
      return a.id - b.id;
    }
    return a.featured ? -1 : 1;
  });
}

function filterProducts(categoryId) {
  if (!categoryId || categoryId === "all") {
    return STORE.products;
  }
  return STORE.products.filter((product) => product.category === categoryId);
}

function renderSwatches(colors) {
  return colors
    .map(
      (color) =>
        `<span class="swatch" title="${escapeHtml(color.name)}" style="background:${escapeHtml(color.value)}"></span>`
    )
    .join("");
}

function renderProductArt(product, large = false) {
  return `
    <div class="product-art${large ? " product-art--large" : ""}" style="${paletteStyle(product.palette)}">
      <span class="product-art__label">${escapeHtml(product.tag)}</span>
      <span class="product-art__sub">${escapeHtml(product.artLabel)}</span>
    </div>
  `;
}

function renderProductCard(product) {
  return `
    <article class="product-card reveal">
      <a href="${productLink(product.slug)}" aria-label="View ${escapeHtml(product.name)}">
        ${renderProductArt(product)}
      </a>
      <div class="product-card__meta">
        <div>
          <div class="product-card__line">${escapeHtml(product.category)}  /  ${escapeHtml(product.line)}</div>
          <h3>${escapeHtml(product.name)}</h3>
        </div>
        <span class="pill">${escapeHtml(product.tag)}</span>
      </div>
      <p class="product-card__copy">${escapeHtml(product.excerpt)}</p>
      <div class="swatch-row" aria-label="Available tones">
        ${renderSwatches(product.colors)}
      </div>
      <div class="price">
        <strong>${formatPrice(product.price)}</strong>
        <s>${formatPrice(product.compareAt)}</s>
      </div>
      <div class="product-card__actions">
        <button class="button button--primary" type="button" data-quick-add="${escapeHtml(product.slug)}">Add to Cart</button>
        <a class="button button--secondary" href="${productLink(product.slug)}">View Product</a>
      </div>
    </article>
  `;
}
function renderShell() {
  const headerTarget = document.querySelector("[data-header]");
  const footerTarget = document.querySelector("[data-footer]");
  const drawerTarget = document.querySelector("[data-cart-drawer]");
  const page = document.body.dataset.page || "home";
  const navCurrent = page === "product" ? "collections" : page;

  if (headerTarget) {
    headerTarget.innerHTML = `
      <div class="announcement">
        <div class="container announcement__inner">
          <span>New season edit live now. Complimentary gift wrap over ${formatPrice(4000)}.</span>
          <span class="announcement__meta">Ships across India in 3-5 days  /  Worldwide delivery available</span>
        </div>
      </div>
      <header class="site-header">
        <div class="container site-header__inner">
          <a class="brand" href="index.html" aria-label="${escapeHtml(STORE.brand.name)} home">
            <span class="brand__name">${escapeHtml(STORE.brand.name)}</span>
            <span class="brand__tag">${escapeHtml(STORE.brand.tagline)}</span>
          </a>
          <nav class="site-nav" aria-label="Primary">
            <a href="index.html" ${navCurrent === "home" ? 'aria-current="page"' : ""}>Home</a>
            <a href="collections.html" ${navCurrent === "collections" ? 'aria-current="page"' : ""}>Collection</a>
            <a href="story.html" ${navCurrent === "story" ? 'aria-current="page"' : ""}>Story</a>
            <a href="checkout.html" ${navCurrent === "checkout" ? 'aria-current="page"' : ""}>Checkout</a>
          </nav>
          <div class="header-tools">
            <a class="header-tools__button" href="collections.html">Shop All</a>
            <button class="header-tools__button" type="button" data-open-cart>
              Cart
              <span class="header-tools__count" data-cart-count>0</span>
            </button>
          </div>
        </div>
      </header>
    `;
  }

  if (footerTarget) {
    footerTarget.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="site-footer__panel reveal">
            <div class="site-footer__grid">
              <div>
                <div class="brand">
                  <span class="brand__name">${escapeHtml(STORE.brand.name)}</span>
                  <span class="brand__tag">${escapeHtml(STORE.brand.tagline)}</span>
                </div>
                <p>Premium craft-led ecommerce with sharper merchandising, stronger storytelling, and a calmer, more luxurious visual system.</p>
                <form class="newsletter-form" data-newsletter-form>
                  <input type="email" name="email" placeholder="Your email for early drops" required>
                  <button class="button button--primary" type="submit">Join</button>
                </form>
              </div>
              <div>
                <h4>Browse</h4>
                <div class="footer-links">
                  <a href="collections.html?category=Table%20Linen">Table Linen</a>
                  <a href="collections.html?category=Decor">Decor</a>
                  <a href="collections.html?category=Women">Women</a>
                  <a href="collections.html?category=Men">Men</a>
                  <a href="collections.html?category=Bedroom">Bedroom</a>
                </div>
              </div>
              <div>
                <h4>Service</h4>
                <div class="footer-links">
                  <a href="story.html">Craft story</a>
                  <a href="cart.html">Cart</a>
                  <a href="checkout.html">Checkout</a>
                  <a href="https://natural-craft.com/" target="_blank" rel="noreferrer">natural-craft.com</a>
                  <a href="tel:+919000000000">+91 90000 00000</a>
                </div>
              </div>
            </div>
            <div class="site-footer__bottom">
              <span>Made to feel collected, not mass-produced.</span>
              <span data-year></span>
            </div>
          </div>
        </div>
      </footer>
    `;
  }

  if (drawerTarget) {
    drawerTarget.innerHTML = `
      <div class="drawer-overlay" data-close-cart></div>
      <aside class="cart-drawer" aria-label="Cart drawer">
        <div class="cart-drawer__panel">
          <div class="cart-drawer__header">
            <div>
              <div class="product-card__line">Shopping Cart</div>
              <h3>Curated pieces, ready to ship</h3>
            </div>
            <button class="button button--secondary" type="button" data-close-cart>Close</button>
          </div>
          <div class="cart-drawer__body" data-cart-drawer-body></div>
          <div class="cart-drawer__footer" data-cart-drawer-footer></div>
        </div>
      </aside>
    `;
  }
}

function renderCategoryCards() {
  const target = document.querySelector("[data-category-grid]");
  if (!target) {
    return;
  }

  target.innerHTML = STORE.categories
    .filter((category) => category.id !== "all")
    .map(
      (category) => `
        <a class="category-card reveal" href="${category.href}" style="--tone-a:${category.toneA}; --tone-b:${category.toneB};">
          <span class="category-card__eyebrow">${escapeHtml(category.eyebrow)}</span>
          <h3>${escapeHtml(category.name)}</h3>
          <p>${escapeHtml(category.copy)}</p>
          <span class="button button--secondary">Explore</span>
        </a>
      `
    )
    .join("");
}

function bindChipRow(target, activeId, onSelect) {
  if (!target) {
    return;
  }

  target.innerHTML = STORE.categories
    .map(
      (category) => `
        <button class="chip${category.id === activeId ? " is-active" : ""}" type="button" data-category-chip="${escapeHtml(category.id)}">
          ${escapeHtml(category.name)}
        </button>
      `
    )
    .join("");

  target.querySelectorAll("[data-category-chip]").forEach((chip) => {
    chip.addEventListener("click", () => onSelect(chip.dataset.categoryChip));
  });
}

function renderHomeProducts(categoryId = "all") {
  const target = document.querySelector("[data-home-products]");
  const filterTarget = document.querySelector("[data-home-filters]");
  if (!target) {
    return;
  }

  bindChipRow(filterTarget, categoryId, (nextCategory) => renderHomeProducts(nextCategory));

  const products = filterProducts(categoryId)
    .filter((product) => product.featured)
    .slice(0, 6);

  target.innerHTML = products.map(renderProductCard).join("");
  activateReveals();
}

function renderJournal() {
  const target = document.querySelector("[data-journal-grid]");
  if (!target) {
    return;
  }

  target.innerHTML = STORE.journal
    .map(
      (entry) => `
        <article class="journal-card reveal">
          <span class="pill">Field Notes</span>
          <h3>${escapeHtml(entry.title)}</h3>
          <p>${escapeHtml(entry.copy)}</p>
          <a class="button button--ghost" href="${entry.href}">Read the brand story</a>
        </article>
      `
    )
    .join("");
}

function renderTestimonials() {
  const target = document.querySelector("[data-testimonial-grid]");
  if (!target) {
    return;
  }

  target.innerHTML = STORE.testimonials
    .map(
      (testimonial) => `
        <article class="testimonial-card reveal">
          <span class="quote-mark">"</span>
          <p>${escapeHtml(testimonial.quote)}</p>
          <div class="person">
            <span class="person__avatar">${escapeHtml(testimonial.name.charAt(0))}</span>
            <div>
              <strong>${escapeHtml(testimonial.name)}</strong>
              <span>${escapeHtml(testimonial.role)}</span>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderStoryProducts() {
  const target = document.querySelector("[data-story-products]");
  if (!target) {
    return;
  }

  target.innerHTML = STORE.products.filter((product) => product.featured).slice(0, 3).map(renderProductCard).join("");
  activateReveals();
}

function renderCollectionsPage(categoryId, sortMode) {
  const grid = document.querySelector("[data-collection-grid]");
  const chips = document.querySelector("[data-collection-filters]");
  const sortSelect = document.querySelector("[data-sort-select]");
  const title = document.querySelector("[data-collection-title]");
  const subtitle = document.querySelector("[data-collection-copy]");

  if (!grid) {
    return;
  }

  const activeCategory = getCategoryById(categoryId);
  const products = sortProducts(filterProducts(categoryId), sortMode);

  bindChipRow(chips, categoryId, (nextCategory) => {
    const url = new URL(window.location.href);
    if (nextCategory === "all") {
      url.searchParams.delete("category");
    } else {
      url.searchParams.set("category", nextCategory);
    }
    window.history.replaceState({}, "", url);
    renderCollectionsPage(nextCategory, sortSelect ? sortSelect.value : "featured");
  });

  if (sortSelect) {
    sortSelect.value = sortMode;
    sortSelect.onchange = () => renderCollectionsPage(categoryId, sortSelect.value);
  }

  if (title) {
    title.textContent = activeCategory.name;
  }
  if (subtitle) {
    subtitle.textContent = activeCategory.copy;
  }

  grid.innerHTML = products.map(renderProductCard).join("");
  activateReveals();
}

function renderRelatedProducts(product) {
  const target = document.querySelector("[data-related-products]");
  if (!target) {
    return;
  }

  const related = STORE.products
    .filter((item) => item.slug !== product.slug && (item.category === product.category || item.featured))
    .slice(0, 3);

  target.innerHTML = related.map(renderProductCard).join("");
  activateReveals();
}

function renderProductPage() {
  const target = document.querySelector("[data-product-detail]");
  if (!target) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const product = getProductBySlug(params.get("slug") || STORE.products[0].slug);
  document.title = `${product.name} | ${STORE.brand.name}`;

  const sizeOptions = product.sizes.map((size) => `<option value="${escapeHtml(size)}">${escapeHtml(size)}</option>`).join("");
  const colorOptions = product.colors.map((color) => `<option value="${escapeHtml(color.name)}">${escapeHtml(color.name)}</option>`).join("");

  target.innerHTML = `
    <div class="product-detail reveal">
      <div class="product-detail__gallery">
        ${renderProductArt(product, true)}
        <div class="product-detail__thumbnails">
          <div class="mini-art" style="${paletteStyle(product.palette)}"></div>
          <div class="mini-art" style="--tone-1:${product.palette[1]}; --tone-2:${product.palette[2]}; --tone-3:${product.palette[0]}; --tone-4:${product.palette[3]};"></div>
          <div class="mini-art" style="--tone-1:${product.palette[2]}; --tone-2:${product.palette[0]}; --tone-3:${product.palette[1]}; --tone-4:${product.palette[3]};"></div>
        </div>
      </div>
      <div class="product-detail__panel">
        <span class="pill">${escapeHtml(product.category)}  /  ${escapeHtml(product.line)}</span>
        <h1>${escapeHtml(product.name)}</h1>
        <p class="section-copy">${escapeHtml(product.description)}</p>
        <div class="price" style="margin-top:1rem;">
          <strong>${formatPrice(product.price)}</strong>
          <s>${formatPrice(product.compareAt)}</s>
        </div>
        <div class="swatch-row" style="margin-top:1rem;">
          ${renderSwatches(product.colors)}
        </div>
        <ul class="bullet-list">
          ${product.features.map((feature) => `<li>${escapeHtml(feature)}</li>`).join("")}
        </ul>
        <form class="product-form" data-product-form data-slug="${escapeHtml(product.slug)}">
          <div class="field-grid">
            <label>
              <span class="field-label">Select size</span>
              <select name="size">${sizeOptions}</select>
            </label>
            <label>
              <span class="field-label">Select color</span>
              <select name="color">${colorOptions}</select>
            </label>
          </div>
          <label>
            <span class="field-label">Quantity</span>
            <div class="quantity-field">
              <input type="number" name="quantity" min="1" value="1">
              <span class="pill">Ready to ship</span>
            </div>
          </label>
          <div class="button-row">
            <button class="button button--primary" type="submit">Add to Cart</button>
            <button class="button button--secondary" type="button" data-open-cart>Open Cart</button>
          </div>
        </form>
        <div class="accordion">
          <details open>
            <summary>Material and finish</summary>
            <p>${escapeHtml(product.material)}</p>
            <p>${escapeHtml(product.craft)}</p>
          </details>
          <details>
            <summary>Care</summary>
            <p>${escapeHtml(product.care)}</p>
          </details>
          <details>
            <summary>Impact</summary>
            <p>${escapeHtml(product.impact)}</p>
          </details>
        </div>
      </div>
    </div>
  `;

  renderRelatedProducts(product);
  activateReveals();
}

function renderCartPage() {
  const itemsTarget = document.querySelector("[data-cart-items]");
  const summaryTarget = document.querySelector("[data-cart-summary]");
  if (!itemsTarget || !summaryTarget) {
    return;
  }

  const lines = getCartLines();
  if (!lines.length) {
    itemsTarget.innerHTML = `
      <div class="empty-state">
        <h3>Your cart is still open space.</h3>
        <p class="section-copy">Start with the seasonal edit, or browse the collection to build a more complete home-and-wardrobe story.</p>
        <div class="button-row" style="justify-content:center; margin-top:1rem;">
          <a class="button button--primary" href="collections.html">Browse Collection</a>
        </div>
      </div>
    `;
    summaryTarget.innerHTML = `
      <div class="summary-card">
        <h3>Order summary</h3>
        <p class="summary-card__note">Add a few pieces to see delivery, packaging, and order totals here.</p>
      </div>
    `;
    return;
  }

  itemsTarget.innerHTML = `
    <div class="cart-items">
      ${lines
        .map(
          (line) => `
            <article class="cart-item reveal">
              ${renderProductArt(line.product)}
              <div class="cart-item__meta">
                <div class="product-card__line">${escapeHtml(line.product.category)}  /  ${escapeHtml(line.product.line)}</div>
                <h3>${escapeHtml(line.product.name)}</h3>
                <span>Size: ${escapeHtml(line.size)}</span>
                <span>Color: ${escapeHtml(line.color)}</span>
                <strong>${formatPrice(line.product.price)}</strong>
              </div>
              <div class="cart-item__actions">
                <div class="quantity-stepper">
                  <button type="button" data-cart-action="decrease" data-cart-id="${escapeHtml(line.id)}">-</button>
                  <span>${line.quantity}</span>
                  <button type="button" data-cart-action="increase" data-cart-id="${escapeHtml(line.id)}">+</button>
                </div>
                <button class="button button--ghost" type="button" data-cart-action="remove" data-cart-id="${escapeHtml(line.id)}">Remove</button>
                <strong>${formatPrice(line.lineTotal)}</strong>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
  const subtotal = getCartSubtotal();
  const shipping = subtotal >= 4000 ? 0 : 250;
  const total = subtotal + shipping;

  summaryTarget.innerHTML = `
    <div class="summary-card reveal">
      <h3>Order summary</h3>
      <div class="summary-card__row"><span>Subtotal</span><strong>${formatPrice(subtotal)}</strong></div>
      <div class="summary-card__row"><span>Shipping</span><strong>${shipping === 0 ? "Free" : formatPrice(shipping)}</strong></div>
      <div class="summary-card__row"><span>Gift wrap</span><strong>Included</strong></div>
      <div class="summary-card__total"><span>Total</span><strong>${formatPrice(total)}</strong></div>
      <p class="summary-card__note">Orders above ${formatPrice(4000)} ship free and include reusable dust bags or keepsake wraps where available.</p>
      <div class="button-row" style="margin-top:1rem;">
        <a class="button button--primary" href="checkout.html">Proceed to Checkout</a>
        <a class="button button--secondary" href="collections.html">Keep Shopping</a>
      </div>
    </div>
  `;
  activateReveals();
}

function renderCheckoutPage() {
  const summaryTarget = document.querySelector("[data-checkout-summary]");
  const statusTarget = document.querySelector("[data-checkout-status]");
  if (!summaryTarget) {
    return;
  }

  const lines = getCartLines();
  if (!lines.length) {
    summaryTarget.innerHTML = `
      <div class="summary-card">
        <h3>Your bag is empty</h3>
        <p class="summary-card__note">Add a few pieces before moving through checkout.</p>
        <a class="button button--primary" href="collections.html">Browse Collection</a>
      </div>
    `;
    if (statusTarget) {
      statusTarget.innerHTML = "";
    }
    return;
  }

  const subtotal = getCartSubtotal();
  const shipping = subtotal >= 4000 ? 0 : 250;
  const total = subtotal + shipping;

  summaryTarget.innerHTML = `
    <div class="summary-card reveal">
      <h3>Order summary</h3>
      ${lines
        .map(
          (line) => `
            <div class="summary-card__row">
              <span>${escapeHtml(line.product.name)} x ${line.quantity}</span>
              <strong>${formatPrice(line.lineTotal)}</strong>
            </div>
          `
        )
        .join("")}
      <div class="summary-card__row"><span>Shipping</span><strong>${shipping === 0 ? "Free" : formatPrice(shipping)}</strong></div>
      <div class="summary-card__total"><span>Total due</span><strong>${formatPrice(total)}</strong></div>
      <p class="summary-card__note">This checkout flow is front-end only. Submitting the form will simulate an order and clear the cart locally.</p>
    </div>
  `;
  activateReveals();
}

function renderCartDrawer() {
  const bodyTarget = document.querySelector("[data-cart-drawer-body]");
  const footerTarget = document.querySelector("[data-cart-drawer-footer]");
  if (!bodyTarget || !footerTarget) {
    return;
  }

  const lines = getCartLines();
  if (!lines.length) {
    bodyTarget.innerHTML = `
      <div class="empty-state">
        <h3>No pieces added yet</h3>
        <p class="section-copy">Start with the seasonal edit, then layer in tabletop and wardrobe pieces.</p>
        <a class="button button--primary" href="collections.html">Shop Collection</a>
      </div>
    `;
    footerTarget.innerHTML = "";
    return;
  }

  bodyTarget.innerHTML = lines
    .map(
      (line) => `
        <article class="drawer-item">
          ${renderProductArt(line.product)}
          <div class="drawer-item__meta">
            <div class="product-card__line">${escapeHtml(line.product.category)}</div>
            <h3>${escapeHtml(line.product.name)}</h3>
            <span>${escapeHtml(line.size)}  /  ${escapeHtml(line.color)}</span>
            <div class="drawer-item__actions">
              <div class="quantity-stepper">
                <button type="button" data-cart-action="decrease" data-cart-id="${escapeHtml(line.id)}">-</button>
                <span>${line.quantity}</span>
                <button type="button" data-cart-action="increase" data-cart-id="${escapeHtml(line.id)}">+</button>
              </div>
              <strong>${formatPrice(line.lineTotal)}</strong>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  footerTarget.innerHTML = `
    <div class="summary-card__total"><span>Subtotal</span><strong>${formatPrice(getCartSubtotal())}</strong></div>
    <div class="button-row" style="margin-top:1rem;">
      <a class="button button--primary" href="cart.html">View Cart</a>
      <a class="button button--secondary" href="checkout.html">Checkout</a>
    </div>
  `;
}

function syncCartUI() {
  document.querySelectorAll("[data-cart-count]").forEach((badge) => {
    badge.textContent = String(getCartCount());
  });

  renderCartDrawer();
  renderCartPage();
  renderCheckoutPage();
}

function openCartDrawer() {
  document.body.classList.add("drawer-open");
}

function closeCartDrawer() {
  document.body.classList.remove("drawer-open");
}

function activateReveals() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -30px 0px"
    }
  );

  items.forEach((item) => {
    if (!item.classList.contains("is-visible")) {
      observer.observe(item);
    }
  });
}

function wireGlobalEvents() {
  document.addEventListener("click", (event) => {
    const openButton = event.target.closest("[data-open-cart]");
    if (openButton) {
      openCartDrawer();
      return;
    }

    const closeButton = event.target.closest("[data-close-cart]");
    if (closeButton) {
      closeCartDrawer();
      return;
    }

    const quickAdd = event.target.closest("[data-quick-add]");
    if (quickAdd) {
      addToCart(quickAdd.dataset.quickAdd);
      syncCartUI();
      openCartDrawer();
      quickAdd.textContent = "Added";
      window.setTimeout(() => {
        quickAdd.textContent = "Add to Cart";
      }, 900);
      return;
    }

    const cartAction = event.target.closest("[data-cart-action]");
    if (cartAction) {
      const action = cartAction.dataset.cartAction;
      const id = cartAction.dataset.cartId;
      if (action === "increase") {
        changeCartItem(id, 1);
      } else if (action === "decrease") {
        changeCartItem(id, -1);
      } else if (action === "remove") {
        removeCartItem(id);
      }
      syncCartUI();
    }
  });

  document.addEventListener("submit", (event) => {
    const productForm = event.target.closest("[data-product-form]");
    if (productForm) {
      event.preventDefault();
      const formData = new FormData(productForm);
      addToCart(productForm.dataset.slug, {
        size: formData.get("size"),
        color: formData.get("color"),
        quantity: formData.get("quantity")
      });
      syncCartUI();
      openCartDrawer();
      return;
    }

    const newsletterForm = event.target.closest("[data-newsletter-form]");
    if (newsletterForm) {
      event.preventDefault();
      newsletterForm.reset();
      const next = newsletterForm.nextElementSibling;
      if (next && next.classList.contains("success-message")) {
        next.remove();
      }
      newsletterForm.insertAdjacentHTML(
        "afterend",
        '<div class="success-message">You are on the list for new drops, craft notes, and private preview launches.</div>'
      );
      return;
    }

    const checkoutForm = event.target.closest("[data-checkout-form]");
    if (checkoutForm) {
      event.preventDefault();
      const statusTarget = document.querySelector("[data-checkout-status]");
      if (!getCartLines().length) {
        if (statusTarget) {
          statusTarget.innerHTML = '<div class="success-message">Your cart is empty. Add products before placing an order.</div>';
        }
        return;
      }
      checkoutForm.reset();
      clearCart();
      syncCartUI();
      if (statusTarget) {
        statusTarget.innerHTML = '<div class="success-message">Order placed locally. The cart has been cleared and the confirmation flow completed on this demo storefront.</div>';
      }
    }
  });
}

function initPage() {
  renderShell();

  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = `(c) ${new Date().getFullYear()} ${STORE.brand.name}. All rights reserved.`;
  });

  if (document.body.dataset.page === "home") {
    renderCategoryCards();
    renderHomeProducts();
    renderJournal();
    renderTestimonials();
  }

  if (document.body.dataset.page === "collections") {
    const params = new URLSearchParams(window.location.search);
    const categoryId = params.get("category") || "all";
    renderCollectionsPage(categoryId, "featured");
  }

  if (document.body.dataset.page === "story") {
    renderStoryProducts();
  }

  if (document.body.dataset.page === "product") {
    renderProductPage();
  }

  renderCartPage();
  renderCheckoutPage();
  syncCartUI();
  wireGlobalEvents();
  activateReveals();
}

document.addEventListener("DOMContentLoaded", initPage);

STORE.brand.name = "Natural Craft";
STORE.brand.tagline = "handcrafted with love, softened by nature";
STORE.testimonials = [
  {
    quote: "Softened cotton table linen, refined detailing, and gift-ready finishing define the signature Natural Craft dining edit.",
    name: "Table Linen",
    role: "Natural Craft signature"
  },
  {
    quote: "Statement apparel drops bring brighter colour, handcrafted accents, and soft tailoring into the Natural Craft collection.",
    name: "Fashion Edit",
    role: "Seasonal launch"
  },
  {
    quote: "Home decor and bedroom styling bring warmth, texture, and a more layered lifestyle story to the brand.",
    name: "Home and Decor",
    role: "Living collection"
  }
];
STORE.journal = [
  {
    title: "How Natural Craft styles table linen for everyday dining",
    copy: "A brand note on softened cotton, scalloped edges, and how to build a warmer dining setup around the collection.",
    href: "story.html"
  },
  {
    title: "The Natural Craft colour direction behind this season",
    copy: "From soft neutrals to brighter fashion-led pinks and greens, the collection balances calm home tones with expressive apparel.",
    href: "story.html"
  },
  {
    title: "Why handcrafted finishing matters more than trend cycles",
    copy: "Natural Craft leans on feel, detailing, and repeat usability so pieces keep their value beyond one season.",
    href: "story.html"
  }
];
STORE.categories = [
  {
    id: "all",
    name: "All Collections",
    eyebrow: "Brand Edit",
    copy: "Browse the full Natural Craft assortment across table linen, decor, bedroom styling, apparel, and gifting.",
    href: "collections.html",
    toneA: "#efe0ce",
    toneB: "#c58e67"
  },
  {
    id: "Table Linen",
    name: "Table Linen",
    eyebrow: "Dining Edit",
    copy: "Scalloped napkins, runners, and cotton table accents that lead the Natural Craft tabletop story.",
    href: "collections.html?category=Table%20Linen",
    toneA: "#f0dfc7",
    toneB: "#c79463"
  },
  {
    id: "Decor",
    name: "Home Decor",
    eyebrow: "Living Spaces",
    copy: "Interior styling, kitchen accents, and decorative pieces that turn the store into a fuller lifestyle brand.",
    href: "collections.html?category=Decor",
    toneA: "#d6e0d0",
    toneB: "#7f8e76"
  },
  {
    id: "Fashion",
    name: "Women's Apparel",
    eyebrow: "Fashion Launch",
    copy: "Bright handcrafted co-ords and statement looks pulled from Natural Craft's apparel direction.",
    href: "collections.html?category=Fashion",
    toneA: "#ecd2c3",
    toneB: "#c57e68"
  },
  {
    id: "Gift Sets",
    name: "Gift Sets",
    eyebrow: "Packed to Gift",
    copy: "Folded textile sets and ready-to-send edits that work for festive gifting, hosting, and premium orders.",
    href: "collections.html?category=Gift%20Sets",
    toneA: "#d9d8cb",
    toneB: "#8b876d"
  },
  {
    id: "Bedroom",
    name: "Bedroom Styling",
    eyebrow: "Soft Living",
    copy: "Bedroom and soft-home images that help position Natural Craft as a broader lifestyle destination.",
    href: "collections.html?category=Bedroom",
    toneA: "#e5d8cc",
    toneB: "#af8d73"
  }
];
STORE.products = STORE.products.map((product) => {
  if (product.category === "Women") {
    return { ...product, category: "Fashion" };
  }
  if (product.category === "Men") {
    return { ...product, category: "Gift Sets" };
  }
  return product;
});

const MEDIA = {
  logo: "assets/natural-craft/logo.png",
  heroMain: "assets/natural-craft/hero-main.png",
  heroAlt1: "assets/natural-craft/hero-alt-1.png",
  heroAlt2: "assets/natural-craft/hero-alt-2.png",
  heroAlt3: "assets/natural-craft/hero-alt-3.png",
  categories: {
    "Table Linen": "assets/natural-craft/table-linen.jpg",
    "Decor": "assets/natural-craft/decor-living.jpg",
    "Fashion": "assets/natural-craft/hero-alt-2.png",
    "Gift Sets": "assets/natural-craft/promo-8-1.jpg",
    "Bedroom": "assets/natural-craft/bedroom-main.jpg"
  },
  products: {
    "dune-bloom-napkin-set": "assets/natural-craft/product-15a.jpg",
    "saffron-trace-runner": "assets/natural-craft/product-33a.jpg",
    "clay-bloom-serving-bowl": "assets/natural-craft/home-kitchen.jpg",
    "reed-halo-lantern": "assets/natural-craft/decor-living.jpg",
    "noor-wrap-co-ord": "assets/natural-craft/promo-44.png",
    "mira-panel-dress": "assets/natural-craft/product-94.png",
    "arav-camp-shirt-set": "assets/natural-craft/promo-3-1.jpg",
    "sol-stripe-lounge-set": "assets/natural-craft/product-91.png",
    "meadow-quilt-cover": "assets/natural-craft/bedroom-main.jpg",
    "cedar-brass-board": "assets/natural-craft/home-kitchen.jpg",
    "haze-cushion-pair": "assets/natural-craft/bedroom-alt.jpg",
    "loomed-picnic-edit": "assets/natural-craft/product-5.jpg"
  }
};

function getProductImage(product) {
  return MEDIA.products[product.slug] || "";
}

function getCategoryImage(category) {
  return MEDIA.categories[category.id] || "";
}

function renderProductArt(product, large = false) {
  const image = getProductImage(product);
  return `
    <div class="product-art${large ? " product-art--large" : ""}" style="${paletteStyle(product.palette)}">
      ${image ? `<img src="${image}" alt="${escapeHtml(product.name)}" loading="${large ? "eager" : "lazy"}">` : ""}
      <span class="product-art__label">${escapeHtml(product.tag)}</span>
      <span class="product-art__sub">${escapeHtml(product.artLabel)}</span>
    </div>
  `;
}

function renderShell() {
  const headerTarget = document.querySelector("[data-header]");
  const footerTarget = document.querySelector("[data-footer]");
  const drawerTarget = document.querySelector("[data-cart-drawer]");
  const page = document.body.dataset.page || "home";
  const navCurrent = page === "product" ? "collections" : page;

  if (headerTarget) {
    headerTarget.innerHTML = `
      <div class="announcement">
        <div class="container announcement__inner">
          <span>Discover Natural Craft's latest table linen, decor, bedroom, and fashion launches.</span>
          <span class="announcement__meta">Handcrafted textiles / gifting-ready packaging / local brand promotion build</span>
        </div>
      </div>
      <header class="site-header">
        <div class="container site-header__inner">
          <a class="brand" href="index.html" aria-label="${escapeHtml(STORE.brand.name)} home">
            <span class="brand__mark"><img class="brand__logo" src="${MEDIA.logo}" alt="${escapeHtml(STORE.brand.name)} logo"></span>
            <span class="brand__text">
              <span class="brand__name">${escapeHtml(STORE.brand.name)}</span>
              <span class="brand__tag">${escapeHtml(STORE.brand.tagline)}</span>
            </span>
          </a>
          <nav class="site-nav" aria-label="Primary">
            <a href="index.html" ${navCurrent === "home" ? 'aria-current="page"' : ""}>Home</a>
            <a href="collections.html" ${navCurrent === "collections" ? 'aria-current="page"' : ""}>Collection</a>
            <a href="story.html" ${navCurrent === "story" ? 'aria-current="page"' : ""}>Story</a>
            <a href="checkout.html" ${navCurrent === "checkout" ? 'aria-current="page"' : ""}>Checkout</a>
          </nav>
          <div class="header-tools">
            <a class="header-tools__button" href="collections.html">Shop Natural Craft</a>
            <button class="header-tools__button" type="button" data-open-cart>
              Cart
              <span class="header-tools__count" data-cart-count>0</span>
            </button>
          </div>
        </div>
      </header>
    `;
  }

  if (footerTarget) {
    const browseLinks = STORE.categories
      .filter((category) => category.id !== "all")
      .map((category) => `<a href="${category.href}">${escapeHtml(category.name)}</a>`)
      .join("");

    footerTarget.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="site-footer__panel reveal">
            <div class="site-footer__grid">
              <div>
                <div class="brand">
                  <span class="brand__mark"><img class="brand__logo" src="${MEDIA.logo}" alt="${escapeHtml(STORE.brand.name)} logo"></span>
                  <span class="brand__text">
                    <span class="brand__name">${escapeHtml(STORE.brand.name)}</span>
                    <span class="brand__tag">${escapeHtml(STORE.brand.tagline)}</span>
                  </span>
                </div>
                <p>Natural Craft is presented here as a cleaner, image-rich brand promotion storefront built around its official table linen, decor, gifting, and fashion visuals.</p>
                <form class="newsletter-form" data-newsletter-form>
                  <input type="email" name="email" placeholder="Join for Natural Craft updates" required>
                  <button class="button button--primary" type="submit">Join</button>
                </form>
              </div>
              <div>
                <h4>Browse</h4>
                <div class="footer-links">${browseLinks}</div>
              </div>
              <div>
                <h4>Connect</h4>
                <div class="footer-links">
                  <a href="https://natural-craft.com/" target="_blank" rel="noreferrer">Official website</a>
                  <a href="https://natural-craft.com/shop/" target="_blank" rel="noreferrer">Official shop</a>
                  <a href="https://wa.me/919582872075" target="_blank" rel="noreferrer">WhatsApp</a>
                  <a href="tel:+919582872075">+91 95828 72075</a>
                  <a href="story.html">Brand story</a>
                </div>
              </div>
            </div>
            <div class="site-footer__bottom">
              <span>Natural Craft / handcrafted with love, softened by nature.</span>
              <span data-year></span>
            </div>
          </div>
        </div>
      </footer>
    `;
  }

  if (drawerTarget) {
    drawerTarget.innerHTML = `
      <div class="drawer-overlay" data-close-cart></div>
      <aside class="cart-drawer" aria-label="Cart drawer">
        <div class="cart-drawer__panel">
          <div class="cart-drawer__header">
            <div>
              <div class="product-card__line">Natural Craft Cart</div>
              <h3>Selected pieces, ready to review</h3>
            </div>
            <button class="button button--secondary" type="button" data-close-cart>Close</button>
          </div>
          <div class="cart-drawer__body" data-cart-drawer-body></div>
          <div class="cart-drawer__footer" data-cart-drawer-footer></div>
        </div>
      </aside>
    `;
  }
}

function renderCategoryCards() {
  const target = document.querySelector("[data-category-grid]");
  if (!target) {
    return;
  }

  target.innerHTML = STORE.categories
    .filter((category) => category.id !== "all")
    .map((category) => {
      const image = getCategoryImage(category);
      const imageStyle = image
        ? `background-image: linear-gradient(180deg, rgba(16, 18, 16, 0.18), rgba(16, 18, 16, 0.74)), url('${image}');`
        : `--tone-a:${category.toneA}; --tone-b:${category.toneB};`;
      return `
        <a class="category-card reveal${image ? " category-card--image" : ""}" href="${category.href}" style="${imageStyle}">
          <span class="category-card__eyebrow">${escapeHtml(category.eyebrow)}</span>
          <h3>${escapeHtml(category.name)}</h3>
          <p>${escapeHtml(category.copy)}</p>
          <span class="button button--secondary">Explore</span>
        </a>
      `;
    })
    .join("");
}

