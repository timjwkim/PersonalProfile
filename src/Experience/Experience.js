import React from 'react';
import './Experience.css';

class Experience extends React.Component {
  render() {
    return (
      <div className="Experience">
        <div className="Education">
          Education
          <div className="Michigan">
            University of Michigan
            ann arbor, mi
            sept '18 - dec '22
            major: computer science
          </div>
          <div className="Schoolwork">
            relevant coursework:
            school projects:
          </div>
          <div className="Bca">
            Bergen County Academies
            hackensack, nj
            sept '14 - june '18
          </div>
        </div>
        <div className="Work">
          Working Experience
          <div className="Umits">
            University of Michigan Information and Technology Services
            ann arbor, mi
            nov '19 - present
            part-time tech consultant
          </div>
          <div className="Rfa">
            Richard Fleischman and Associates
            new york, ny
            summer '19
            client development intern
          </div>
          <div className="Basketballplanet">
            Basketball Planet
            ridgefield, nj
            july '17 - mar '18
            executive intern
          </div>
        </div>
      </div>
    )
  }
}

export default Experience;
