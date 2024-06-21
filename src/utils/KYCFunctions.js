import { FaCheckCircle, FaTimesCircle, FaCheck, FaTimes, FaEllipsisH } from 'react-icons/fa';


export const getRiskScoreIconAndColor = (riskScore) => {
    switch (riskScore) {
      case 'Low':
        return { icon: <FaCheckCircle className="text-green-500 mr-2" />, color: 'text-green-500' };
      case 'Medium':
        return { icon: <FaCheckCircle className="text-yellow-500 mr-2" />, color: 'text-yellow-500' };
      case 'High':
        return { icon: <FaTimesCircle className="text-red-500 mr-2" />, color: 'text-red-500' };
      default:
        return { icon: null, color: 'text-gray-500' };
    }
  };
  
export const getStatusIcon = (status) => {
    switch (status) {
      case 'Approved':
        return { icon: <FaCheck className="mr-2" /> };
      case 'Rejected':
        return { icon: <FaTimes className=" mr-2" /> };
      case 'Canceled':
        return { icon: <FaTimes className="mr-2" />};
      case 'Ready for Review':
        return { icon: <FaEllipsisH className=" mr-2" /> };
      case 'In Progress':
        return { icon: <FaEllipsisH className="mr-2" /> };
      default:
        return { icon: null };
    }
  };