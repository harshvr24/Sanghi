'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Check, Info, ChevronRight } from 'lucide-react';
import { products, categories, Product } from '@/data/products';
import { useQuote } from '@/context/QuoteContext';
import { cn } from '@/lib/utils';
import { FadeIn } from '@/components/ui/FadeIn';
import { InteractiveProductModel } from '@/components/ui/InteractiveProductModel';

export default function ProductsPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const { addItem } = useQuote();
  const [addedId, setAddedId] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || 
                            p.description.toLowerCase().includes(search.toLowerCase());
      const matchesCat = activeCategory === 'All' || p.category === activeCategory;
      return matchesSearch && matchesCat;
    });
  }, [search, activeCategory]);

  const handleAddToQuote = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product, 1);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 2000);
  };

  const getProductModelProps = (product: Product) => {
    const map: Record<string, { type: string; color: string; metalness: number; roughness: number }> = {
      'di-double-flange-pipe':  { type: 'flanged-pipe',    color: '#1a2535', metalness: 0.95, roughness: 0.28 },
      'di-spun-pipe-ss':        { type: 'ss-pipe',         color: '#1a2535', metalness: 0.95, roughness: 0.28 },
      'ci-double-flange-pipe':  { type: 'flanged-pipe',    color: '#2d2d2d', metalness: 0.72, roughness: 0.65 },
      'ci-spun-pipe-ss':        { type: 'ss-pipe',         color: '#2d2d2d', metalness: 0.72, roughness: 0.65 },
      'sluice-valve':           { type: 'gate-valve',      color: '#1e3a5f', metalness: 0.92, roughness: 0.22 },
      'air-valve':              { type: 'air-valve',       color: '#374151', metalness: 0.85, roughness: 0.35 },
      'butterfly-valve':        { type: 'butterfly-valve', color: '#1e3a5f', metalness: 0.92, roughness: 0.2  },
      'non-return-valve':       { type: 'check-valve',     color: '#1e3a5f', metalness: 0.92, roughness: 0.28 },
      'di-specials':            { type: 'pipe-elbow',      color: '#1a2535', metalness: 0.95, roughness: 0.28 },
      'hdpe-pipes':             { type: 'hdpe-pipe',       color: '#0f172a', metalness: 0,    roughness: 0.75 },
      'hdpe-specials':          { type: 'pipe-elbow',      color: '#0f172a', metalness: 0,    roughness: 0.75 },
      'electrofusion-fittings': { type: 'ef-coupler',      color: '#0f172a', metalness: 0,    roughness: 0.7  },
      'dwc-pipes':              { type: 'dwc-pipe',        color: '#111827', metalness: 0,    roughness: 0.8  },
      'opvc-pipes-fittings':    { type: 'opvc-pipe',       color: '#cbd5e1', metalness: 0,    roughness: 0.6  },
      'ms-pipes':               { type: 'ss-pipe',         color: '#4b5563', metalness: 0.82, roughness: 0.5  },
      'ms-specials':            { type: 'pipe-elbow',      color: '#4b5563', metalness: 0.82, roughness: 0.5  },
      'gi-pipes':               { type: 'gi-pipe',         color: '#9ca3af', metalness: 0.97, roughness: 0.12 },
      'gi-specials':            { type: 'pipe-elbow',      color: '#9ca3af', metalness: 0.95, roughness: 0.15 },
      'tmt-bars':               { type: 'tmt-bar',         color: '#374151', metalness: 0.85, roughness: 0.55 },
      'ms-bolts-nut-bolts':     { type: 'bolt',            color: '#9ca3af', metalness: 0.97, roughness: 0.12 },
    };
    return map[product.id] ?? { type: 'ss-pipe', color: '#cbd5e1', metalness: 1, roughness: 0.1 };
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <header className="mb-16">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Interactive Catalog</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">OUR <span className="text-primary italic">PRODUCTS</span></h1>
            <p className="text-slate-400 text-xl max-w-2xl leading-relaxed">
              Explore our precision-engineered industrial solutions in interactive 3D. Designed for extreme durability and mission-critical performance.
            </p>
          </header>
        </FadeIn>

        {/* Filters */}
        <FadeIn delay={0.2}>
          <div className="flex flex-col lg:flex-row gap-6 mb-16">
            <div className="relative flex-grow lg:self-start">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
              <input
                type="text"
                placeholder="Search precision components..."
                className="w-full pl-16 pr-6 py-5 bg-slate-900 border border-white/5 rounded-2xl focus:ring-2 focus:ring-primary/50 outline-none transition-all shadow-2xl text-lg"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-3">
              {['All', ...categories].map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                  className={cn(
                    "relative px-8 py-5 rounded-2xl font-bold text-sm whitespace-nowrap border uppercase tracking-widest overflow-hidden transition-colors",
                    activeCategory === cat
                      ? "border-primary text-white shadow-lg shadow-primary/20"
                      : "bg-slate-900 border-white/5 text-slate-400 hover:border-primary/50 hover:text-white"
                  )}
                >
                  {activeCategory === cat && (
                    <motion.span
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-primary -z-0"
                      style={{ borderRadius: 16 }}
                      transition={{ type: 'spring', bounce: 0.18, duration: 0.45 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProductId(selectedProductId === product.id ? null : product.id)}
                className={cn(
                  "group relative bg-slate-900/50 border rounded-[2.5rem] overflow-hidden cursor-pointer transition-all duration-500",
                  selectedProductId === product.id ? "border-primary/50 ring-1 ring-primary/20" : "border-white/5 hover:border-white/20"
                )}
              >
                <div className="aspect-[4/3] relative bg-gradient-to-br from-slate-900 to-black overflow-hidden">
                  <InteractiveProductModel {...getProductModelProps(product)} />
                  <div className="absolute top-6 right-6">
                    <span className="bg-white/5 backdrop-blur-md text-white/40 text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-white/10">
                      {product.category}
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                    <div className="bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/5">
                      <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Status</p>
                      <p className="text-xs font-bold text-green-400 flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" /> Ready to Ship
                      </p>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="h-12 w-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20"
                    >
                      <ChevronRight size={24} className={cn("transition-transform duration-300", selectedProductId === product.id && "rotate-90")} />
                    </motion.div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-black mb-3 group-hover:text-primary transition-colors tracking-tight italic uppercase">
                    {product.name}
                  </h3>
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                  
                  <AnimatePresence>
                    {selectedProductId === product.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-4 mb-8 pt-4 border-t border-white/5">
                          <p className="text-[10px] text-primary uppercase font-black tracking-widest">Technical Specifications</p>
                          {product.specs && Object.entries(product.specs).map(([key, value]) => (
                            <div key={key} className="flex justify-between items-center text-sm">
                              <span className="text-slate-500 font-medium">{key}</span>
                              <span className="text-white font-bold">{value}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex gap-4">
                    <motion.button
                      onClick={(e) => handleAddToQuote(product, e)}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                      className={cn(
                        "flex-grow py-4 rounded-2xl font-black uppercase text-xs tracking-widest transition-colors overflow-hidden relative",
                        addedId === product.id
                          ? "bg-green-500 text-white"
                          : "bg-white text-black hover:bg-primary hover:text-white"
                      )}
                    >
                      <AnimatePresence mode="wait">
                        {addedId === product.id ? (
                          <motion.span
                            key="success"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center justify-center gap-1.5"
                          >
                            <Check size={14} /> Added
                          </motion.span>
                        ) : (
                          <motion.span
                            key="add"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                          >
                            Add to Quote
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1, backgroundColor: 'rgb(71 85 105)' }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                      className="px-6 py-4 bg-slate-800 rounded-2xl text-white transition-colors"
                    >
                      <Info size={20} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <FadeIn>
            <div className="text-center py-32 border-2 border-dashed border-white/5 rounded-[4rem]">
              <div className="text-5xl font-black mb-6 text-slate-800 uppercase italic">Component Not Found</div>
              <p className="text-slate-500 text-xl">Try adjusting your filters or search terms for precision engineering.</p>
            </div>
          </FadeIn>
        )}
      </div>
    </div>
  );
}
