import { Card, CardContent } from "@/components/ui/card";

const CancellationPolicy = () => {
    return (
        <Card className="p-3 shadow-none">
            <CardContent className="m-0 p-0">
                <h6 className="text-lg font-semibold">Cancellation Policy</h6>
                <p className="text-muted-foreground text-sm">Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided, if applicable.</p>
            </CardContent>
        </Card>
    );
};

export default CancellationPolicy;