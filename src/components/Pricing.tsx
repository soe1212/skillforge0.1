import React, { useState } from 'react';
import { Check, Star, Zap, Building } from 'lucide-react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Basic',
      icon: Star,
      description: 'Perfect for getting started',
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        'Access to free courses',
        'Basic course materials',
        'Community access',
        'Mobile app access',
        'Basic support'
      ],
      buttonText: 'Get Started Free',
      buttonStyle: 'border-2 border-gray-300 text-gray-700 hover:border-purple-600 hover:text-purple-600',
      popular: false
    },
    {
      name: 'Pro',
      icon: Zap,
      description: 'Most popular for serious learners',
      monthlyPrice: 999,
      yearlyPrice: 7999,
      features: [
        'Access to all paid courses',
        'Downloadable resources',
        'Certificates of completion',
        'Priority support',
        'Advanced projects',
        'Offline course access',
        'Progress tracking'
      ],
      buttonText: 'Subscribe Now',
      buttonStyle: 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg',
      popular: true
    },
    {
      name: 'Enterprise',
      icon: Building,
      description: 'For teams and organizations',
      monthlyPrice: null,
      yearlyPrice: null,
      features: [
        'Everything in Pro',
        'Team dashboard',
        'Bulk licenses',
        'Advanced analytics',
        'Custom integrations',
        'Dedicated account manager',
        'Priority customer support'
      ],
      buttonText: 'Contact Sales',
      buttonStyle: 'border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white',
      popular: false
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Learning Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Start learning today with flexible pricing options that scale with your needs
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isYearly ? 'bg-purple-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`font-medium ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
              <span className="ml-1 text-green-600 text-sm font-semibold">(Save 33%)</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-sm border-2 p-8 transition-all duration-300 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-purple-500 shadow-lg transform hover:-translate-y-2' 
                    : 'border-gray-200 hover:border-purple-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600' 
                      : 'bg-gray-100'
                  }`}>
                    <IconComponent className={`w-8 h-8 ${plan.popular ? 'text-white' : 'text-gray-600'}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  <div className="mb-6">
                    {price === null ? (
                      <div className="text-3xl font-bold text-gray-900">Custom</div>
                    ) : price === 0 ? (
                      <div className="text-3xl font-bold text-gray-900">Free</div>
                    ) : (
                      <div>
                        <span className="text-3xl font-bold text-gray-900">₹{price.toLocaleString()}</span>
                        <span className="text-gray-600">/{isYearly ? 'year' : 'month'}</span>
                      </div>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${plan.buttonStyle}`}>
                  {plan.buttonText}
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            All plans include a 30-day money-back guarantee. Need help choosing?{' '}
            <a href="#" className="text-purple-600 hover:underline font-medium">
              Compare features
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;