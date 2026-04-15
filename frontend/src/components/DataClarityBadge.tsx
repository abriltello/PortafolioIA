import React from 'react';

interface DataClarityBadgeProps {
  type: 'real' | 'simulated' | 'estimated';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

/**
 * Badge component to clarify if data is real, simulated, or estimated
 * Helps users understand data reliability at a glance
 */
export const DataClarityBadge: React.FC<DataClarityBadgeProps> = ({ 
  type, 
  size = 'md',
  showText = true 
}) => {
  const configs = {
    real: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-700',
      label: 'Datos Reales',
      description: 'Información actual del mercado'
    },
    simulated: {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-700',
      label: 'Datos Simulados',
      description: 'Proyección teórica para demostración'
    },
    estimated: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-700',
      label: 'Valores Estimados',
      description: 'Basado en análisis histórico'
    }
  };

  const config = configs[type];

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  if (!showText) {
    return (
      <div title={config.label} className={`inline-flex items-center gap-1 ${sizeClasses[size]} rounded-full ${config.bg} border ${config.border}`}>
        <span className={`block w-2 h-2 rounded-full ${config.text} bg-current`}></span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2 ${sizeClasses[size]} rounded-full ${config.bg} border ${config.border}`}>
      <span className={`block w-2 h-2 rounded-full ${config.text} bg-current`}></span>
      <span className={`font-semibold ${config.text}`}>{config.label}</span>
    </div>
  );
};
