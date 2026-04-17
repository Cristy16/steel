Steel-Design-App/
│
├── index.html
│
├── pages/
│   ├── axial-tension.html
│   ├── axial-compression.html
│   ├── bending-members.html
│   ├── shear-strength.html
│   ├── combined-loading.html
│   └── connections.html
│
├── pages/
│   ├── analysis/
│   │   ├── axial-tension-analysis.html
│   │   ├── axial-compression-analysis.html
│   │   ├── bending-analysis.html
│   │   ├── shear-analysis.html
│   │   ├── combined-analysis.html
│   │   └── connections-analysis.html
│   │
│   └── design/
│       ├── axial-tension-design.html
│       ├── axial-compression-design.html
│       ├── bending-design.html
│       ├── shear-design.html
│       ├── combined-design.html
│       └── connections-design.html
│
├── css/
│   └── styles.css
│
├── js/
│   ├── core/
│   │   ├── main.js              # CSV Parser (PapaParse)
│   │   ├── navigation.js        # Page transitions
│   │   └── utils.js             # Shared helpers (optional but recommended)
│   │
│   └── calculations/
│       ├── analysis/
│       │   ├── axial-tension-analysis.js
│       │   ├── axial-compression-analysis.js
│       │   ├── bending-analysis.js
│       │   ├── shear-analysis.js
│       │   ├── combined-analysis.js
│       │   └── connections-analysis.js
│       │
│       └── design/
│           ├── axial-tension-design.js
│           ├── axial-compression-design.js
│           ├── bending-design.js
│           ├── shear-design.js
│           ├── combined-design.js
│           └── connections-design.js
│
├── data/
│   └── aisc-shapes-database-v160-2.csv
