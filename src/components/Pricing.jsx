import Section from "./Section";
import { carLogo, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="relative hidden justify-center lg:flex">
          <img
            src={carLogo}
            className="relative z-1"
            width={500}
            height={500}
            alt="Sphere"
          />
          <div className="pointer-events-none absolute left-1/2 top-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading title="Pay once, use forever" />

        <div className="relative">
          <PricingList />
        </div>

        <div className="mt-10 flex justify-center">
          <a
            className="border-b font-code text-xs font-bold uppercase"
            href="/pricing"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
