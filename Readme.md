Steel-Design-App/
│
├── index.html                          # Main Landing Page (Metallic Dashboard)
│
├── pages/                              # Selection Pages (Tension, Bending, etc.)
│   ├── axial-tension.html
│   ├── axial-compression.html
│   ├── bending-members.html
│   ├── shear-strength.html
│   ├── combined-loading.html
│   └── connections.html
│
├── pages/analysis/                     # Specific Analysis Calculators
│   ├── axial-tension-analysis.html
│   ├── axial-compression-analysis.html
│   ├── bending-analysis.html
│   ├── shear-analysis.html
│   ├── combined-analysis.html
│   └── connections-analysis.html
│
├── pages/design/                       # Specific Design Calculators
│   ├── axial-tension-design.html
│   ├── axial-compression-design.html
│   ├── bending-design.html
│   ├── shear-design.html
│   ├── combined-design.html
│   └── connections-design.html
│
├── css/
│   └── styles.css                      # Global Dashboard & metallic theme
│
├── js/
│   ├── main.js                         # CSV Parser initialization (PapaParse)
│   ├── navigation.js                   # Handles transitions between pages
│   └── calculations/                   # Engineering Logic modules
│       ├── axialTension.js
│       ├── axialCompression.js
│       ├── bending.js
│       ├── shear.js
│       ├── combined.js
│       └── connections.js
│
└── data/
    └── aisc-shapes-database-v160-2.csv  # Your uploaded CSV database