import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { getRiskScoreIconAndColor, getStatusIcon } from '../utils/KYCFunctions';


const TableKYC = ({ columns, data, onIconClick }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column}
              </th>
            ))}
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                >
                  {column === 'Name' ? (
                    <div>
                      <div>{row[column]}</div>
                      <div className="text-xs text-gray-400">{row['Email']}</div>
                    </div>
                  ) : column === 'RiskScore' ? (
                    <div className="flex items-center">
                      {getRiskScoreIconAndColor(row[column]).icon}
                      <span className={getRiskScoreIconAndColor(row[column]).color}>
                        {row[column]}
                      </span>
                    </div>
                  ) : column === 'Status' ? (
                    <div className="flex items-center">
                      {getStatusIcon(row[column]).icon}
                      <span>{row[column]}</span>
                    </div>
                  ) : (
                    row[column]
                  )}
                </td>
              ))}
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button
                  onClick={() => onIconClick(row)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaEdit />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableKYC;
