import { getAllEvents } from '../../dummy-data'

import { useRouter } from 'next/router'

import EventList from '../../components/events/EventList'
import EventsSearch from '../../components/events/EventsSearch'

const Events = () => {
  const router = useRouter()
  const events = getAllEvents()

  const handleFindEvents = (year, month) => {
    const fullPath = `/events/${year}/${month}`

    router.push(fullPath)
  }

  return (
    <div>
      <EventsSearch onSearch={handleFindEvents} />
      <EventList items={events} />
    </div>
  )
}

export default Events
