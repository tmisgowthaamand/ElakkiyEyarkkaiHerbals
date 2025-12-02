import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface PolicyLayoutProps {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}

export const PolicyLayout = ({ title, subtitle, children }: PolicyLayoutProps) => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50/50">
            <main className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <Button
                        variant="outline"
                        onClick={() => navigate("/")}
                        className="bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back
                    </Button>
                </div>

                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-accent mb-4">{title}</h1>
                    {subtitle && <p className="text-xl text-muted-foreground">{subtitle}</p>}
                </div>

                <div className="max-w-4xl mx-auto bg-card rounded-xl shadow-sm border border-border/50 p-8 md:p-12">
                    <div className="prose prose-stone max-w-none dark:prose-invert">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
};
