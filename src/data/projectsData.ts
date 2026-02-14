// Topper's
import toppers from '../assets/projects/toppers.webp';
import toppers_1 from '../assets/projects/toppers-1.webp';
import toppers_2 from '../assets/projects/toppers-2.webp';
import toppers_3 from '../assets/projects/toppers-3.webp';
import toppers_4 from '../assets/projects/toppers-4.webp';
// Solutions La Plata
import solutions from '../assets/projects/solutions.webp';
import solutions_1 from '../assets/projects/solutions-1.webp';
import solutions_2 from '../assets/projects/solutions-2.webp';
// Capture Studio
import capture_studio from '../assets/projects/capture_studio.webp';
import capture_studio_1 from '../assets/projects/capture_studio-1.webp';
// Anime Website
import anime_website from '../assets/projects/anime_website.webp';
import anime_website_1 from '../assets/projects/anime_website-1.webp';
import anime_website_2 from '../assets/projects/anime_website-2.webp';
// Portfolio Collection
import portfolio_collection from '../assets/projects/portfolio_collection.webp';
import portfolio_collection_1 from '../assets/projects/portfolio_collection-1.webp';
import portfolio_collection_2 from '../assets/projects/portfolio_collection-2.webp';
import portfolio_collection_3 from '../assets/projects/portfolio_collection-3.webp';
// Elecat
import elecat from '../assets/projects/elecat.webp';
import elecat_1 from '../assets/projects/elecat-1.webp';
import elecat_2 from '../assets/projects/elecat-2.webp';
import elecat_3 from '../assets/projects/elecat-3.webp';

// Toolkit icons
import affinity from '../assets/affinity.svg';
import astro from '../assets/astro.svg';
import coolors from '../assets/coolors.svg';
import css from '../assets/css.svg';
import dafont from '../assets/dafont-free.svg';
import figma from '../assets/figma.svg';
import flaticon from '../assets/flaticon.svg';
import godaddy from '../assets/godaddy.svg';
import googleFonts from '../assets/google-fonts.svg';
import hostinger from '../assets/hostinger.svg';
import html from '../assets/html.svg';
import javascript from '../assets/javascript.svg';
import tailwind from '../assets/tailwind.svg';
import typescript from '../assets/typescript.svg';
import unsplash from '../assets/unsplash.svg';
import woocommerce from '../assets/woocommerce.svg';
import wordpress from '../assets/wordpress.svg';

export interface ProjectTag {
  label: string;
  icon: {
    src: string;
  };
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description?: string;
  longDescription?: string;
  liveUrl?: string;
  image: {
    src: string;
  };
  gallery?: {
    src: string;
  }[];
  tags?: ProjectTag[];
}

export const projectsData = [
  // Topper's
  {
    id: 'toppers',
    image: toppers,
    gallery: [toppers_1, toppers_2, toppers_3, toppers_4],
    title: 'Toppers´s',
    category: 'Web design · E-Commerce development',
    description: 'Topper’s is an artisanal brewery website built in WordPress with WooCommerce, designed to sell craft beers online and enhance the brand experience.',
    longDescription: `
    Topper’s is an artisanal brewery website built in WordPress with WooCommerce, designed to sell craft beers online and enhance the brand experience. Originally designed in Figma, it was converted into a fully functional WordPress site.
    <br> <br> The site includes an online store, pizzeria menu, event ticket sales, and multiple contact forms linked to Google Sheets via Contact Form 7. Event tickets are managed with the Eventin plugin integrated with WooCommerce.
    <br> <br> Key Features: <br> <br>
    ✅ Online store with WooCommerce catalog <br>
    ✅ Pizzeria & tap room menu sections <br>
    ✅ Event ticket system with Eventin <br>
    ✅ Contact forms linked to Google Sheets <br>
    ✅ Responsive and user-friendly design <br>
    ✅ Original Figma design converted to WordPress
    `,
    tags: [
      { icon: figma, label: 'Figma' },
      { icon: wordpress, label: 'WordPress' },
      { icon: woocommerce, label: 'WooCommerce' },
      { icon: godaddy, label: 'GoDaddy' },
    ],
    liveUrl: 'https://toppers.cl',
  },
  // Solutions La Plata
  {
    id: 'solutions',
    image: solutions,
    gallery: [solutions_1, solutions_2],
    title: 'Solutions La Plata',
    category: 'Web design · Web development',
    description: 'Solutions La Plata is a web development website designed in Figma and implemented in WordPress, offering professional web services and hosting on a dedicated server.',
    longDescription: `
    Solutions La Plata is a web development website designed in Figma and implemented in WordPress, offering professional web services and hosting on a dedicated server.

    <br> <br> The site includes interactive galleries with filters, informative sections, animations on all components, WhatsApp button, contact form, and multiple development plans including landing pages, multi-page websites, and e-commerce stores. It serves as a base for creating custom templates and demonstrates responsive, modern design with user-friendly navigation.

    <br> <br> Key Features: <br> <br>

    ✅ Interactive gallery with filters <br>
    ✅ Informative sections about services <br>
    ✅ Animations across all components <br>
    ✅ Contact form and WhatsApp button <br>
    ✅ Multiple development plans: landing page, multi-page, e-commerce <br>
    ✅ Original Figma design converted to WordPress <br>
    `,
    tags: [
      { icon: figma, label: 'Figma' },
      { icon: wordpress, label: 'WordPress' },
    ],
    liveUrl: 'https://solutionslaplata.com.ar',
  },
  // Capture Studio
  {
    id: 'capture_studio',
    image: capture_studio,
    gallery: [capture_studio_1],
    title: 'Capture Studio',
    category: 'Web design · Web development',
    description: 'Capture Studio is a photography studio website designed as a Figma template and converted into WordPress, serving as a base for future sites.',
    longDescription: `
    Capture Studio is a photography studio website designed as a Figma template and converted into WordPress, serving as a base for future sites.

    <br> <br> The site features an interactive gallery with filters, informative sections, an interactive FAQ, and a contact form. The design emphasizes a clean, modern aesthetic to showcase photography while maintaining usability and clear navigation.

    <br> <br> Key Features: <br> <br>

    ✅ Interactive photo gallery with filters <br>
    ✅ Informative sections about the studio <br>
    ✅ Interactive FAQ section <br>
    ✅ Contact form for inquiries <br>
    ✅ Clean, modern, and adaptable template <br>
    ✅ Original Figma design implemented in WordPress <br>
    `,
    tags: [
      { icon: figma, label: 'Figma' },
      { icon: wordpress, label: 'WordPress' },
    ],
    liveUrl: 'https://modelo14.solutionslaplata.com.ar',
  },
  /*
  // Anime Website
  {
    id: 'anime_website',
    image: anime_website,
    gallery: [anime_website_1, anime_website_2],
    title: 'Anime Website',
    category: 'Web design',
    description: 'Anime Website is a Figma design of a modern anime streaming landing page, inspired by platforms like Crunchyroll.',
    longDescription: `
    Anime Website is a Figma design of a modern anime streaming landing page, inspired by platforms like Crunchyroll. The project showcases a main page for a featured anime (Chainsaw Man) and includes sections for new episodes, carousels, galleries, informative banners, and related anime recommendations.

    <br> <br> The design emphasizes an immersive browsing experience with clear navigation, visually rich cards, and call-to-action banners. It prioritizes responsive layout, intuitive interaction, and a cinematic aesthetic that highlights artwork and content.

    <br> <br> Key Features: <br> <br>

    ✅ Landing page and main anime page design <br>
    ✅ Hero banners for featured series <br>
    ✅ Episode sections with carousels <br>
    ✅ Galleries and informative banners <br>
    ✅ Related anime sections <br>
    ✅ Modern, responsive, and visually immersive Figma design
    `,
    tags: [
      { icon: figma, label: 'Figma' },
      { icon: affinity, label: 'Affinity' },
    ],
    liveUrl: '',
  },
  // Portfolio Collection
  {
    id: 'portfolio_collection',
    image: portfolio_collection,
    gallery: [portfolio_collection_1, portfolio_collection_2, portfolio_collection_3],
    title: 'JM Portfolio Collection',
    category: 'Web Design',
    description: 'This project is a collection of web portfolio designs, all created in Figma with unique layouts, structures, and original content.',
    longDescription: `
    This project is a collection of web portfolio designs, all created in Figma with unique layouts, structures, and original content. Each design presents a different style, focusing on clean, modern, and visually appealing concepts.

    <br> <br> These portfolio designs are intended to showcase creativity, organization, and user-friendly navigation, and they serve as versatile templates that can be adapted or expanded over time.

    <br> <br> Key Features: <br> <br>

    ✅ Multiple portfolio styles in a single collection <br>
    ✅ Modern and clean UI design <br>
    ✅ Well-structured layouts with clear hierarchy <br>
    ✅ Focus on user experience (UX) and readability <br>
    ✅ Original design, structure, and text created by me <br>
    `,
    tags: [
      { icon: figma, label: 'Figma' },
      { icon: affinity, label: 'Affinity' },
    ],
    liveUrl: '',
  },
  // Elecat
  {
    id: 'elecat',
    image: elecat,
    gallery: [elecat_1, elecat_2, elecat_3],
    title: 'Elecat E-Commerce',
    category: 'Web design',
    description: 'E-commerce interface focused on product presentation and user flow.',
    longDescription: `
    EleCat Shop is a Figma design for an e-commerce store selling “Electric Cat Ball” toys, created as a template for Shopify implementation. The site includes a landing page with hero, product showcase, about section, TikTok section, a product catalog, and individual product pages.

    <br> <br> Each product page features images, product details with quantity selector, add-to-cart button, related products, informative sections explaining product functionality, and reviews. The design emphasizes a modern, clean, and user-friendly experience.

    <br> <br> Key Features: <br> <br>

    ✅ Landing page with hero, products, about, and TikTok section <br>
    ✅ Product catalog and individual product pages <br>
    ✅ Product details with quantity selector and add-to-cart <br>
    ✅ Related products and informative sections <br>
    ✅ Reviews section <br>
    ✅ Modern, clean, and conversion-focused Figma design <br>
    `,
    tags: [
      { icon: figma, label: 'Figma' },
      { icon: affinity, label: 'Affinity' },
    ],
    liveUrl: '',
  }*/
];