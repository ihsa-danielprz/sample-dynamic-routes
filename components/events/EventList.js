import EventItem from './EventItem'

import classes from './EventList.module.css'

const EventList = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items.map((item) => {
        return <EventItem key={item.id} item={item} />
      })}
    </ul>
  )
}

export default EventList
