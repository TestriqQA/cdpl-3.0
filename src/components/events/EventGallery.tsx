import React from "react";
import { PastEvent } from "@/data/eventsData";
import { Image as ImageIcon, ZoomIn } from "lucide-react";

interface EventGalleryProps {
    event: PastEvent;
}

export default function EventGallery({ event }: EventGalleryProps) {
    // If no gallery images, return null
    if (!event.gallery || event.gallery.length === 0) {
        return null;
    }

    return (
        <section className="py-12 border-t border-slate-200">
            <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                    <ImageIcon className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Event Gallery</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
                {event.gallery.map((image, idx) => (
                    <div
                        key={idx}
                        className={`relative rounded-2xl overflow-hidden group bg-slate-100 ${idx === 0 || idx === 3 ? 'md:col-span-2 md:row-span-2' : ''}`}
                    >
                        <img
                            src={image}
                            alt={`${event.title} - Image ${idx + 1}`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                                <ZoomIn className="w-6 h-6" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
