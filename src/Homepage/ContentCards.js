import {
  Card,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button
} from "@mui/material";
import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import WorkIcon from "@mui/icons-material/Work";
import ScienceIcon from "@mui/icons-material/Science";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// IMPORT IMAGES
import schoolImg from "../Assets/content/school.jpg";
import collegeImg from "../Assets/content/College.jpg";
import careerImg from "../Assets/content/career.jpg";
import researchImg from "../Assets/content/research.jpg";
import technicalImg from "../Assets/content/technical.jpg";

const ContentCards = () => {
  const items = [
    {
      title: "School Education",
      icon: SchoolIcon,
      img: schoolImg,
      points: ["CBSE/State Syllabus", "Study Materials", "Exams & Results"]
    },
    {
      title: "Higher Education",
      icon: MenuBookIcon,
      img: collegeImg,
      points: ["UG Courses", "PG Courses", "Scholarships"]
    },
    {
      title: "Career Development",
      icon: WorkIcon,
      img: careerImg,
      points: ["Skill Training", "Career Guidance", "Job Opportunities"]
    },
    {
      title: "Research",
      icon: ScienceIcon,
      img: researchImg,
      points: ["Projects", "Publications", "Funding Support"]
    },
    {
      title: "Technical Courses",
      icon: MenuBookIcon,
      img: technicalImg,
      points: ["Diploma", "Engineering", "Certifications"]
    }
  ];

  return (
    <Box sx={{ background: "#f5f0f0", p: 4 }}>
      <Box
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(3, 1fr)",
            md: "repeat(5, 1fr)"
          }
        }}
      >
        {items.map((item, index) => {
          return (
            <Card
              key={index}
              sx={{
                borderRadius: 3,
                textAlign: "center",
                background: "#fff",
                overflow: "hidden"
              }}
            >
              {/* IMAGE */}
              <Box
                component="img"
                src={item.img}
                alt={item.title}
                sx={{
                  width: "100%",
                  height: 250,
                  objectFit: "cover",
                  opacity: 1,
                  transition: "opacity 0.8s ease",
                  "&:hover": {
                    opacity: 1
                  }
                }}
              />

              <Typography variant='h6' sx={{ fontWeight: 600, mt: 2 }}>
                {item.title}
              </Typography>

              <Box sx={{ p: 0, mt: 0, position: "relative" }}>
                <List dense sx={{ pb: 7 }}>
                  {item.points.map((p, i) => (
                    <ListItem key={i} sx={{ py: 0 }}>
                      <ListItemIcon sx={{ minWidth: 28 }}>
                        <CheckCircleIcon sx={{ fontSize: 18 }} />
                      </ListItemIcon>
                      <ListItemText primary={p} />
                    </ListItem>
                  ))}
                </List>

                {/* FULL WIDTH BUTTON */}
                <Button
                  variant="text"
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    borderRadius: 0,
                    height: '50px',
                    background: "rgba(30, 64, 175, 0.9)",
                    color: "white",
                    fontWeight: 600,
                    width: "100%",
                    "&:hover": {
                      background: "rgba(30, 64, 175, 0.7)"
                    }
                  }}
                >
                  Explore More
                </Button>
              </Box>


            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default ContentCards;
