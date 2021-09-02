import Head from 'next/head'

import { Fragment } from 'react'

import { getFeaturedEvents, getEventById } from '../../helpers/api-util'
import EventSummary from '../../components/event-detail/EventSummary'
import EventLogistics from '../../components/event-detail/EventLogistics'
import EventContent from '../../components/event-detail/EventContent'
import ErrorAlert from '../../components/ui/ErrorAlert'

const EventDetail = ({ selectedEvent }) => {
  if (!selectedEvent) {
    return (
      <div className="center">
        <p>No event found!</p>
      </div>
    )
  }

  return (
    <Fragment>
      <Head>
        <title>{selectedEvent.title}</title>
        <meta name="description" content={selectedEvent.description} />
      </Head>
      <EventSummary title={selectedEvent.title} />
      <EventLogistics
        date={selectedEvent.date}
        address={selectedEvent.location}
        image={selectedEvent.image}
        imageAlt={selectedEvent.title}
      />
      <EventContent>
        <p>{selectedEvent.description}</p>
      </EventContent>
    </Fragment>
  )
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId

  const event = await getEventById(eventId)

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  }
}

export async function getStaticPaths(context) {
  const events = await getFeaturedEvents()

  const paths = events.map((event) => ({ params: { eventId: event.id } }))

  return {
    paths: paths,
    fallback: true,
  }
}

export default EventDetail
