import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, ClockIcon } from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  // This would typically come from your authentication context
  const user = {
    name: "John Doe",
    role: "patient", 
  }

  const upcomingAppointments = [
    { id: 1, doctor: "Dr. Sarah Smith", date: "2023-06-15", time: "10:00 AM", specialty: "Cardiology" },
    { id: 2, doctor: "Dr. Michael Johnson", date: "2023-06-20", time: "2:30 PM", specialty: "Dermatology" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Welcome, {user.name}</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
            <CardDescription>You have {upcomingAppointments.length} upcoming appointments</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/appointments">View All Appointments</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Find a Doctor</CardTitle>
            <CardDescription>Search for specialists in your area</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/find-doctor">Find a Doctor</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>My Profile</CardTitle>
            <CardDescription>View and edit your personal information</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/profile">Edit Profile</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Appointments</CardTitle>
        </CardHeader>
        <CardContent>
          {upcomingAppointments.length > 0 ? (
            <ul className="space-y-4">
              {upcomingAppointments.map((appointment) => (
                <li key={appointment.id} className="bg-gray-100 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{appointment.doctor}</h3>
                      <p className="text-sm text-gray-600">{appointment.specialty}</p>
                    </div>
                    <div className="text-right">
                      <p className="flex items-center">
                        <CalendarIcon className="w-4 h-4 mr-1" /> {appointment.date}
                      </p>
                      <p className="flex items-center">
                        <ClockIcon className="w-4 h-4 mr-1" /> {appointment.time}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>You have no upcoming appointments.</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

