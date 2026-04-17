/**
 * Utility functions for portfolio calculations and conversions
 */

/**
 * Convert percentage allocation to actual dollar amount
 * @param percentage - The allocation percentage (0-100)
 * @param totalInvested - Total invested amount in dollars
 * @returns Formatted dollar string (e.g., "$3,000")
 */
export const percentToMoney = (percentage: number, totalInvested: number): string => {
  const amount = (percentage / 100) * totalInvested;
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0
  }).format(amount);
};

/**
 * Get a human-readable label for allocation percentage
 * @param percentage - The allocation percentage
 * @returns Label like "Very Small", "Small", "Medium", "Large", "Very Large"
 */
export const getAllocationLabel = (percentage: number): string => {
  if (percentage < 5) return 'Muy pequeño';
  if (percentage < 15) return 'Pequeño';
  if (percentage < 30) return 'Medio';
  if (percentage < 50) return 'Grande';
  return 'Muy grande';
};

/**
 * Get risk level description in Spanish
 */
export const getRiskDescription = (riskPercentage: number): string => {
  if (riskPercentage < 8) return 'Muy Bajo - Bajo riesgo de pérdida';
  if (riskPercentage < 15) return 'Bajo - Fluctuaciones pequeñas';
  if (riskPercentage < 25) return 'Moderado - Oscilaciones normales';
  if (riskPercentage < 35) return 'Alto - Volatilidad significativa';
  return 'Muy Alto - Cambios violentos';
};

/**
 * Get return expectation label
 */
export const getReturnLabel = (returnPercentage: number): string => {
  if (returnPercentage < 0) return 'Retorno negativo';
  if (returnPercentage < 3) return 'Bajo (conservador)';
  if (returnPercentage < 8) return 'Moderado (balanceado)';
  if (returnPercentage < 12) return 'Amplificado (agresivo)';
  return 'Alto (especulativo)';
};

/**
 * Format a number as percentage with 2 decimals
 */
export const formatPercent = (value: number): string => {
  return `${(value * 100).toFixed(2)}%`;
};

/**
 * Get Sharpe Ratio interpretation
 */
export const getSharpeRatioInterpretation = (sharpeRatio: number): { label: string; color: string; description: string } => {
  if (sharpeRatio < 0) {
    return {
      label: 'Negativo',
      color: 'red',
      description: 'Rendimiento menor que la tasa libre de riesgo. No recomendado.'
    };
  }
  if (sharpeRatio < 1) {
    return {
      label: 'Pobre',
      color: 'orange',
      description: 'Retorno bajo considerando el riesgo tomado.'
    };
  }
  if (sharpeRatio < 2) {
    return {
      label: 'Bueno',
      color: 'yellow',
      description: 'Retorno aceptable para el riesgo. Opción viable.'
    };
  }
  if (sharpeRatio < 3) {
    return {
      label: 'Muy Bueno',
      color: 'green',
      description: 'Excelente relación riesgo-retorno. Recomendado.'
    };
  }
  return {
    label: 'Excepcional',
    color: 'blue',
    description: 'Retorno superior al riesgo. Raramente alcanzable.'
  };
};
