# Implementação de Animações GSAP e Cores Corporativas

## 📋 Resumo das Alterações

### 🎨 Paleta de Cores Implementada
- **Primária:** `#00253f` (azul escuro)
- **Primária Média:** `#394b96` (azul médio)  
- **Destaque:** `#b2c761` (verde limão)
- **Secundária:** `#74a1b7` (azul claro)
- **Secundária Clara:** `#9ac8d8` (azul muito claro)
- **Cinza:** `#444243`

### 🚀 Animações GSAP Implementadas

#### 1. **Hook Personalizado:** `useGSAPAnimation`
- Localização: `/src/hooks/useGSAPAnimation.ts`
- Fornece animações pré-configuradas:
  - `fadeInUp`: Elementos surgem de baixo para cima
  - `fadeInScale`: Elementos surgem com escala
  - `slideInLeft`: Deslizam da esquerda
  - `slideInRight`: Deslizam da direita
  - `staggerChildren`: Animação sequencial de elementos filhos

#### 2. **Componente GSAPAnimatedSection**
- Localização: `/src/components/ui/GSAPAnimatedSection.tsx`
- Wrapper reutilizável para seções animadas
- Suporta ScrollTrigger para animações ao scroll
- Opções de animação personalizáveis

#### 3. **Animações na HomePage**
- **Hero Section:** 
  - Título com letras animadas individualmente (stagger effect)
  - Livro flutuante com rotação contínua
  - Botão CTA com pulsação
  
- **Seções com ScrollTrigger:**
  - Fade in ao aparecer na tela
  - Parallax nos elementos de fundo
  - Contadores animados para estatísticas

### 📦 Dependências Adicionadas
```json
"gsap": "^3.12.5",
"@gsap/react": "^2.1.1"
```

### 🛠️ Como Usar

1. **Instalar dependências:**
```bash
npm install
```

2. **Executar o projeto:**
```bash
npm run dev
```

3. **Build para produção:**
```bash
npm run build
```

### ✨ Recursos de Animação

- **ScrollTrigger:** Animações ativadas conforme o usuário rola a página
- **Stagger Effects:** Elementos aparecem sequencialmente
- **Parallax:** Elementos de fundo movem-se em velocidades diferentes
- **Hover Effects:** Interações ao passar o mouse
- **Performance Otimizada:** Usando `useLayoutEffect` e cleanup adequado

### 🔧 Personalização

Para ajustar animações, edite:
1. `/src/hooks/useGSAPAnimation.ts` - Para criar novos presets
2. `/src/components/ui/GSAPAnimatedSection.tsx` - Para adicionar novos tipos de animação
3. `/src/components/HomePageClient.tsx` - Para ajustar animações específicas da página

### 📝 Notas Importantes

- Todas as animações respeitam `prefers-reduced-motion`
- ScrollTrigger é registrado apenas no cliente (verificação `typeof window`)
- Cleanup adequado para evitar memory leaks
- Cores aplicadas consistentemente em todo o site
