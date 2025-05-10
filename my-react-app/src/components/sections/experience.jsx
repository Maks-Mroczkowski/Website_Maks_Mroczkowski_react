export const Experience = () => {
    return <section id="experience" className="min-h-screen flex items-center justify-center py-20">

        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-green-500 bg-clip-text text-transparent text-center">
                Experience
            </h2>



            <div className="grid grid-cols-1 md:grid-cols2 gap-6 mt-8">
                <div className=" p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Incoming Data Science Intern </h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ">
                        <li>
                            <strong>Purdue University </strong> 
                        </li>
                        <li>
                            Selected as 1 out of 350+ applicants as part of the Purdue SURF programme. I will be working with 150+ patients by analysing their pancreatic tumour scans. 
                        </li>

                        <li>
                            I will build data pipelines to extract and process data from 150+ segmented scans, then aid in integrating them into machine learning algorithms.
                        </li>

                        <li>
                            Our team is hoping these machine learning algorithms can give us insights into our data and our patients that can make breakthroughts in treating pancreatic cancer - one of the deadliest cancers known.
                        </li>
                    </ul>

                </div>
            </div>




        </div>
    </section>
}