import React, { useState } from 'react';
import { FiHelpCircle } from 'react-icons/fi';

interface EducationalTooltipProps {
  term: string;
  explanation: string;
  examples?: string[];
  className?: string;
  inline?: boolean;
}

/**
 * Reusable educational tooltip for financial terms
 * Shows a help icon that reveals explanation on hover/click
 */
export const EducationalTooltip: React.FC<EducationalTooltipProps> = ({
  term,
  explanation,
  examples,
  className = '',
  inline = false
}) => {
  const [isVisible, setIsVisible] = useState(false);

  if (inline) {
    return (
      <span className={`relative inline-flex items-center gap-1 ${className}`}>
        {term && term !== '?' && <span className="text-gray-700 font-medium">{term}</span>}
        <div className="relative group">
          <FiHelpCircle 
            className="w-4 h-4 text-blue-500 cursor-help hover:text-blue-700 transition"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            onClick={() => setIsVisible(!isVisible)}
            title=""
          />
          
          {isVisible && (
            <div className="absolute bottom-full left-0 mb-2 w-56 bg-gray-900 text-white text-xs rounded-lg p-3 shadow-lg z-50 pointer-events-none">
              <p className="font-semibold mb-1">{term}</p>
              <p className="text-gray-200 leading-relaxed">{explanation}</p>
              {examples && examples.length > 0 && (
                <div className="mt-2 pt-2 border-t border-gray-700">
                  <p className="font-semibold text-blue-300 mb-1">Ejemplo:</p>
                  <ul className="list-disc list-inside text-gray-300 text-xs space-y-1">
                    {examples.map((ex, idx) => (
                      <li key={idx}>{ex}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="absolute top-full left-4 -mt-1 w-2 h-2 bg-gray-900 transform rotate-45"></div>
            </div>
          )}
        </div>
      </span>
    );
  }

  // Block version (for section headers)
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {term && term !== '?' && <span className="text-gray-700 font-medium">{term}</span>}
      <div className="relative group">
        <FiHelpCircle 
          className="w-5 h-5 text-blue-500 cursor-help hover:text-blue-700 transition"
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
          onClick={() => setIsVisible(!isVisible)}
          title=""
        />
        
        {isVisible && (
          <div className="absolute top-full right-0 mt-2 w-64 bg-gray-900 text-white text-sm rounded-lg p-4 shadow-lg z-50 pointer-events-none">
            <p className="font-semibold mb-2">{term}</p>
            <p className="text-gray-200 leading-relaxed mb-3">{explanation}</p>
            {examples && examples.length > 0 && (
              <div className="pt-3 border-t border-gray-700">
                <p className="font-semibold text-blue-300 mb-2">Ejemplos:</p>
                <ul className="list-disc list-inside text-gray-300 text-xs space-y-1">
                  {examples.map((ex, idx) => (
                    <li key={idx}>{ex}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="absolute bottom-full right-4 -mb-1 w-2 h-2 bg-gray-900 transform rotate-45"></div>
          </div>
        )}
      </div>
    </div>
  );
};
