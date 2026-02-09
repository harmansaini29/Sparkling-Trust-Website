export type MediaType = "image" | "video";

export interface GalleryItem {
  id: number;
  type: MediaType;
  category: string; // Type string allows you to add ANY new category instantly
  title: string;
  date: string;
  src: string;      // URL for the image or video
  thumbnail?: string; // Required if type is 'video'
  size: "small" | "medium" | "large" | "tall"; // Controls grid sizing
}

// --- HOW TO ADD NEW ITEMS ---
// 1. For Local Images: Put file in 'public/gallery/' and use src: "/gallery/filename.jpg"
// 2. For Local Videos: Put file in 'public/videos/' and use src: "/videos/filename.mp4"
// 3. For Remote: Ensure the domain is allowed in next.config.js

export const GALLERY_ITEMS: GalleryItem[] = [
  // --- VIDEO EXAMPLES ---
  {
    id: 1,
    type: "video",
    category: "Impact",
    title: "Empowering Rural Women",
    date: "Oct 2024",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    size: "large"
  },
  {
    id: 7,
    type: "video",
    category: "Events",
    title: "Cultural Heritage Night",
    date: "Dec 2024",
    src: "https://www.w3schools.com/html/movie.mp4",
    thumbnail: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?w=800&q=80",
    size: "medium"
  },

  // --- IMAGE EXAMPLES ---
  {
    id: 2,
    type: "image",
    category: "Townships",
    title: "Vedic City Blueprint",
    date: "Jan 2025",
    src: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80",
    size: "tall"
  },
  {
    id: 3,
    type: "image",
    category: "Events",
    title: "Annual Summit 2024",
    date: "Dec 2024",
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    size: "medium"
  },
  {
    id: 4,
    type: "image",
    category: "Impact",
    title: "Kisan Credit Camp",
    date: "Nov 2024",
    src: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?w=800&q=80",
    size: "small"
  },
  {
    id: 5,
    type: "image",
    category: "Behind the Scenes",
    title: "Team Strategy Session",
    date: "Feb 2025",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    size: "medium"
  },
  {
    id: 6,
    type: "image",
    category: "Townships",
    title: "Sustainable Architecture",
    date: "Jan 2025",
    src: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80",
    size: "tall"
  },
  
  // --- ADD YOUR NEW ITEMS BELOW THIS LINE ---
  // {
  //   id: 8,
  //   type: "image",
  //   category: "New Category",
  //   title: "My New Project",
  //   date: "Feb 2026",
  //   src: "/gallery/my-new-image.jpg",
  //   size: "medium"
  // },
];