
const socials = [
    {
        icon: 'fa-brands fa-facebook',
        link: 'https://www.facebook.com/profile.php?id=61557401282119'
    },
    {
        icon: 'fa-brands fa-instagram',
        link: 'https://www.instagram.com/meadowcollection_/'
    },
    {
        icon: 'fa-brands fa-tiktok',
        link: 'https://www.tiktok.com/@thelonesomelilyx'
    },
    {
        icon: 'fa-brands fa-pinterest',
        link: 'https://ph.pinterest.com/meadowcollection_/'
    },
    {
        icon: 'fa-solid fa-store',
        link: 'https://tr.ee/nUch66zER4'
    }
]

const navLinks = [
    {
        name: 'About',
        link: 'about.html'
    },
    {
        name: 'Services',
        link: 'services.html'
    },
    {
        name: 'Inquire',
        link: 'inquire.html'
    }
]

const products = [
    {
        name: "Crochet Card Holder",
        price: 180.46,
        image: "assets/buttons/22.png",
        description: "Handcrafted crochet card holder made with care and detail."
    },
    {
        name: "Strawberry Keychain",
        price: 80.30,
        image: "assets/buttons/23.png",
        description: "Cute crochet strawberry keychain to brighten up your keys or bag."
    },
    {
        name: "Purple Themed Wedding Invitation",
        price: 45.00,
        image: "assets/buttons/24.png",
        description: "Elegant purple-themed wedding invitation for your special day."
    },
    {
        name: "Cozy Crochet Blanket",
        price: 45.00,
        image: "assets/buttons/25.png",
        description: "Soft and cozy handmade crochet blanket perfect for any season."
    }
];

/**
 * Renders social media icons based on the socials array.
 * It creates a new anchor element for each social media object and appends it to the social-icons-container element.
 */
const renderSocialIcons = () => {
    const socialIcons = document.getElementById('social-icons-container');

    socials.forEach(social => {
        const a = document.createElement('a');

        a.href = social.link;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.innerHTML = `<i class="${social.icon}"></i>`;
        socialIcons.appendChild(a);
    })
}

/**
 * Renders navigation links based on the navLinks array.
 * It selects the links-container element from the nav element and appends an anchor element for each navigation link.
 * If the link matches the current page, it adds the text-active class to the anchor element.
 */
const renderNavigations = () => {
    const nav_container = document.getElementsByTagName('nav')[0].getElementsByClassName('links-container')[0];

    navLinks.forEach( link => {
        const a = document.createElement('a');
        a.href = link.link;
        a.innerHTML = link.name;
        if(link.link === window.location.pathname.split('/').pop()) {
            a.classList.add('text-active');
        }
        
        nav_container.appendChild(a);
    })
}

/**
 * Generates an array of random digits.
 * @param {number} size - The size of the array to be generated.
 * @param {number} min - The minimum value for the random digits.
 * @param {number} max - The maximum value for the random digits.
 * @return {number[]} An array of random digits.
 */
const randomDigits = (size, min, max) => {
  const digits = [];

  for (let i = 0; i < size; i++) {
    digits.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }

  return digits;
}

/**
 * Renders 4 random featured products on the products section of the page.
 * It takes the products array and selects 4 random indices from it.
 * Then it creates an HTML string for each product and appends it to the products container element.
 */
const renderFeaturedProducts = () => {
    const container = document.getElementById('products-container');

    const rndmDigits = [...new Set(randomDigits(4, 0, products.length - 1))];

    rndmDigits.forEach(index => {
        const innerHTML = `
            <div class="product-card">
                <img src="${products[index].image}" alt="${products[index].name}" class="product-image">
                <div class="product-description">
                    <h3 class="product-title">${products[index].name}</h3>
                    <p class="product-price">&#8369;${products[index].price.toFixed(2)}</p>
                </div>
            </div>
        `

        container.innerHTML += innerHTML;

    })
}

/**
 * Validates a form by checking if each input field has a value.
 * If a field does not have a value, it displays an error message and adds an input-error class to the field.
 * If all fields have a value, it returns true.
 * @returns {boolean} True if all fields have a value, false otherwise.
 */
const validateForm = () => {
    let isValid = true;
    const formGroups = document.querySelectorAll('.form-group');

    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea, select');
        const errorMessage = group.querySelector('.error-message');

        if (input) {

            const value = input.value.trim();

            if (!value) {
                errorMessage.style.display = 'block';
                input.classList.add('input-error');
                isValid = false;
            } else {
                errorMessage.style.display = 'none';
                input.classList.remove('input-error');
            }
        }
    });

    return isValid;
}



/**
 * Renders navigation links and social media icons on the page.
 */
const render = () => {
    renderNavigations();
    renderSocialIcons();
    renderFeaturedProducts();
    validateForm();
}

render();