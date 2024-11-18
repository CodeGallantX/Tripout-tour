import members from '../data/team.json';
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa6';

const TrendingDestinations = () => {
    return (
        <div>
            <section id="aboutIntro" className="px-10 xl:px-36 py-20">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col items-center justify-between gap-6">
                        <div className="w-full flex flex-col items-center justify-center gap-4">
                            <h4 className="font-bold text-[#F7921E] font-serif">
                                <img src="/airplane.png" alt="icon" className="inline-block translate-y-0.5" />
                                &nbsp; Team Members
                            </h4>
                            <h2 className="xl:text-5xl md:text-4xl text-3xl font-bold font-serif text-center">
                                Meet Our Expert Travel Team
                            </h2>
                        </div>
                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {members.map((member, index) => (
                                    <div key={index} className="relative group">
                                        <div className="relative flex flex-col items-center cursor-pointer justify-center py-6 px-8 rounded-xl border border-gray-400 hover:shadow-lg transition-all duration-300 ease-in-out">
                                            <div className="w-52 h-52">
                                            <img src={member.image} alt={member.name} className="w-full h-full object-cover object-center rounded-full" />
                                            </div>
                                            <h3 className="font-serif font-bold text-xl text-center mt-6">{member.name}</h3>
                                            <span className="text-sm text-gray-700 text-center">{member.role}</span>

                                            <div className="absolute bg-black opacity-0 w-1/4 h-1/4 group-hover:opacity-80 group-hover:w-full group-hover:h-full flex flex-col justify-center items-center gap-4 transition-all duration-300 rounded-xl">
                                                <div className="flex gap-4 z-20">
                                                    {member.linkedin && (
                                                        <Link to={member.linkedin} className="text-white translate-y-10 group-hover:translate-y-0 transition-all duration-500 delay-50 ease-in-out ">
                                                            <FaLinkedin size={24} className="hover:text-[#f7921e] transition-all duration-200 ease-in-out" />
                                                        </Link>
                                                    )}
                                                    {member.facebook && (
                                                        <Link to={member.facebook} className="text-white translate-y-10 group-hover:translate-y-0 transition-all duration-500 delay-100 ease-in-out ">
                                                            <FaFacebook size={24} className="hover:text-[#f7921e] transition-all duration-200 ease-in-out" />
                                                        </Link>
                                                    )}
                                                    {member.instagram && (
                                                        <Link to={member.instagram} className="text-white translate-y-10 group-hover:translate-y-0 transition-all duration-500 delay-200 ease-in-out ">
                                                            <FaInstagram size={24} className="hover:text-[#f7921e] transition-all duration-200 ease-in-out" />
                                                        </Link>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TrendingDestinations;
