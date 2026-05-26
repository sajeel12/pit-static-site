import ArrowRight from '@carbon/icons-react/es/ArrowRight';
import Chat from '@carbon/icons-react/es/Chat';
import Settings from '@carbon/icons-react/es/Settings';
import Headphones from '@carbon/icons-react/es/Headphones';
import Time from '@carbon/icons-react/es/Time';
import Activity from '@carbon/icons-react/es/Activity';
import BareMetalServer from '@carbon/icons-react/es/BareMetalServer';
import DataBase from '@carbon/icons-react/es/DataBase';
import Cloud from '@carbon/icons-react/es/Cloud';
import Security from '@carbon/icons-react/es/Security';
import WorkflowAutomation from '@carbon/icons-react/es/WorkflowAutomation';
import Network_2 from '@carbon/icons-react/es/Network_2';
import Enterprise from '@carbon/icons-react/es/Enterprise';
import Lightning from '@carbon/icons-react/es/Lightning';
import Growth from '@carbon/icons-react/es/Growth';
import Locked from '@carbon/icons-react/es/Locked';
import User from '@carbon/icons-react/es/User';
import Menu from '@carbon/icons-react/es/Menu';
import Close from '@carbon/icons-react/es/Close';
import ChevronDown from '@carbon/icons-react/es/ChevronDown';
import ChevronUp from '@carbon/icons-react/es/ChevronUp';
import Checkmark from '@carbon/icons-react/es/Checkmark';
import Add from '@carbon/icons-react/es/Add';
import Subtract from '@carbon/icons-react/es/Subtract';
import Warning from '@carbon/icons-react/es/Warning';
import Information from '@carbon/icons-react/es/Information';
import CheckmarkFilled from '@carbon/icons-react/es/CheckmarkFilled';
import WarningFilled from '@carbon/icons-react/es/WarningFilled';
import ErrorFilled from '@carbon/icons-react/es/ErrorFilled';
import Home from '@carbon/icons-react/es/Home';
import Phone from '@carbon/icons-react/es/Phone';
import Email from '@carbon/icons-react/es/Email';
import Location from '@carbon/icons-react/es/Location';
import Document from '@carbon/icons-react/es/Document';
import Folder from '@carbon/icons-react/es/Folder';
import Calendar from '@carbon/icons-react/es/Calendar';
import Search from '@carbon/icons-react/es/Search';
import Edit from '@carbon/icons-react/es/Edit';
import TrashCan from '@carbon/icons-react/es/TrashCan';
import Download from '@carbon/icons-react/es/Download';
import Upload from '@carbon/icons-react/es/Upload';
import Launch from '@carbon/icons-react/es/Launch';
import Link from '@carbon/icons-react/es/Link';
import Copy from '@carbon/icons-react/es/Copy';
import Share from '@carbon/icons-react/es/Share';
import Bookmark from '@carbon/icons-react/es/Bookmark';
import Favorite from '@carbon/icons-react/es/Favorite';
import Star from '@carbon/icons-react/es/Star';
import StarFilled from '@carbon/icons-react/es/StarFilled';

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
