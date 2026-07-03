'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  text: string;
  initial: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Marco R.',
    role: 'Fashion Store Owner',
    text: 'SmartChoiceNames mi ha fatto risparmiare ore di brainstorming. Ho trovato il nome perfetto per il mio negozio di abbigliamento in 30 secondi!',
    initial: 'M'
  },
  {
    name: 'Sofia L.',
    role: 'Beauty Brand Founder',
    text: 'La preview del negozio mi ha convinta subito. Ho potuto visualizzare esattamente come sarebbe apparso il mio brand. Fantastico!',
    initial: 'S'
  },
  {
    name: 'Luca M.',
    role: 'Tech Entrepreneur',
    text: 'Gratuito e incredibilmente utile. I nomi generati sono davvero creativi e professionali. Ho lanciato il mio shop in una settimana!',
    initial: 'L'
  },
  {
    name: 'Giulia B.',
    role: 'Home Decor Boutique',
    text: 'I nomi generati sono stati ispirati. Ho aperto il mio negozio di arredamento online e i clienti adorano il nome!',
    initial: 'G'
  },
  {
    name: 'Alessandro T.',
    role: 'Fitness Brand Owner',
    text: 'Finalmente uno strumento che capisce il mio settore. I nomi per il mio brand fitness sono stati perfetti.',
    initial: 'A'
  },
  {
    name: 'Chiara D.',
    role: 'Pet Store Founder',
    text: 'Ho generato nomi per il mio negozio di animali e ho trovato quello perfetto. Grazie SmartChoiceNames!',
    initial: 'C'
  }
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="glass p-12 rounded-3xl shadow-2xl relative overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
        What Entrepreneurs Say
      </h2>

      <div className="relative max-w-3xl mx-auto">
        {/* Testimonial Card */}
        <div
          className={`transition-all duration-500 ${
            isAnimating ? 'opacity-0 translate-x-10' : 'opacity-100 translate-x-0'
          }`}
        >
          <div className="glass p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#96bf48] to-[#5E8E3E] flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                {currentTestimonial.initial}
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white text-xl">
                  {currentTestimonial.name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {currentTestimonial.role}
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg italic leading-relaxed">
              "{currentTestimonial.text}"
            </p>
            <div className="mt-6 flex text-[#96bf48] text-2xl">
              ⭐⭐⭐⭐⭐
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prevTestimonial}
            disabled={isAnimating}
            className="p-3 rounded-full bg-gradient-to-r from-[#96bf48] to-[#5E8E3E] hover:from-[#5E8E3E] hover:to-[#4a7a35] text-white shadow-lg hover:shadow-xl transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-[#96bf48] w-8'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            disabled={isAnimating}
            className="p-3 rounded-full bg-gradient-to-r from-[#96bf48] to-[#5E8E3E] hover:from-[#5E8E3E] hover:to-[#4a7a35] text-white shadow-lg hover:shadow-xl transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
