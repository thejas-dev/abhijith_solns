"use client"
import {useEffect} from 'react';

export default function ThankYouMessage(argument) {

	return (
        <h1 className="md:text-[15px] text-sm text-center font-semibold text-gray-700">Thank you for completing the registration form, our respective staff will contact you within <span className="text-blue-500">24 hours</span>.</h1>

	)
}