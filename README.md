# Calculadora de Precio y Consumo — Con IGV incluido

¿Sigues calculando precios con IGV en una calculadora de mano o en tu cabeza? Esta app web te permite armar pedidos y ver el total con **IGV (18%)** al instante, sin errores ni aproximaciones.

## ¿Qué hace?

Selecciona productos del menú, la app arma la cuenta y te muestra el **total final con IGV incluido**. Si agregas el mismo producto dos veces, se acumula la cantidad. Todo en tiempo real.

## ¿Qué problemas resuelve?

| Sin esta app                           | Con esta app                          |
|----------------------------------------|---------------------------------------|
| Calculas IGV manual = errores y pérdidas | El IGV se aplica automáticamente     |
| Tardas en darle el total al cliente    | El total aparece al instante          |
| No tienes un registro digital del pedido | Cada orden queda registrada mientras la armas |
| Dependes de POS costosos o complejos   | Funciona en cualquier navegador, sin instalar nada |

## Posibles mejoras futuras

- Catálogo de productos editable desde un panel
- Múltiples mesas o pedidos simultáneos
- Generación de boleta o factura electrónica
- Sincronización con base de datos para persistencia
- Modo oscuro y personalización de colores
- Exportar pedido a PDF o WhatsApp

## Stack técnico

React + TypeScript + Vite + Tailwind CSS. Desplegable en GitHub Pages con un solo comando.

```bash
npm install
npm run dev      # desarrollo
npm run deploy   # publicar
