# The build order — this is important
We build in this exact sequence. Each step is deployable and showable.
* Phase 1 — Foundation (Days 1–3)
Set up the project, folder structure, Tailwind with your design tokens, routing skeleton, Firebase connected. Nothing visible yet, but the bones are right.
* Phase 2 — Product Browsing (Days 4–8)
Firestore seeded with products, Homepage, Category page, Search — all pulling real data. This is your first "it's alive" moment.
* Phase 3 — Cart + Lead Capture (Days 9–13)
Zustand cart store, Cart page, Phone capture popup, localStorage sync.
* Phase 4 — Checkout + Orders (Days 14–18)
Checkout form with React Hook Form, order saved to Firestore, success state.
* Phase 5 — Polish + Deploy (Days 19–21)
Vercel deployment, custom domain, performance basics, README for your portfolio.

# Folder Structure:
src/
├── components/        # Reusable UI pieces (Button, ProductCard, etc.)
│   ├── ui/            # Generic: Button, Badge, Toast
│   └── layout/        # Header, Sidebar, BottomNav
├── pages/             # One file per route (HomePage, SearchPage, etc.)
├── store/             # Zustand stores (cartStore, uiStore)
├── lib/               # Firebase config, utility functions
├── types/             # TypeScript type definitions
├── hooks/             # Custom React hooks
└── assets/            # Images, SVGs


# Data Modelling
products/
  motor-100w-universal/
    name: "Motor 100W Standard"
    brand: "Universal"
    price: 899
    mrp: 1099
    discount: 18
    category: "motors"
    inStock: true
    description: "..."
    createdAt: timestamp
  
# How to solve errors without my help — the process
This is the process every senior developer follows. Internalize it.
* Step 1 — Read the error completely
Don't panic at the red text. Read it word by word. The error message almost always tells you exactly what's wrong.
* Step 2 — Identify what type of error it is
Is it a TypeScript error? A runtime error? A network error? A Firebase error? The source tells you where to look.
* Step 3 — Google the exact error message
Copy the exact error text and search it. Add the technology name — so "Firebase Missing or insufficient permissions". The first few results will almost always have your answer.
* Step 4 — Check the official docs first
Before Stack Overflow, check the official documentation. Firebase errors especially are well documented.
* Step 5 — Understand the fix before applying it
Don't copy a solution you don't understand. If you don't understand it, you'll hit the same problem again in a different form.

# The order we build in
Design tokens (already done)
       ↓
Reusable UI components (Button, Badge)
       ↓
Layout components (Sidebar, Header, BottomNav)
       ↓
ProductCard component
       ↓
HomePage wired with real data
       ↓
CategoryPage
       ↓
SearchPage


# git 003
Quick review of what you've built
Let's acknowledge what's actually working right now:

Firestore → useProducts hook → HomePage → ProductCard — the full data pipeline
TypeScript types enforcing the contract at every step
Props flowing correctly from page to component
Separation of concerns — hook fetches, page orchestrates, component displays
Error and loading states handled