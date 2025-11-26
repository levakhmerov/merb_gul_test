# MERBAU GULIVER Website

A modern, professional website for the merged real estate management company MERBAU GULIVER.

## Project Structure

```
merbau-guliver-website/
│
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── README.md           # This file
│
└── images/             # Image directory (create this folder)
    ├── logo.png        # Company logo
    ├── hero-background.jpg  # Hero section background
    ├── about-office.jpg     # About section image
    │
    ├── team/           # Team member photos
    │   ├── team-1.jpg  # Lilo Stitch photo
    │   ├── team-2.jpg  # Mickey Mouse photo
    │   ├── team-3.jpg  # Donald Duck photo
    │   ├── team-4.jpg  # Minnie Mouse photo
    │   ├── team-5.jpg  # Buzz Lightyear photo
    │   ├── team-6.jpg  # Woody Pride photo
    │   └── placeholder.jpg  # Fallback image
    │
    └── icons/          # Service icons (optional)
        ├── building.svg
        ├── apartment.svg
        ├── sale.svg
        ├── portfolio.svg
        ├── consulting.svg
        └── digital.svg
```

## Setup Instructions

### 1. Local Development

1. Create a new folder on your computer called `merbau-guliver-website`
2. Place all three files (`index.html`, `styles.css`, `script.js`) in this folder
3. Create an `images` folder with the structure shown above
4. Add your images to the appropriate folders:
   - Company logo as `logo.png`
   - Hero background image as `hero-background.jpg`
   - Office photo as `about-office.jpg`
   - Team photos in the `team` folder

### 2. Adding Your Images

The website is set up to use local images. Simply place your images in the correct folders:

- **Logo**: Save as `images/logo.png` (recommended size: 200x80px)
- **Hero Background**: Save as `images/hero-background.jpg` (recommended: 1920x1080px minimum)
- **Team Photos**: Save in `images/team/` folder (recommended: 400x400px square images)
- **About Section**: Save as `images/about-office.jpg` (recommended: 800x600px minimum)

If an image is missing, the website will show a placeholder or fallback gracefully.

### 3. GitHub Setup

1. Create a new repository on GitHub
2. Initialize git in your local folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - MERBAU GULIVER website"
   ```

3. Connect to GitHub:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/merbau-guliver-website.git
   git branch -M main
   git push -u origin main
   ```

### 4. Deployment Options

#### Option A: GitHub Pages (Free)
1. Go to your repository Settings
2. Navigate to Pages section
3. Select "Deploy from a branch"
4. Choose `main` branch and `/root` folder
5. Save and wait for deployment
6. Your site will be available at: `https://YOUR_USERNAME.github.io/merbau-guliver-website/`

#### Option B: Netlify (Recommended for demo)
1. Go to [Netlify](https://www.netlify.com)
2. Drag and drop your entire project folder
3. Get instant URL for your demo
4. Can connect to GitHub for automatic updates

#### Option C: Vercel
1. Sign up at [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Deploy with one click
4. Automatic deployments on every push

## Customization

### Colors
All colors are defined in CSS variables in `styles.css`. Main colors:
- Dark Blue-Gray: `#1a2332` (from MERBAU)
- Red Accent: `#c41e3a` (from GULIVER)
- Secondary Gray: `#4a5568`

### Fonts
Using Google Fonts:
- Headings: Merriweather (serif)
- Body: Inter (sans-serif)

### Content
All text content is in `index.html` and can be easily edited.

## Browser Support

The website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Features

- ✅ Fully responsive design
- ✅ Smooth scrolling navigation
- ✅ Mobile hamburger menu
- ✅ Contact form (frontend only)
- ✅ Animated statistics counters
- ✅ Scroll animations
- ✅ Image fallbacks
- ✅ Professional design with MERBAU dark theme and GULIVER red accents

## Contact Form

The contact form currently only shows an alert. To make it functional, you'll need to:
1. Set up a backend service (e.g., Formspree, EmailJS, or custom backend)
2. Update the form submission handler in `script.js`

## Notes

- All images are referenced locally from the `images/` folder
- The site gracefully handles missing images with placeholders
- Team member names are intentionally fictional (Disney characters)
- Form submission requires backend integration for full functionality

## License

© 2024 MERBAU GULIVER AG. All rights reserved.
