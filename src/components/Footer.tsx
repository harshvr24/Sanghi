'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Logo } from './ui/Logo';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const colVariants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] },
  },
};

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Products', href: '/products' },
  { label: 'Request Quote', href: '/quote' },
  { label: 'Contact Us', href: '/contact' },
];

const productLinks = [
  { label: 'Ductile Iron Pipes', href: '/products?cat=Ductile Iron Pipes' },
  { label: 'Cast Iron Pipes', href: '/products?cat=Cast Iron Pipes' },
  { label: 'DI Fittings', href: '/products?cat=DI Fittings' },
  { label: 'Industrial Valves', href: '/products?cat=Valves' },
];

const contactItems = [
  {
    icon: <MapPin size={18} className="text-primary shrink-0 mt-1" />,
    text: 'B No 79/8, Latouche Road, Kanpur - 208002, Uttar Pradesh, India',
  },
  { icon: <Phone size={18} className="text-primary shrink-0" />, text: '+91 7971549587' },
  { icon: <Mail size={18} className="text-primary shrink-0" />, text: 'info@sanghitubes.com' },
];

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.05 },
          },
        }}
        className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
      >
        {/* Brand Column */}
        <motion.div variants={colVariants} className="space-y-6">
          <Logo />
          <p className="text-sm leading-relaxed text-slate-400">
            M/s Sanghi Pipes & Tubes is a reputed supplier and manufacturer of Cast Iron / Ductile Iron
            Spun Pipes, Fittings and Valves. We are committed to excellence and quality in infrastructure
            development.
          </p>
          <div className="flex gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 8, backgroundColor: 'rgb(59 130 246)' }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className="p-2 bg-slate-800 rounded-full"
            >
              <Globe size={18} />
            </motion.a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={colVariants}>
          <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                >
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </motion.div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Product Categories */}
        <motion.div variants={colVariants}>
          <h4 className="text-white font-bold mb-6 text-lg">Product Categories</h4>
          <ul className="space-y-4 text-sm">
            {productLinks.map((link) => (
              <li key={link.href}>
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                >
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </motion.div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={colVariants}>
          <h4 className="text-white font-bold mb-6 text-lg">Contact Info</h4>
          <ul className="space-y-4 text-sm">
            {contactItems.map((item, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3"
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
              >
                {item.icon}
                <span>{item.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="border-t border-slate-800 py-8 text-center text-xs text-slate-500"
      >
        <p>© {new Date().getFullYear()} Sanghi Tubes Private Limited. All Rights Reserved.</p>
      </motion.div>
    </footer>
  );
};
