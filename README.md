# beRichHub

**V.0.** **Flask App**

[beRich](https://coldbydefault070.pythonanywhere.com/)

**V.1.**

[![wakatime](https://wakatime.com/badge/user/c4621892-41e0-4c29-a8bc-05597d124f63/project/8021aafa-030b-41b9-9c31-71b1906659cd.svg)](https://wakatime.com/badge/user/c4621892-41e0-4c29-a8bc-05597d124f63/project/8021aafa-030b-41b9-9c31-71b1906659cd)

**V.2.**

[![wakatime](https://wakatime.com/badge/user/c4621892-41e0-4c29-a8bc-05597d124f63/project/79c9876c-acce-48e7-b661-264f4bf514a5.svg)](https://wakatime.com/badge/user/c4621892-41e0-4c29-a8bc-05597d124f63/project/79c9876c-acce-48e7-b661-264f4bf514a5)

**V.3.**

[![wakatime](https://wakatime.com/badge/user/c4621892-41e0-4c29-a8bc-05597d124f63/project/beb9337a-f033-4377-9e03-26f96c36a41a.svg)](https://wakatime.com/badge/user/c4621892-41e0-4c29-a8bc-05597d124f63/project/beb9337a-f033-4377-9e03-26f96c36a41a)


**V.4.** Removed

[![wakatime](https://wakatime.com/badge/user/c4621892-41e0-4c29-a8bc-05597d124f63/project/54a8cd7c-b451-4676-8695-4e701a4bda69.svg)](https://wakatime.com/badge/user/c4621892-41e0-4c29-a8bc-05597d124f63/project/54a8cd7c-b451-4676-8695-4e701a4bda69)

**Version 5.3.1** | **License:** LicenseRef-BRH-1.0 | **Website:** [berich-hub.org](https://berich-hub.vercel.app/)

BeRichHub is a comprehensive web platform designed for developers, offering AI-powered assistance, personalized learning roadmaps, user profiles with blogging capabilities, and curated resources. Built with modern web technologies, it provides a seamless experience across multiple languages and devices.

## ✨ Key Features

- 🤖 **AI-Powered Chat (beRich-LLM)** - Intelligent assistance powered by Google AI and OpenAI
- 👤 **User Profiles & Authentication** - Secure OAuth with Kinde, editable profiles with bios
- 📝 **Personal Blogging System** - Create, edit, and share your development journey
- 🗺️ **Interactive Developer Roadmaps** - Step-by-step learning paths for different technologies
- 🔍 **User Discovery** - Find and connect with other developers
- 🌍 **Multi-language Support** - Available in English, German, Spanish, and Swedish
- 🎨 **Dark/Light Theme** - Toggle between themes with system preference detection
- 📱 **Fully Responsive** - Optimized for all device sizes

## 🏗️ Tech Stack

### Core Technologies

- **Framework:** [Next.js 15](https://nextjs.org/) with App Router
- **Language:** [TypeScript 5](https://www.typescriptlang.org/)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Database:** [PostgreSQL](https://www.postgresql.org/) with [Prisma ORM](https://www.prisma.io/)
- **Authentication:** [Kinde Auth](https://kinde.com/)

### UI Components & Libraries

- **Component Library:** [shadcn/ui](https://ui.shadcn.com/) built on [Radix UI](https://www.radix-ui.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Forms:** [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) validation
- **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **AI Integration:** [Vercel AI SDK](https://sdk.vercel.ai/)
- **Internationalization:** [next-intl](https://next-intl-docs.vercel.app/)

## 📖 Documentation

### Complete Documentation Suite

- **[📚 Main Documentation](./DOCUMENTATION.md)** - Complete system overview, architecture, and features
- **[🔧 Development Guide](./docs/DEVELOPMENT.md)** - Setup, coding standards, and contribution guidelines
- **[🎨 Component Library](./docs/COMPONENTS.md)** - Detailed component documentation and usage examples
- **[🔌 API Documentation](./docs/API.md)** - RESTful API endpoints, authentication, and examples
- **[🗄️ Database Schema](./docs/DATABASE.md)** - Database design, relationships, and operations
- **[🚀 Deployment Guide](./docs/DEPLOYMENT.md)** - Production deployment instructions and best practices

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17+
- npm 9+
- PostgreSQL database (local or cloud)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/coldbydefault/berichhub.git
   cd berichhub
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment setup**

   ```bash
   cp .env.example .env.local
   ```

   Configure your `.env.local`:

   ```env
   DATABASE_URL="postgresql://user:password@host:port/database"
   KINDE_ISSUER_URL="https://your-domain.kinde.com"
   KINDE_MANAGEMENT_CLIENT_ID="your_client_id"
   KINDE_MANAGEMENT_CLIENT_SECRET="your_client_secret"
   ```

4. **Database setup**

   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
berichhub@latest/
├── app/                          # Next.js App Router
│   ├── (docs)/                   # Documentation pages
│   ├── (legals)/                 # Legal pages
│   ├── (protected)/              # Auth-protected routes
│   ├── api/                      # API endpoints
│   ├── berich-llm/              # AI chat interface
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── components/                   # React components
│   ├── ui/                      # shadcn/ui components
│   ├── chat-llm/               # AI chat components
│   ├── landing/                # Homepage components
│   ├── main/                   # Layout components
│   └── profile/                # User profile components
├── docs/                        # Documentation files
├── prisma/                      # Database schema & migrations
├── messages/                    # i18n translation files
├── lib/                         # Utilities and configurations
├── hooks/                       # Custom React hooks
├── actions/                     # Server actions
├── data/                        # Static data
└── public/                      # Static assets
```

## 🔨 Development Commands

```bash
# Development
npm run dev              # Start dev server with Turbopack
npm run build           # Build for production
npm run start           # Start production server
npm run lint            # Run ESLint

# Database
npx prisma studio       # Open database GUI
npx prisma migrate dev  # Create & apply migrations
npx prisma generate     # Generate Prisma client
```

## 🌟 Key Features Breakdown

### AI Chat Interface (beRich-LLM)

- Real-time chat with AI models (Google Gemini, OpenAI GPT)
- Chat history management with create, select, and delete
- Streaming responses for optimal user experience
- Sidebar navigation with organized conversations

### User Authentication & Profiles

- OAuth integration with Kinde for secure authentication
- Editable user profiles with bio support
- Avatar system with custom image support
- Role-based access control

### Blogging System

- Create, edit, and delete personal blog posts
- User-specific blog views and management
- Public profile pages with blog listings
- Real-time CRUD operations with optimistic updates

### Developer Roadmaps

- Interactive step-by-step learning paths
- Multiple development tracks (Web, Mobile, Backend)
- FAQ section with common questions
- Curated resource links and documentation

### Internationalization

- Support for 4 languages: English, German, Spanish, Swedish
- Dynamic language switching with URL-based routing
- Fully translated UI components and content
- Locale-aware formatting and content

## 🔒 Security Features

- **Authentication:** Secure OAuth flow with Kinde
- **Authorization:** Route-level protection for sensitive areas
- **Data Validation:** Input validation with Zod schemas
- **SQL Injection Protection:** Prisma ORM query building
- **XSS Prevention:** React's built-in protection mechanisms
- **CSRF Protection:** Next.js built-in CSRF protection

## 📈 Performance Optimizations

- **Turbopack:** Fast development builds
- **Image Optimization:** Next.js Image component with WebP/AVIF
- **Code Splitting:** Automatic route-based splitting
- **Database Indexing:** Optimized queries with proper indexes
- **Edge Caching:** Vercel Edge Network integration
- **Lazy Loading:** Dynamic imports for heavy components

## 🚀 Deployment

The application is optimized for deployment on [Vercel](https://vercel.com/):

1. Connect your repository to Vercel
2. Configure environment variables
3. Deploy automatically on every push

For detailed deployment instructions, see the [Deployment Guide](./docs/DEPLOYMENT.md).

## 🤝 Contributing

We welcome contributions! Please see our [Development Guide](./docs/DEVELOPMENT.md) for:

- Setup instructions
- Coding standards
- Commit conventions
- Pull request process

## 📄 License

BeRichHub is open source and distributed under the terms of the [LicenseRef-BRH-1.0](LICENSE).

## 🔗 Links

- **Website:** [berich-hub.org](https://berich-hub.vercel.app/)
- **Documentation:** [Complete Docs](./DOCUMENTATION.md)
- **API Reference:** [API Docs](./docs/API.md)
- **Component Library:** [Component Docs](./docs/COMPONENTS.md)

---

**Built with ❤️ by ColdByDefault**
