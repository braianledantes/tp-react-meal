import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="bg-honeyRust text-softAlmond p-8 flex justify-center items-center gap-3">
            <p>
                <a href="https://github.com/braianledantes/tp-react-meal" target="_blank" rel="noopener noreferrer" className="underline">
                    <img src="/github-mark.svg" alt="Logo de Github" className='w-6 h-6' />
                </a>
            </p>
            <p><a href="/Enunciado.pdf" target="_blank" rel="noopener noreferrer" className="underline">{t("footer.policies")}</a></p>
            <p>&copy; 2025 My Honey Bakery. {t("footer.group")}</p>
        </footer>
    );
};

export default Footer;