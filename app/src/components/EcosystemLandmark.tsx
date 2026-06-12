import ConnectedEcosystem from '@carbon/pictograms-react/es/connected--ecosystem';

interface EcosystemLandmarkProps {
  className?: string;
}

export default function EcosystemLandmark({ className = '' }: EcosystemLandmarkProps) {
  return (
    <ConnectedEcosystem className={`w-12 h-12 md:w-14 md:h-14 text-[#0f62fe] ${className}`} />
  );
}
