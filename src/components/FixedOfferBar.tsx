'use client';

import React from 'react';
import { X, Sparkles, Link } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * FixedOfferBar Component
 * 
 * A fixed promotional banner that appears below the main navigation
 * Only visible on desktop (hidden on mobile/tablet)
 * Can be dismissed by clicking the X button
 */

export default function FixedOfferBar() {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 right-0 z-40 hidden lg:block"
          style={{ marginTop: '64px' }} // Adjust based on your main nav height
        >
          <div className="relative bg-gradient-to-r from-brand via-orange-500 to-brand px-4 py-3 shadow-lg">
            {/* Animated gradient overlay */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
                animation: 'shimmer 3s infinite',
              }}
            />

            <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4">
              {/* Left Icon */}
              <div className="flex-shrink-0">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Sparkles className="h-6 w-6 text-white" />
                </motion.div>
              </div>

              {/* Message */}
              <div className="flex-1 text-center justify-center">
                <p className="text-sm font-semibold text-white sm:text-base">
                  <span className="mr-2">🔥</span>
                  <span className="font-bold">Limited Seats Available!</span>
                  {' '}Only <span className="font-bold underline">12 seats left</span> in our next batch starting{' '}
                  <span className="font-bold">December 15th</span>. Enroll now to secure your spot and get
                </p>
              </div>

              {/* CTA Button */}
              <div className="flex-shrink-0">
                <Link
                  href="/courses"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-bold text-brand shadow-md transition hover:bg-orange-50 hover:shadow-lg"
                >
                  Enroll Now
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsVisible(false)}
                className="flex-shrink-0 rounded-full p-1 text-white transition hover:bg-white/20"
                aria-label="Close offer banner"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Add shimmer animation */}
          <style jsx>{`
            @keyframes shimmer {
              0% {
                transform: translateX(-100%);
              }
              100% {
                transform: translateX(100%);
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
