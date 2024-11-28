import { Card } from '@/components/ui/card';
import { PREVIOUS_EVENTS } from '@/lib/constants';
import { Calendar, Quote } from 'lucide-react';

export function PreviousEvents() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#532516] mb-4">
            Our Success Stories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a look at some of our previous events and see why clients choose
            Liyu Catering for their special occasions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PREVIOUS_EVENTS.map((event) => (
            <Card key={event.title} className="overflow-hidden">
              <div
                className="h-48 w-full"
                style={{
                  backgroundImage: `url(${event.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="w-5 h-5 text-[#E8982E] mr-2" />
                  <span className="text-gray-600">{event.date}</span>
                </div>
                <h3 className="text-xl font-bold text-[#532516] mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="border-t pt-4">
                  <div className="flex items-start">
                    <Quote className="w-5 h-5 text-[#E8982E] mr-2 flex-shrink-0" />
                    <div>
                      <p className="text-gray-600 italic text-sm">
                        "{event.testimonial}"
                      </p>
                      <p className="text-[#532516] font-semibold mt-2">
                        - {event.client}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}