import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';

export const CoupleDetails: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-brand-lavender/15 to-transparent rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="text-center mb-16 sm:mb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center gap-4 mb-6 mt-4">
            <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-brand-plum/60" />
            <span className="text-brand-plum uppercase tracking-[0.5em] text-[11px] font-semibold font-sans drop-shadow-sm">The Protagonists</span>
            <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-brand-plum/60" />
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-names tracking-tight drop-shadow-sm py-2 leading-tight whitespace-nowrap">
            <span className="bg-gradient-to-r from-[#A87D25] via-[#DFBD69] to-[#9A7220] bg-clip-text text-transparent">Malmi</span>
            <span className="text-[#C59B3F] font-light mx-2">&</span>
            <span className="bg-gradient-to-r from-[#A87D25] via-[#DFBD69] to-[#9A7220] bg-clip-text text-transparent">Denson</span>
          </h2>
        </motion.div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 relative z-10">
        {/* Groom Details (Left on Desktop, Bottom on Mobile) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-center lg:text-right flex-1 lg:pr-10 order-4 lg:order-1"
        >
          <div className="mb-4 flex flex-col items-center lg:items-end">
            <span className="text-brand-plum uppercase tracking-[0.4em] text-[10px] font-bold mb-3 block">The Groom</span>
            <h3 className="text-4xl sm:text-5xl font-names mb-2 drop-shadow-sm bg-gradient-to-r from-[#9A7220] via-[#C59B3F] to-[#8C6418] bg-clip-text text-transparent">
              Denson Diniz
            </h3>
            <p className="text-stone-700 font-century text-xs mb-2"></p>
            <p className="text-stone-600 font-serif italic text-base sm:text-lg">Son of Mr. Liberatus Diniz & Mrs. Thoppage Irangani Costa</p>
            <p className="text-stone-500 font-serif text-sm mt-2">Nainamadama, Sri Lanka</p>
          </div>
          <div className="hidden lg:flex justify-end mt-8">
            <Heart className="w-6 h-6 text-brand-plum/80 fill-brand-plum/20 transform hover:scale-110 transition-transform cursor-pointer" />
          </div>
        </motion.div>

        {/* Center Couple Image (Arch Design) */}


        {/* Bride Details (Right) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="text-center lg:text-left flex-1 lg:pl-10 order-2 lg:order-3"
        >
          <div className="mb-4 flex flex-col items-center lg:items-start">
            <span className="text-brand-plum uppercase tracking-[0.4em] text-[10px] font-bold mb-3 block">The Bride</span>
            <h3 className="text-4xl sm:text-5xl font-names mb-2 drop-shadow-sm bg-gradient-to-r from-[#9A7220] via-[#C59B3F] to-[#8C6418] bg-clip-text text-transparent">
              Malmi Fernando
            </h3>
            <p className="text-stone-700 font-century text-xs mb-2"></p>
            <p className="text-stone-600 font-serif italic text-base sm:text-lg">Daughter of Mr. K. Wilfred Fernando & Mrs. A. Chandrika Vasanthi Fernando</p>
            <p className="text-stone-500 font-serif text-sm mt-2">Negombo, Sri Lanka</p>
          </div>
          <div className="hidden lg:flex justify-start mt-8">
            <Heart className="w-6 h-6 text-brand-plum/80 fill-brand-plum/20 transform hover:scale-110 transition-transform cursor-pointer" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
