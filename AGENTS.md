# AGENTS.md — Governança e Diretrizes do Projeto: Birras Sem Stress

> **Missão:** Manter a consistência estética, de copywriting e de alta performance da landing page do produto **Elimine as Birras Sem Stress** (Instituto Tiago Fernandes), governada pela metodologia *Sites com IA*.

---

## 🎨 1. Design Tokens & Identidade Visual

- **Framework:** Astro (HTML estático puro, zero JS desnecessário, 100/100 Core Web Vitals).
- **Tipografia:**
  - *Headings:* `Outfit`, `Plus Jakarta Sans` (pesos 600, 700, 800)
  - *Body:* `Inter` (pesos 400, 500, 600)
- **Paleta de Cores:**
  - *Background:* `#FAF9F6` (Tom quente acolhedor) / `#FFFFFF` (Cards)
  - *Primária / Títulos:* `#0F172A` (Navy / Slate Profundo)
  - *Marca & Acento:* `#0284C7` (Azul Oceano) / `#F59E0B` (Âmbar / Estrelas)
  - *Conversão (CTA):* `#10B981` (Esmeralda com efeito Shimmer)
  - *Dores / Alertas:* `#FEF2F2` / `#991B1B`
- **Efeitos de Conversão:**
  - Shimmer contínuo no botão principal (`.btn-cta::after`).
  - Cards com elevação suave no hover (`translateY(-3px)` + sombra suave).
  - Player de áudio customizado nativo para depoimentos de alunas.

---

## 🏛️ 2. Regras de Governança (Templates-First)

1. **Catálogo de Componentes:** Todas as seções e componentes modulares devem ser mantidos e inspecionados em `/templates` (`src/pages/templates.astro`).
2. **Edite o Componente, Não a Página:** Toda alteração de design, texto estrutural ou estilo deve ser feita no arquivo `.astro` do componente dentro de `src/components/`.
3. **Copywriting Neurocientífico:**
   - Promessa clara: *Eliminar birras em menos de 5 minutos sem gritar, bater ou castigar.*
   - Mecanismo único: *Método do Redirecionamento Cognitivo*.
   - Oferta: R$ 47,00 à vista ou 12x de R$ 4,72 (Âncora de R$ 197 / Bônus somando R$ 191).
   - Garantia: 7 dias incondicional.

---

## 🚀 3. Comandos do Projeto

- **Servidor Local de Desenvolvimento:** `npm run dev` (porta 4321)
- **Build de Produção:** `npm run build`
- **Preview de Build:** `npm run preview`
- **Deploy:** Integrado ao Cloudflare Pages via GitHub repository.
