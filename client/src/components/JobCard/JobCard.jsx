import { Link } from "react-router-dom";
import { Briefcase, MapPin, Users, Clock } from "lucide-react";

const JobCard = ({ job }) => {
  const getCompanyColor = (company) => {
    const colors = {
      Google: "bg-blue-100",
      Microsoft: "bg-purple-100",
      Amazon: "bg-orange-100",
      TCS: "bg-red-100",
      Flipkart: "bg-yellow-100",
      Wipro: "bg-green-100",
      Infosys: "bg-indigo-100",
      IBM: "bg-cyan-100",
    };
    return colors[company] || "bg-gray-100";
  };

  const getCompanyTextColor = (company) => {
    const colors = {
      Google: "text-blue-700",
      Microsoft: "text-purple-700",
      Amazon: "text-orange-700",
      TCS: "text-red-700",
      Flipkart: "text-yellow-700",
      Wipro: "text-green-700",
      Infosys: "text-indigo-700",
      IBM: "text-cyan-700",
    };
    return colors[company] || "text-gray-700";
  };

  const getJobTypeColor = (type) => {
    const colors = {
      "Full Time": "bg-green-100 text-green-700",
      "Part Time": "bg-blue-100 text-blue-700",
      Remote: "bg-purple-100 text-purple-700",
      Hybrid: "bg-orange-100 text-orange-700",
    };
    return colors[type] || "bg-gray-100 text-gray-700";
  };

  return (
    <Link to={`/jobs/${job.id}`} className="block">
      <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-all duration-200 hover:border-gray-300 cursor-pointer">
        {/* Header Section */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <div
                className={`w-10 h-10 rounded-lg ${getCompanyColor(
                  job.company
                )} flex items-center justify-center font-bold ${getCompanyTextColor(
                  job.company
                )}`}
              >
                {job.company.charAt(0)}
              </div>
              <div>
                <p className="text-xs text-gray-500">{job.company}</p>
                <p className={`text-xs font-medium ${getCompanyTextColor(job.company)}`}>
                  {job.company}
                </p>
              </div>
            </div>
          </div>
          <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium whitespace-nowrap ${getJobTypeColor(
              job.jobType
            )}`}
          >
            {job.jobType}
          </span>
        </div>

        {/* Job Title */}
        <h2 className="text-lg font-semibold text-gray-900 mb-3">{job.title}</h2>

        {/* Job Details Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin size={16} className="text-gray-400" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Briefcase size={16} className="text-gray-400" />
            <span>{job.experience}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock size={16} className="text-gray-400" />
            <span>{job.postedDays} days ago</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Users size={16} className="text-gray-400" />
            <span>{job.applicants} applicants</span>
          </div>
        </div>

        {/* Salary */}
        <div className="mb-4 pb-4 border-b border-gray-100">
          <p className="text-sm font-medium text-gray-900">{job.salary}</p>
        </div>

        {/* Skills Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {job.skills.slice(0, 3).map((skill, idx) => (
            <span
              key={idx}
              className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Description Preview */}
        <p className="text-sm text-gray-600 line-clamp-2 mb-4">{job.description}</p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">
            {job.applicants > 100 ? "Popular" : "Recent"}
          </span>
          <button className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors duration-200">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
