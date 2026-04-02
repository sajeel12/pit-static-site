import { ReactNode } from 'react';

interface CarbonGridProps {
  children: ReactNode;
  fullWidth?: boolean;
  narrow?: boolean;
  condensed?: boolean;
  className?: string;
}

export const CarbonGrid = ({ 
  children, 
  fullWidth = false, 
  narrow = false, 
  condensed = false,
  className = ''
}: CarbonGridProps) => {
  const classes = [
    'cds--css-grid',
    fullWidth && 'cds--css-grid--full-width',
    narrow && 'cds--css-grid--narrow',
    condensed && 'cds--css-grid--condensed',
    className
  ].filter(Boolean).join(' ');
  
  return <div className={classes}>{children}</div>;
};

interface CarbonColProps {
  children: ReactNode;
  span?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xlg?: number;
  max?: number;
  className?: string;
}

export const CarbonCol = ({ 
  children, 
  span,
  sm,
  md,
  lg,
  xlg,
  max,
  className = ''
}: CarbonColProps) => {
  const classes = [
    span && `cds--col-span-${span}`,
    sm && `cds--col-span-${sm}--sm`,
    md && `cds--col-span-${md}--md`,
    lg && `cds--col-span-${lg}--lg`,
    xlg && `cds--col-span-${xlg}--xlg`,
    max && `cds--col-span-${max}--max`,
    className
  ].filter(Boolean).join(' ');
  
  return <div className={classes || undefined}>{children}</div>;
};

export default CarbonGrid;
