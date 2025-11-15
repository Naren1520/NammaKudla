// Data
const blogPosts = [
    {
        id: 1,
        title: "Exploring Panambur Beach at Sunset",
        excerpt: "Experience the golden hour at one of Mangalore's most beautiful beaches...",
        category: "beaches",
        author: "Priya Kumar",
        date: "2024-11-10",
        image: 'Panambur-Beach.jpg',
        featured: true
    },
    {
        id: 2,
        title: "Temple Trail: Ancient Wonders of Kudla",
        excerpt: "Discover the spiritual heritage through centuries-old temples...",
        category: "temples",
        author: "Rajesh Shenoy",
        date: "2024-11-08",
        image: 'temple.jpg',
        featured: true
    },
    {
        id: 3,
        title: "Authentic Mangalorean Cuisine Guide",
        excerpt: "A culinary journey through the flavors of coastal Karnataka...",
        category: "food",
        author: "Anita D'Souza",
        date: "2024-11-05",
        image: 'food.webp',
        featured: true
    },
    {
        id: 4,
        title: "Hidden Waterfalls Near Mangalore",
        excerpt: "Explore the pristine waterfalls tucked away in the Western Ghats...",
        category: "beaches",
        author: "Vikram Pai",
        date: "2024-11-03",
        image: 'waterFalls.jpg'
    },
    {
        id: 5,
        title: "Yakshagana: The Traditional Dance Form",
        excerpt: "Immerse yourself in the vibrant performing arts of coastal Karnataka...",
        category: "culture",
        author: "Deepa Rao",
        date: "2024-11-01",
        image: 'yakshagana.jpg'
    },
    {
        id: 6,
        title: "St. Aloysius Chapel: Art and Architecture",
        excerpt: "Marvel at the stunning frescoes in this historic chapel...",
        category: "temples",
        author: "Thomas Mathias",
        date: "2024-10-28",
        image: 'stAloChappel.avif'
    }
];

const destinations = [
    {
        id: 1,
        name: "Panambur Beach",
        type: "Beach",
        description: "Panambur Beach is one of the most popular beaches in Mangalore, known for its clean sands, water sports activities, and stunning sunsets. The beach stretches for several kilometers and is well-maintained by the local authorities. It's a perfect spot for families, adventure enthusiasts, and those seeking a peaceful evening by the sea.",
        history: "Panambur has been a significant coastal area since ancient times. The beach gained prominence in the 20th century as Mangalore developed into a major port city. Today, it stands as a symbol of the city's coastal beauty and has won several awards for cleanliness and tourist facilities.",
        highlights: [
            "Water sports including jet skiing and parasailing",
            "Clean and well-maintained beach",
            "Beautiful sunset views",
            "Food stalls serving local delicacies",
            "Annual International Kite Festival"
        ],
        bestTime: "October to February",
        images: [
            'Panambur-Beach.jpg',
            'beach2.jpg',
            'Panambur-Beach.jpg'
        ]
    },
    {
        id: 2,
        name: "Mangaladevi Temple",
        type: "Temple",
        description: "Mangaladevi Temple is an ancient Hindu temple dedicated to Goddess Mangaladevi, from whom the city derives its name. The temple showcases beautiful Dravidian architecture and holds immense religious significance for the locals. Built in the 10th century, it stands as a testament to the region's rich cultural heritage.",
        history: "Legend has it that the temple was built by Parashurama, the sixth avatar of Lord Vishnu. Historical evidence suggests the temple dates back to the 9th-10th century CE. The city of Mangalore (Mangaluru) is named after this deity. The temple has undergone several renovations over the centuries while maintaining its original architectural essence.",
        highlights: [
            "Ancient Dravidian architecture",
            "Annual Navaratri celebrations",
            "Intricate stone carvings",
            "Peaceful spiritual atmosphere",
            "Historical significance"
        ],
        bestTime: "Year-round, special during Navaratri",
        images: [
            'mangaladeviTemp.jpg',
            'temple.jpg'
        ]
    },
    {
        id: 3,
        name: "Tannirbhavi Beach",
        type: "Beach",
        description: "Tannirbhavi Beach is a serene and less crowded alternative to other beaches in Mangalore. Located near the Gurpur River mouth, it offers a tranquil escape with its pristine sands and gentle waves. The beach is perfect for those seeking solitude and natural beauty away from tourist crowds.",
        history: "Tannirbhavi, meaning 'place where water comes' in Tulu, has been a fishing village for centuries. The beach remained relatively unknown to tourists until recent decades, preserving its natural charm and local character.",
        highlights: [
            "Peaceful and less crowded",
            "Beautiful sunset views",
            "Fresh seafood at local shacks",
            "Ideal for swimming",
            "Photography opportunities"
        ],
        bestTime: "November to March",
        images: [
            'beach2.jpg'
        ]
    },
    {
        id: 4,
        name: "Kadri Manjunath Temple",
        type: "Temple",
        description: "One of the oldest temples in Mangalore, Kadri Manjunath Temple dates back to approximately 1068 CE. The temple is famous for its bronze statue of Lord Manjunatha (Shiva) and beautiful hillside location. The temple complex includes several shrines and a sacred pond.",
        history: "Built during the reign of the Alupa dynasty, the temple houses a magnificent bronze statue that is considered one of the finest examples of ancient Indian metallurgy. The temple has been a center of Shaivite worship for over 900 years.",
        highlights: [
            "Ancient bronze idol of Lord Manjunatha",
            "Cave temple with natural spring",
            "Beautiful hilltop location",
            "Rich historical significance",
            "Traditional temple architecture"
        ],
        bestTime: "Year-round, special during Mahashivaratri",
        images: [
            'kadriTemp.jpg'
        ]
    },
    {
        id: 5,
        name: "Sultan Battery",
        type: "Historical",
        description: "Sultan Battery is a historical watchtower built by Tipu Sultan in 1784 to prevent warships from entering the Gurpur River. The structure stands as a reminder of Mangalore's strategic importance during the 18th century and offers panoramic views of the Arabian Sea.",
        history: "Constructed during Tipu Sultan's reign, this watchtower was part of a series of defensive structures. It played a crucial role in protecting the region from naval attacks and served as an observation post for monitoring ship movements.",
        highlights: [
            "Historical architecture",
            "Panoramic sea views",
            "Photography spot",
            "Historical significance",
            "Sunset viewing point"
        ],
        bestTime: "October to February",
        images: [
            'sulthan.jpg'
        ]
    },
    {
        id: 6,
        name: "Pilikula Nisargadhama",
        type: "Nature Park",
        description: "Pilikula Nisargadhama is an integrated theme park featuring a zoo, botanical garden, lake, science center, and heritage village. Spread across 370 acres, it's an ideal destination for families and nature lovers to experience wildlife, culture, and recreation.",
        history: "Established in 1997, Pilikula was developed to conserve the region's biodiversity and showcase local culture. The name 'Pilikula' means 'pond of tigers' in Tulu, reflecting its wildlife heritage.",
        highlights: [
            "Biological park with diverse species",
            "Boating facilities",
            "Heritage village showcasing Tulu culture",
            "Science center",
            "Artisan village"
        ],
        bestTime: "October to March",
        images: [
            'pilikula.jpg'
        ]
    }
];

const guides = [
    {
        id: 1,
        name: "Srijan Yadav",
        expertise: "Cultural Heritage",
        bio: "With 15 years of experience, Srijan specializes in temple tours and cultural experiences.",
        avatar: "👨",
        image: "srijan.jpeg",
        email: "srijan@nammakudla.com",
        phone: "+91 8762870373"
    },
    {
        id: 2,
        name: "Pruthvik",
        expertise: "Beach & Adventure",
        bio: "Adventure enthusiast offering exciting water sports and beach exploration experiences.",
        avatar: "👨",
        image: "pruthvik.png",
        email: "pruthvik@nammakudla.com",
        phone: "+91 9110844402"
    },
    {
        id: 3,
        name: "Jeethesh Kumar",
        expertise: "Food & Culinary",
        bio: "Food expert guiding you through authentic Mangalorean cuisine and local eateries.",
        avatar: "👨‍🍳",
        image: "jeethesh.jpeg",
        email: "jeethesh@nammakudla.com",
        phone: "+91 9110825276"
    },
    {
        id: 4,
        name: "Manja",
        expertise: "Nature & Wildlife",
        bio: "Nature lover specializing in eco-tours, bird watching, and wildlife experiences.",
        avatar: "👩‍🌾",
        image: "manja.jpeg",
        email: "manja@nammakudla.com",
        phone: "+91 7349581638"
    }
];

// AI Assistant Responses
const aiResponses = {
    greetings: [
        "Hello! I'm here to help you explore Namma Kudla. What would you like to know?",
        "Namaskara! How can I assist you with your Mangalore travel plans?",
        "Welcome! Ready to discover the beauty of Kudla?"
    ],
    beaches: "Mangalore has beautiful beaches! Panambur Beach is perfect for water sports and sunset views. Tannirbhavi Beach offers a quieter, more serene experience. Both are must-visit destinations!",
    temples: "Mangalore is rich in spiritual heritage. Don't miss Mangaladevi Temple (the city's namesake), Kadri Manjunath Temple (over 900 years old), and St. Aloysius Chapel with its stunning frescoes.",
    food: "Mangalorean cuisine is a treat! Try the famous Neer Dosa, Kori Rotti, Mangalore Buns, and fresh seafood. Don't forget to taste authentic fish curry and banana leaf meals!",
    weather: "The best time to visit Mangalore is from October to February when the weather is pleasant. Monsoons (June-September) bring heavy rainfall but also lush green landscapes.",
    howToReach: "Mangalore is well-connected by air, rail, and road. The city has an international airport, a major railway junction, and excellent road connectivity to major cities in Karnataka and Kerala.",
    default: "I can help you with information about beaches, temples, food, weather, guides, and destinations in Mangalore. What would you like to know more about?"
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    loadBlogPosts();
    loadDestinations();
    loadGuides();
    initAIAssistant();
    initMapsPopup();
    initForms();
    initFilters();
    loadFeaturedPosts();
});

// Navigation
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const links = document.querySelectorAll('.nav-links a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
            
            // Update active state
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Close mobile menu
            navLinks.classList.remove('active');
        });
    });

    // Smooth scroll on page load if hash exists
    if (window.location.hash) {
        setTimeout(() => {
            scrollToSection(window.location.hash.substring(1));
        }, 100);
    }
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const sectionTop = section.offsetTop - navHeight;
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
}

// Load Featured Posts
function loadFeaturedPosts() {
    const container = document.getElementById('featuredPosts');
    const featured = blogPosts.filter(post => post.featured);
    
    container.innerHTML = featured.map(post => createPostCard(post)).join('');
}

// Load Blog Posts
function loadBlogPosts(category = 'all') {
    const container = document.getElementById('blogGrid');
    const filtered = category === 'all' 
        ? blogPosts 
        : blogPosts.filter(post => post.category === category);
    
    container.innerHTML = filtered.map(post => createPostCard(post)).join('');
}

function createPostCard(post) {
    return `
        <div class="post-card" onclick="viewPost(${post.id})">
            <img src="${post.image}" alt="${post.title}" class="post-image">
            <div class="post-content">
                <span class="post-category">${post.category}</span>
                <h3 class="post-title">${post.title}</h3>
                <p class="post-excerpt">${post.excerpt}</p>
                <div class="post-meta">
                    <span><i class="fas fa-user"></i> ${post.author}</span>
                    <span><i class="fas fa-calendar"></i> ${formatDate(post.date)}</span>
                </div>
            </div>
        </div>
    `;
}

function viewPost(postId) {
    const post = blogPosts.find(p => p.id === postId);
    alert(`Full article coming soon!\n\nTitle: ${post.title}\nAuthor: ${post.author}\n\nThis would open a detailed view of the blog post.`);
}

// Load Destinations
function loadDestinations() {
    const container = document.getElementById('interactiveMap');
    
    container.innerHTML = destinations.map(dest => `
        <div class="map-location" onclick="showDestination(${dest.id})" style="background-image: linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url('${dest.images[0]}')">
            <div style="position:relative; z-index:1; color: white;">
                <i class="fas fa-map-marker-alt"></i>
                <h3>${dest.name}</h3>
                <p>${dest.type}</p>
            </div>
        </div>
    `).join('');
}

function showDestination(destId) {
    const destination = destinations.find(d => d.id === destId);
    const modal = document.getElementById('destinationModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div class="destination-detail">
            <div class="destination-hero" style="background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${destination.images[0]}')">
                <h2>${destination.name}</h2>
            </div>
            
            <div class="destination-info">
                <div>
                    <h3>About ${destination.name}</h3>
                    <p class="destination-description">${destination.description}</p>
                    
                    <h3 style="margin-top: 2rem;">History</h3>
                    <p class="destination-description">${destination.history}</p>
                </div>
                
                <div class="destination-highlights">
                    <h3>Highlights</h3>
                    <ul>
                        ${destination.highlights.map(h => `<li><i class="fas fa-check"></i> ${h}</li>`).join('')}
                    </ul>
                    <div style="margin-top: 1.5rem;">
                        <strong>Best Time to Visit:</strong>
                        <p>${destination.bestTime}</p>
                    </div>
                </div>
            </div>
            
            <div class="destination-gallery">
                <h3>Gallery</h3>
                <div class="gallery-grid">
                    ${destination.images.map(img => `
                        <div class="gallery-item" style="background-image: url('${img}')"></div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
}

// Load Guides
function loadGuides() {
    const container = document.getElementById('guidesGrid');
    
    container.innerHTML = guides.map(guide => `
        <div class="guide-card">
            <div class="guide-avatar" style="background-image: url('${guide.image}'); background-size: cover; background-position: center;">${guide.avatar}</div>
            <h3 class="guide-name">${guide.name}</h3>
            <p class="guide-expertise">${guide.expertise}</p>
            <p class="guide-bio">${guide.bio}</p>
            <div class="guide-contact">
                <a href="mailto:${guide.email}" title="Email"><i class="fas fa-envelope"></i></a>
                <a href="tel:${guide.phone}" title="Call"><i class="fas fa-phone"></i></a>
                <a href="#" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>
            </div>
        </div>
    `).join('');
}

// AI Assistant
function initAIAssistant() {
    const toggle = document.getElementById('aiToggle');
    const assistant = document.getElementById('aiAssistant');
    const close = document.getElementById('aiClose');
    const send = document.getElementById('aiSend');
    const input = document.getElementById('aiInput');

    toggle.addEventListener('click', () => {
        assistant.classList.toggle('active');
    });

    close.addEventListener('click', () => {
        assistant.classList.remove('active');
    });

    send.addEventListener('click', () => sendMessage());
    
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
}

// Maps Popup
function initMapsPopup() {
    const toggle = document.getElementById('mapsToggle');
    const popup = document.getElementById('mapsPopup');
    const close = document.getElementById('mapsClose');

    toggle.addEventListener('click', () => {
        popup.classList.toggle('active');
    });

    close.addEventListener('click', () => {
        popup.classList.remove('active');
    });

    // Close maps popup when clicking outside
    document.addEventListener('click', (e) => {
        if (!popup.contains(e.target) && !toggle.contains(e.target)) {
            popup.classList.remove('active');
        }
    });
}

function sendMessage() {
    const input = document.getElementById('aiInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    addMessage(message, 'user');
    input.value = '';
    
    setTimeout(() => {
        const response = getAIResponse(message);
        addMessage(response, 'bot');
    }, 500);
}

function addMessage(text, type) {
    const container = document.getElementById('aiMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `ai-message ${type}`;
    messageDiv.innerHTML = `<p>${text}</p>`;
    container.appendChild(messageDiv);
    container.scrollTop = container.scrollHeight;
}

function getAIResponse(message) {
    const lower = message.toLowerCase();
    
    if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
        return aiResponses.greetings[Math.floor(Math.random() * aiResponses.greetings.length)];
    }
    
    if (lower.includes('beach')) return aiResponses.beaches;
    if (lower.includes('temple') || lower.includes('church')) return aiResponses.temples;
    if (lower.includes('food') || lower.includes('eat') || lower.includes('restaurant')) return aiResponses.food;
    if (lower.includes('weather') || lower.includes('climate')) return aiResponses.weather;
    if (lower.includes('reach') || lower.includes('get there') || lower.includes('transport')) return aiResponses.howToReach;
    if (lower.includes('guide')) {
        return `We have expert guides available! ${guides.map(g => g.name + ' specializes in ' + g.expertise).join(', ')}. Would you like to contact any of them?`;
    }
    
    return aiResponses.default;
}

// Forms
function initForms() {
    const contactForm = document.getElementById('contactForm');
    const newsletterForm = document.getElementById('newsletterForm');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const nameInput = contactForm.querySelector('input[type="text"]');
        const emailInput = contactForm.querySelector('input[type="email"]');
        const messageInput = contactForm.querySelector('textarea');
        
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();
        
        // Create mailto link with form data
        const subject = `New Contact Form Submission from ${name}`;
        const body = `Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;
        const mailtoLink = `mailto:narensonu1520@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
        
        // Open mailto link
        window.location.href = mailtoLink;
        
        // Show confirmation and reset form
        setTimeout(() => {
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        }, 100);
    });

    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Successfully subscribed to our newsletter!');
        newsletterForm.reset();
    });
}

// Filters
function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.dataset.category;
            loadBlogPosts(category);
        });
    });
}

// Modal
document.getElementById('modalClose').addEventListener('click', () => {
    document.getElementById('destinationModal').classList.remove('active');
});

document.getElementById('destinationModal').addEventListener('click', (e) => {
    if (e.target.id === 'destinationModal') {
        document.getElementById('destinationModal').classList.remove('active');
    }
});

// Utility Functions
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Scroll reveal animation
window.addEventListener('scroll', reveal);

function reveal() {
    const reveals = document.querySelectorAll('.post-card, .guide-card, .map-location');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize scroll animations
document.querySelectorAll('.post-card, .guide-card, .map-location').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
});