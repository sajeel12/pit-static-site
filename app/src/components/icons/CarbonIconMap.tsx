import {
  ArrowRight,
  Chat,
  Settings,
  Headphones,
  Time,
  Activity,
  BareMetalServer,
  DataBase,
  Cloud,
  Security,
  WorkflowAutomation,
  Network_2,
  Enterprise,
  Lightning,
  Growth,
  Locked,
  User,
  Menu,
  Close,
  ChevronDown,
  ChevronUp,
  Checkmark,
  Add,
  Subtract,
  Warning,
  Information,
  CheckmarkFilled,
  WarningFilled,
  ErrorFilled,
  Home,
  Phone,
  Email,
  Location,
  Document,
  Folder,
  Calendar,
  Search,
  Edit,
  TrashCan,
  Download,
  Upload,
  Launch,
  Link,
  Copy,
  Share,
  Bookmark,
  Favorite,
  Star,
  StarFilled,
} from '@carbon/icons-react';

export const iconMap = {
  ArrowRight,
  MessageSquare: Chat,
  Settings,
  Headphones,
  Clock: Time,
  Activity,
  Server: BareMetalServer,
  Database: DataBase,
  Cloud,
  Shield: Security,
  Workflow: WorkflowAutomation,
  Network: Network_2,
  Building2: Enterprise,
  Zap: Lightning,
  TrendingUp: Growth,
  Lock: Locked,
  Users: User,
  Menu,
  X: Close,
  ChevronDown,
  ChevronUp,
  Check: Checkmark,
  Plus: Add,
  Minus: Subtract,
  AlertTriangle: Warning,
  Info: Information,
  CheckCircle: CheckmarkFilled,
  AlertCircle: WarningFilled,
  XCircle: ErrorFilled,
  Home,
  Phone,
  Mail: Email,
  MapPin: Location,
  FileText: Document,
  Folder,
  Calendar,
  Search,
  Edit,
  Trash: TrashCan,
  Download,
  Upload,
  ExternalLink: Launch,
  Link,
  Copy,
  Share,
  Bookmark,
  Heart: Favorite,
  Star,
  StarFilled,
};

export type IconName = keyof typeof iconMap;

interface CarbonIconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export const CarbonIcon = ({ name, size = 20, className }: CarbonIconProps) => {
  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in Carbon icon map`);
    return null;
  }
  
  return <IconComponent size={size} className={className} />;
};

export default CarbonIcon;
