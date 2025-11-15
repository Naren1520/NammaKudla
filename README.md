# Namma Kudla 🌊

A beautiful and interactive travel guide website for Mangalore (Kudla), Karnataka, India. Discover the coastal beauty, cultural heritage, and culinary delights of this vibrant city.

**Live Repository:** [github.com/Naren1520/NammaKudla](https://github.com/Naren1520/NammaKudla)

## 🌟 Features

### 📱 Core Sections
- **Hero Section** - Stunning background with call-to-action
- **About Namma Kudla** - Introduction with statistics and glassmorphism design
- **Featured Stories** - Curated travel posts with local images
- **Blog Section** - Latest blog posts with category filtering (Beaches, Temples, Food, Culture)
- **Explore Destinations** - Interactive map with 6 major destinations
- **Meet Expert Guides** - Professional guides specializing in different experiences
- **Contact Section** - Direct messaging to narensonu1520@gmail.com
- **Newsletter** - Email subscription for travel tips

### 🎨 Design Features
- **Glassmorphism Effect** - Modern glass-like UI on the About section
- **Responsive Design** - Mobile-friendly layout for all devices
- **Smooth Animations** - Fade-in, slide-up, and scroll reveal effects
- **Color-coded Categories** - Visual distinction for different content types
- **Interactive Elements** - Hover effects and transitions throughout

### 🗺️ Special Features
- **Floating Maps Popup** - Embedded Google Maps of Mangaluru
- **AI Chat Assistant** - Interactive travel assistant for Mangalore information
- **Destination Modal** - Detailed view with galleries for each location
- **Local Images** - All featured posts and destinations use local image files
- **Contact Form** - Automatic mailto integration for inquiries

### 📄 Legal Pages
- **Privacy Policy** - Data protection and privacy practices
- **Terms of Service** - Website usage terms and conditions
- **Cookie Policy** - Cookie usage and management guide

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with flexbox and grid
- **JavaScript (ES6+)** - Interactive functionality
- **Font Awesome 6.4** - Icons and graphics
- **Google Maps API** - Embedded Mangaluru map

### Design Techniques
- Backdrop filter for glassmorphism effects
- CSS Grid for responsive layouts
- Smooth transitions and animations
- Media queries for mobile responsiveness

## 📁 Project Structure

```
Namma Kudla1/
├── index.html                 # Main homepage
├── privacy-policy.html        # Privacy Policy page
├── terms-of-service.html      # Terms of Service page
├── cookie-policy.html         # Cookie Policy page
├── styles.css                 # Main stylesheet
├── script.js                  # JavaScript functionality
├── README.md                  # This file
│
├── Images/
│   ├── bcg.jpg               # Homepage background
│   ├── srijan.jpeg           # Guide avatar image
│   ├── Panambur-Beach.jpg    # Beach images
│   ├── beach2.jpg
│   ├── mangaladeviTemp.jpg   # Temple images
│   ├── kadriTemp.jpg
│   ├── temple.jpg
│   ├── yakshagana.jpg        # Cultural content
│   ├── food.webp             # Food content
│   ├── waterFalls.jpg        # Nature content
│   ├── sulthan.jpg           # Historical site
│   └── pilikula.jpg          # Nature park
│
└── Data Files/
    └── blogPosts[]           # Blog content (in script.js)
    └── destinations[]        # Destination info (in script.js)
    └── guides[]              # Guide profiles (in script.js)
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server-side installation required
- Internet connection for maps and external resources

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Naren1520/NammaKudla.git
cd NammaKudla
```

2. **Open in browser:**
   - Double-click `index.html` to open locally
   - Or use a local server for better performance:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```

3. **Access the site:**
   - Open `http://localhost:8000` (or appropriate port)
   - Explore all sections and features

## 📝 Content Management

### Adding Blog Posts
Edit `script.js` - `blogPosts` array:
```javascript
{
    id: 7,
    title: "Your Post Title",
    excerpt: "Brief description...",
    category: "beaches|temples|food|culture",
    author: "Author Name",
    date: "2024-11-15",
    image: 'your-image.jpg',
    featured: true|false
}
```

### Adding Destinations
Edit `script.js` - `destinations` array:
```javascript
{
    id: 7,
    name: "Destination Name",
    type: "Beach|Temple|Historical|Nature Park",
    description: "...",
    history: "...",
    highlights: [...],
    bestTime: "Season info",
    images: ['image1.jpg', 'image2.jpg']
}
```

### Adding Guides
Edit `script.js` - `guides` array:
```javascript
{
    id: 5,
    name: "Guide Name",
    expertise: "Specialization",
    bio: "Biography...",
    image: "guide-image.jpeg",
    email: "email@example.com",
    phone: "+91 XXXXXXXXXX"
}
```

## 🎯 Key Sections Explained

### Featured Stories & Blog
- Displays posts with local images
- Category filtering available
- Clickable cards for more information
- Smooth scroll animations

### Destinations Explorer
- Interactive grid with background images
- Click to view detailed information
- Gallery with multiple images per destination
- Highlights and best visit times

### Expert Guides
- Circular avatar images (120px)
- Contact information (email, phone, WhatsApp)
- Specialization tags
- Professional bios

### About Section
- Full-width glassmorphism effect
- Mission, Vision, and Community cards
- Translucent background with blur effect
- Enhanced readability on image backgrounds

### Maps Popup
- Floating button (blue 📍 icon)
- Embedded Google Maps of Mangaluru
- Toggle open/close functionality
- 400x500px responsive popup

## 📞 Contact & Support

**Email:** narensonu1520@gmail.com  
**Phone:** +91 8296833381  
**Location:** Mangalore, Karnataka, India

### Social Links
- [Instagram](https://www.instagram.com/naren_s.j._/)
- [LinkedIn](https://www.linkedin.com/in/narensj20/)

## ⚙️ Customization Guide

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #e74c3c;           /* Red */
    --secondary-color: #2c3e50;         /* Dark Blue */
    --accent-color: #f39c12;            /* Orange */
    --light-bg: #f8f9fa;                /* Light Gray */
    --dark-bg: #1a1a1a;                 /* Dark Gray */
}
```

### Background Image
Replace `bcg.jpg` with your image:
1. Add new image to project folder
2. Update in `styles.css`:
   ```css
   body {
       background-image: url('your-image.jpg');
   }
   ```

### Maps Location
Update Google Maps in `index.html`:
```html
<iframe src="https://www.google.com/maps/embed?pb=..."></iframe>
```

## 📊 Analytics & Tracking

The site includes:
- Google Analytics ready (cookies: `_ga`)
- Session tracking (`_namma_session`)
- User preferences storage
- Newsletter opt-in tracking

## 🔒 Privacy & Security

- No sensitive data stored in cookies
- Contact form uses secure mailto links
- GDPR-compliant privacy policy
- Transparent cookie usage documented

## 🌐 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Desktop:** 1200px+
- **Tablet:** 769px - 1199px
- **Mobile:** 480px - 768px
- **Small Mobile:** < 480px

## 🚀 Performance Features

- Lazy loading support ready
- Optimized image sizes
- CSS minification compatible
- JavaScript modular structure
- Smooth animations with GPU acceleration

## 📋 Future Enhancements

- [ ] Backend server for form submissions
- [ ] User authentication system
- [ ] Blog post detail pages
- [ ] Advanced filtering and search
- [ ] User reviews and ratings
- [ ] Booking integration
- [ ] Weather widget for Mangalore
- [ ] Photo gallery lightbox
- [ ] Multi-language support

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 🐛 Bug Reports

Found an issue? Please create an issue on GitHub with:
- Browser and version
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

## 📞 Support

For questions or support:
- Email: narensonu1520@gmail.com
- Phone: +91 8296833381
- GitHub: [Naren1520](https://github.com/Naren1520)

## 🎉 Acknowledgments

- Font Awesome for icons
- Google Maps API for location services
- Unsplash for image inspiration
- The travel community in Mangalore

---

**Made with ❤️ for Mangalore**

*Last Updated: November 15, 2024*
