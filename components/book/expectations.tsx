import { Card } from '@/components/ui/card';

export function Expectations() {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold text-[#532516] mb-4">
        What to Expect
      </h2>
      <ul className="space-y-2 text-gray-600">
        <li>• Confirmation within 24 hours</li>
        <li>• Detailed consultation session</li>
        <li>• Customized menu planning</li>
        <li>• Professional event coordination</li>
      </ul>
    </Card>
  );
}