// app/data/gallery.ts
export type MediaType = "image" | "video";

export interface GalleryItem {
  id: number;
  type: MediaType;
  category: "School Awareness Programs" | "Police Department Sessions" | "Women Empowerment Workshops" | "Food Distribution Drives" | "Tree Plantation Drives" | "Volunteer Activities"; 
  title: string;
  date: string;
  src: string;      
  thumbnail?: string; 
  size: "small" | "medium" | "large" | "tall"; 
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    type: "image",
    category: "School Awareness Programs",
    title: "Sanskar Workshop",
    date: "Jan 2025",
    // FIXED: Removed the broken 404 image ID and replaced with a stable one
    src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80",
    size: "medium"
  },
  {
    id: 2,
    type: "image",
    category: "Police Department Sessions",
    title: "Satark Cyber Briefing",
    date: "Dec 2024",
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
    size: "tall"
  },
  {
    id: 3,
    type: "video",
    category: "Women Empowerment Workshops",
    title: "Saksham Skill Training",
    date: "Oct 2024",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    size: "large"
  },
  {
    id: 4,
    type: "image",
    category: "Food Distribution Drives",
    title: "Sevalay Nutritional Care",
    date: "Jan 2025",
    src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80",
    size: "tall"
  },
  {
    id: 5,
    type: "image",
    category: "Tree Plantation Drives",
    title: "Shrushti Green Initiative",
    date: "Nov 2024",
    src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    size: "small"
  },
  {
    id: 6,
    type: "image",
    category: "Volunteer Activities",
    title: "Field Action Team",
    date: "Feb 2025",
    src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80",
    size: "medium"
  }
];