import React from 'react'
import CardPricing from '@/components/molecules/CardPricing'

export default function index() {
  return (
   <>
    <div id="pricing" className="cards-2">
        <div className="absolute bottom-0 w-full h-40 bg-white"></div>
        <div className="container px-4 pb-px sm:px-8">
          <h2 className="mb-2.5 text-white lg:max-w-xl lg:mx-auto">
            Pricing subscribe options
          </h2>
          <p className="mb-16 text-white lg:max-w-3xl lg:mx-auto">
            Our pricing plans are setup in such a way that any user can start
            enjoying Pavo without worrying so much about costs. They are flexible
            and work for any type of industry
          </p>

          <CardPricing />
          <CardPricing />
          <CardPricing />
        </div>
      </div>
  </>  
  )
}
