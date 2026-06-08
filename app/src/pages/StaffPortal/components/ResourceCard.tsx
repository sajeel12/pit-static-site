import { FileText, Download, FileSpreadsheet } from 'lucide-react';
import type { PortalResource } from '../data';

interface ResourceCardProps {
  resource: PortalResource;
  sectionId: string;
}

const fileTypeConfig = {
  PDF: { icon: FileText, color: '#da1e28', bg: '#da1e2810' },
  Word: { icon: FileText, color: '#1565c0', bg: '#1565c010' },
  Excel: { icon: FileSpreadsheet, color: '#198038', bg: '#19803810' },
};

export default function ResourceCard({ resource, sectionId }: ResourceCardProps) {
  const config = fileTypeConfig[resource.fileType];
  const Icon = config.icon;

  return (
    <div className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200 p-5">
      <div className="flex items-start gap-4">
        {/* File type icon */}
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: config.bg }}
        >
          <Icon className="w-5 h-5" style={{ color: config.color }} />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="carbon-heading-02 text-[#161616] truncate">{resource.title}</h4>
            <span
              className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider flex-shrink-0"
              style={{ backgroundColor: config.bg, color: config.color }}
            >
              {resource.fileType}
            </span>
          </div>
          <p className="carbon-body-02 text-gray-600 text-sm leading-relaxed mb-3">
            {resource.description}
          </p>
          <a
            href={`/portal/${sectionId}/${resource.fileName}`}
            download
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0f62fe] hover:text-[#0353e9] transition-colors"
          >
            <Download className="w-4 h-4" />
            Download
          </a>
        </div>
      </div>
    </div>
  );
}
