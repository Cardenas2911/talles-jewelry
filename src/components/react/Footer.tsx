import React, { useState } from 'react';
import { resolvePath } from '../../utils/paths';

export default function Footer() {
    // Accordion State for Mobile
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#050505] text-[#FAFAF5] w-full pt-24 pb-10 border-t border-[#d4af37]/20 relative overflow-hidden font-sans">

            {/* Background Texture/Gradient (Subtle Luxury) */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent"></div>

            <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">

                {/* 1. Newsletter Section (Minimalist & Elegant) */}
                <div className="flex flex-col md:flex-row justify-between items-end border-b border-[#d4af37]/10 pb-16 mb-20 gap-10">
                    <div className="max-w-xl">
                        <span className="text-[#d4af37] font-bold text-xs uppercase tracking-[0.2em] mb-4 block">The Gold Circle</span>
                        <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">
                            Únete a la lista exclusiva.
                        </h2>
                        <p className="text-gray-400 font-light text-sm md:text-base max-w-md leading-relaxed">
                            Recibe acceso anticipado a nuevas colecciones, eventos privados en Miami y ofertas reservadas solo para miembros.
                        </p>
                    </div>

                    <form className="w-full md:max-w-md flex flex-col gap-4">
                        <div className="relative group">
                            <input
                                type="email"
                                placeholder="Tu correo electrónico"
                                className="w-full bg-transparent border-b border-gray-700 py-4 text-[#FAFAF5] placeholder-gray-600 focus:outline-none focus:border-[#d4af37] transition-all duration-500 text-lg font-light group-hover:border-gray-500"
                                required
                            />
                            <button
                                type="submit"
                                className="absolute right-0 top-4 text-[#d4af37] hover:text-white transition-colors duration-300"
                                aria-label="Suscribirse"
                            >
                                <span className="material-symbols-outlined text-2xl transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                        </div>
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                id="privacy"
                                className="w-4 h-4 rounded-sm border-gray-700 bg-transparent text-[#d4af37] focus:ring-[#d4af37] focus:ring-offset-black"
                            />
                            <label htmlFor="privacy" className="text-[10px] text-gray-500 uppercase tracking-wider cursor-pointer select-none hover:text-gray-300 transition-colors">
                                Acepto la política de privacidad
                            </label>
                        </div>
                    </form>
                </div>

                {/* 2. Main Navigation Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mb-24">

                    {/* Col 1: Brand & Social */}
                    <div className="space-y-8">
                        <a href={resolvePath('/')} className="block w-fit">
                            <img
                                src={resolvePath('/images/Logo.webp')}
                                alt="Dtalles Jewelry"
                                className="h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                            />
                        </a>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-light">
                            Elevando el estándar del oro en Miami. Joyería fina garantizada para los momentos que importan.
                        </p>

                        <div className="flex gap-6">
                            <SocialIcon href="https://www.instagram.com/dtalles_jewelry/" icon="photo_camera" label="Instagram" />
                            <SocialIcon href="https://web.facebook.com/dtalles.jewelry" icon="thumb_up" label="Facebook" />
                            <SocialIcon href="https://wa.me/17867644952" icon="chat" label="WhatsApp" />
                            {/* Placeholder for future TikTok */}
                            <SocialIcon href="#" icon="music_note" label="TikTok" />
                        </div>
                    </div>

                    {/* Col 2: EXPLORAR (Shop) */}
                    <div>
                        <FooterHeading
                            title="Explorar"
                            isOpen={openSection === 'shop'}
                            onClick={() => toggleSection('shop')}
                        />
                        <ul className={`space-y-4 overflow-hidden transition-all duration-500 ${openSection === 'shop' ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0 md:max-h-full md:opacity-100 md:mt-0'}`}>
                            <FooterLink href={resolvePath('/coleccion/nuevo')} label="Lo Nuevo" isNew={true} />
                            <FooterLink href={resolvePath('/coleccion/best-sellers')} label="Más Vendidos" />
                            <FooterLink href={resolvePath('/mujer')} label="Joyería para Ella" />
                            <FooterLink href={resolvePath('/hombre')} label="Joyería para Él" />
                            <FooterLink href={resolvePath('/ninos')} label="Niños & Bebés" />
                            <FooterLink href={resolvePath('/coleccion/religiosa')} label="Colección Religiosa" />
                            <FooterLink href={resolvePath('/guia-regalos')} label="Guía de Regalos" />
                        </ul>
                    </div>

                    {/* Col 3: ATENCIÓN AL CLIENTE (Support) */}
                    <div>
                        <FooterHeading
                            title="Atención al Cliente"
                            isOpen={openSection === 'support'}
                            onClick={() => toggleSection('support')}
                        />
                        <ul className={`space-y-4 overflow-hidden transition-all duration-500 ${openSection === 'support' ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0 md:max-h-full md:opacity-100 md:mt-0'}`}>
                            <FooterLink href={resolvePath('/rastrear')} label="Rastrear mi Orden" highlight={true} />
                            <FooterLink href={resolvePath('/envios')} label="Envíos y Entregas" />
                            <FooterLink href={resolvePath('/devoluciones')} label="Cambios y Devoluciones" />
                            <FooterLink href={resolvePath('/garantia')} label="Garantía de Por Vida" />
                            <FooterLink href={resolvePath('/guia-tallas')} label="Guía de Tallas" />
                            <FooterLink href={resolvePath('/cuidado-joyas')} label="Cuidado de tus Joyas" />
                            <FooterLink href={resolvePath('/faq')} label="Preguntas Frecuentes" />
                        </ul>
                    </div>

                    {/* Col 4: DTALLES WORLD (Company) */}
                    <div>
                        <FooterHeading
                            title="Mundo DTalles"
                            isOpen={openSection === 'company'}
                            onClick={() => toggleSection('company')}
                        />
                        <ul className={`space-y-4 overflow-hidden transition-all duration-500 ${openSection === 'company' ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0 md:max-h-full md:opacity-100 md:mt-0'}`}>
                            <FooterLink href={resolvePath('/nosotros')} label="Nuestra Historia" />
                            <FooterLink href={resolvePath('/servicios/vender-oro')} label="Vender Oro" highlight={true} />
                            <FooterLink href={resolvePath('/blog')} label="El Blog de Joyería" />
                            <FooterLink href={resolvePath('/contacto')} label="Contáctanos" />
                            <li className="pt-4 border-t border-white/5 mt-4">
                                <p className="text-[#d4af37] text-xs font-bold uppercase tracking-widest mb-2">Showroom Miami</p>
                                <p className="text-gray-400 text-sm font-light">
                                    3949 NW 7th St d<br />
                                    Miami, FL 33126
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 3. Bottom Bar (Legal & Payments) */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-[#d4af37]/10">
                    <div className="flex flex-wrap justify-center gap-8 text-[11px] text-gray-500 uppercase tracking-widest font-medium">
                        <span>&copy; {currentYear} Dtalles Jewelry</span>
                        <a href={resolvePath('/politicas')} className="hover:text-white transition-colors">Privacidad</a>
                        <a href={resolvePath('/terminos')} className="hover:text-white transition-colors">Términos</a>
                        <a href={resolvePath('/accesibilidad')} className="hover:text-white transition-colors">Accesibilidad</a>
                    </div>

                    {/* Payment Icons */}
                    <div className="flex gap-3 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Using text for performance, can replace with SVGs */}
                        <div className="h-6 px-2 border border-white/10 rounded flex items-center justify-center bg-white/5 text-[8px] text-white">VISA</div>
                        <div className="h-6 px-2 border border-white/10 rounded flex items-center justify-center bg-white/5 text-[8px] text-white">MASTERCARD</div>
                        <div className="h-6 px-2 border border-white/10 rounded flex items-center justify-center bg-white/5 text-[8px] text-white">AMEX</div>
                        <div className="h-6 px-2 border border-white/10 rounded flex items-center justify-center bg-white/5 text-[8px] text-white">PAYPAL</div>
                        <div className="h-6 px-2 border border-white/10 rounded flex items-center justify-center bg-white/5 text-[8px] text-white">AFFIRM</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// ----------------------------------------------------------------------
// HELPER COMPONENTS
// ----------------------------------------------------------------------

function FooterHeading({ title, isOpen, onClick }: { title: string, isOpen: boolean, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="w-full flex justify-between items-center md:cursor-default group"
        >
            <h3 className="text-[#d4af37] font-serif text-lg tracking-wide">{title}</h3>
            <span className={`material-symbols-outlined text-[#d4af37] md:hidden transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                expand_more
            </span>
        </button>
    );
}

function FooterLink({ href, label, isNew, highlight }: { href: string, label: string, isNew?: boolean, highlight?: boolean }) {
    return (
        <li>
            <a
                href={href}
                className={`
                    group flex items-center gap-2 text-sm font-light transition-all duration-300 transform hover:translate-x-2
                    ${highlight ? 'text-white font-medium' : 'text-gray-400 hover:text-[#d4af37]'}
                `}
            >
                {highlight && <span className="w-1 h-1 rounded-full bg-[#d4af37]"></span>}
                {label}
                {isNew && (
                    <span className="text-[9px] font-bold text-black bg-[#d4af37] px-1.5 py-0.5 rounded ml-2">NEW</span>
                )}
            </a>
        </li>
    );
}

function SocialIcon({ href, icon, label }: { href: string, icon: string, label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#050505] hover:bg-[#d4af37] hover:border-[#d4af37] transition-all duration-300 group"
            aria-label={label}
        >
            <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">{icon}</span>
        </a>
    );
}
