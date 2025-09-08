import React from 'react';
import {
  Container,
  Paper,
  Typography,
  Stack,
  Box,
  Chip,
  Divider
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SectionHeader from './SectionHeader';
import ExperienceItem from './ExperienceItem';
import SkillBar from './SkillBar';
import CircularProgressComponent from './CircularProgress';
import PDFExportButton from './PDFExportButton';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  margin: theme.spacing(2, 0),
  boxShadow: theme.shadows[2],
  borderRadius: theme.spacing(2),
}));

const HeaderSection = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(4, 0),
  borderBottom: `3px solid ${theme.palette.primary.main}`,
  marginBottom: theme.spacing(4),
}));

const ContactInfo = styled(Stack)(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: theme.spacing(1),
  },
}));

const Resume: React.FC = () => {
  const skills = [
    { name: 'Java & Spring Boot', level: 95 },
    { name: 'React & React Native', level: 85 },
    { name: 'HTML5 & CSS3', level: 90 },
    { name: 'JavaScript & jQuery', level: 85 },
    { name: 'Oracle & SQL Server', level: 90 },
    { name: 'Hibernate & Struts', level: 85 },
  ];

  const languages = [
    { name: 'English', score: 100 },
    { name: 'Hindi', score: 100 },
    { name: 'Marathi', score: 100 },
  ];

  const strengths = [
    'Quick Learning',
    'Delegating Tasks',
    'Reliability',
    'Precision',
    'Problem Solving',
    'Team Leadership',
    'Client Communication',
    'Performance Optimization'
  ];

  return (
    <Container maxWidth="lg" id="resume-content">
      <PDFExportButton />
      
      <StyledPaper>
        <HeaderSection>
          <Typography variant="h1" sx={{ mb: 1 }}>
            Swapnil Pande
          </Typography>
          <ContactInfo direction="row" spacing={4}>
            <Typography variant="body1">
              📧 swapnilbipinpande@gmail.com
            </Typography>
            <Typography variant="body1">
              📱 9769534547
            </Typography>
          </ContactInfo>
        </HeaderSection>

        {/* Resume Summary */}
        <Box sx={{ mb: 4 }}>
          <SectionHeader title="Resume Summary" />
          <Typography variant="body1" sx={{ mb: 2 }}>
            A dynamic professional with 14.4 years of rich experience. Presently working with TATA CONSULTANCY SERVICES in Nagpur as Assistant Consultant. I have been involved in design, development and implementation of various web applications. I have knowledge of Java technologies, Reporting Applications and RDBMS like Oracle, SQL Server, Postgre-SQL.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Exposure in comprehensive problem-solving capabilities, handling performance issues, excellent experience in various phases of software life cycle such as Planning, Analysis, Design, Development, Testing and Documentation along with good interpersonal skills and willingness to learn.
          </Typography>
          <Typography variant="body1">
            Exceptional communication, collaboration & team building skills with proficiency at grasping new technical concepts quickly and utilising the same in a productive manner.
          </Typography>
        </Box>

        {/* Work Experience */}
        <Box sx={{ mb: 4 }}>
          <SectionHeader title="Work Experience" />
          <ExperienceItem
            title="Assistant Consultant"
            company="TATA Consultancy Services Ltd., Nagpur"
            duration="March 2011 - Present"
            description={[
              "Interaction with clients for requirements specification",
              "Develop the code within time span",
              "Check the performance level of coding standards",
              "Preparation of Approach Notes, Effort Estimations, User Manuals",
              "Ensuring High Quality Deliverables on a timely basis"
            ]}
            isLast
          />
        </Box>

        {/* Education */}
        <Box sx={{ mb: 4 }}>
          <SectionHeader title="Education" />
          <ExperienceItem
            title="Bachelor of Engineering"
            company="J.D.I.E.T. Engineering College"
            duration="2006 - 2010"
            location="Yavatmal, Maharashtra"
            description={["Aggregate Percentage: 64.4%"]}
          />
          <ExperienceItem
            title="Higher Secondary Certificate"
            company="A.M.V.S College"
            duration="2006"
            location="Yavatmal, Maharashtra"
            description={["Percentage: 79.9%"]}
          />
          <ExperienceItem
            title="Secondary School Certificate"
            company="N.E.M.H School"
            duration="2004"
            location="Yavatmal, Maharashtra"
            description={["Percentage: 81.6%"]}
            isLast
          />
        </Box>

        {/* Skills */}
        <Box sx={{ mb: 4 }}>
          <SectionHeader title="Skills" />
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
            <Box>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Technical Skills
              </Typography>
              {skills.map((skill, index) => (
                <SkillBar key={index} skill={skill.name} level={skill.level} />
              ))}
            </Box>
            <Box>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Technologies & Tools
              </Typography>
              <Stack spacing={1}>
                <Typography variant="body2"><strong>Frontend:</strong> HTML5, JSP, CSS3, JavaScript, jQuery, Angular JS, React, React Native</Typography>
                <Typography variant="body2"><strong>Backend:</strong> Java, JSF, Struts (1.2, 2.3), Hibernate, Spring Boot</Typography>
                <Typography variant="body2"><strong>Databases:</strong> Oracle 9i/10g/11i/12c, MS-SQL, PostgreSQL</Typography>
                <Typography variant="body2"><strong>Tools:</strong> Eclipse, Visual Source Safe, SVN, Jasper Reports, PL/SQL Developer</Typography>
                <Typography variant="body2"><strong>Servers:</strong> Apache Tomcat 7.0</Typography>
              </Stack>
            </Box>
          </Box>
        </Box>

        {/* Languages */}
        <Box sx={{ mb: 4 }}>
          <SectionHeader title="Languages" />
          <Stack direction="row" spacing={4} sx={{ justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
            {languages.map((language, index) => (
              <CircularProgressComponent
                key={index}
                value={language.score}
                label={language.name}
                size={80}
              />
            ))}
          </Stack>
        </Box>

        {/* Key Projects */}
        <Box sx={{ mb: 4 }}>
          <SectionHeader title="Key Projects" />
          <ExperienceItem
            title="Audit Report Processing System (ARPS)"
            company="State Bank of India"
            duration="August 2011 - November 2014"
            description={[
              "Technologies: J2EE (JAVA Struts 1.2), Oracle 10g, Jasper Reports, HTML, XML, JavaScript, jQuery, Ajax",
              "Role: Full stack developer and team lead",
              "Flexible and scalable system with online application, reports, and offline application components"
            ]}
          />
          <ExperienceItem
            title="Integrated Transport Management System"
            company="Hindustan Zinc Ltd, Vedanta Aluminium, Birla Corporation Ltd"
            duration="January 2015 - Ongoing"
            description={[
              "Technologies: JSF 2, Primefaces 6, JavaScript, Ajax, jQuery, JSON, Apache Tomcat 7.0",
              "Role: Technical Lead/Architect",
              "System for automation of Plant Transport Operations with sensors, web portal for planning and management",
              "REST/JMS integrations with Third Party Applications"
            ]}
            isLast
          />
        </Box>

        {/* Strengths */}
        <Box sx={{ mb: 4 }}>
          <SectionHeader title="Strengths" />
          <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
            {strengths.map((strength, index) => (
              <Chip
                key={index}
                label={strength}
                variant="outlined"
                sx={{
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  fontWeight: 500,
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: 'primary.contrastText',
                  },
                }}
              />
            ))}
          </Stack>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Personal Details */}
        <Box>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Personal Details
          </Typography>
          <Stack spacing={1}>
            <Typography variant="body2">
              <strong>Date of Birth:</strong> February 23rd, 1989
            </Typography>
            <Typography variant="body2">
              <strong>Gender:</strong> Male
            </Typography>
            <Typography variant="body2">
              <strong>Marital Status:</strong> Married
            </Typography>
            <Typography variant="body2">
              <strong>Address:</strong> Sinchan Nagar, Darwha Road, Yavatmal, 445001, Maharashtra
            </Typography>
          </Stack>
        </Box>
      </StyledPaper>
    </Container>
  );
};

export default Resume;