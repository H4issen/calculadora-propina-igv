# Calculadora de Precio y Consumo

Aplicación web interactiva para calcular el total de un pedido con **IGV (18%) incluido**, ideal para restaurantes, bares y negocios de comida en Perú.

Construida con **React + TypeScript + Vite + Tailwind CSS**.

## Funcionalidad

- Menú de productos con precios en soles (PEN)
- Agrega productos al pedido con un clic
- Si el producto ya está en la orden, aumenta la cantidad automáticamente
- Elimina productos individualmente
- Cálculo automático del total con **IGV (18%)** sobre cada item
- Formato de moneda en soles peruanos (`S/`)

## Captura

┌─────────────────────────┐  ┌──────────────────────┐
│         Menú            │  │      Tu Pedido       │
│                         │  │                      │
│ Pizza a la Leña Chica   │  │ Pizza Mediana x2     │
│ S/30.00  Agregar      │  │ S/100.00             │
│                         │  │ Jugo Naranja x1      │
│ Rib Eye 800g            │  │ S/15.00              │
│ S/100.00 Agregar      │  │                      │
│                         │  │ Total: S/135.70      │
│ ...                     │  │ (incluye IGV 18%)    │
└─────────────────────────┘  └──────────────────────┘

## Stack

| Tecnología   | Uso                    |
|--------------|------------------------|
| React 18     | UI                     |
| TypeScript   | Tipado seguro          |
| Vite         | Build tool             |
| Tailwind CSS | Estilos                |
| gh-pages     | Deploy a GitHub Pages  |

## Instalación

```bash
npm install
npm run dev
Deploy
npm run deploy
Estructura
src/
├── components/
│   ├── menuItem.tsx        → Item individual del menú
│   ├── orderContents.tsx   → Lista del pedido actual
│   └── orderTotals.tsx     → Cálculo del total con IGV
├── data/
│   └── db.ts               → Datos del menú
├── helpers/
│   └── index.ts            → Formateo de moneda
├── hooks/
│   └── useOrder.ts         → Lógica del pedido (estado)
└── types/
    └── index.ts            → Tipos TypeScript
