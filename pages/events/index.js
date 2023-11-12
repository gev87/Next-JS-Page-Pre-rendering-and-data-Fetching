import { Fragment } from 'react';
import { useRouter } from 'next/router';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { getAllEvents } from '../../helpers/api-util';
import Head from 'next/head';

function AllEventsPage({events}) {

  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    
    router.push(fullPath);
  }

  return (
    <Fragment>
         <Head>
          <title>All events</title>
          <meta
            name="description"
            content="find a lot of great events that allow you to evolve..."
          />
        </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export async function getStaticProps(){
  const allEvents = await getAllEvents();

  return {
    props:{
      events:allEvents
    },
    revalidate: 60,
  }
}

export default AllEventsPage;
