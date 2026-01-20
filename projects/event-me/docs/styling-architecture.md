## Styling Architecture

This project uses a 3-layer/rings styling model inspired by design tokens, theming systems, and application-level composition.

### The 3 Rings

1. **Design Tokens (Ring 1)**  
   Global constants for spacing, layout, typography, and z-index.

2. **Theme System (Ring 2)**  
   PrimeNG theme controls component visuals, colors, and interaction states.

3. **App Composition (Ring 3)**  
   Pages are composed using layout utilities and reusable UI primitives.

### Key Principles

- PrimeNG owns colors and component styling
- Tailwind is used for layout and spacing only
- Global values are defined once via variables
- Repeated patterns are extracted into UI primitives
