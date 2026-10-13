import React from 'react';
import { HERO_IMAGE, GARDENING_SERVICES } from '../data/mockData';
import { ShieldCheck, Award, CheckCircle2, Phone } from 'lucide-react';
import { GardeningService, YardSize } from '../types/gardening';
import { BusinessLogo } from './BusinessLogo';

interface HeroSectionProps {
  services?: GardeningService[];
  onStartBooking?: (serviceId?: string, yardSize?: YardSize, postcode?: string) => void;
  onCallToBookQuote?: (details?: any) => void;
  onNavigateToEstimator?: () => void;
  onNavigateToGardeners?: () => void;
  businessName?: string;
  supportPhone?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onCallToBookQuote,
  businessName = 'Verdant',
  supportPhone = '+44 20 7946 0912'
}) => {
  return (
    <section className="relative overflow-hidden bg-stone-900 text-stone-100">
      {/* Background garden image with subtle darkening */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Green residential garden lawn and flower borders"
          className="w-full h-full object-cover opacity-35 object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-stone-900/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        {/* Text positioned to the side of the screen */}
        <div className="max-w-2xl text-left">
          {/* Logo and trust badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-950/90 border border-emerald-600/50 text-emerald-300 text-xs font-medium mb-6 shadow-sm">
            <BusinessLogo size="xs" businessName={businessName} />
            <span className="font-bold text-white">{businessName}</span>
            <span className="text-emerald-500" aria-hidden="true">·</span>
            <span>Call to Book a Free Quote</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white mb-5 leading-[1.15]">
            Call to book a local gardener & lock in your quote
          </h1>

          {/* Subheading text */}
          <p className="text-base sm:text-lg text-stone-200 max-w-xl mb-8 font-light leading-relaxed">
            Reliable help with lawn mowing, hedge trimming, weeding, and garden cleanups.
            Speak directly with our team for transparent pricing, vetted local pros, and no hidden fees.
          </p>

          {/* Action buttons (postcode, service, and garden size controls removed) */}
          <div className="flex flex-wrap items-center gap-3.5 mb-8">
            <button
              type="button"
              onClick={() => onCallToBookQuote?.()}
              className="py-3 px-6 bg-emerald-700 hover:bg-emerald-600 active:bg-emerald-800 text-white font-bold text-sm rounded-xl transition-all shadow-lg hover:shadow-emerald-900/40 flex items-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-emerald-200" />
              <span>Call to Book Quote</span>
            </button>

            <a
              href={`tel:${supportPhone.replace(/\s+/g, '')}`}
              className="py-3 px-5 bg-white/10 hover:bg-white/20 active:bg-white/15 text-white font-semibold text-sm rounded-xl border border-white/20 transition-all flex items-center gap-2 cursor-pointer backdrop-blur-xs"
            >
              <span className="text-stone-300 text-xs font-normal">Direct line:</span>
              <span className="text-emerald-300 font-mono font-bold">{supportPhone}</span>
            </a>
          </div>

          {/* 3 Simple Trust Points */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-stone-300 pt-6 border-t border-white/15">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Fully Insured Gardeners</span>
            </div>
            <span className="hidden sm:inline text-stone-600">·</span>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Vetted Local Professionals</span>
            </div>
            <span className="hidden sm:inline text-stone-600">·</span>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% Satisfaction Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
