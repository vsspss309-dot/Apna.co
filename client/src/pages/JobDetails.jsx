import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Briefcase, Users, Clock, Share2, Heart } from "lucide-react";
import jobs from "../data/jobs.json";
import CompanyInfo from "../components/CompanyInfo/CompanyInfo";
import JobHighlights from "../components/JobHighlights/JobHighlights";
import RelatedJobs from "../components/RelatedJobs/RelatedJobs";
import ApplyButton from "../components/ApplyButton/ApplyButton";

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = jobs.find((j) => j.id === parseInt(id));

  if (!job) {
    return (
      <div className="bg-gray-50 min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8"
          >
            <ArrowLeft size={20} />
            Back to Jobs
          </button>
          <div className="bg-white rounded-lg p-12 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Job Not Found</h1>
            <p className="text-gray-600">The job you're looking for doesn't exist.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8"
        >
          <ArrowLeft size={20} />
          Back to Jobs
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Header Card */}
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
                  <p className="text-lg text-gray-600 mb-4">{job.company}</p>
                  <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700">
                    {job.jobType}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Heart size={20} className="text-gray-600" />
                  </button>
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Share2 size={20} className="text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Key Details Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-200">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Location</p>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-gray-400" />
                    <p className="font-semibold text-gray-900">{job.location}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Experience</p>
                  <div className="flex items-center gap-2">
                    <Briefcase size={16} className="text-gray-400" />
                    <p className="font-semibold text-gray-900">{job.experience}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Salary</p>
                  <p className="font-semibold text-gray-900">{job.salary}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Applicants</p>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-gray-400" />
                    <p className="font-semibold text-gray-900">{job.applicants}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Highlights */}
            <JobHighlights job={job} />

            {/* Job Description */}
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About this role</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{job.description}</p>

              <h3 className="text-lg font-semibold text-gray-900 mb-4">What we're looking for</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Strong proficiency in {job.skills[0]} and related technologies</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Experience with {job.skills[1]}</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Proven track record of building scalable applications</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Excellent problem-solving and communication skills</span>
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-4">What you'll get</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Competitive salary and performance bonus</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Work with cutting-edge technologies</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Career growth and learning opportunities</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Health insurance and benefits</span>
                </li>
              </ul>
            </div>

            {/* Related Jobs */}
            <RelatedJobs currentJobId={job.id} />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Company Info Card */}
            <CompanyInfo job={job} />

            {/* Apply Button */}
            <ApplyButton job={job} />

            {/* About Company */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">About {job.company}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {job.company} is a leading technology company known for innovation and excellence. We're committed to helping talented professionals grow their careers while building products that impact millions of users worldwide.
              </p>
              <button className="mt-4 w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Visit {job.company}
              </button>
            </div>

            {/* Posted Info */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center gap-2 text-gray-600 mb-3">
                <Clock size={16} />
                <span className="text-sm">Posted {job.postedDays} days ago</span>
              </div>
              <p className="text-xs text-gray-500">
                This job is actively hiring. Apply now to be one of the early applicants!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;