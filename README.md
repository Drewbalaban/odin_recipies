# 🍳 Odin Recipes - Interactive Recipe Website

A modern, interactive recipe website built with HTML, CSS, and JavaScript featuring beautiful animations, smart search, and cooking tools.

## ✨ Features

### 🎨 Modern Design
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Beautiful Animations**: Smooth hover effects, fade-in animations, and parallax scrolling
- **Gradient Backgrounds**: Eye-catching gradients and modern color scheme
- **Card-based Design**: Clean, organized recipe cards with hover effects

### 🔍 Smart Search
- **Real-time Search**: Instantly filter recipes as you type
- **Search by Title**: Find recipes by name or description
- **Smooth Animations**: Cards animate in/out during search

### 🌙 Dark Mode
- **Theme Toggle**: Switch between light and dark themes
- **Persistent Settings**: Your theme preference is saved locally
- **Automatic Styling**: All elements adapt to the selected theme

### ⏰ Cooking Timer
- **Custom Timer**: Set cooking timers from 1-180 minutes
- **Visual Countdown**: Real-time countdown display
- **Notifications**: Browser notifications when timer completes
- **Easy Controls**: Start, stop, and cancel timers

### 🖨️ Print Functionality
- **Recipe Printing**: Print individual recipes with clean formatting
- **Optimized Layout**: Print-friendly styling for offline use
- **Custom Print Window**: Opens in new window for easy printing

### 📱 Interactive Elements
- **Ripple Effects**: Material design-inspired click animations
- **Smooth Scrolling**: Smooth navigation between sections
- **Floating Action Button**: Quick scroll-to-top functionality
- **Loading Animations**: Beautiful loading states for images

## 🍽️ Recipes Included

1. **Lasagna** - Classic Italian comfort food
2. **Chicken Curry** - Aromatic Indian curry
3. **Chocolate Chip Cookies** - Perfect homemade cookies
4. **Pizza Margherita** - Authentic Italian pizza

## 🚀 Getting Started

1. **Clone or Download** the project files
2. **Open `index.html`** in your web browser
3. **Explore** the recipes and features!

## 🛠️ Technical Details

### File Structure
```
odin_recipies/
├── index.html              # Main homepage
├── styles.css              # Modern CSS with animations
├── script.js               # Interactive JavaScript features
├── recipes/
│   ├── lasagna.html        # Lasagna recipe
│   ├── chicken-curry.html  # Chicken curry recipe
│   ├── chocolate-chip-cookies.html  # Cookie recipe
│   └── pizza-margherita.html       # Pizza recipe
└── README.md               # This file
```

### Technologies Used
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **Vanilla JavaScript**: No frameworks, pure JavaScript for interactivity
- **CSS Custom Properties**: Dynamic theming and consistent design
- **Intersection Observer API**: Scroll-based animations
- **Local Storage**: Theme persistence

### Browser Support
- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ Internet Explorer (limited support)

## 🎯 Key Features Explained

### Search Functionality
The search feature uses JavaScript to filter recipe cards in real-time. It searches both recipe titles and descriptions, providing instant results as you type.

### Dark Mode Implementation
Dark mode is implemented using CSS custom properties and JavaScript. The theme preference is stored in localStorage and automatically applied on page load.

### Cooking Timer
The timer feature creates a modal interface for setting custom cooking times. It uses the browser's notification API to alert users when the timer completes.

### Print Recipe
The print functionality opens a new window with optimized styling for printing, making it easy to print recipes for offline use.

## 🎨 Design Philosophy

This project demonstrates modern web development practices:
- **Progressive Enhancement**: Works without JavaScript, enhanced with it
- **Accessibility**: Semantic HTML and keyboard navigation
- **Performance**: Optimized images and efficient animations
- **User Experience**: Intuitive interface with helpful features

## 🔧 Customization

### Adding New Recipes
1. Create a new HTML file in the `recipes/` directory
2. Follow the existing recipe structure
3. Add the recipe link to `index.html`
4. Include the CSS and JavaScript files

### Styling Changes
- Modify `styles.css` to change colors, fonts, and layout
- Update CSS custom properties in `:root` for theme changes
- Add new animations using the existing keyframe patterns

### JavaScript Features
- Extend the `RecipeApp` class in `script.js`
- Add new event listeners for additional functionality
- Implement new interactive features following the existing patterns

## 📱 Mobile Optimization

The website is fully responsive and optimized for mobile devices:
- Touch-friendly buttons and interactions
- Optimized layout for small screens
- Fast loading times on mobile networks
- Proper viewport meta tags

## 🎉 Future Enhancements

Potential features for future versions:
- Recipe ratings and reviews
- Ingredient scaling calculator
- Recipe sharing functionality
- Nutritional information
- Recipe categories and filtering
- User accounts and favorites
- Recipe import from URLs

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ for the Odin Project**

*Enjoy cooking with these delicious recipes!*