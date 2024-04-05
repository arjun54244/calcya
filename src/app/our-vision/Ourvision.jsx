import Image from "next/image";
import SectionTitle from "../../components/Common/SectionTitle";
import Card from "../../components/Common/Card";
const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const Ourvision = () => {
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
                title="Empowering for Financial Success"
                paragraph="Calcya aspires to be the leading Professional Tax Services Business Consultation driven by unwavering ethical standards. Our vision is to deliver exceptional value to our customers, employees, communities, and partners through innovative and high-quality services across all areas of expertise. We are committed to continuous growth, strategic advancements, and exceeding client expectations."
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
                      title={"Highly Professional and Personalised Services"}
                      paragraph="We focus on providing highly professional and personalised services catering to each client’s unique needs. We continuously enhance our team’s capabilities to stay at the forefront of emerging trends and deliver outstanding service. By prioritising individual attention and customised solutions, we aim to establish enduring partnerships built on trust."
                    />
                    <div className="p-4">
                      <Card
                        title="Expanding and Diversifying Services"
                        paragraph="We remain agile in response to industry developments and expand our service offerings accordingly. Our vision includes diversifying our services to meet the evolving needs of our clients across different segments. By staying proactive and adaptive, we ensure our clients receive comprehensive, up-to-date solutions that drive their success"
                      />
                    </div>
                    <div className="p-4">
                      <Card
                        title="Value for Money and Trustworthiness"
                        paragraph="We recognise the importance of providing value for money in our services. Our vision is rooted in trustworthiness and a commitment to excellence. As a dependable partner, we handle tax and business matters with the utmost professionalism and integrity. Clients rely on our knowledge and expertise, and we strive to deliver beyond their expectations."
                      />
                    </div>
                    {/* <!-- Row 2 --> */}

                    <div className="p-4 lg:mt-14">
                      <Card
                        title="Strategic Growth, Exceptional Service, and Community Engagement"
                        paragraph="Our vision encompasses strategic growth, exceptional service, and active community engagement. We aim to be recognised as a trustworthy tax and business consulting firm in India. We positively impact our client’s success and foster lasting relationships through ongoing innovations and community involvement."
                      />
                    </div>
                    <div className="p-4">
                      <Card
                        title="Join Us in Realising Our Vision"
                        paragraph="Join Calcya on the journey towards seamless tax compliance and business success. Experience our highly professional and personalised services, benefiting from our expertise, integrity, and dedication to excellence. Together, we can achieve your financial goals, thrive in a dynamic business landscape, and establish a lasting legacy."
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

export default Ourvision;
