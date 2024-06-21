import React from 'react';
import PieChart from '../components/PieChart';
import TableKYC from '../components/TableKYC';

const KYCApplicationReports = () => {
    const dataPieChart = [
        ["KYC Application Status", "Number of Applications"],
        ["Approved", 11],
        ["Rejected", 1],
        ["Canceled", 1],
        ["Ready for Review", 10],
        ["In Progress", 54]
    ]
    
    const optionsPieChart = {
        title: "KYC Application Reports",
    }
    const columns = ["Created", "Name", "Type", "RiskScore", "Status"];
    const dataTable = [
        {Created: "2021-09-01", Name: "John Doe", Email:"jdoe@gmaile.com", Type: "Individual", RiskScore: "Low", Status: "Approved"},
        {Created: "2021-09-02", Name: "Jane Doe", Email:"jdoe@gmaile.com", Type: "Individual", RiskScore: "not calculated", Status: "Approved"},
        {Created: "2021-09-03", Name: "Company Doe", Email:"jdoe@gmaile.com", Type: "Company", RiskScore: "Low", Status: "Rejected"},
        {Created: "2021-09-04", Name: "Company Doe", Email:"jdoe@gmaile.com", Type: "Company", RiskScore: "not calculated", Status: "Canceled"},
        {Created: "2021-09-05", Name: "Company Doe", Email:"jdoe@gmaile.com", Type: "Company", RiskScore: "High", Status: "Ready for Review"},
        {Created: "2021-09-06", Name: "Company Doe", Email:"jdoe@gmaile.com", Type: "Company", RiskScore: "Medium", Status: "In Progress"},
        {Created: "2021-09-07", Name: "Company Doe", Email:"jdoe@gmaile.com", Type: "Company", RiskScore: "Low", Status: "In Progress"},
        {Created: "2021-09-08", Name: "Company Doe", Email:"jdoe@gmaile.com", Type: "Company", RiskScore: "High", Status: "In Progress"},
        {Created: "2021-09-09", Name: "Company Doe", Email:"jdoe@gmaile.com", Type: "Company", RiskScore: "High", Status: "In Progress"},
        {Created: "2021-09-10", Name: "Company Doe", Email:"jdoe@gmaile.com", Type: "Company", RiskScore: "High", Status: "In Progress"}
    ]

    const handleIconClick = (row) => {
        console.log('Icon clicked for row:', row);

      };

    return (
        <div>
            <PieChart data={dataPieChart} options={optionsPieChart}/>
            <TableKYC columns={columns} data={dataTable} onIconClick={handleIconClick}/>
        </div>
    )
}

export default KYCApplicationReports