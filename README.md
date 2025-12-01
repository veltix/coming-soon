# Coming Soon

A beautiful terminal-style coming soon page built with Laravel, React, and Inertia.js featuring a live countdown timer and smooth animations.

![Laravel](https://img.shields.io/badge/Laravel-v12-FF2D20?style=flat&logo=laravel)
![React](https://img.shields.io/badge/React-v19-61DAFB?style=flat&logo=react)
![Inertia](https://img.shields.io/badge/Inertia-v2-9553E9?style=flat)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=flat&logo=tailwindcss)

## Features

- **Terminal-Style Design**: Authentic macOS terminal window with traffic light buttons
- **Live Countdown Timer**: 30-day countdown with real-time updates showing days, hours, minutes, and seconds
- **Beautiful Animations**:
    - Smooth fade-in and slide-in effects
    - Blinking terminal cursor
    - Pulsing status indicators
    - Floating background gradients
    - Animated progress bar
    - Interactive hover effects
- **Dark & Light Mode**: Full theme support that respects system preferences
- **Fully Responsive**: Works beautifully on all devices from mobile to desktop
- **Modern Stack**: Built with the latest versions of Laravel 12, React 19, and Tailwind CSS 4

## Tech Stack

- **Backend**: Laravel 12 (PHP 8.4)
- **Frontend**: React 19 with TypeScript
- **Routing**: Inertia.js v2
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite 7
- **Font**: JetBrains Mono (terminal aesthetic)

## Installation

### Prerequisites

- PHP 8.4 or higher
- Composer
- Node.js 18+ and npm
- MySQL, PostgreSQL, or SQLite

### Setup

1. Clone the repository:

```bash
git clone https://github.com/veltix/coming-soon.git
cd coming-soon
```

2. Install PHP dependencies:

```bash
composer install
```

3. Install JavaScript dependencies:

```bash
npm install
```

4. Create a copy of the environment file:

```bash
cp .env.example .env
```

5. Generate application key:

```bash
php artisan key:generate
```

6. Configure your database in `.env` file

7. Run migrations:

```bash
php artisan migrate
```

8. Build assets:

```bash
npm run build
```

## Development

To run the development server:

```bash
# Start the Laravel development server
php artisan serve

# In a separate terminal, start Vite dev server
npm run dev
```

Visit `http://localhost:8000` to view the application.

## Building for Production

```bash
npm run build
```

This will compile and minify all assets for production deployment.

## Project Structure

```
coming-soon/
├── app/
│   └── Providers/
│       └── AppServiceProvider.php
├── resources/
│   ├── css/
│   │   └── app.css              # Tailwind config and custom animations
│   └── js/
│       ├── components/
│       │   └── ui/              # Reusable UI components
│       ├── hooks/
│       │   └── use-appearance.tsx
│       ├── pages/
│       │   └── welcome.tsx      # Main coming soon page
│       └── app.tsx
├── routes/
│   └── web.php                  # Single route serving the coming soon page
└── public/
    └── build/                   # Compiled assets
```

## Customization

### Changing the Countdown Duration

Edit the timer calculation in `resources/js/pages/welcome.tsx`:

```tsx
// Change this line to adjust the countdown duration
targetDate.setDate(targetDate.getDate() + 30); // Currently 30 days
```

### Customizing Colors

The terminal theme uses Tailwind CSS. You can customize colors in `resources/css/app.css` or directly in the component classes.

### Modifying Text Content

Edit the text content in `resources/js/pages/welcome.tsx`:

```tsx
<h1 className="...">COMING SOON</h1>
<p className="...">We're building something amazing</p>
```

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run format` - Format code with Prettier
- `npm run lint` - Lint and fix code with ESLint
- `npm run types` - Type check TypeScript files

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## Credits

Built with:

- [Laravel](https://laravel.com)
- [React](https://react.dev)
- [Inertia.js](https://inertiajs.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite](https://vitejs.dev)
