/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

import classes from './EventItem.module.css'
import DateIcon from '../icons/DateIcon'
import AddressIcon from '../icons/AddressIcon'
import ArrowRightIcon from '../icons/ArrowRightIcon'
import Button from '../ui/Button'

const EventItem = ({ item }) => {
  const humanReadableDate = new Date(item.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const formattedAddress = item.location.replace(', ', '\n')
  const exploreLink = `/events/${item.id}`

  return (
    <li className={classes.item}>
      <img src={`/${item.image}`} alt={item.title} />
      <div className={classes.content}>
        <div className={classes.sumary}>
          <h2>{item.title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  )
}

export default EventItem
