# twindx

**twindx** adalah utilitas kecil untuk mengubah struktur objek bergaya SCSS dan class Tailwind menjadi CSS bersih, responsif, dan terstruktur. Dibangun di atas [Twind](https://twind.dev), library ini cocok untuk kamu yang suka menulis style dengan struktur nested yang rapi.

[![npm version](https://badge.fury.io/js/twindx.svg)](https://www.npmjs.com/package/twindx)  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## ✨ Fitur

- ✅ Dukungan struktur SCSS-like dengan selector bertingkat  
- ✅ Mendukung responsive dan pseudo-class (`hover:`, `md:`, dsb)  
- ✅ Output CSS rapi dan bisa langsung digunakan  
- ✅ Menggunakan Twind sebagai compiler Tailwind  

---

## 📦 Instalasi

```bash
npm install twindx
```
## 🚀 Penggunaan Dasar

```bash
const twindx = require('twindx');

const css = twindx({
  '.btn': ['bg-blue-500 text-white px-4 py-2 rounded', {
    '&:hover': 'bg-blue-600',
    '&.primary': ['font-bold', {
      '&:hover': 'bg-blue-700',
    }],
  }],
});

console.log(css);
```

## Output:
```
.btn {
  background-color: #3b82f6;
  color: #fff;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 0.25rem;
}

.btn:hover {
  background-color: #2563eb;
}

.btn.primary {
  font-weight: 700;
}

.btn.primary:hover {
  background-color: #1d4ed8;
}
```
## 📘 API

Parameter:

object: Struktur SCSS-like dengan class Tailwind (string atau array).

Return:

string: CSS hasil kompilasi.

## 💡 Tips
Gunakan ```&``` untuk menyisipkan parent selector (```&:hover```, ```&.active```, dll).