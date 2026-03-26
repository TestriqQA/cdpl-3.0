"use client";
import React from "react";
import { PastEvent } from "@/data/eventsData";
import { Calendar, MapPin, Tag, Share2 } from "lucide-react";
import { useState } from "react";
import WorkshopRequestModal from "../WorkshopRequestModal";

interface EventSidebarProps {
  event: PastEvent;
}

export default function EventSidebar({ event }: EventSidebarProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-5 sticky top-24">
      {/* Registration Status */}
      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-200 rounded-xl p-4 shadow-sm">
        <div className="flex items-center gap-2 justify-center">
          <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></div>
          <p className="text-sm font-bold text-yellow-900 uppercase tracking-wide">
            Event Registration Closed
          </p>
        </div>
      </div>

      {/* Event Details Card */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wide">Event Details</h3>
        </div>

        <div className="p-5 space-y-4">
          {/* Date and Time */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase tracking-wider">
              <Calendar className="w-4 h-4" />
              <span>Date & Time</span>
            </div>
            <div className="pl-6">
              <p className="text-slate-900 font-semibold">{event.date}</p>
            </div>
          </div>

          <div className="border-t border-slate-100"></div>

          {/* Location */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Location</span>
            </div>
            <div className="pl-6">
              <p className="text-slate-900 font-medium leading-relaxed">{event.location}</p>
            </div>
          </div>

          <div className="border-t border-slate-100"></div>

          {/* Event Category */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase tracking-wider">
              <Tag className="w-4 h-4" />
              <span>Category</span>
            </div>
            <div className="flex flex-wrap gap-2 pl-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 border border-blue-200">
                {event.category}
              </span>
              {event.serviceType && event.serviceType !== event.category && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-700 border border-purple-200">
                  {event.serviceType}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Share Card */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
        <div className="bg-gradient-to-r from-slate-700 to-slate-800 p-4">
          <div className="flex items-center gap-2">
            <Share2 className="w-4 h-4 text-white" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wide">Share Event</h3>
          </div>
        </div>

        <div className="p-5 space-y-2">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-all py-2.5 px-3 rounded-lg group"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
              <svg className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
            <span className="font-medium">Facebook</span>
          </a>

          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(event.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-slate-700 hover:text-sky-500 hover:bg-sky-50 transition-all py-2.5 px-3 rounded-lg group"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-black transition-colors">
              <svg className="w-4 h-4 text-slate-700 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </div>
            <span className="font-medium">Twitter</span>
          </a>

          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&title=${encodeURIComponent(event.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-slate-700 hover:text-blue-700 hover:bg-blue-50 transition-all py-2.5 px-3 rounded-lg group"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-700 transition-colors">
              <svg className="w-4 h-4 text-blue-700 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </div>
            <span className="font-medium">LinkedIn</span>
          </a>

          <a
            href={`https://wa.me/?text=${encodeURIComponent(event.title + ' - ' + (typeof window !== 'undefined' ? window.location.href : ''))}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-slate-700 hover:text-green-600 hover:bg-green-50 transition-all py-2.5 px-3 rounded-lg group"
          >
            <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center group-hover:bg-green-600 transition-colors">
              <svg className="w-4 h-4 text-green-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <span className="font-medium">WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 shadow-lg text-center">
        <h4 className="text-white font-bold text-lg mb-2">Bring This to Your Campus!</h4>
        <p className="text-blue-100 text-sm mb-4">Interested in organizing a similar workshop or training program? Let's connect and make it happen.</p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-block bg-white text-blue-600 px-6 py-2.5 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-md cursor-pointer"
        >
          Partner with Us
        </button>
      </div>

      <WorkshopRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source={`Event Sidebar - ${event.title}`}
        title="Partnership Inquiry"
        subtitle="Fill out the details below to organize an event with us."
        variant="event_contact"
      />
    </div>
  );
}
