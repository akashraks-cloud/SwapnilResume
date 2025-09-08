import React, { useState } from 'react';
import { Fab, Tooltip, Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import PrintIcon from '@mui/icons-material/Print';
import DownloadIcon from '@mui/icons-material/Download';
import { styled } from '@mui/material/styles';

const StyledFab = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  top: theme.spacing(2),
  right: theme.spacing(2),
  background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
  color: '#FFFFFF',
  boxShadow: '0 10px 30px rgba(99, 102, 241, 0.4)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(148, 163, 184, 0.2)',
  '&:hover': {
    background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
    boxShadow: '0 15px 40px rgba(99, 102, 241, 0.6)',
    transform: 'translateY(-2px)',
  },
  zIndex: 1000,
  transition: 'all 0.3s ease',
}));

const PDFExportButton: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleBrowserPrint = () => {
    window.print();
    handleClose();
  };

  const downloadAsHTML = () => {
    const htmlContent = generateResumeHTML();
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Swapnil_Pande_Resume.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    handleClose();
  };

  const generateResumeHTML = () => {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Swapnil Pande - Resume</title>
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body {
              font-family: 'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif;
              line-height: 1.6;
              color: #2C3E50;
              background: white;
              padding: 20px;
              max-width: 800px;
              margin: 0 auto;
            }
            .header {
              text-align: center;
              border-bottom: 2px solid #4A90E2;
              padding-bottom: 20px;
              margin-bottom: 30px;
            }
            .header h1 {
              font-size: 2.5rem;
              font-weight: 700;
              margin-bottom: 10px;
              color: #2C3E50;
            }
            .contact-info {
              display: flex;
              justify-content: center;
              gap: 30px;
              margin-top: 15px;
              flex-wrap: wrap;
            }
            .section {
              margin-bottom: 30px;
            }
            .section-header {
              display: flex;
              align-items: center;
              margin-bottom: 20px;
            }
            .section-divider {
              width: 4px;
              height: 30px;
              background-color: #4A90E2;
              margin-right: 15px;
            }
            .section-title {
              font-size: 1.25rem;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 1px;
              color: #2C3E50;
            }
            .experience-item {
              margin-bottom: 25px;
              padding-left: 20px;
              border-left: 2px solid #4A90E2;
              position: relative;
            }
            .experience-item::before {
              content: '';
              width: 12px;
              height: 12px;
              border-radius: 50%;
              background-color: #4A90E2;
              position: absolute;
              left: -7px;
              top: 5px;
            }
            .job-title {
              font-size: 1.125rem;
              font-weight: 600;
              margin-bottom: 5px;
            }
            .company {
              color: #4A90E2;
              font-weight: 500;
              margin-bottom: 5px;
            }
            .duration {
              color: #5D6D7E;
              font-size: 0.875rem;
              margin-bottom: 10px;
            }
            .skills-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              gap: 15px;
              margin-top: 15px;
            }
            .skill-item {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 8px 0;
            }
            .languages-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
              gap: 20px;
              margin-top: 15px;
            }
            .language-item {
              text-align: center;
            }
            .language-score {
              font-size: 1.5rem;
              font-weight: 600;
              color: #4A90E2;
              margin-bottom: 5px;
            }
            .strengths-list {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              gap: 10px;
              margin-top: 15px;
            }
            .strength-item {
              padding: 8px 12px;
              background-color: #F8F9FA;
              border-radius: 6px;
              text-align: center;
              font-weight: 500;
            }
            @media print {
              body { padding: 0; }
              .section { page-break-inside: avoid; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Swapnil Pande</h1>
            <div class="contact-info">
              <span>📧 swapnilbipinpande@gmail.com</span>
              <span>📱 9769534547</span>
            </div>
          </div>

          <div class="section">
            <div class="section-header">
              <div class="section-divider"></div>
              <h2 class="section-title">Resume Summary</h2>
            </div>
            <p>A dynamic professional with 14.4 years of rich experience. Presently working with Fortune 500 Multinational Company in Nagpur as Assistant Consultant. I have been involved in design, development and implementation of various web applications. I have knowledge of Java technologies, Reporting Applications and RDBMS like Oracle, SQL Server, Postgre-SQL.</p>
            <br>
            <p>Exposure in comprehensive problem-solving capabilities, handling performance issues, excellent experience in various phases of software life cycle such as Planning, Analysis, Design, Development, Testing and Documentation along with good interpersonal skills and willingness to learn.</p>
            <br>
            <p>Exceptional communication, collaboration & team building skills with proficiency at grasping new technical concepts quickly and utilising the same in a productive manner.</p>
          </div>

          <div class="section">
            <div class="section-header">
              <div class="section-divider"></div>
              <h2 class="section-title">Work Experience</h2>
            </div>
            
            <div class="experience-item">
              <div class="job-title">Assistant Consultant</div>
              <div class="company">Fortune 500 MNC Ltd., Nagpur</div>
              <div class="duration">March 2011 - Present</div>
              <ul style="margin-left: 20px; margin-top: 10px;">
                <li>Interaction with clients for requirements specification</li>
                <li>Develop the code within time span</li>
                <li>Check the performance level of coding standards</li>
                <li>Preparation of Approach Notes, Effort Estimations, User Manuals</li>
                <li>Ensuring High Quality Deliverables on a timely basis</li>
              </ul>
            </div>
          </div>

          <div class="section">
            <div class="section-header">
              <div class="section-divider"></div>
              <h2 class="section-title">Education</h2>
            </div>
            
            <div class="experience-item">
              <div class="job-title">Bachelor of Engineering</div>
              <div class="company">J.D.I.E.T. Engineering College, Yavatmal</div>
              <div class="duration">2006 - 2010 • Aggregate: 64.4%</div>
            </div>
            
            <div class="experience-item">
              <div class="job-title">Higher Secondary Certificate</div>
              <div class="company">A.M.V.S College, Yavatmal</div>
              <div class="duration">2006 • Percentage: 79.9%</div>
            </div>
            
            <div class="experience-item">
              <div class="job-title">Secondary School Certificate</div>
              <div class="company">N.E.M.H School, Yavatmal</div>
              <div class="duration">2004 • Percentage: 81.6%</div>
            </div>
          </div>

          <div class="section">
            <div class="section-header">
              <div class="section-divider"></div>
              <h2 class="section-title">Skills</h2>
            </div>
            
            <div class="skills-grid">
              <div class="skill-item">
                <span>Java & Spring Boot</span>
                <span style="color: #4A90E2; font-weight: 600;">Expert</span>
              </div>
              <div class="skill-item">
                <span>React & React Native</span>
                <span style="color: #4A90E2; font-weight: 600;">Advanced</span>
              </div>
              <div class="skill-item">
                <span>HTML5 & CSS3</span>
                <span style="color: #4A90E2; font-weight: 600;">Expert</span>
              </div>
              <div class="skill-item">
                <span>JavaScript & jQuery</span>
                <span style="color: #4A90E2; font-weight: 600;">Advanced</span>
              </div>
              <div class="skill-item">
                <span>Oracle & SQL Server</span>
                <span style="color: #4A90E2; font-weight: 600;">Expert</span>
              </div>
              <div class="skill-item">
                <span>Hibernate & Struts</span>
                <span style="color: #4A90E2; font-weight: 600;">Advanced</span>
              </div>
            </div>
          </div>

          <div class="section">
            <div class="section-header">
              <div class="section-divider"></div>
              <h2 class="section-title">Key Projects</h2>
            </div>
            
            <div class="experience-item">
              <div class="job-title">Audit Report Processing System (ARPS)</div>
              <div class="company">State Bank of India</div>
              <div class="duration">August 2011 - November 2014</div>
              <p style="margin-top: 10px;">J2EE (JAVA Struts 1.2), Oracle 10g, Jasper Reports, HTML, XML, JavaScript, jQuery, Ajax. Handled as developer and team lead for flexible and scalable system.</p>
            </div>
            
            <div class="experience-item">
              <div class="job-title">Integrated Transport Management System</div>
              <div class="company">Hindustan Zinc Ltd, Vedanta Aluminium, Birla Corporation Ltd</div>
              <div class="duration">January 2015 - Ongoing</div>
              <p style="margin-top: 10px;">JSF 2, Primefaces 6, JavaScript, Ajax, jQuery, JSON, Apache Tomcat 7.0. System for automation of Plant Transport Operations with sensors, web portal, and REST/JMS integrations.</p>
            </div>
          </div>

          <div class="section">
            <div class="section-header">
              <div class="section-divider"></div>
              <h2 class="section-title">Strengths</h2>
            </div>
            
            <div class="strengths-list">
              <div class="strength-item">Quick Learning</div>
              <div class="strength-item">Delegating Tasks</div>
              <div class="strength-item">Reliability</div>
              <div class="strength-item">Precision</div>
              <div class="strength-item">Problem Solving</div>
              <div class="strength-item">Team Leadership</div>
            </div>
          </div>
        </body>
      </html>
    `;
  };

  const handleExportPDF = () => {
    console.log('PDF Export clicked'); // Debug log
    
    try {
      // Create a new window with the resume content for printing
      const printWindow = window.open('', '_blank', 'width=800,height=600');
      if (!printWindow) {
        alert('Please allow pop-ups for this site to enable PDF export.');
        return;
      }

      const htmlContent = generateResumeHTML();
      printWindow.document.write(htmlContent);
      printWindow.document.close();
      
      // Wait for content to load then trigger print
      printWindow.onload = () => {
        setTimeout(() => {
          printWindow.print();
          // Don't auto-close, let user choose
        }, 1000); // Increased timeout for better loading
      };
      
      // Fallback for some browsers
      setTimeout(() => {
        if (printWindow && !printWindow.closed) {
          printWindow.print();
        }
      }, 1500);
      
    } catch (error) {
      console.error('PDF Export Error:', error);
      alert('There was an error generating the PDF. Please try again or use your browser\'s print function (Ctrl+P).');
    }
    handleClose();
  };

  return (
    <>
      <Tooltip title="Export Options" placement="left">
        <StyledFab onClick={handleClick} size="medium">
          <PictureAsPdfOutlinedIcon />
        </StyledFab>
      </Tooltip>
      
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        PaperProps={{
          sx: {
            background: 'rgba(30, 41, 59, 0.9)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(148, 163, 184, 0.2)',
            color: 'white'
          }
        }}
      >
        <MenuItem onClick={handleExportPDF}>
          <ListItemIcon>
            <PictureAsPdfOutlinedIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Export to PDF" />
        </MenuItem>
        
        <MenuItem onClick={handleBrowserPrint}>
          <ListItemIcon>
            <PrintIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Print Page" />
        </MenuItem>
        
        <MenuItem onClick={downloadAsHTML}>
          <ListItemIcon>
            <DownloadIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Download HTML" />
        </MenuItem>
      </Menu>
    </>
  );
};

export default PDFExportButton;