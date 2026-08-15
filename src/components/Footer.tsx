import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Clock, Phone, ExternalLink, Instagram, Facebook, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=25C6%2BCPR+Rue+Beyrouth+Rabat';

  return (
    <footer className="bg-wood-dark border-t border-[#3D2318] text-[#D3C3AD] pt-12 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-[#3D2318]">
          
          {/* Brand Info */}
          <div className="space-y-4 text-center md:text-left rtl:md:text-right">
            <div className="flex items-center justify-center md:justify-start rtl:md:justify-end gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#D4952A] p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#1C0F08] rounded-[10px] flex items-center justify-center text-[#D4952A] font-bold">
                  CV
                </div>
              </div>
              <h3 className="font-display font-extrabold text-2xl text-[#F5EBD8]">
                {t('brandName')}
              </h3>
            </div>
            <p className="text-xs text-[#D3C3AD]/90 leading-relaxed">
              {t('aboutText')}
            </p>
          </div>

          {/* Location & Hours */}
          <div className="space-y-3 text-center md:text-left rtl:md:text-right">
            <h4 className="font-display font-bold text-base text-[#F5EBD8] flex items-center justify-center md:justify-start rtl:md:justify-end gap-2">
              <MapPin className="w-4 h-4 text-[#D4952A]" />
              <span>{t('locationTitle')}</span>
            </h4>

            <div className="space-y-2 text-xs">
              <p className="flex items-center justify-center md:justify-start rtl:md:justify-end gap-1.5 text-[#F5EBD8]">
                <span>25C6+CPR, Rue Beyrouth, Rabat</span>
              </p>
              <p className="flex items-center justify-center md:justify-start rtl:md:justify-end gap-1.5 text-[#A8D5B0]">
                <Clock className="w-3.5 h-3.5 text-[#4ADE80]" />
                <span>{t('openingHours')}</span>
              </p>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2B1810] hover:bg-[#3D2318] border border-[#3D2318] text-xs font-bold text-[#D4952A] transition-colors mt-2"
            >
              <span>{t('googleMapsBtn')}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Socials & WhatsApp */}
          <div className="space-y-3 text-center md:text-left rtl:md:text-right">
            <h4 className="font-display font-bold text-base text-[#F5EBD8] flex items-center justify-center md:justify-start rtl:md:justify-end gap-2">
              <Phone className="w-4 h-4 text-[#25D366]" />
              <span>{t('contactTitle')}</span>
            </h4>

            <p className="text-xs text-[#D3C3AD]">
              Passer vos commandes directement sur WhatsApp ou contactez-nous au café Rue Beyrouth.
            </p>

            {/* Social Icons */}
            <div className="flex items-center justify-center md:justify-start rtl:md:justify-end gap-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#2B1810] border border-[#3D2318] flex items-center justify-center text-[#D3C3AD] hover:text-[#D4952A] hover:border-[#D4952A] transition-colors"
                aria-label="Instagram Café Vittoria"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#2B1810] border border-[#3D2318] flex items-center justify-center text-[#D3C3AD] hover:text-[#D4952A] hover:border-[#D4952A] transition-colors"
                aria-label="Facebook Café Vittoria"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Subdued Credit Line */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#D3C3AD]/60 gap-2">
          <p>© {new Date().getFullYear()} Café Vittoria Rabat. Tous droits réservés.</p>
          <p className="flex items-center gap-1 font-semibold text-[#D3C3AD]/80">
            <span>Powered by</span>
            <span className="text-[#D4952A] font-bold">Amplify Growth Studio</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
