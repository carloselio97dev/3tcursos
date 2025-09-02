# 3T Cursos - Frontend

Aplicación web para 3T Cursos desarrollada con Next.js 15, TypeScript y Tailwind CSS.

## Estructura del Proyecto

```
frontend/
├── src/
│   ├── app/                    # Rutas y páginas (Next.js App Router)
│   ├── components/
│   │   ├── common/            # Componentes compartidos (Header, Footer)
│   │   ├── features/          # Componentes específicos de características
│   │   ├── layout/            # Componentes de diseño
│   │   └── ui/               # Componentes de UI reutilizables
│   ├── config/                # Configuraciones y constantes
│   ├── hooks/                 # Hooks personalizados de React
│   ├── lib/                   # Utilidades y funciones
│   ├── styles/                # Estilos globales y utilidades
│   ├── types/                 # Definiciones de TypeScript
│   └── utils/                 # Funciones utilitarias
├── public/                    # Archivos estáticos
└── package.json              # Dependencias y scripts
```

## Características

- 🚀 Next.js 15 con App Router
- 💎 TypeScript para mejor desarrollo
- 🎨 Tailwind CSS para estilos
- 📱 Diseño responsive
- ⚡ Optimización de rendimiento
- 🔍 SEO optimizado
- 🌙 Modo oscuro

## Requisitos Previos

- Node.js 18.17 o superior
- npm o yarn

## Instalación

1. Clonar el repositorio:
\`\`\`bash
git clone <repository-url>
cd frontend
\`\`\`

2. Instalar dependencias:
\`\`\`bash
npm install
# o
yarn install
\`\`\`

3. Crear archivo .env.local:
\`\`\`bash
cp .env.example .env.local
\`\`\`

4. Iniciar el servidor de desarrollo:
\`\`\`bash
npm run dev
# o
yarn dev
\`\`\`

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

## Scripts Disponibles

- \`npm run dev\`: Inicia el servidor de desarrollo
- \`npm run build\`: Construye la aplicación para producción
- \`npm run start\`: Inicia el servidor de producción
- \`npm run lint\`: Ejecuta el linter
- \`npm run test\`: Ejecuta las pruebas
- \`npm run type-check\`: Verifica los tipos de TypeScript

## Convenciones de Código

- Usar TypeScript estricto
- Seguir las convenciones de ESLint
- Nombres de componentes en PascalCase
- Nombres de funciones y variables en camelCase
- Usar tipos explícitos en TypeScript
- Documentar componentes y funciones importantes

## Despliegue

La aplicación está configurada para desplegarse en Vercel. Cada push a la rama main desencadena un nuevo despliegue.

## Contribuir

1. Crear una rama para la característica: \`git checkout -b feature/nombre-caracteristica\`
2. Hacer commit de los cambios: \`git commit -m 'Añadir nueva característica'\`
3. Hacer push a la rama: \`git push origin feature/nombre-caracteristica\`
4. Crear un Pull Request

## Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo LICENSE para más detalles.