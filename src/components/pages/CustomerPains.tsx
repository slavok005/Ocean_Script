import Image from "next/image";

export default function CustomerPains() {
  return (
    <section className="max-w-[1330px] w-full mx-2 py-2 mx-auto px-6 sm:px-10 rounded-lg relative bg-white text-black">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold pl-32 pb-2 sm:pb-4 text-center sm:text-left">
          Customer pains
        </h2>
        <button className="mt-2 sm:mt-0 border border-gray-400 rounded-full px-6 py-2 sm:py-2 text-sm sm:text-base hover:bg-gray-100 font-medium">
          Pains
        </button>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4 flex justify-center items-center">
          <Image
            src="/Cone.jpg"
            alt="Pains Illustration"
            width={256}
            height={256}
            className="w-40 sm:w-52 md:w-64 h-auto"
          />
        </div>
        <div className="col-span-12 md:col-span-8 grid grid-cols-2 gap-6 w-full">
          <div className="space-y-10 w-full">
            {pains.map((pain, index) => (
              <div key={index} className="flex flex-col">
                <div className="text-blue-500 font-semibold text-lg">
                  (0{index + 1})
                </div>
                <div className="font-bold text-lg sm:text-xl break-words">
                  {pain.title}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-3 w-full">
            {pains.map((pain, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg p-4 bg-gray-50 text-gray-600 text-sm sm:text-base break-words overflow-hidden"
              >
                {pain.description}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const pains = [
  {
    title: "No clear site development plan",
    description:
      "We analyze the niche and create a project tailored to business goals.",
  },
  {
    title: "Outdated or inconvenient design",
    description: "We offer modern UI/UX that improves engagement and sales.",
  },
  {
    title: "No clarity in customer management",
    description:
      "We implement CRM, where all processes are streamlined and automated, helping to maintain and develop the client base.",
  },
  {
    title: "Lack of knowledge in the field of AI",
    description:
      "We integrate AI solutions that provide accurate analytics and simplify decision-making, taking business efficiency to the next level.",
  },
  {
    title: "Chaotic ads with low effectiveness",
    description:
      "We develop a promotion strategy and set up precise targeting to ensure a stable flow of applications.",
  },
];
