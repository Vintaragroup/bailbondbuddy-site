import { FileText } from 'lucide-react';
import { Button } from './ui/button';

interface PlaceholderPageProps {
  title: string;
  onNavigate: (page: string) => void;
}

export function PlaceholderPage({ title, onNavigate }: PlaceholderPageProps) {
  return (
    <div className="flex flex-col min-h-[60vh] items-center justify-center">
      <div className="container mx-auto px-4 text-center space-y-6">
        <FileText className="h-16 w-16 mx-auto text-muted-foreground" />
        <h1 className="text-4xl md:text-6xl">{title}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          This page contains important legal information and policies. Content coming soon.
        </p>
        <Button onClick={() => onNavigate('home')}>
          Return to Home
        </Button>
      </div>
    </div>
  );
}
