import React from 'react';
import { useTranslation } from 'react-i18next';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="bg-honeyRust text-softAlmond p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
                    <a href="https://github.com/braianledantes/tp-react-meal" target="_blank" rel="noopener noreferrer" className="underline">
                        <img src="/github-mark.svg" alt="Logo de Github" className="w-8 h-8 hover:opacity-80 transition-opacity" />
                    </a>
                <a href="/Enunciado.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-almond transition-colors">
                    {t("footer.policies")}
                </a>
            </div>       

        <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-almond transition-colors">
                <Facebook className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-almond transition-colors">
                <Instagram className="w-6 h-6" />
            </a>
        </div>
            
            <p className="text-center md:text-right text-sm md:text-base">
                &copy; 2025 My Honey Bakery. {t("footer.group")}
            </p>
        </footer>
    );
};

export default Footer;