'use client';

import { useState, useRef } from 'react';
import { Download, RefreshCw, Palette, Type } from 'lucide-react';
import { logoIcons, getRandomIcon, LogoIcon } from '@/lib/logoIcons';
import { colorPalettes, fontOptions, getRandomPalette, getRandomFont, ColorPalette, FontOption } from '@/lib/logoStyles';

interface LogoGeneratorProps {
  storeName: string;
  onExport?: (format: 'svg' | 'png') => void;
}

interface LogoConfig {
  icon: LogoIcon;
  palette: ColorPalette;
  font: FontOption;
  iconPosition: 'left' | 'right' | 'top' | 'bottom';
  iconSize: 'small' | 'medium' | 'large';
}

export default function LogoGenerator({ storeName, onExport }: LogoGeneratorProps) {
  const [config, setConfig] = useState<LogoConfig>({
    icon: getRandomIcon(),
    palette: getRandomPalette(),
    font: getRandomFont(),
    iconPosition: 'left',
    iconSize: 'medium'
  });
  
  const logoRef = useRef<HTMLDivElement>(null);

  const regenerateLogo = () => {
    setConfig({
      icon: getRandomIcon(),
      palette: getRandomPalette(),
      font: getRandomFont(),
      iconPosition: config.iconPosition,
      iconSize: config.iconSize
    });
  };

  const changeIcon = () => {
    setConfig({ ...config, icon: getRandomIcon() });
  };

  const changePalette = () => {
    setConfig({ ...config, palette: getRandomPalette() });
  };

  const changeFont = () => {
    setConfig({ ...config, font: getRandomFont() });
  };

  const exportAsSVG = () => {
    if (!logoRef.current) return;
    
    const svgElement = logoRef.current.querySelector('svg');
    if (!svgElement) return;

    const svgData = new XMLSerializer().serializeToString(svgElement);
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const svgUrl = URL.createObjectURL(svgBlob);
    
    const downloadLink = document.createElement('a');
    downloadLink.href = svgUrl;
    downloadLink.download = `${storeName.replace(/\s+/g, '-').toLowerCase()}-logo.svg`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(svgUrl);
    
    onExport?.('svg');
  };

  const exportAsPNG = async () => {
    if (!logoRef.current) return;

    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = 800;
      canvas.height = 400;

      // Fill background
      ctx.fillStyle = config.palette.background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Get logo content
      const html2canvas = (await import('html2canvas')).default;
      const canvasData = await html2canvas(logoRef.current, {
        backgroundColor: config.palette.background,
        scale: 2
      });

      const downloadLink = document.createElement('a');
      downloadLink.href = canvasData.toDataURL('image/png');
      downloadLink.download = `${storeName.replace(/\s+/g, '-').toLowerCase()}-logo.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      
      onExport?.('png');
    } catch (error) {
      console.error('Error exporting PNG:', error);
    }
  };

  const getIconSize = () => {
    switch (config.iconSize) {
      case 'small': return 'w-8 h-8';
      case 'medium': return 'w-12 h-12';
      case 'large': return 'w-16 h-16';
    }
  };

  const getLayoutClasses = () => {
    switch (config.iconPosition) {
      case 'left':
        return 'flex-row items-center gap-4';
      case 'right':
        return 'flex-row-reverse items-center gap-4';
      case 'top':
        return 'flex-col items-center gap-2';
      case 'bottom':
        return 'flex-col-reverse items-center gap-2';
    }
  };

  return (
    <div className="space-y-6">
      {/* Logo Preview */}
      <div 
        ref={logoRef}
        className="relative w-full aspect-[2/1] rounded-2xl p-8 flex items-center justify-center transition-all duration-300"
        style={{ 
          backgroundColor: config.palette.background,
          fontFamily: config.font.family
        }}
      >
        <div className={`flex ${getLayoutClasses()}`}>
          {/* Icon */}
          <div 
            className={`transition-all duration-300 ${getIconSize()}`}
            dangerouslySetInnerHTML={{ __html: config.icon.svg }}
            style={{ 
              color: config.palette.primary,
              strokeWidth: '2'
            }}
          />
          
          {/* Text */}
          <div className="text-center">
            <h2 
              className="font-bold transition-all duration-300"
              style={{ 
                color: config.palette.primary,
                fontSize: config.iconPosition === 'top' || config.iconPosition === 'bottom' ? '2rem' : '2.5rem'
              }}
            >
              {storeName}
            </h2>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <button
          onClick={changeIcon}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-[#96bf48] transition-all hover:scale-105 text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          <RefreshCw className="w-4 h-4" />
          Icona
        </button>
        
        <button
          onClick={changePalette}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-[#96bf48] transition-all hover:scale-105 text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          <Palette className="w-4 h-4" />
          Colori
        </button>
        
        <button
          onClick={changeFont}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-[#96bf48] transition-all hover:scale-105 text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          <Type className="w-4 h-4" />
          Font
        </button>
        
        <button
          onClick={regenerateLogo}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#96bf48] to-[#5E8E3E] text-white rounded-xl hover:from-[#5E8E3E] hover:to-[#4a7a35] transition-all hover:scale-105 text-sm font-medium"
        >
          <RefreshCw className="w-4 h-4" />
          Rigenera
        </button>
      </div>

      {/* Export Buttons */}
      <div className="flex gap-3">
        <button
          onClick={exportAsSVG}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-[#96bf48] transition-all hover:scale-105 text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          <Download className="w-4 h-4" />
          Export SVG
        </button>
        
        <button
          onClick={exportAsPNG}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-[#96bf48] transition-all hover:scale-105 text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          <Download className="w-4 h-4" />
          Export PNG
        </button>
      </div>

      {/* Current Config Info */}
      <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
        <span className="font-medium">Icona:</span> {config.icon.name} • 
        <span className="font-medium ml-2">Palette:</span> {config.palette.name} • 
        <span className="font-medium ml-2">Font:</span> {config.font.name}
      </div>
    </div>
  );
}
