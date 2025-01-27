import React from 'react';
import { Star, ShoppingBag } from 'lucide-react';

const equipment = [
  {
    name: 'Precision coffee scale',
    image: 'https://images.unsplash.com/photo-1709830271613-288bd26a1f6a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 27.99,
    rating: 4.6,
    description: 'Digital scale with 0.1g accuracy and built-in timer for precise brewing.',
    link: 'https://www.amazon.com/Greater-Goods-Digital-Coffee-Scale/dp/B09B4CB7C1/ref=sr_1_1_sspa?crid=3CPDE8QCX3O58&dib=eyJ2IjoiMSJ9.XSDZEIbvdQfXdZAfwoHJY-ZjzXaEVPBUV2-slJs47LsCQmJVRf4e8Bqpr7vTCqH1PXWp-bx4ySSDMpjpqOQt6iOGU41xrEw6xpWsUWGSJ8kfT0zoBEmfoDLr15zfBCEPuPt2HtXDYwjAed39sgDpcujVzcqsKcY_ieAnzM2WrPQjtBSFZv4B5dRhxMWONaqyOh-kKpsBTo2Oa-XipD3mbZ2_LKTJV1NiD6xoCZBx-WaYqKIGc-g5HZDAF_2NF_fraFmWQjBM7ymrSLQ6ch-82UuejtKjqwwO6X6n3tEb9v8.OFiWKCbvs-HEvypXIuJdlTGGnjf9uhALGXE9cue7PfI&dib_tag=se&keywords=Precision%2Bcoffee%2Bscale&qid=1737994706&sprefix=precision%2Bcoffee%2Bscale%2Caps%2C191&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1',
  },
  {
    name: 'Gooseneck kettle',
    image: 'https://images.unsplash.com/photo-1570569962804-5377da5be035?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 69.99,
    rating: 4.5,
    description: 'Temperature control kettle with precise pour control.',
    link: 'https://www.amazon.com/Mecity-Electric-Gooseneck-Automatic-Temperature/dp/B09TB23QKJ/ref=sr_1_1_sspa?crid=2WSJCHXMPUGA3&dib=eyJ2IjoiMSJ9.kabsYlii7y2S-di-lyyW0dvMbQM6P1x5cEhEqKba9KDLZvzR1lvRH-sx38aed-neQzgM4FGDFEsua6-mQwRoNvMYT0-zjEdExC42Ry1duRD9fWnhD4vkyUFqiW0r2Qi1bh0M5Lp9udn90dKnWDNKSkcG0x4KqoiTBRoipYu9AQWXlaFLnC-F0iU_IEgeBmRBOGA7vWFZnXG5FNuNEGMMqv6C6RYX8E89_rUHFYp-lbKQMeJ4q_ajPgP6of7CS76b0h97SkW_GcEoJMhm-GoHBlWS7suscF582KS3Inzq_zE.PZz-a3KuENs5HGsxQtv0feXiIdULC7YUXqGA1nyhT4c&dib_tag=se&keywords=Gooseneck%2Bkettle&qid=1737994675&sprefix=gooseneck%2Bkettle%2Caps%2C162&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1'
  },
  {
    name: 'Burr grinder',
    image: 'https://images.pexels.com/photos/13272708/pexels-photo-13272708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 89.99,
    rating: 4.5,
    description: 'Consistent grind size for optimal extraction.',
    link: 'https://www.amazon.com/SHARDOR-Precision-Touchscreen-Adjustable-Anti-static/dp/B0D8XY968Z/ref=sr_1_1_sspa?dib=eyJ2IjoiMSJ9.dE0p5l0NPHH0iRQv-GCg8-y2xuhgzoop9-Xq-0S_05tKTcdbfq0i9lDuKw2FIiumGKw5qi8Oevy5BQ0KqIT69tSOPOfVgz9pQwWIfauJZiU2juAdb2vH21W1QqRw0PsjZZtEQFocuQ_Dh-VVcNLr4YndFq-AHp2liqdZYHp5mgRqFF10ErGxvoV9r3-zvII3GxHlJHmoxl1vP4sZNLA1oEVPD5dHWGUJaVZWQpTAYT76gTOKvgDAYaclYuglw6N0b5lMy2R2MM2U8LXN2ouey4c2CLtbVqEg08cLqEFAYqY.U56_l7G6jpqcIb6GGw0hjBGjDIfm0W8S2lteCByfLuc&dib_tag=se&keywords=Burr+grinder&qid=1737994741&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'
  },
];

const Equipment = () => {
  return (
    <section id="equipment" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Essential Equipment
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Quality tools make a significant difference in your coffee brewing journey.
            Here's our curated selection of must-have equipment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipment.map((item) => (
            <div key={item.name} className="card">
              <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-sm text-gray-600">{item.rating}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-coffee">
                  ${item.price}
                </span>
                <a href={item.link} target="_blank">
                  <button className="flex items-center gap-2 px-4 py-2 bg-coffee text-white rounded-lg hover:bg-coffee-dark transition-colors duration-300">
                    <ShoppingBag className="w-4 h-4" />
                    Buy
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipment;