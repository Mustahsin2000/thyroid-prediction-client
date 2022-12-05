import React from 'react';
import people1 from '../../../assests/testimonials/rafi.jpg'
import people2 from '../../../assests/testimonials/ananda.jpg'
import people3 from '../../../assests/testimonials/pronob.jpg'
import Review from './Review';
const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Mustahsin',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'Australia',
            img: people1
        },
        {
            _id: 2,
            name: 'Ananda',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'canada',
            img: people2
        },
        {
            _id: 3,
            name: 'Pronob',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img: people3
        }
    ]
    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-3xl text-primary font-bold'>Testimonials</h4>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
               
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;