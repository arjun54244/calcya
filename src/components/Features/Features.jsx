import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className=" bg-[#f89b18] bg-opacity-15 py-10 md:py-20 lg:px-3"
      >
        <div className="container rounded-lg bg-[#f89b18] bg-opacity-25  p-9">
          <SectionTitle
            title="How to Save Taxes ?"
            paragraph="Are you looking to keep more of your hard-earned money? Discover practical tips and strategies for reducing your tax burden with our tax-saving guide. Whether you are an individual or a business owner, we have got you covered. Explore smart investments, deductions, credits, and more. Let us start saving!"
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
