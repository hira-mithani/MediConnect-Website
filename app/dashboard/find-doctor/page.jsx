import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { StarIcon } from "lucide-react"

export default function FindDoctor() {
  const doctors = [
    { id: 1, name: "Dr. Sarah Smith", specialty: "Cardiology", rating: 4.8, availableSlot: "Today, 2:00 PM" },
    { id: 2, name: "Dr. Michael Johnson", specialty: "Dermatology", rating: 4.6, availableSlot: "Tomorrow, 10:00 AM" },
    { id: 3, name: "Dr. Emily Brown", specialty: "Pediatrics", rating: 4.9, availableSlot: "Today, 4:30 PM" },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Find a Doctor</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <Input placeholder="Search by name or specialty" className="flex-grow" />
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Specialty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cardiology">Cardiology</SelectItem>
                <SelectItem value="dermatology">Dermatology</SelectItem>
                <SelectItem value="pediatrics">Pediatrics</SelectItem>
                <SelectItem value="neurology">Neurology</SelectItem>
              </SelectContent>
            </Select>
            <Button>Search</Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <Card key={doctor.id}>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">{doctor.name}</h3>
              <p className="text-gray-600 mb-2">{doctor.specialty}</p>
              <div className="flex items-center mb-2">
                <StarIcon className="w-5 h-5 text-yellow-400 mr-1" />
                <span>{doctor.rating}</span>
              </div>
              <p className="text-sm text-gray-500 mb-4">Next available: {doctor.availableSlot}</p>
              <Button className="w-full">Book Appointment</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

