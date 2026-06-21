import { MapPin, Users } from "lucide-react";

const CompanyInfo = ({ job }) => {
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
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      {/* Company Logo */}
      <div className={`w-16 h-16 rounded-lg ${getCompanyColor(job.company)} flex items-center justify-center mb-4`}>
        <span className={`text-2xl font-bold ${getCompanyTextColor(job.company)}`}>
          {job.company.charAt(0)}
        </span>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-1">{job.company}</h3>
      <p className="text-sm text-gray-600 mb-4">Technology Company</p>

      {/* Company Stats */}
      <div className="space-y-3 py-4 border-t border-b border-gray-200">
        <div className="flex items-center gap-3 text-gray-700">
          <Users size={16} className="text-gray-400" />
          <span className="text-sm">50,000+ employees</span>
        </div>
        <div className="flex items-center gap-3 text-gray-700">
          <MapPin size={16} className="text-gray-400" />
          <span className="text-sm">Global presence</span>
        </div>
      </div>

      {/* Follow Button */}
      <button className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-lg font-medium text-gray-900 hover:bg-gray-50 transition-colors">
        Follow Company
      </button>
    </div>
  );
};

export default CompanyInfo;
