---
name: Executive Intelligence Interface
colors:
  surface: '#fbf8ff'
  surface-dim: '#d9d9e7'
  surface-bright: '#fbf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f2ff'
  surface-container: '#ededfb'
  surface-container-high: '#e7e7f5'
  surface-container-highest: '#e1e1ef'
  on-surface: '#191b25'
  on-surface-variant: '#434656'
  inverse-surface: '#2e303a'
  inverse-on-surface: '#f0effe'
  outline: '#737688'
  outline-variant: '#c3c5d9'
  surface-tint: '#004ced'
  primary: '#003ec7'
  on-primary: '#ffffff'
  primary-container: '#0052ff'
  on-primary-container: '#dfe3ff'
  inverse-primary: '#b7c4ff'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#952200'
  on-tertiary: '#ffffff'
  tertiary-container: '#bf3003'
  on-tertiary-container: '#ffddd5'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001452'
  on-primary-fixed-variant: '#0038b6'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#ffdbd2'
  tertiary-fixed-dim: '#ffb4a1'
  on-tertiary-fixed: '#3c0800'
  on-tertiary-fixed-variant: '#891e00'
  background: '#fbf8ff'
  on-background: '#191b25'
  surface-variant: '#e1e1ef'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  mono-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  container-max: 1440px
  gutter: 20px
---

## Brand & Style
The design system is engineered for the high-stakes environment of corporate finance and executive leadership. It prioritizes clarity, speed of cognition, and professional authority. The aesthetic is a fusion of **Modern Corporate** and **Minimalism**, stripping away decorative elements to focus entirely on data integrity and actionable insights.

The interface evokes a sense of "Calm Precision." By utilizing a high-density layout similar to modern developer tools, it allows CFOs to scan vast amounts of news and market data without cognitive overload. The emotional response is one of reliability and controlled urgency—essential for a news intelligence platform where timing is a competitive advantage.

## Colors
The palette is anchored by a high-performance **Primary Blue (#0052FF)**, used exclusively for primary actions, focus states, and key data indicators. The background uses a soft, cool gray **(#F7F8FA)** to reduce eye strain during prolonged analysis sessions, while pure white **(#FFFFFF)** surfaces create a clear "layering" effect for content containers.

Semantic colors (Success, Warning, Danger) are desaturated slightly to remain professional but retain enough vibrance to signal market shifts or sentiment changes instantly. Neutral grays follow a strict scale to define hierarchy in metadata and secondary text.

## Typography
**Inter** is the sole typeface for the design system, chosen for its exceptional legibility in data-heavy environments and its neutral, systematic tone. 

- **Headlines:** Use Semi-Bold (600) weights with slight negative letter-spacing to provide a modern, "tight" editorial feel.
- **Body Text:** The standard reading size is 14px, optimized for high-density information layouts.
- **Labels:** Small caps or all-caps 12px Medium (500) text is used for table headers and category labels to differentiate them from actionable content.
- **Numerical Data:** For tickers or financial figures, a monospaced font (JetBrains Mono) may be used within the Inter framework to ensure tabular alignment.

## Layout & Spacing
This design system utilizes a **Hybrid Fixed-Fluid Grid**. The sidebar and navigation remain fixed to ensure constant utility, while the main content area expands to a maximum of 1440px to prevent line lengths from becoming unreadable on ultra-wide monitors.

A strict **4px baseline grid** governs all spacing. 
- **Information Density:** High. Use 16px padding for standard cards and 8-12px for list items and table rows.
- **Margins:** 32px external page margins for desktop, scaling down to 16px for mobile.
- **Grouping:** Use 8px (sm) for related elements (e.g., icon + text) and 24px (lg) to separate distinct content blocks.

## Elevation & Depth
Depth is achieved through **Tonal Layering** and **Ambient Shadows**. 

1. **Floor:** The background (#F7F8FA) acts as the base canvas.
2. **Surface:** White cards (#FFFFFF) sit atop the floor with a very subtle, diffused shadow: `0 1px 3px rgba(0,0,0,0.05)`.
3. **Interactive:** On hover, cards transition to a slightly higher elevation with a more pronounced shadow: `0 10px 15px -3px rgba(0,0,0,0.08)`.
4. **Overlays:** Modals and dropdowns use a sharp 1px border (#E2E8F0) combined with a deep shadow to separate them from the interface layers.

Avoid heavy blurs; maintain crisp edges to reinforce the "professional tool" aesthetic.

## Shapes
The shape language is refined and approachable. A **0.5rem (8px)** base radius is the standard for cards and larger containers. Buttons and input fields use a **0.375rem (6px)** radius to feel slightly more precise.

Pills and status badges utilize a fully rounded (9999px) radius to distinguish them from structural components. All borders are thin (1px) and use a light neutral tint (#E2E8F0) to maintain a clean, high-end feel.

## Components
- **KPI Cards:** Large-format numbers with trend indicators (up/down arrows in Success/Danger colors). Minimal sparklines should be integrated to show 24h volatility.
- **Data Tables:** Highly condensed with 12px body text. Use alternating row highlights or subtle borders. Header cells should have a slight gray background to anchor the columns.
- **Buttons:** 
  - *Primary:* Solid Blue (#0052FF) with white text. 
  - *Secondary:* White background with a gray border.
  - *Ghost:* No background, blue or gray text, used for secondary actions to reduce visual noise.
- **Pills/Chips:** Used for "Sentiment" (Positive, Neutral, Negative). Low-opacity color fills with high-contrast text.
- **Sidebar:** Darker neutral or pure white with a vertical border. Active states are indicated with a 2px blue "left-edge" line and a subtle background tint.
- **Skeleton Loaders:** Soft gray pulses that match the exact shape of the cards and text blocks to prevent layout shift during news ingestion.