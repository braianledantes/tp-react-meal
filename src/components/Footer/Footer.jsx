import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-honeyRust text-softAlmond p-8 flex justify-center items-center gap-3">
            <p>&copy; 2025 Grupo 2, Los Atómicos ⚛️</p>
            <p>
                <a href="https://github.com/braianledantes/tp-react-meal" target="_blank" rel="noopener noreferrer" className="underline">
                    <img src="/github-mark.svg" alt="Logo de Github" className='w-6 h-6' />
                </a>
            </p>
            <p><a href="/Enunciado.pdf" target="_blank" rel="noopener noreferrer" className="underline">Enunciado</a></p>
        </footer>
    );
};

export default Footer;