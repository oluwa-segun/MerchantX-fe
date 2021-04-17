import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Section from '../../components/Section';
import Testimonial from '../../components/Testimonial';
import Subscription from '../../components/Subscription';

export default function LandingPage() {
    return (
        <div>
            <Hero />
            <Section />
            <Testimonial />
            <Subscription />
        </div>
    )
}
