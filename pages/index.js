import Head from 'next/head';
import { Fragment } from 'react';
import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://i.picsum.photos/id/973/1000/500.jpg?hmac=NUzSwM8H8GgVsaV5ZP96316ZT2MA4d5uzAaq7l0v2ww',
    address: 'Some address 6, 123456 Some City',
    description: 'This is a first meetup'
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://i.picsum.photos/id/973/1000/500.jpg?hmac=NUzSwM8H8GgVsaV5ZP96316ZT2MA4d5uzAaq7l0v2ww',
    address: 'Some address 112, 23124 Some City',
    description: 'This is a second meetup'
  }
]
const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>My Meetups</title>
        <meta
          name='description'
          content='This is huge list of my meetups in this month'
        />
      </Head>
      <MeetupList meetups={props.meetups}/>
    </Fragment>
  )
};

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API
  
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}

export default HomePage;
