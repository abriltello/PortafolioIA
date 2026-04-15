/**
 * Chart Context Explanations
 * 
 * Educational content for charts adaptado to:
 * 1. User experience level (beginner, intermediate, advanced)
 * 2. User risk profile (conservative, moderate, aggressive)
 * 
 * Each explanation helps users understand what data visualization means.
 * Beginners get more detailed explanations with simple language.
 * Intermediate users get balanced explanations.
 * Advanced users get concise, technical explanations.
 * 
 * Risk profiles have their own narrative:
 * - Conservative: Preservation and stability
 * - Moderate: Balanced growth with protection
 * - Aggressive: Maximum growth potential
 */

export interface ContextExplanation {
  beginner: string;
  intermediate: string;
  advanced: string;
}

export interface RiskLevelContexts {
  conservative: string;
  moderate: string;
  aggressive: string;
}

export type ChartContextValue = ContextExplanation | RiskLevelContexts;

export interface ChartContexts {
  [key: string]: ChartContextValue;
}

export const chartContexts: ChartContexts = {
  // ============================================
  // DASHBOARD OVERVIEW - Distribution of Assets
  // ============================================
  
  'dashboard.distribution.title': {
    beginner: 'Qué es la distribución de activos',
    intermediate: 'Distribución de activos recomendados',
    advanced: 'Asset allocation'
  },

  'dashboard.distribution.description.conservative': {
    beginner: 'Gráfica: Los colores azules (Renta Fija) representan inversiones seguras como bonos y depósitos. La pequeña porción de acciones (verde/naranja) agrega un poco de crecimiento. Significa: Priorizas la protección de tu dinero sobre rentabilidad alta. Qué hacer: Invierte según estos porcentajes. Revisa anualmente. Si el mercado cae 20%, es normal—mantén tu estrategia sin vender en pánico.',
    intermediate: 'Gráfica: Mayoría en renta fija (bonos, depósitos) ~70%, pequeña exposición en renta variable ~30%. Significa: Estrategia de preservación de capital con crecimiento controlado. Qué hacer: Mantén estos pesos rebalanceando anualmente. Las caídas del 5-10% son esperadas y normales.',
    advanced: 'Conservative allocation: ~70% fixed income, ~30% equities. Principal preservation with minimal drawdown. Action: Maintain allocation discipline, rebalance annually. Accept 5-10% downside as normal market behavior.'
  },

  'dashboard.distribution.description.moderate': {
    beginner: 'Gráfica: Mitad azul (inversiones seguras = bonos) y mitad verde/naranja (acciones con más riesgo). Significa: Buscas crecer tu dinero manteniendo control del riesgo. Qué hacer: Invierte según estos porcentajes. Revisa cada 3 meses. Si las acciones bajan 15%, es normal—mantén la estrategia.',
    intermediate: 'Gráfica: Balance 50/50 entre renta fija (bonos) y renta variable (acciones). Significa: Crecimiento moderado con volatilidad controlada. Qué hacer: Invierte según estos pesos. Rebalancea semestralmente. Caídas del 15-20% son esperadas; evita decisiones emocionales.',
    advanced: 'Moderate allocation: ~50% fixed income, ~50% equities. Balanced growth with controlled volatility. Action: Execute allocation, rebalance semi-annually. Target 8-10% annual return; expect 15-20% drawdowns as normal.'
  },

  'dashboard.distribution.description.aggressive': {
    beginner: 'Gráfica: Mayoría en acciones dinámicas (verde/naranja) ~80%, poco en bonos (azul) ~20%. Significa: Priorizas crecimiento a largo plazo aceptando fluctuaciones significativas. Qué hacer: Mantén tu plan por 5+ años. Caídas de 20-30% son normales en mercados bajistas. No vendas en pánico cuando baje.',
    intermediate: 'Gráfica: Énfasis en renta variable ~80%, renta fija ~20%. Significa: Máximo crecimiento a largo plazo aceptando volatilidad alta. Qué hacer: Invierte según estos porcentajes. Rebalancea anualmente. Espera caídas de 20-30% en ciclos bajistas; esto es parte de la estrategia.',
    advanced: 'Aggressive allocation: ~20% fixed income, ~80% equities. Maximum growth strategy with high volatility acceptance. Action: Maintain discipline over 5+ year horizon. Target 12-15% annual return; 20-30% drawdowns are expected and normal.'
  },

  'dashboard.distribution.tooltip': {
    beginner: 'Este es el porcentaje de tu dinero que se sugiere invertir en este activo.',
    intermediate: 'Porcentaje del portafolio asignado a este activo según optimización.',
    advanced: 'Peso asignado al activo'
  },

  // ============================================
  // MY PORTFOLIO - Performance
  // ============================================

  'portfolio.performance.title': {
    beginner: 'Qué mide el rendimiento',
    intermediate: 'Rendimiento del portafolio',
    advanced: 'Portfolio performance'
  },

  'portfolio.performance.description': {
    beginner: 'Rendimiento = cambio en el valor de tu portafolio. Línea hacia arriba = ganancia (ganas dinero). Línea hacia abajo = pérdida (pierdes dinero). Este gráfico muestra los últimos 12 meses. Nota: Los datos mostrados son simulados para demostración.',
    intermediate: 'Valor del portafolio histórico en los últimos 12 meses (datos simulados para demostración del sistema).',
    advanced: 'Cartera value (últimos 12m, simulated para demostración)'
  },

  'portfolio.performance.note': {
    beginner: '📌 Importante: Los datos en este gráfico son simulados y sirven para que veas cómo funcionaría tu portafolio.',
    intermediate: '📌 Datos simulados para demostración. En producción, mostraremos datos históricos reales.',
    advanced: '📌 Datos simulados'
  },

  // ============================================
  // RECOMMENDATIONS - Asset Distribution
  // ============================================

  'recommendations.distribution.title': {
    beginner: 'Por qué diversificar',
    intermediate: 'Diversificación de cartera',
    advanced: 'Portfolio diversification'
  },

  'recommendations.distribution.description': {
    beginner: 'Diversificación = no poner todo tu dinero en un solo activo. En este gráfico, cada porcentaje representa cuánto invertir en cada activo. Esto reduce riesgo porque si un activo cae, los otros pueden subir y compensar. Es como no apostar todo a un solo caballo en las carreras.',
    intermediate: 'Cartera diversificada según tu perfil de riesgo. Cada activo contribuye a balancear retorno esperado y riesgo de la cartera completa.',
    advanced: 'Cartera diversificada según restricciones de riesgo/retorno y correlaciones'
  },

  'recommendations.distribution.tooltip': {
    beginner: 'Este porcentaje indica cuánto de tu dinero deberías invertir en este activo.',
    intermediate: 'Asignación sugerida basada en optimización según perfil de riesgo.',
    advanced: 'Weight asignado en cartera'
  },

  // ============================================
  // SIMULATOR - Growth Projection
  // ============================================

  'simulator.projection.title': {
    beginner: 'Qué son las simulaciones',
    intermediate: 'Simulación de escenarios',
    advanced: 'Monte Carlo simulation'
  },

  'simulator.projection.badge': {
    beginner: 'Basado en 100 simulaciones diferentes. Cada línea representa un escenario posible de crecimiento.',
    intermediate: 'Basado en 100 simulaciones Monte Carlo usando volatilidad histórica.',
    advanced: 'n=100 Monte Carlo simulations, histórica volatilidad'
  },

  'simulator.projection.description': {
    beginner: 'Simulamos 100 escenarios diferentes para tu portafolio basados en volatilidad histórica. Verde (Escenario Optimista) = mejores resultados posibles, aproximadamente 9 de 10 casos. Ámbar (Escenario Esperado) = resultado promedio, el más probable. Rojo (Escenario Pesimista) = peores resultados posibles, aproximadamente 1 de 10 casos.',
    intermediate: 'Proyección basada en 100 simulaciones. Verde/Ámbar/Rojo representan percentiles 90/50/10 de probabilidad. Ayuda a entender rango de posibles resultados.',
    advanced: 'P90/P50/P10 Monte Carlo distribution. Rango esperado de resultados según volatilidad histórica.'
  },

  'simulator.projection.lineOptimistic': {
    beginner: 'Escenario Optimista: los mejores resultados que probablemente sucederían (9 de cada 10 veces podría ser peor)',
    intermediate: 'Percentil 90: mejores resultados esperados',
    advanced: 'P90 (Optimistic scenario)'
  },

  'simulator.projection.lineExpected': {
    beginner: 'Escenario Esperado: el resultado promedio más probable que ocurra',
    intermediate: 'Percentil 50 (mediana): resultado más probable',
    advanced: 'P50 (Expected return)'
  },

  'simulator.projection.linePessimistic': {
    beginner: 'Escenario Pesimista: los peores resultados que probablemente sucederían (sólo 1 de cada 10 veces podría ser peor)',
    intermediate: 'Percentil 10: peores resultados esperados',
    advanced: 'P10 (Pessimistic scenario)'
  },

  'simulator.projection.percentileInfo': {
    beginner: 'Percentil es un rango de probabilidad. Si ves percentil 90, significa que en 90 de cada 100 simulaciones, el resultado fue igual o peor a eso.',
    intermediate: 'Percentil indica qué porcentaje de simulaciones se comportó de esa manera o peor.',
    advanced: 'Percentile: statistical rank of outcome'
  },

  // ============================================
  // General/Common Terms
  // ============================================

  'term.diversification': {
    beginner: 'Diversificación: Invertir tu dinero en varios activos diferentes en lugar de solo uno. Reduce riesgo porque si uno baja, otros pueden subir.',
    intermediate: 'Reducir concentración de riesgo con múltiples activos correlacionados negativamente.',
    advanced: 'Risk reduction via negative correlation assets'
  },

  'term.volatility': {
    beginner: 'Volatilidad: Cuánto cambia el precio de un activo. Volatilidad alta = cambios grandes y rápidos (más riesgoso). Volatilidad baja = cambios pequeños y lentos (menos riesgoso).',
    intermediate: 'Medida de fluctuación de precio en el tiempo. Mayor volatilidad = mayor riesgo potencial.',
    advanced: 'Standard deviation of returns'
  },

  'term.portfolio': {
    beginner: 'Portafolio: El conjunto de todos los activos que posees (acciones, bonos, fondos, etc.).',
    intermediate: 'Conjunto de inversiones de un inversionista con múltiples activos balanceados.',
    advanced: 'Basket of investments with weighted allocation'
  },

  'term.allocation': {
    beginner: 'Asignación: El porcentaje de tu dinero destinado a cada activo.',
    intermediate: 'Distribución del capital entre diferentes activos o clases.',
    advanced: 'Capital weighting across assets'
  },

  'term.percentile': {
    beginner: 'Percentil: Un rango de 0-100 que muestra dónde se ubica un valor en una distribución. Percentil 90 significa que el 90% de los casos fueron iguales o mejores.',
    intermediate: 'Medida estadística de posición. P50 es la mediana, P90 es muy bueno, P10 es muy malo.',
    advanced: 'Statistical ranking: position in distribution 0-100'
  },

  'term.optimization': {
    beginner: 'Optimización: Proceso de encontrar la mejor combinación de activos para balancear tus ganancias esperadas y el riesgo que quieres asumir.',
    intermediate: 'Algoritmo que balancea máximo retorno esperado para un nivel de riesgo dado.',
    advanced: 'Portfolio optimization algorithm (Modern Portfolio Theory)'
  },
};

/**
 * Helper: Get context by key and experience level
 */
export const getChartContext = (
  key: string,
  experienceLevel: 'beginner' | 'intermediate' | 'advanced' | null
): string => {
  const context = chartContexts[key];
  if (!context) {
    console.warn(`Chart context not found: ${key}`);
    return '';
  }

  const level = experienceLevel || 'intermediate';
  const contextObj = context as ContextExplanation;
  return contextObj[level as keyof ContextExplanation] || contextObj.intermediate;
};

/**
 * Helper: Get context by key, experience level, AND risk level
 * Useful for dashboard and other components that vary by risk profile
 * 
 * Usage: getChartContextByRisk('dashboard.distribution.description', 'conservative', 'beginner')
 */
export const getChartContextByRisk = (
  baseKey: string,
  riskLevel: 'conservative' | 'moderate' | 'aggressive' | null,
  experienceLevel: 'beginner' | 'intermediate' | 'advanced' | null
): string => {
  const level = experienceLevel || 'intermediate';
  const risk = riskLevel || 'moderate';
  
  // Try to find risk-specific key first
  const riskKey = `${baseKey}.${risk}`;
  const context = chartContexts[riskKey];
  
  if (context) {
    const contextObj = context as ContextExplanation;
    return contextObj[level as keyof ContextExplanation] || contextObj.intermediate;
  }
  
  // Fallback to generic key if risk-specific not found
  return getChartContext(baseKey, experienceLevel);
};

/**
 * Helper: Get all contexts for a feature
 */
export const getChartContextsByPrefix = (prefix: string): ChartContexts => {
  const result: ChartContexts = {};
  Object.entries(chartContexts).forEach(([key, context]) => {
    if (key.startsWith(prefix)) {
      result[key] = context;
    }
  });
  return result;
};
