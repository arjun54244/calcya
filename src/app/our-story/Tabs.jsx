"use client";

import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs() {
  let [categories] = useState({
    "The Genesis": [
      {
        id: 1,
        description:
          "Founded by a team of passionate professionals, including Chartered Accountants, Advocates, and IT experts, Calcya emerged from a deep understanding of the challenges individuals and businesses face in meeting their tax obligations. We aimed to provide comprehensive solutions at reasonable intervals, simplifying tax complexities for our clients.",
        title: "",
      },
    ],
    "The Compliance People": [
      {
        id: 1,
        description:
          "As the compliance people, we are committed to upholding the highest standards. Our mission is to empower clients to navigate tax obligations while optimising financial resources. By staying ahead of ever-evolving tax regulations, we equip them with the tools and knowledge needed for compliance and informed decision-making.",
        title: "",
      },
    ],
    "The Core Values": [
      {
        id: 1,
        title: "Expertise: ",
        description:
          "With a strong foundation of expertise and experience, our team continuously enhances their knowledge to deliver cutting-edge solutions tailored to client’s needs.",
      },
      {
        id: 2,
        title: "Integrity: ",
        description:
          "We provide honest, transparent, and unbiased advice, building trust and instilling confidence in our clients.",
      },
      {
        id: 3,
        title: "Client-Centric Approach: ",
        description:
          "Client needs are our priority. We listen, understand unique circumstances, and deliver personalised solutions to address challenges and goals.",
      },
      {
        id: 4,
        title: "Excellence: ",
        description:
          " We strive for excellence in all aspects, from accurate tax filings to responsive client service, aiming to surpass expectations and achieve exceptional results.",
      },
    ],
    "The Future Ahead": [
      {
        id: 1,
        description:
          "Looking ahead, Calcya remains committed to innovation, education, and client satisfaction. We ensure we meet evolving needs by leveraging technology, expanding our knowledge base, and adapting to evolving tax landscapes.",
        title: "",
      },
    ],
  });

  return (
    <div className="w-full max-w-md px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-[#f89b18] p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                  "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white text-blue-700 shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100"
                  >
                    <h3 className="text-sm font-medium text-[#f89b18]">
                      {post.title}
                    </h3>
                    <p className="text-sm text-body-color">
                      {post.description}
                    </p>
                    <div
                      className={classNames(
                        "absolute inset-0 rounded-md",
                        "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
