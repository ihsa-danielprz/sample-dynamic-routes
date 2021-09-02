import Head from 'next/head'

import { getAllEvents } from '../../helpers/api-util'

import { useRouter } from 'next/router'

import EventList from '../../components/events/EventList'
import EventsSearch from '../../components/events/EventsSearch'

const Events = ({ events }) => {
  const router = useRouter()

  const handleFindEvents = (year, month) => {
    const fullPath = `/events/${year}/${month}`

    router.push(fullPath)
  }

  return (
    <div>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <EventsSearch onSearch={handleFindEvents} />
      <EventList items={events} />
    </div>
  )
}

export async function getStaticProps() {
  const events = await getAllEvents()

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  }
}

export default Events
