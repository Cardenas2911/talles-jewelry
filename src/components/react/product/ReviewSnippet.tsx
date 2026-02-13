import React from 'react';

export default function ReviewSnippet() {
    return (
        <div className="mb-6 bg-white/5 p-4 rounded-sm border border-white/10">
            <div className="flex text-[#d4af37] mb-2 text-xs">
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
            </div>
            <p className="text-sm italic text-[#FAFAF5]/90 mb-2 font-serif">
                "La pieza más exquisita de mi colección. El brillo del oro es impresionante y el envío fue súper rápido."
            </p>
            <p className="text-xs text-[#FAFAF5]/50 font-bold uppercase tracking-widest">
                — Elena V. <span className="text-[#d4af37] ml-1">Verificado</span>
            </p>
        </div>
    );
}
