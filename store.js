(function () {
  const STORAGE_KEY = "lunar-cart";
  const WISHLIST_KEY = "lunar-wishlist";
  const PROMO_KEY = "lunar-promo";
  const PACKAGING_FEE = 5;
  const SHIPPING_FEE = 4.99;
  const TAX_RATE = 0.08;

  const PRODUCTS = [
    {
      id: "alchemy-of-stillness",
      title: "The Alchemy of Stillness",
      author: "Pico Iyer",
      category: "Meditation",
      price: 24,
      compareAt: 32,
      rating: 4.8,
      badge: "",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGNdxaZ-Vke0nWiFNL0LVtSyOqAxfroAunF8VFOVcpqPm1O0BU2fyEpIRE-jKu674SHDcXL8JgZzQwtQgsfI88DXZs_4-zwNWJAFJfgWEokAdJiuJnVFvSS8iCt13Cz54f1-UwylsOVpCCOnGHLOD0gTBb9Esx2SHM9mlZ1RCXch_UanJhTAdPUm-8mq6V4WqN_yWwVLUnpxNdUI81Uw0sTvmLtB8VnuEmAXjChWCQsZrjkUFVENC95nWCtwkQXVu_igBi4Ul3ViUc",
      description: "An evocative journey into the heart of modern meditation, tracing how silence shapes creative attention and a slower, richer inner life.",
      longDescription: "A quietly luminous meditation on attention, ritual, and the architecture of inner calm. This edition pairs reflective prose with tactile production details designed to be savored slowly.",
      isbn: "978-1-73921-001-4",
      format: "Hardcover",
      pages: "288 Pages",
      publisher: "Lumina Press",
      language: "English"
    },
    {
      id: "architecture-of-silence",
      title: "The Architecture of Silence",
      author: "Elena Vance",
      category: "Contemporary Fiction",
      price: 32,
      compareAt: 45,
      rating: 4.9,
      badge: "Editor's Pick",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1gDSsrJrsL1qhZ1NCRn73gSNTIoDYZIDs1Vh0ttEugo4UScgfH3XSqvY7raIpMi95-hpE9x-rI4M7amoFOgydO7xEoMVD5rDTug-HFGxDQPJ4b2am-lJpTcZLqoieeAOzwCbPvolOBRqBqrn866YF_J1Lp84oNUufvg4O3JthnQu0iOf2lbamu4jYdq2u17Yp-hCzyh-iJ3CXdQPuYPvUmSjxAuhLO9FiAO2sDLpMccadthk3XeXkNrERd1TlCDQQF1wdeHWzJdo0",
      description: "A hauntingly beautiful exploration of the spaces we inhabit and the secrets they hold.",
      longDescription: "Julian Thorne, a reclusive architect, restores a fading estate only to uncover plans for rooms that should not exist. Gothic suspense meets philosophical inquiry in a collector-friendly edition.",
      isbn: "978-3-16-148410-0",
      format: "Hardcover",
      pages: "412 Pages",
      publisher: "Lumina Press",
      language: "English"
    },
    {
      id: "infinite-perspective",
      title: "The Infinite Perspective",
      author: "Dr. Julian Vance",
      category: "Philosophy",
      price: 42,
      compareAt: 52,
      rating: 4.9,
      badge: "",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLNA_oO_cpkcqteGDs-zCd59GqMREUAajELMzhXX-BvcUlq-M5KDb-6UEEtdItdr9cW6ZkEgYjMB2t9GBUWu1vlHqgg9UuBVW01yYVDVyTc0BirN-v_rQF96NeDmyoNWO7xFg1XkqT1HJgR7tYDPqoJFQSaSJfIco0NKTLp_Cg16H-1uOf77iyCbN8lgDMcNt71bIEVrffvcK498d4KvN1VmxQY0rDR-9V3qSTsGAAZFy8kdcxZc2aKgRF84QW5xpHkGlXiGIUZ-Oa",
      description: "A lucid philosophical inquiry into scale, perception, and the ways human thought reaches beyond the visible frame.",
      longDescription: "A rich, accessible work of philosophy about how perspective shapes ethics, design, and memory. Built for readers who enjoy slow thinking and elegant argument.",
      isbn: "978-1-73921-040-3",
      format: "Collector Hardcover",
      pages: "364 Pages",
      publisher: "North Archive",
      language: "English"
    },
    {
      id: "stone-and-silence",
      title: "Stone & Silence",
      author: "Elena Rossi",
      category: "Architecture",
      price: 85,
      compareAt: 98,
      rating: 5,
      badge: "Collector's Ed.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDlVPE1KXsxPP6xRPIUPQrcJugIeyOp8TnrQguYB9Xl-sjJlNmo3iBrTRWQy_uFgCZp3mDluPc9Jg6UsvoEeqIyAAE1vzl9ABLOzdQgrRy9sC6AN3EJ5Jacgb-IoHHal_sKXYmCzpk035HQswtC4SxERHOcWQ7zOPjQyXg-fHT9HjZUEW3_fOTE8JVtUa0TH0seSDc7-r7SQE2cx-vSLgGuki0aDjW5KZ02lMYK37J9Bmb_xnobiWibPoxcLk8fX1Taf0On8ewABa1",
      description: "A visual study of sacred geometry, public space, and the poetry of weight, line, and stillness.",
      longDescription: "Lavishly illustrated and carefully printed, this collector's edition examines architecture not as construction alone, but as a language of memory and atmosphere.",
      isbn: "978-1-73921-084-7",
      format: "Collector Hardcover",
      pages: "420 Pages",
      publisher: "Atelier House",
      language: "English"
    },
    {
      id: "digital-nomads-ethos",
      title: "The Digital Nomad's Ethos",
      author: "Marcus Thorne",
      category: "Non-Fiction",
      price: 29.99,
      compareAt: 38,
      rating: 4.7,
      badge: "",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4PccGZhPGBXk6HE1K3Yf7m9D4aE-dN7Uc9JoCYadnVGt1uFX9W35ivsxz-7-1s8uW_m9OJC7qgaUf1A-f3AO1qR7eimuQQVj5QIwwiBbDBfz2ZQea_ja0xVuo0WYSaS99cae1LTK4Y1OB7cm_b9I-wQqceRRqnqVUxT4ejhsVHOtM3IUDoGBCI7NuhFy7uTCHbSEfJ7FMk1PGKJhbyJc3pqIP0VfZVWa87Pm3hdqRvNAwG9rgzDD43QkwZyDt2y1tkIn0p6F8YAet",
      description: "A contemporary field guide to mobility, creative work, and building rituals while living between cities.",
      longDescription: "Blending personal essays with practical frameworks, this book explores the cultural and emotional texture of flexible modern work.",
      isbn: "978-1-73921-113-4",
      format: "Paperback",
      pages: "256 Pages",
      publisher: "Wayfinder Editions",
      language: "English"
    },
    {
      id: "echoes-of-the-past",
      title: "Echoes of the Past",
      author: "Sarah Whitmore",
      category: "Classic Literature",
      price: 34.5,
      compareAt: 41,
      rating: 4.8,
      badge: "",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDic4NII7sP-8vJmHky1o4dKhRWjO8kV__QqcBMIlqAgDZ14P8eQ9sX5rAaMDO6WhmNh7xVYQ3VM5EEJx9R7jyBo21x2ZJXo_uql6q38CfHTIsdAIRwEbvAGoX8_FMuucWNB_SX_ee_dq112Vb-NLZWHZ01cGoqJCgBtmaU-QKa33ZlBp-CrR8emC4fv4Er4247hCZflkznjE7YI76WqtDfaQtlziA05bc8FPex-lk60Cy6vn3_WBOEKit0aVklJ65IYt7HPYKcQ_32",
      description: "A beautifully produced literary volume about inheritance, grief, and the voices that remain in old houses.",
      longDescription: "A stately modern classic with emotional precision and formal elegance, bound in a quietly luxurious edition.",
      isbn: "978-1-73921-141-7",
      format: "Hardcover",
      pages: "318 Pages",
      publisher: "Fenwood Library",
      language: "English"
    },
    {
      id: "quiet-bloom",
      title: "The Quiet Bloom",
      author: "Lila Chen",
      category: "Botany",
      price: 55,
      compareAt: 63,
      rating: 4.9,
      badge: "",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAG5sHy7mEN0V3sQxCdNs7qmfo6gDExeO2pPlQS0hPCorl5oQX9AzFkaJ9MzgvBBT5X7OyzbvsQK9-LUrT3traObUmwy51O8Vi-2QdQ9VKoLDheCLRGujrnqWy0NekmCRrTUp6oaXrl9LCthM695UTQkbHZKMuhY9F_aXEuopFXY6Nq3jbZ70HnmgewbMEQQLEMA4XLbeJPROunUoM6t0qaidhxkcRfLbouniJY-8CL-8fwjALvotOxHzZ6kwb2oEEUMQ_xtADlZX-p",
      description: "An artful exploration of botany through illustration, field notes, and meditative essays on growth.",
      longDescription: "Part botanical journal, part visual essay collection, this edition is designed for slow browsing and display.",
      isbn: "978-1-73921-167-7",
      format: "Clothbound Hardcover",
      pages: "300 Pages",
      publisher: "Verdant Study",
      language: "English"
    },
    {
      id: "modern-manifestos",
      title: "Modern Manifestos",
      author: "David K. Miller",
      category: "Essays",
      price: 38,
      compareAt: 44,
      rating: 4.6,
      badge: "",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBVFYXwIXgKLuktLdpW5EwTUsh_IRmt-cNEsXcs4gWeHDmzEq6pMvyMw8Lx5fu3ZNQifBQimF_escdaOwQiASF39ZpOOr9tsk5iegPbw29NwE_F-He3j65ZoctYTpbA00u1OnGbRPGvQlNHXd0gjuweagmsVyq1_h08lazCgEkbcJ6wgLefqZJx93r1BaunbN-VuIILRj1aYNw_miAxr-5hiFGBAasQzpEDn7nvDkAmtZdxYX9OWq69_rY2rsN9I4SuBfS2-Ldq6WH",
      description: "Bold essays on design, society, and the aesthetics of conviction in a fragmented age.",
      longDescription: "Sharp, articulate, and visually refined, this essay collection bridges cultural criticism and personal philosophy.",
      isbn: "978-1-73921-194-3",
      format: "Paperback",
      pages: "272 Pages",
      publisher: "Forum Editions",
      language: "English"
    },
    {
      id: "celestial-architecture",
      title: "Celestial Architecture",
      author: "Elena Vance",
      category: "Design",
      price: 34,
      compareAt: 40,
      rating: 4.7,
      badge: "",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3v0cvoOAfn97G7BN3F8YCGOctuoHoJ9P3K0j_7_-ttFmSrLTn1AJ2AsiI9TY4Ik3R79YR-rOtgvvlXY040qksCqxRZNIMDVywvYeEUyP1dYms0TDuIKQ2YmzWDPdk7dXAuDRpv3n-ack-OQ4tk3Abhgif1GokyDt02vqXRe4ieQOHkJkfVEenZisZQgx5Y7-zVCmArY38LQPhMBDxW1RAwMykGRg_bSMOpSOivuQqj8rL8mNyhMbDiskAp9JXFQHJMjFHXo4JYHy-",
      description: "A luminous survey of imagined structures, celestial maps, and contemplative design.",
      longDescription: "A refined visual volume for readers drawn to architecture, metaphysics, and bookmaking craft.",
      isbn: "978-1-73921-211-7",
      format: "Hardcover",
      pages: "240 Pages",
      publisher: "Lumina Press",
      language: "English"
    },
    {
      id: "urban-solitude",
      title: "Urban Solitude",
      author: "Marcus Thorne",
      category: "Essays",
      price: 28,
      compareAt: 35,
      rating: 4.5,
      badge: "",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoPY9BX-PSX5d7fN8frTpR3sPiLFRx-eml9Ys8F4OQhghzjuEMidqz4qMO6Ng_VYDlHuHsST1ilQBAUZu45c5A3OiEcsfAlrIWDDSI4xHMVxAzOghiIw--q0EuPysKnYs6UBdEEs2hGlubfV4XylZE43qtvfZv1ybxeb0tSAfaEZHei6-1D-1kZ9D52pDBumjIVouryOqHt2U1zWloNd_t30hTQoLnLDvHX8G3zv_C-jvcMJezpostEVgbCt_g_2DHdY48UgoXEvWU",
      description: "Reflections on modern city life, private rituals, and the emotional acoustics of crowded places.",
      longDescription: "An intimate, stylish essay collection about solitude without retreat, set against the energy of contemporary urban life.",
      isbn: "978-1-73921-228-5",
      format: "Paperback",
      pages: "230 Pages",
      publisher: "Civic House",
      language: "English"
    },
    {
      id: "gilded-page",
      title: "The Gilded Page",
      author: "S. J. Aris",
      category: "Rare Editions",
      price: 42,
      compareAt: 52,
      rating: 4.9,
      badge: "Limited",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJTKKgnKnvgm7a7uhAq9kpeEaBaZycjOIVBIJfOcvACa1WSol_R1HgfKGQc0lFPX2XGgErOAP_17boQwpRCiYsdNaE6-INmY5jdWd9xz3JdvB579tmyIX9pqQ6lchVLGumV4g_8y71wQslvxnsSFlbOYcHFBrsTeFy0q3ObqQprklx92S7km4Zjg7hcKCljNHzrmO04mlVvCn4ciZbsb0gM9M17Lg4OSr9rsD6s5FBfouG0PHPRlOcEDSpYjvloIHWLQ-eDr0kK6bP",
      description: "A literary artifact devoted to ornament, memory, and the strange intimacy of annotated books.",
      longDescription: "A lushly produced title exploring marginalia, collecting, and the afterlife of printed objects.",
      isbn: "978-1-73921-247-6",
      format: "Limited Hardcover",
      pages: "312 Pages",
      publisher: "Lumina Press",
      language: "English"
    },
    {
      id: "minimalist-living",
      title: "Minimalist Living",
      author: "Clara Heis",
      category: "Lifestyle",
      price: 24,
      compareAt: 30,
      rating: 4.4,
      badge: "",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEi32j5LZdyr-Beld-_YKdAbJjDLG-oU05EEKWOaRiGEwzTIb-TjNR5u2luAkWZb1QXlUYZv5R5AzdoDfmluO9qTjO6_W-q0fUkfYTJOHT_JPLTB6setZ5_ZyeT2zVVofx1mF0jgA_h1RifEdHXjtuYy7tFSuZQFC0sgjsIY63vyBEsDd-inaeXWPSsYPqV-Rlq7X3j1fHCh1I-x4VKfOhto6lh3GrdEX2j1fWrcLsBpU1nh9k7PMptuw8l6meW6r5bDA-Q0JK3MO8",
      description: "A quiet manual on simplifying spaces and daily routines without flattening beauty or character.",
      longDescription: "Practical yet warm, this guide balances restrained living with material richness and personal ritual.",
      isbn: "978-1-73921-259-9",
      format: "Paperback",
      pages: "208 Pages",
      publisher: "Common Table",
      language: "English"
    },
    {
      id: "art-of-the-archive",
      title: "The Art of the Archive",
      author: "Curator's House",
      category: "Library Studies",
      price: 46,
      compareAt: 58,
      rating: 4.8,
      badge: "",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrvlOrfidxdCZOZ3K3LpFplXnK1gZl5Xt4Nbudsrt-t9h38NpU65tsxCPfdfDKFoi37omgS5sAwaynbOSUqlYqIB06wmhcptw_fgDxgVsBhUNXc_KAjwoySHkhc_8W3KsaIIFCbIYq3T5yED06Uupb1o_wGtXptOD8L5mO8BVYlM--aYdNkAIXN5o1SjuvidiZg6oWCRxm5SDxdiP19LUjAhmA9MOR_tKvALJjsp2U_HOdZ9QdcDTGGjCmEAyTAjJBEeIo4JrNU_vQ",
      description: "A deep dive into private libraries and the curators who preserve them across generations.",
      longDescription: "Part photo essay, part historical reflection, this volume celebrates the spaces where books become architecture and memory.",
      isbn: "978-1-73921-273-5",
      format: "Oversized Hardcover",
      pages: "352 Pages",
      publisher: "Curator's House",
      language: "English"
    }
  ];

  const HOME_IDS = [
    "celestial-architecture",
    "urban-solitude",
    "gilded-page",
    "minimalist-living"
  ];

  const RELATED_IDS = [
    "infinite-perspective",
    "stone-and-silence",
    "quiet-bloom",
    "modern-manifestos"
  ];

  function formatCurrency(value) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(value);
  }

  function getProduct(id) {
    return PRODUCTS.find((product) => product.id === id);
  }

  function readJson(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
    } catch {
      return fallback;
    }
  }

  function readCart() {
    return readJson(STORAGE_KEY, []);
  }

  function writeCart(cart) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }

  function readWishlist() {
    return readJson(WISHLIST_KEY, []);
  }

  function writeWishlist(wishlist) {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }

  function readPromo() {
    return readJson(PROMO_KEY, null);
  }

  function writePromo(promo) {
    if (!promo) {
      localStorage.removeItem(PROMO_KEY);
      return;
    }
    localStorage.setItem(PROMO_KEY, JSON.stringify(promo));
  }

  function cartCount(cart) {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }

  function cartItemsDetailed() {
    return readCart()
      .map((entry) => {
        const product = getProduct(entry.id);
        if (!product) return null;
        return { product, quantity: entry.quantity };
      })
      .filter(Boolean);
  }

  function cartSubtotal(items) {
    return items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  function addToCart(productId, quantity) {
    const cart = readCart();
    const existing = cart.find((item) => item.id === productId);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({ id: productId, quantity });
    }
    writeCart(cart);
    updateCartBadges();
  }

  function updateCartQuantity(productId, quantity) {
    const next = readCart()
      .map((item) => item.id === productId ? { ...item, quantity } : item)
      .filter((item) => item.quantity > 0);
    writeCart(next);
    updateCartBadges();
    renderCartPage();
    renderPaymentPage();
  }

  function removeFromCart(productId) {
    writeCart(readCart().filter((item) => item.id !== productId));
    updateCartBadges();
    renderCartPage();
    renderPaymentPage();
  }

  function updateCartBadges() {
    const count = cartCount(readCart());
    document.querySelectorAll("[data-cart-count]").forEach((badge) => {
      badge.textContent = String(count);
      badge.hidden = count === 0;
    });
  }

  function sanitizeMojibake() {
    document.body.innerHTML = document.body.innerHTML
      .replace(/Â©/g, "&copy;")
      .replace(/â€”/g, "-")
      .replace(/â€™/g, "'")
      .replace(/â˜…/g, "★")
      .replace(/Há» tÃªn/g, "H&#7885; t&#234;n")
      .replace(/Pháº¡m ÄoÃ n Thá»‹nh/g, "Ph&#7841;m &#272;o&#224;n Th&#7883;nh")
      .replace(/Lá»›p/g, "L&#7899;p");
  }

  function injectFooterIdentity() {
    const footerColumns = document.querySelectorAll("footer .md\\:col-span-4, footer .md\\:col-span-3");
    const identityMarkup = `
      <div class="mt-4 space-y-2 text-sm text-on-surface-variant" data-student-identity>
        <p>H&#7885; t&#234;n: Ph&#7841;m &#272;o&#224;n Th&#7883;nh</p>
        <p>L&#7899;p: D22_TH05</p>
        <p>MSSV: DH52201505</p>
      </div>
    `;

    const target = Array.from(footerColumns).find((column) => {
      const heading = column.querySelector("h4");
      return heading && /location/i.test(heading.textContent || "");
    }) || footerColumns[0];

    if (target && !target.querySelector("[data-student-identity]")) {
      target.insertAdjacentHTML("beforeend", identityMarkup);
    }
  }

  function getPromoDefinition(code) {
    const normalized = code.trim().toUpperCase();
    const promos = {
      LUMINA10: { code: normalized, type: "percent", value: 0.1, label: "10% off collector subtotal" },
      ARCHIVE15: { code: normalized, type: "fixed", value: 15, label: "$15 off orders above $100" }
    };
    const promo = promos[normalized];
    if (!promo) return null;
    if (normalized === "ARCHIVE15" && cartSubtotal(cartItemsDetailed()) < 100) return null;
    return promo;
  }

  function getDiscountAmount(subtotal) {
    const promo = readPromo();
    if (!promo) return 0;
    if (promo.type === "percent") return subtotal * promo.value;
    if (promo.type === "fixed") return Math.min(subtotal, promo.value);
    return 0;
  }

  function addToWishlist(productId) {
    const wishlist = readWishlist();
    if (!wishlist.includes(productId)) {
      wishlist.push(productId);
      writeWishlist(wishlist);
    }
    return wishlist;
  }

  function buildDetailCopy(product) {
    return {
      summaryOne: `${product.title} places ${product.author}'s voice inside a richly composed ${product.category.toLowerCase()} frame, balancing atmosphere with a strong editorial sense of pace. This edition leans into tactile reading, pairing generous margins with a production style that feels closer to a private archive than a mass-market release.`,
      summaryTwo: `What makes this volume distinctive is the way it turns ${product.category.toLowerCase()} into something intimate and collectible. The language stays precise, the visual presentation remains restrained, and the result feels curated for readers who care as much about the physical object as the text itself.`,
      note: `This ${product.format.toLowerCase()} edition is finished with archival-grade paper and a tailored ${product.category.toLowerCase()} presentation.`,
      reviews: [
        {
          name: "Mara Ellison",
          badge: "Verified Collector",
          rating: 5,
          quote: "A beautifully produced volume that rewards slow reading.",
          body: `${product.title} feels deliberate in the best possible way. The pacing, typography, and physical finish all reinforce the mood of the work.`
        },
        {
          name: "Julian Cross",
          badge: "Lumina Member",
          rating: 4,
          quote: "Elegant, thoughtful, and easy to return to.",
          body: `I came for the design language and stayed for the clarity of ${product.author}'s voice. It sits comfortably between collectible object and practical everyday read.`
        },
        {
          name: "Leonie Hart",
          badge: "Private Library Circle",
          rating: 5,
          quote: "Exactly the kind of edition I want on my shelf.",
          body: `There is a quiet confidence to the whole package. ${product.title} looks refined, reads cleanly, and leaves a lasting impression.`
        }
      ]
    };
  }

  function wirePlaceholderLinks() {
    const routeMap = {
      "lumina books": "./index.html",
      "shop": "./list.html",
      "categories": "./list.html",
      "bestsellers": "./list.html",
      "new arrivals": "./list.html",
      "view works": "./list.html",
      "home": "./index.html",
      "our library": "./list.html",
      "about our library": "./index.html",
      "newsletter signup": "./index.html#newsletter",
      "shipping & returns": "./payment.html",
      "privacy policy": "mailto:privacy@luminabooks.example",
      "contact us": "mailto:hello@luminabooks.example",
      "rare finds": "./list.html",
      "art & design": "./list.html",
      "classic volumes": "./list.html",
      "bespoke editions": "./list.html"
    };

    document.querySelectorAll('a[href="#"]').forEach((anchor) => {
      const key = anchor.textContent.trim().replace(/\s+/g, " ").toLowerCase();
      if (routeMap[key]) {
        anchor.setAttribute("href", routeMap[key]);
      }
    });
  }

  function bindOpenCartButtons() {
    document.querySelectorAll("[data-open-cart]").forEach((button) => {
      button.addEventListener("click", () => {
        window.location.href = "./cart.html";
      });
    });
  }

  function bindSearchInputs() {
    document.querySelectorAll("[data-search-input]").forEach((input) => {
      input.addEventListener("keydown", (event) => {
        if (event.key !== "Enter") return;
        event.preventDefault();
        const q = input.value.trim();
        window.location.href = q ? `./list.html?q=${encodeURIComponent(q)}` : "./list.html";
      });
    });
  }

  function bindShareButtons() {
    document.querySelectorAll("[data-share-page]").forEach((button) => {
      button.addEventListener("click", async () => {
        const payload = { title: document.title, url: window.location.href };
        if (navigator.share) {
          try {
            await navigator.share(payload);
            return;
          } catch {
          }
        }
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(window.location.href);
          button.textContent = "check";
          setTimeout(() => {
            button.textContent = "share";
          }, 1200);
        }
      });
    });
  }

  function renderHomePage() {
    const container = document.querySelector("[data-home-books]");
    if (!container) return;

    const books = HOME_IDS.map(getProduct).filter(Boolean);
    container.innerHTML = books.map((product) => `
      <article class="group" data-open-detail="${product.id}">
        <div class="aspect-[2/3] bg-surface-variant mb-4 overflow-hidden border border-[#E5E3D5] group-hover:shadow-lg transition-all duration-300">
          <a href="./detail.html?id=${product.id}">
            <img alt="${product.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="${product.image}" />
          </a>
        </div>
        <h3 class="font-headline-md text-body-md text-primary mb-1">
          <a href="./detail.html?id=${product.id}">${product.title}</a>
        </h3>
        <p class="font-body-md text-caption text-on-surface-variant">${product.author}</p>
        <p class="font-label-md text-label-md text-secondary mt-2">${formatCurrency(product.price)}</p>
      </article>
    `).join("");
  }

  function createListCard(product) {
    return `
      <article class="group cursor-pointer" data-open-detail="${product.id}">
        <div class="aspect-[2/3] bg-surface-container relative mb-6 overflow-hidden border border-surface-variant group-hover:shadow-xl transition-all duration-300">
          <a href="./detail.html?id=${product.id}">
            <img alt="${product.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="${product.image}" />
          </a>
          <div class="absolute bottom-4 left-4 right-4 translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
            <a class="block w-full bg-primary text-on-primary py-3 font-body-md text-label-md uppercase tracking-wider shadow-lg text-center" href="./detail.html?id=${product.id}">Quick View</a>
          </div>
          ${product.badge ? `<div class="absolute top-4 left-4 bg-secondary text-on-primary px-3 py-1 font-body-md text-caption uppercase tracking-widest">${product.badge}</div>` : ""}
        </div>
        <div class="space-y-2">
          <p class="font-body-md text-caption uppercase tracking-widest text-secondary">${product.category}</p>
          <h3 class="font-display-lg text-headline-md group-hover:text-primary transition-colors">
            <a href="./detail.html?id=${product.id}">${product.title}</a>
          </h3>
          <p class="font-body-md text-body-md text-on-surface-variant">${product.author}</p>
          <div class="flex items-center justify-between pt-2">
            <span class="font-display-lg text-headline-md text-primary">${formatCurrency(product.price)}</span>
            <div class="flex items-center text-primary">
              <span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
              <span class="ml-1 font-body-md text-label-md">${product.rating.toFixed(1)}</span>
            </div>
          </div>
          <button class="mt-3 border border-primary text-primary px-4 py-2 uppercase tracking-wider text-label-md hover:bg-primary hover:text-white transition-all" data-add-product="${product.id}" type="button">Add to Cart</button>
        </div>
      </article>
    `;
  }

  function renderListPage() {
    const container = document.querySelector("[data-product-grid]");
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const query = (params.get("q") || "").trim().toLowerCase();
    const genre = params.get("genre");
    const ratingFilter = params.get("rating") === "4.5";
    const sort = params.get("sort") || "newest";

    let products = PRODUCTS.filter((product) => {
      const matchesQuery = !query || `${product.title} ${product.author} ${product.category}`.toLowerCase().includes(query);
      const matchesGenre = !genre || product.category.toLowerCase() === genre.toLowerCase();
      const matchesRating = !ratingFilter || product.rating >= 4.5;
      return matchesQuery && matchesGenre && matchesRating;
    });

    if (sort === "price-desc") products.sort((a, b) => b.price - a.price);
    if (sort === "price-asc") products.sort((a, b) => a.price - b.price);
    if (sort === "rating-desc") products.sort((a, b) => b.rating - a.rating);

    container.innerHTML = products.map((product) => createListCard(product)).join("");

    container.querySelectorAll("[data-add-product]").forEach((button) => {
      button.addEventListener("click", () => {
        addToCart(button.dataset.addProduct, 1);
      });
    });

    document.querySelector("[data-sort-select]")?.addEventListener("change", (event) => {
      const next = new URLSearchParams(window.location.search);
      next.set("sort", event.target.value);
      window.location.search = next.toString();
    });

    document.querySelectorAll("[data-genre-option]").forEach((button) => {
      button.addEventListener("click", () => {
        const next = new URLSearchParams(window.location.search);
        next.set("genre", button.dataset.genreOption);
        window.location.search = next.toString();
      });
    });

    document.querySelector("[data-rating-filter]")?.addEventListener("change", (event) => {
      const next = new URLSearchParams(window.location.search);
      if (event.target.checked) {
        next.set("rating", "4.5");
      } else {
        next.delete("rating");
      }
      window.location.search = next.toString();
    });

    const sortSelect = document.querySelector("[data-sort-select]");
    if (sortSelect) sortSelect.value = sort;
    const ratingCheckbox = document.querySelector("[data-rating-filter]");
    if (ratingCheckbox) ratingCheckbox.checked = ratingFilter;
  }

  function bindDetailCards() {
    document.querySelectorAll("[data-open-detail]").forEach((card) => {
      card.addEventListener("click", (event) => {
        const interactive = event.target.closest("a, button");
        if (interactive) return;
        window.location.href = `./detail.html?id=${card.dataset.openDetail}`;
      });
    });
  }

  function renderDetailPage() {
    const titleNode = document.querySelector("[data-detail-title]");
    if (!titleNode) return;

    const params = new URLSearchParams(window.location.search);
    const product = getProduct(params.get("id")) || getProduct("architecture-of-silence");
    if (!product) return;

    document.title = `${product.title} | Lumina Books`;
    const image = document.querySelector("[data-detail-image]");
    if (image) {
      image.src = product.image;
      image.alt = product.title;
    }
    const setText = (selector, value) => {
      const node = document.querySelector(selector);
      if (node) node.textContent = value;
    };

    setText("[data-detail-title]", product.title);
    setText("[data-detail-author]", product.author);
    setText("[data-detail-price]", formatCurrency(product.price));
    setText("[data-detail-compare]", formatCurrency(product.compareAt));
    setText("[data-detail-description]", product.longDescription);
    setText("[data-detail-isbn]", product.isbn);
    setText("[data-detail-format]", product.format);
    setText("[data-detail-pages]", product.pages);
    setText("[data-detail-publisher]", product.publisher);
    setText("[data-detail-language]", product.language);

    const detailCopy = buildDetailCopy(product);
    setText("[data-detail-summary-one]", detailCopy.summaryOne);
    const secondSummary = document.querySelector("[data-detail-summary-two]") || document.querySelectorAll(".space-y-4.font-body-md.text-body-md.text-on-surface-variant.leading-relaxed p")[1];
    if (secondSummary) secondSummary.textContent = detailCopy.summaryTwo;
    setText("[data-detail-note]", detailCopy.note);

    const categoryLink = document.querySelector("[data-detail-category-link]");
    if (categoryLink) {
      categoryLink.textContent = product.category;
      categoryLink.setAttribute("href", "./list.html");
    }

    const addButton = document.querySelector("[data-add-to-cart]");
    if (addButton) {
      addButton.addEventListener("click", () => addToCart(product.id, 1));
    }

    const wishlistButton = document.querySelector("[data-add-to-wishlist]");
    if (wishlistButton) {
      wishlistButton.addEventListener("click", () => {
        addToWishlist(product.id);
        wishlistButton.textContent = "Saved to Wishlist";
      });
    }

    document.querySelector("[data-write-review]")?.addEventListener("click", () => {
      window.location.href = `mailto:reviews@luminabooks.example?subject=${encodeURIComponent(`Review request for ${product.title}`)}`;
    });

    const reviewGrid = document.querySelector("[data-detail-reviews]") || document.querySelector("[data-write-review]")?.parentElement?.nextElementSibling;
    if (reviewGrid) {
      reviewGrid.innerHTML = detailCopy.reviews.map((review) => `
        <div class="border border-outline-variant p-8 bg-surface-container-lowest">
          <div class="flex text-secondary mb-4">${Array.from({ length: 5 }, (_, index) => `<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' ${index < review.rating ? 1 : 0};">star</span>`).join("")}</div>
          <p class="font-headline-md text-body-lg mb-4 italic">"${review.quote}"</p>
          <p class="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">${review.body}</p>
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold">${review.name.charAt(0)}</div>
            <div>
              <p class="text-label-md font-bold">${review.name}</p>
              <p class="text-caption text-outline">${review.badge}</p>
            </div>
          </div>
        </div>
      `).join("");
    }

    const related = document.querySelector("[data-related-products]");
    if (related) {
      related.innerHTML = RELATED_IDS.map((id) => {
        const item = getProduct(id);
        return `
          <a class="group cursor-pointer" href="./detail.html?id=${item.id}">
            <div class="aspect-[3/4] bg-surface-container border border-outline-variant overflow-hidden mb-4 group-hover:shadow-lg transition-shadow duration-300">
              <img alt="${item.title}" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="${item.image}" />
            </div>
            <h3 class="font-headline-md text-body-lg mb-1 group-hover:text-primary transition-colors">${item.title}</h3>
            <p class="font-body-md text-label-md text-on-surface-variant uppercase tracking-wider mb-2">${item.author}</p>
            <p class="font-body-md text-label-md text-primary">${formatCurrency(item.price)}</p>
          </a>
        `;
      }).join("");
    }
  }

  function renderCartPage() {
    const container = document.querySelector("[data-cart-items]");
    if (!container) return;

    const items = cartItemsDetailed();
    if (items.length === 0) {
      container.innerHTML = `
        <div class="ambient-card bg-surface-container-lowest p-8">
          <h3 class="font-headline-md text-headline-md text-primary mb-3">Your cart is empty</h3>
          <p class="font-body-md text-body-md text-on-surface-variant mb-6">Browse the collection and add a few titles to continue.</p>
          <a class="inline-flex bg-primary text-white py-3 px-6 uppercase tracking-[0.2em] text-label-md" href="./list.html">Explore Collection</a>
        </div>
      `;
    } else {
      container.innerHTML = items.map(({ product, quantity }) => `
        <div class="ambient-card bg-surface-container-lowest p-6 flex flex-col md:flex-row gap-6">
          <a class="w-full md:w-32 aspect-[2/3] bg-surface-variant overflow-hidden shrink-0" href="./detail.html?id=${product.id}">
            <img alt="${product.title}" class="w-full h-full object-cover" src="${product.image}" />
          </a>
          <div class="flex-grow flex flex-col justify-between py-2">
            <div>
              <div class="flex justify-between items-start gap-4">
                <div>
                  <h3 class="font-headline-md text-headline-md text-primary"><a href="./detail.html?id=${product.id}">${product.title}</a></h3>
                  <p class="font-body-md text-label-md text-secondary uppercase tracking-widest mt-1">${product.author}</p>
                </div>
                <span class="font-headline-md text-headline-md text-primary">${formatCurrency(product.price * quantity)}</span>
              </div>
              <p class="font-body-md text-body-md text-on-surface-variant mt-4 line-clamp-2">${product.description}</p>
            </div>
            <div class="flex items-center justify-between mt-6 gap-4">
              <div class="flex items-center border border-outline-variant h-10 px-2 space-x-4">
                <button class="text-on-surface-variant hover:text-primary" data-qty-change="${product.id}" data-direction="-1" type="button"><span class="material-symbols-outlined" data-icon="remove">remove</span></button>
                <span class="font-label-md text-label-md min-w-[20px] text-center">${quantity}</span>
                <button class="text-on-surface-variant hover:text-primary" data-qty-change="${product.id}" data-direction="1" type="button"><span class="material-symbols-outlined" data-icon="add">add</span></button>
              </div>
              <button class="flex items-center gap-2 text-on-surface-variant hover:text-error transition-colors uppercase text-label-md tracking-widest" data-remove-item="${product.id}" type="button">
                <span class="material-symbols-outlined" data-icon="delete">delete</span>
                Remove
              </button>
            </div>
          </div>
        </div>
      `).join("");
    }

    container.querySelectorAll("[data-qty-change]").forEach((button) => {
      button.addEventListener("click", () => {
        const item = readCart().find((entry) => entry.id === button.dataset.qtyChange);
        if (!item) return;
        updateCartQuantity(button.dataset.qtyChange, item.quantity + Number(button.dataset.direction));
      });
    });

    container.querySelectorAll("[data-remove-item]").forEach((button) => {
      button.addEventListener("click", () => removeFromCart(button.dataset.removeItem));
    });

    const subtotal = cartSubtotal(items);
    const discount = getDiscountAmount(subtotal);
    const total = subtotal - discount + (items.length ? PACKAGING_FEE : 0);

    const itemCountNode = document.querySelector("[data-cart-item-count]");
    if (itemCountNode) itemCountNode.textContent = String(cartCount(readCart()));
    const subtotalNode = document.querySelector("[data-cart-subtotal]");
    if (subtotalNode) subtotalNode.textContent = formatCurrency(subtotal);
    const packagingNode = document.querySelector("[data-cart-packaging]");
    if (packagingNode) packagingNode.textContent = items.length ? formatCurrency(PACKAGING_FEE) : formatCurrency(0);
    const totalNode = document.querySelector("[data-cart-total]");
    if (totalNode) totalNode.textContent = formatCurrency(total);

    const promoButton = document.querySelector("[data-apply-promo]");
    const promoInput = document.querySelector("[data-promo-input]");
    const promoMessage = document.querySelector("[data-promo-message]");
    const promo = readPromo();
    if (promoMessage && promo) {
      promoMessage.textContent = `${promo.code} applied: ${promo.label}`;
    }
    if (promoButton) promoButton.onclick = () => {
      const promoValue = promoInput?.value || "";
      const nextPromo = getPromoDefinition(promoValue);
      if (!nextPromo) {
        if (promoMessage) promoMessage.textContent = "Promo code not recognized for this cart.";
        writePromo(null);
      } else {
        writePromo(nextPromo);
        if (promoMessage) promoMessage.textContent = `${nextPromo.code} applied: ${nextPromo.label}`;
      }
      renderCartPage();
      renderPaymentPage();
    };

    const checkoutButton = document.querySelector("[data-proceed-checkout]");
    if (checkoutButton) {
      checkoutButton.disabled = items.length === 0;
      checkoutButton.onclick = () => {
        if (items.length) window.location.href = "./payment.html";
      };
    }

    const walletButton = document.querySelector("[data-pay-wallet]");
    if (walletButton) walletButton.onclick = () => {
      if (items.length) window.location.href = "./payment.html?method=paypal";
    };
  }

  function renderPaymentPage() {
    const container = document.querySelector("[data-payment-items]");
    if (!container) return;

    const items = cartItemsDetailed();
    if (items.length === 0) {
      container.innerHTML = `
        <div class="border border-outline-variant p-6 bg-surface-container-low">
          <p class="font-body-md text-body-md text-on-surface-variant">No items in your order yet.</p>
          <a class="inline-block mt-4 text-primary uppercase tracking-widest text-label-md" href="./list.html">Back to collection</a>
        </div>
      `;
    } else {
      container.innerHTML = items.map(({ product, quantity }) => `
        <div class="flex gap-4">
          <img alt="${product.title}" class="w-20 h-28 object-cover border border-outline-variant" src="${product.image}" />
          <div class="flex-1">
            <p class="font-headline-md text-body-md text-primary leading-tight">${product.title}</p>
            <p class="font-caption text-caption text-on-secondary-container mt-1 uppercase tracking-widest">${product.author}</p>
            <div class="flex justify-between items-end mt-2">
              <span class="font-body-md text-label-md text-on-surface-variant">Qty: ${quantity}</span>
              <span class="font-headline-md text-body-md text-primary">${formatCurrency(product.price * quantity)}</span>
            </div>
          </div>
        </div>
      `).join("");
    }

    const subtotal = cartSubtotal(items);
    const discount = getDiscountAmount(subtotal);
    const discountedSubtotal = Math.max(0, subtotal - discount);
    const tax = discountedSubtotal * TAX_RATE;
    const total = discountedSubtotal + (items.length ? SHIPPING_FEE : 0) + tax;

    const setText = (selector, value) => {
      const node = document.querySelector(selector);
      if (node) node.textContent = value;
    };

    setText("[data-payment-subtotal]", formatCurrency(discountedSubtotal));
    setText("[data-payment-shipping]", formatCurrency(items.length ? SHIPPING_FEE : 0));
    setText("[data-payment-tax]", formatCurrency(tax));
    setText("[data-payment-total]", formatCurrency(total));

    const placeOrderButton = document.querySelector("[data-place-order]");
    if (placeOrderButton) {
      placeOrderButton.disabled = items.length === 0;
      placeOrderButton.onclick = () => {
        if (!items.length) return;
        writeCart([]);
        writePromo(null);
        updateCartBadges();
        window.location.href = "./index.html";
      };
    }

    const selectedMethod = new URLSearchParams(window.location.search).get("method") || "card";
    document.querySelectorAll("[data-payment-method]").forEach((button) => {
      const active = button.dataset.paymentMethod === selectedMethod;
      button.classList.toggle("bg-primary", active);
      button.classList.toggle("text-on-primary", active);
      button.classList.toggle("border-primary", active);
      button.classList.toggle("border-outline-variant", !active);
      button.onclick = () => {
        const next = new URLSearchParams(window.location.search);
        next.set("method", button.dataset.paymentMethod);
        window.location.search = next.toString();
      };
    });
  }

  function init() {
    sanitizeMojibake();
    //injectFooterIdentity();
    wirePlaceholderLinks();
    updateCartBadges();
    bindOpenCartButtons();
    bindSearchInputs();
    bindShareButtons();
    renderHomePage();
    renderListPage();
    bindDetailCards();
    renderDetailPage();
    renderCartPage();
    renderPaymentPage();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
