import { useState } from 'react';
import { FiInfo } from 'react-icons/fi';

interface ChartInfoIconProps {
  label: string;
}

/**
 * ChartInfoIcon Component
 * 
 * Displays an info icon (i) that shows an educational popover on hover.
 * Used to provide context explanations for charts to help beginners understand data visualizations.
 * 
 * @param label - Explanation text shown in the popover
 */
export const ChartInfoIcon = ({ label }: ChartInfoIconProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ display: 'inline-block', position: 'relative' }}>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: '#e3f2fd',
          color: '#1976d2',
          cursor: 'help',
          marginLeft: '6px',
          transition: 'all 0.2s ease',
        }}
        title={label}
      >
        <FiInfo size={14} style={{ fontWeight: 'bold' }} />
      </div>

      {isHovered && (
        <div
          style={{
            position: 'absolute',
            bottom: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            marginBottom: '8px',
            backgroundColor: '#1a237e',
            color: '#ffffff',
            padding: '8px 12px',
            borderRadius: '6px',
            fontSize: '12px',
            fontWeight: '500',
            zIndex: 1000,
            maxWidth: '200px',
            whiteSpace: 'normal',
            textAlign: 'left',
            lineHeight: '1.4',
            border: '1px solid #0d47a1',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            pointerEvents: 'none',
            animation: 'fadeIn 0.15s ease-in-out',
          }}
        >
          {label}
          {/* Arrow pointing down */}
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: '50%',
              width: '6px',
              height: '6px',
              backgroundColor: '#1a237e',
              borderBottom: '1px solid #0d47a1',
              borderRight: '1px solid #0d47a1',
              transform: 'translateX(-50%) rotate(45deg)',
            }}
          />
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
      `}</style>
    </div>
  );
};
