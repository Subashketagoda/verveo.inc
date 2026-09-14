export interface InstagramHighlight {
  id: string;
  name: string;
  emoji: string;
  coverImage: string;
}

export interface InstagramFeedItem {
  id: string;
  title: string;
  caption: string;
  type: "reel" | "post" | "carousel";
  image: string;
  videoUrl?: string;
  pinned?: boolean;
  category: string;
  likes: number;
  comments: number;
  url: string;
  badge?: string;
}

export const instagramProfile = {
  username: "verveo.inc",
  displayName: "Verveo Creative Inc",
  avatar: "/images/ve_logo.svg",
  category: "Marketing agency",
  postsCount: 74,
  followersCount: 114,
  followingCount: 18,
  bioLines: [
    "From designing your Brand identity to producing media campaigns, Verveo is the way to go...",
    ".",
    "And there's @verveo_weddings"
  ],
  verifiedBy: "Followed by shehan_philip, cargopizzeria and 2 more",
  highlights: [
    { id: "hl-1", name: "Stickers", emoji: "🍧", coverImage: "/user_media/alata-paintings.jpg" },
    { id: "hl-2", name: "Cafe", emoji: "☕", coverImage: "/user_media/verveo-cafe-1.jpg" },
    { id: "hl-3", name: "Studio", emoji: "📱", coverImage: "/user_media/verveo-design-team-1.jpg" },
    { id: "hl-4", name: "Clients", emoji: "🤝", coverImage: "/user_media/client_care/client-care-1.jpg" }
  ]
};

export const instagramPosts: InstagramFeedItem[] = [
  {
    id: "post-client-care-series",
    title: "We Take Care of Our Clients 💜",
    caption: "The complete 6-slide editorial set. Why uncompromising craft, senior guardianship, and long-term brand longevity define every Verveo commission. Swipe to read all 6 slides. #clientcare #verveo #creativestudio",
    type: "carousel",
    image: "/user_media/client_care/client-care-1.jpg",
    category: "PARTNERSHIP",
    likes: 512,
    comments: 64,
    url: "https://www.instagram.com/verveo.inc/",
    badge: "6-SLIDE SET"
  },
  {
    id: "post-verveo-cafe-1",
    title: "We just found the Verveo cafe and it is beautiful 💜",
    caption: "Verveo studio cafe interior concept & experiential brand space. Exploring violet atmospheres, warm ambient light, and artisanal moments. #verveo #cafe #interior #brandexperience",
    type: "post",
    image: "/user_media/verveo-cafe-1.jpg",
    category: "STUDIO CAFE",
    likes: 412,
    comments: 53,
    url: "https://www.instagram.com/verveo.inc/",
    badge: "STUDIO CAFE"
  },
  {
    id: "post-drinks-video",
    title: "The secret behind the pretty drinks 🥤",
    caption: "Behind the counter & in front of the lens. Layered Taro & iced lavender craft beverages captured with cinematic macro pours. #drinks #cinematography #beveragephotography",
    type: "reel",
    image: "/user_media/verveo-cafe-2.jpg",
    videoUrl: "/user_media/verveo-drinks-secret.mp4",
    category: "BEVERAGE",
    likes: 620,
    comments: 78,
    url: "https://www.instagram.com/verveo.inc/",
    badge: "VIDEO REEL"
  },
  {
    id: "post-alata-paintings",
    title: "Alata — Pretty paintings here ✨",
    caption: "Original artwork and physical paintings curated for the ALATA gallery cafe space. Where brand identity extends into fine art. #alata #artgallery #curation #creativeagency",
    type: "post",
    image: "/user_media/alata-paintings.jpg",
    category: "FINE ART",
    likes: 318,
    comments: 24,
    url: "https://www.instagram.com/verveo.inc/",
    badge: "EXHIBIT"
  },
  {
    id: "post-verveo-design-team-1",
    title: "Sincerely, the Verveo Design Team ✍️",
    caption: "A personal manifesto from our studio floor. Crafting identity systems, bespoke packaging, and commercial films that make brands impossible to ignore. #designteam #creativestudio #verveo",
    type: "carousel",
    image: "/user_media/verveo-design-team-1.jpg",
    category: "MANIFESTO",
    likes: 445,
    comments: 61,
    url: "https://www.instagram.com/verveo.inc/",
    badge: "TEAM NOTE"
  },
  {
    id: "post-verveo-cafe-2",
    title: "Verveo Cafe — Detail & Geometry",
    caption: "Curated architectural textures, seating compositions, and quiet corners for conversation and espresso. #verveo #cafedesign #minimalism",
    type: "post",
    image: "/user_media/verveo-cafe-2.jpg",
    category: "SPACES",
    likes: 289,
    comments: 32,
    url: "https://www.instagram.com/verveo.inc/",
    badge: "SPACES"
  },
  {
    id: "post-verveo-design-team-2",
    title: "Behind The Craft — Design Archives",
    caption: "Notes on creative direction, typographic precision, and brand storytelling. Every detail matters when building memorable brands. #designarchives #typography #identity",
    type: "post",
    image: "/user_media/verveo-design-team-2.jpg",
    category: "PROCESS",
    likes: 350,
    comments: 40,
    url: "https://www.instagram.com/verveo.inc/",
    badge: "ARCHIVE"
  }
];
