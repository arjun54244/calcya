import Image from "next/image";
import SectionTitle from "../../components/Common/SectionTitle";
import Card from "../../components/Common/Card";
const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const OurValues = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Guiding Principles at Calcya"
                paragraph="Calcya embraces a set of core values that shape our business and define our commitment to excellence, integrity, client-centricity, collaboration, continuous improvement, and community engagement. These values guide our actions and ensure we deliver exceptional client services."
                mb="44px"
              />
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/about-image.svg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
            <div className="lg:flex lg:justify-center">
              <div className="mt-9 lg:flex">
                <div>
                  <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {/* <!-- Row 1 --> */}
                    <Card
                      title={"Expertise and Business-Focused Approach"}
                      paragraph="At Calcya, we take pride in our reputation as subject and industry experts. Our team of Partners combines extensive experience with a business-focused approach to deliver high-quality services tailored to our client’s needs. Our expertise lies in developing innovative solutions that address complex challenges across industries and borders."
                    />
                    <div className="p-4">
                      <Card
                        title="Integrity and Tailored Compliance Solutions"
                        paragraph="Integrity is the foundation of our work. We combine global best practices and adapt them to meet local compliance needs. Our transparent and efficient execution, combined with a deep understanding of the Indian regulatory landscape, enables us to propose dynamic and business-friendly solutions to our clients."
                      />
                    </div>
                    <div className="p-4">
                      <Card
                        title="Client-Centricity and Collaboration"
                        paragraph="Our clients are at the heart of our business. We prioritise their needs and goals by adopting a client-centric approach. Through open communication and collaboration, we develop a comprehensive understanding of their businesses and deliver tailored solutions that exceed expectations. Our work culture fosters collaboration, enabling us to leverage diverse perspectives and expertise for optimal outcomes."
                      />
                    </div>
                    {/* <!-- Row 2 --> */}
                    <div className="p-4">
                      <Card
                        title="Continuous Improvement and Industry Insights"
                        paragraph="We believe in continuous improvement to stay ahead of industry trends. Our team is dedicated to ongoing professional development, ensuring we offer our clients the latest insights, innovative strategies, and best practices. We break down the complexities of the Indian regulatory landscape, providing clear guidance and prioritising requirements to deliver dynamic and business-friendly solutions."
                      />
                    </div>
                    <div className="p-4 lg:mt-14">
                      <Card
                        title="Community Engagement and Positive Impact"
                        paragraph="Calcya is committed to making a positive impact in the community. We actively engage in initiatives that promote education, youth empowerment, and financial literacy."
                      />
                    </div>
                    <div className="p-4">
                      <Card
                        title="Join Us in Embracing Our Values"
                        paragraph="Join Calcya and experience our commitment to excellence, integrity, client-centricity, and continuous improvement. Benefit from our expertise in navigating tax complexities and our tailored compliance solutions. Together, we can achieve your goals and ensure compliance in an ever-changing regulatory landscape."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
