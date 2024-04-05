import Image from "next/image";
import Card from "../../components/Common/Card";
import Link from "next/link";
const FinancialTools = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <ul className="list-none">
                <Link href="/sipcalculator">
                  <li className="mb-3 flex justify-center rounded-3xl bg-[#f89b18] bg-opacity-90 p-4 text-xl font-semibold text-white shadow-lg hover:bg-opacity-100">
                    SIP Calculator
                  </li>
                </Link>
                <Link href="/emicalculator">
                  <li className="mb-3 flex justify-center rounded-3xl bg-[#f89b18] bg-opacity-90 p-4 text-xl font-semibold text-white shadow-lg hover:bg-opacity-100">
                    EMI Calculator
                  </li>
                </Link>
              </ul>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/tools/calculator.svg"
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

export default FinancialTools;
