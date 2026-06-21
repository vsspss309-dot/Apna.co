import { Link } from "react-router-dom";
import { MapPin, Briefcase } from "lucide-react";
import jobs from "../../data/jobs.json";

const RelatedJobs = ({ currentJobId }) => {
  const relatedJobs = jobs
    .filter((job) => job.id !== currentJobId)
    .slice(0, 3);

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

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">You might also like</h2>
      <div className="space-y-4">
        {relatedJobs.map((job) => (
          <Link
            key={job.id}
            to={`/jobs/${job.id}`}
            className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all hover:border-gray-300"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`w-8 h-8 rounded ${getCompanyColor(
                      job.company
                    )} flex items-center justify-center text-sm font-bold ${getCompanyTextColor(
                      job.company
                    )}`}
                  >
                    {job.company.charAt(0)}
                  </div>
                  <p className="text-sm text-gray-600">{job.company}</p>
                </div>
                <h3 className="font-semibold text-gray-900">{job.title}</h3>
                <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase size={14} />
                    {job.experience}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">{job.salary}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link
        to="/"
        className="block mt-6 w-full text-center py-2 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
      >
        Browse All Jobs
      </Link>
    </div>
  );
};

export default RelatedJobs;
