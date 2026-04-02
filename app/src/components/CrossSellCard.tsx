import { ArrowRight, Package, Lightbulb, TrendingUp } from 'lucide-react';

interface CrossSellItem {
  title: string;
  description: string;
  link: string;
  badge?: string;
}

interface CrossSellCardProps {
  variant?: 'bundle' | 'related' | 'upgrade' | 'journey';
  title?: string;
  description?: string;
  items?: CrossSellItem[];
  primaryLink?: string;
  primaryText?: string;
  className?: string;
}

const CrossSellCard = ({
  variant = 'related',
  title,
  description,
  items = [],
  primaryLink,
  primaryText,
  className = ''
}: CrossSellCardProps) => {
  // Default content based on variant
  const getDefaultContent = () => {
    switch (variant) {
      case 'bundle':
        return {
          icon: Package,
          title: title || 'Want faster results?',
          description: description || 'See our bundled solution that combines multiple services for greater impact.',
          bgColor: 'bg-pi-blue/5',
          borderColor: 'border-pi-blue/20',
          iconBg: 'bg-pi-blue',
          buttonStyle: 'bg-pi-blue text-white hover:bg-pi-blue-dark'
        };
      case 'upgrade':
        return {
          icon: TrendingUp,
          title: title || 'Ready to scale?',
          description: description || 'Take the next step with our advanced offerings.',
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200',
          iconBg: 'bg-green-500',
          buttonStyle: 'bg-green-500 text-white hover:bg-green-600'
        };
      case 'journey':
        return {
          icon: ArrowRight,
          title: title || 'Continue your journey',
          description: description || 'Natural next steps in your transformation.',
          bgColor: 'bg-gray-50',
          borderColor: 'border-gray-200',
          iconBg: 'bg-gray-600',
          buttonStyle: 'bg-gray-800 text-white hover:bg-gray-900'
        };
      default: // 'related'
        return {
          icon: Lightbulb,
          title: title || 'Related Services',
          description: description || 'You might also be interested in these offerings.',
          bgColor: 'bg-blue-50',
          borderColor: 'border-blue-100',
          iconBg: 'bg-blue-500',
          buttonStyle: 'bg-blue-500 text-white hover:bg-blue-600'
        };
    }
  };

  const content = getDefaultContent();
  const Icon = content.icon;

  return (
    <div className={`rounded-xl border ${content.borderColor} ${content.bgColor} p-6 ${className}`}>
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className={`w-10 h-10 ${content.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-[#161616] mb-1">{content.title}</h4>
          <p className="text-sm text-[#525252]">{content.description}</p>
        </div>
      </div>

      {/* Items List */}
      {items.length > 0 && (
        <div className="space-y-3 mb-4">
          {items.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="group flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100 hover:border-pi-blue/30 hover:shadow-sm transition-all"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-[#161616] group-hover:text-pi-blue transition-colors">
                    {item.title}
                  </span>
                  {item.badge && (
                    <span className="px-1.5 py-0.5 bg-pi-blue text-white text-[10px] rounded">
                      {item.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#525252] mt-0.5">{item.description}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-pi-blue group-hover:translate-x-1 transition-all" />
            </a>
          ))}
        </div>
      )}

      {/* Primary CTA */}
      {primaryLink && primaryText && (
        <a
          href={primaryLink}
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${content.buttonStyle}`}
        >
          {primaryText}
          <ArrowRight className="w-4 h-4" />
        </a>
      )}
    </div>
  );
};

// Pre-configured cross-sell cards for specific contexts
export const CloudCostOptimisationCrossSell = () => (
  <CrossSellCard
    variant="bundle"
    title="See Cloud Control — Our Bundled Solution"
    description="Combine cost optimisation, monitoring, and managed services for maximum impact."
    items={[
      {
        title: 'Performance Optimisation',
        description: '2x faster applications, 50% less infrastructure',
        link: '#services'
      },
      {
        title: 'Cloud Observability',
        description: 'Container and serverless visibility that scales',
        link: '#services'
      },
      {
        title: 'Managed Cloud Services',
        description: '24/7 cloud ops at 40% less than in-house',
        link: '#services'
      }
    ]}
    primaryLink="#services"
    primaryText="Explore Cloud Control Solution"
  />
);

export const InfrastructureCrossSell = () => (
  <CrossSellCard
    variant="journey"
    title="Ready for Cloud?"
    description="Extend hardware life now, migrate to cloud when you're ready — one partner guides both."
    items={[
      {
        title: 'Cloud Migration Readiness',
        description: 'Assessment and path to cloud transition',
        link: '#services',
        badge: 'Popular'
      },
      {
        title: 'Hybrid Cloud Architecture',
        description: 'On-premise + cloud that actually works',
        link: '#services'
      }
    ]}
    primaryLink="#services"
    primaryText="Start Cloud Assessment"
  />
);

export const MLOpsCrossSell = () => (
  <CrossSellCard
    variant="bundle"
    title="AI Accelerator — Complete AI Pipeline"
    description="From data preparation to deployed models in 90 days."
    items={[
      {
        title: 'Cloud Infrastructure',
        description: 'Scalable compute for AI workloads',
        link: '#services'
      },
      {
        title: 'Data Observability',
        description: 'Bad data detected before it hits the model',
        link: '#services'
      },
      {
        title: 'MLOps Consulting',
        description: 'Is your data ready for AI? Find out in 2 weeks',
        link: '#services'
      }
    ]}
    primaryLink="#services"
    primaryText="Explore AI Accelerator"
  />
);

export const PlatformCrossSell = () => (
  <CrossSellCard
    variant="upgrade"
    title="Need Ongoing Platform Management?"
    description="We don't just implement — we run, optimize, and evolve your platforms."
    items={[
      {
        title: 'Managed ServiceNow',
        description: 'Continuous improvement and support',
        link: '#services'
      },
      {
        title: 'Service Desk Integration',
        description: 'Connect platforms to your support operations',
        link: '#services'
      }
    ]}
    primaryLink="#services"
    primaryText="Explore Managed Platforms"
  />
);

export default CrossSellCard;
