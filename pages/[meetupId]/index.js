import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image='https://i.picsum.photos/id/973/1000/500.jpg?hmac=NUzSwM8H8GgVsaV5ZP96316ZT2MA4d5uzAaq7l0v2ww'
      title='A First Meetup'
      address='Some Street 67, 231 Some City'
      description='The meetup description'
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ]
  }
}

export async function getStaticProps(context) {

  const meetupId = context.params;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://i.picsum.photos/id/973/1000/500.jpg?hmac=NUzSwM8H8GgVsaV5ZP96316ZT2MA4d5uzAaq7l0v2ww',
        address: 'Some address 6, 123456 Some City',
        description: 'This is a first meetup',
      },
    },
  };
}

export default MeetupDetails;
