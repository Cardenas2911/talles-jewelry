import React from 'react';

export default function TrustBadges() {
    return (
        <div className="flex items-center gap-4 py-4 border-b border-white/5 mb-4">
            <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#d4af37] text-xl">verified</span>
                <span className="text-xs text-[#FAFAF5]/80 uppercase tracking-wide font-bold">Oro Verificado</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#d4af37] text-xl">local_shipping</span>
                <span className="text-xs text-[#FAFAF5]/80 uppercase tracking-wide font-bold">Envío Seguro</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#d4af37] text-xl">star</span>
                <span className="text-xs text-[#FAFAF5]/80 uppercase tracking-wide font-bold">5.0 Estrellas</span>
            </div>
        </div>
    );
}
