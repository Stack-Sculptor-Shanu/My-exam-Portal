import React from 'react';
import Overview from './overview/Overview';
import UserManagement from './usermanagement/UserManagement';
import ExamManagement from './exammanagement/ExamManagement';
import ResultsAndReports from './Resultsandreports/ResultsAndReports';
import Support from './support/Support';
import Settings from './setting/Settings';
// import other components...

export default function MainContent({ section }) {
  switch (section) {
    case 'users': return <UserManagement />;
    case 'exams': return <ExamManagement />;
    case 'results': return <ResultsAndReports />;
    case 'settings': return <Settings />;
    case 'support': return <Support />;
    default: return <Overview />;
  }
}
