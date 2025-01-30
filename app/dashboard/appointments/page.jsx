import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CalendarIcon } from "lucide-react"

export default function Appointments() {
  const appointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Smith",
      specialty: "Cardiology",
      date: "2023-06-15",
      time: "10:00 AM",
      location: "Main Hospital, Room 302",
    },
    {
      id: 2,
      doctor: "Dr. Michael Johnson",
      specialty: "Dermatology",
      date: "2023-06-20",
      time: "2:30 PM",
      location: "City Clinic, Room 105",
    },
    {
      id: 3,
      doctor: "Dr. Emily Brown",
      specialty: "Pediatrics",
      date: "2023-06-25",
      time: "11:15 AM",
      location: "Children's Hospital, Room 201",
    },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>My Appointments</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Doctor</TableHead>
                <TableHead>Specialty</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {appointments.map((appointment) => (
                <TableRow key={appointment.id}>
                  <TableCell>{appointment.doctor}</TableCell>
                  <TableCell>{appointment.specialty}</TableCell>
                  <TableCell>{appointment.date}</TableCell>
                  <TableCell>{appointment.time}</TableCell>
                  <TableCell>{appointment.location}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" className="mr-2">
                      Reschedule
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 hover:bg-red-100">
                      Cancel
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Book New Appointment</CardTitle>
        </CardHeader>
        <CardContent>
          <Button>
            <CalendarIcon className="mr-2 h-4 w-4" /> Schedule Appointment
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

